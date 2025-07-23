#!/bin/bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

echo "Checking for missing WebP versions of referenced PNG files..."

# Function to check if a file exists
file_exists() {
    [ -f "$1" ]
}

# Track if any errors were found
ERRORS_FOUND=0

# Find all files that might reference images
IMAGE_REFS=$(find . -name "*.md" -o -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx" | grep -v node_modules | grep -v build)

# Look for WebPImage components without webpSrc (now required)
for file in $IMAGE_REFS; do
    # Check for WebPImage components without explicit webpSrc
    while IFS= read -r line; do
        if [[ -n "$line" ]]; then
            line_number=$(echo "$line" | cut -d: -f1)
            echo "ERROR: WebPImage component missing required webpSrc prop"
            echo "  File: $file:$line_number"
            echo "  Fix: Add webpSrc={require('@site/path/to/image.webp').default} to the WebPImage component"
            ERRORS_FOUND=1
        fi
    done < <(grep -n "<WebPImage" "$file" 2>/dev/null | grep -v "webpSrc" || true)
done

# Also check for any PNG files in screenshots directory that don't have WebP versions
echo ""
echo "Checking static/img/screenshots/ for PNG files without WebP versions..."

find static/img/screenshots -name "*.png" 2>/dev/null | while read -r png_file; do
    webp_file="${png_file%.png}.webp"
    if ! file_exists "$webp_file"; then
        echo "ERROR: Missing WebP version for $png_file"
        echo "  Expected: $webp_file"
        ERRORS_FOUND=1
    fi
done

# Check if any errors were found during the find loop
if find static/img/screenshots -name "*.png" 2>/dev/null | while read -r png_file; do
    webp_file="${png_file%.png}.webp"
    if ! file_exists "$webp_file"; then
        exit 1
    fi
done; then
    # No errors in the find loop
    :
else
    ERRORS_FOUND=1
fi

if [ $ERRORS_FOUND -eq 1 ]; then
    echo ""
    echo "❌ WebP version check failed. Some PNG files are missing their WebP counterparts."
    exit 1
else
    echo ""
    echo "✅ All referenced PNG files have corresponding WebP versions."
fi