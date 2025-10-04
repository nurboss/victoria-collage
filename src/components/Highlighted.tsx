import React from "react";

interface HighlightedTextProps {
  children: React.ReactNode;
  color?: string;
}

const Highlighted: React.FC<HighlightedTextProps> = ({ children, color }) => {
  return (
    <span
      className="highlighted"
      style={{ "--highlight-color": color } as React.CSSProperties}
    >
      {children}
    </span>
  );
};

export default Highlighted;
