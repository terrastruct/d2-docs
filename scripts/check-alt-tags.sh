#!/bin/bash

# Script to check for img tags missing alt attributes
# This script searches for <img> tags that don't have alt attributes

set -e

echo "🔍 Checking for img tags missing alt attributes..."

# Function to check a single file for img tags without alt
check_file() {
  local file="$1"
  local temp_file=$(mktemp)
  local found_issues=0
  
  # Remove newlines from file to handle multi-line img tags, then search
  file_content=$(tr '\n' ' ' < "$file")
  
  # Find all <img...> tags that don't contain alt=
  img_violations=$(echo "$file_content" | grep -o '<img[^>]*>' | grep -v 'alt=' || true)
  
  if [ -n "$img_violations" ]; then
    # Now find the original line numbers by searching the original file
    line_num=1
    while IFS= read -r line_content; do
      # Check if this line contains <img and doesn't have alt=
      if echo "$line_content" | grep -q "<img" && ! echo "$line_content" | grep -q "alt="; then
        # Skip false positives: documentation references to <img> tags
        if echo "$line_content" | grep -q '`<img>`'; then
          line_num=$((line_num + 1))
          continue
        fi
        # Skip lines that are just referencing <img> as text (like "If you use plain <img> tags")
        if echo "$line_content" | grep -q 'use plain.*<img>.*tags' || echo "$line_content" | grep -q 'plain.*<img>.*tags'; then
          line_num=$((line_num + 1))
          continue
        fi
        echo "$line_num:$line_content" >> "$temp_file"
        found_issues=1
      fi
      line_num=$((line_num + 1))
    done < "$file"
  fi
  
  if [ $found_issues -eq 1 ]; then
    echo "❌ Found img tag(s) without alt attribute in: $file"
    cat "$temp_file" | head -5
    rm -f "$temp_file"
    return 1
  fi
  
  rm -f "$temp_file"
  return 0
}

# Find all relevant files to check
FILES=$(find . -type f \( -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" -o -name "*.md" -o -name "*.mdx" \) \
  -not -path "./node_modules/*" \
  -not -path "./build/*" \
  -not -path "./.git/*" \
  -not -path "./ci/*" \
  -not -path "./src/d2-vscode/*")

ERRORS_FOUND=0

echo "Searching files for img tags without alt attributes..."

for file in $FILES; do
  if ! check_file "$file"; then
    ERRORS_FOUND=$((ERRORS_FOUND + 1))
  fi
done

if [ $ERRORS_FOUND -eq 0 ]; then
  echo "✅ All img tags have alt attributes!"
  exit 0
else
  echo ""
  echo "❌ Found $ERRORS_FOUND file(s) with img tags missing alt attributes."
  echo ""
  echo "Please add alt attributes to all img tags. Examples:"
  echo "  - <img src=\"image.png\" alt=\"Description of image\" />"
  echo "  - <img src=\"logo.svg\" alt=\"Company logo\" />"
  echo ""
  echo "Alt attributes are important for accessibility and screen readers."
  exit 1
fi