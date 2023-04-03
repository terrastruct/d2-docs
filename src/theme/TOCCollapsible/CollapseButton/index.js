import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
export default function TOCCollapsibleCollapseButton({ collapsed, ...props }) {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        "clean-btn",
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        props.className
      )}
    >
      Contents
    </button>
  );
}
