import React, { useState, useEffect } from "react";
import ExampleModal from "../ExampleModal";

const ExampleGrid = ({ examples, layout }) => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: "",
    svgContent: "",
    code: "",
  });

  // Create a slug from the title for URL hashing
  const createSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");
  };

  // Find example by slug
  const findExampleBySlug = (slug) => {
    return examples.find((example) => createSlug(example.name) === slug);
  };

  const openModal = (title, svgContent, code) => {
    const slug = createSlug(title);
    window.location.hash = `example-${slug}`;
    setModalState({
      isOpen: true,
      title,
      svgContent,
      code,
    });
  };

  const closeModal = () => {
    window.location.hash = "";
    setModalState({
      isOpen: false,
      title: "",
      svgContent: "",
      code: "",
    });
  };

  // Handle hash changes and initial load
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash.startsWith("example-")) {
        const slug = hash.substring(8); // Remove 'example-' prefix
        const example = findExampleBySlug(slug);
        if (example) {
          setModalState({
            isOpen: true,
            title: example.name,
            svgContent: example.svgContent,
            code: example.code,
          });
        }
      } else {
        setModalState({
          isOpen: false,
          title: "",
          svgContent: "",
          code: "",
        });
      }
    };

    // Check initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [examples]);

  return (
    <>
      <div className="examples-grid">
        {examples.map((example, index) => (
          <div
            key={index}
            className="example-card clickable"
            onClick={() => openModal(example.name, example.svgContent, example.code)}
          >
            <div
              className="example-image"
              dangerouslySetInnerHTML={{ __html: example.svgContent }}
            ></div>
            <div className="example-name">{example.name}</div>
          </div>
        ))}
      </div>

      <ExampleModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        svgContent={modalState.svgContent}
        code={modalState.code}
        layout={layout}
      />
    </>
  );
};

export default ExampleGrid;
