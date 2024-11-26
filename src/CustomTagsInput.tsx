import React, { useState, KeyboardEvent, ChangeEvent } from "react";
import { FaTimes } from "react-icons/fa";

interface CustomTagsInputProps {
  tags: string[];
  setTags: React.Dispatch<React.SetStateAction<string[]>>;
  placeholder?: string;
  maxTags?: number; // Limit the number of tags
  validateTag?: (tag: string) => boolean; // Validation function for tags
  tagStyles?: React.CSSProperties; // Custom styles for tags
  inputStyles?: React.CSSProperties; // Custom styles for input field
  containerStyles?: React.CSSProperties; // Custom styles for the container
  allowDuplicates?: boolean; // Allow duplicate tags
  tagIcon?: React.ReactNode; // Custom icon inside each tag
}

export const CustomTagsInput: React.FC<CustomTagsInputProps> = ({
  tags,
  setTags,
  placeholder = "Add tags...",
  maxTags = Infinity,
  validateTag,
  tagStyles,
  inputStyles,
  containerStyles,
  allowDuplicates = false,
  tagIcon = <FaTimes />,
}) => {
  const [input, setInput] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input) {
      e.preventDefault();

      const trimmedInput = input.trim();
      if (
        (!validateTag || validateTag(trimmedInput)) && // Validate tag if function provided
        (allowDuplicates || !tags.includes(trimmedInput)) && // Check for duplicates
        tags.length < maxTags // Check maxTags limit
      ) {
        setTags([...tags, trimmedInput]);
        setInput("");
      }
    } else if (e.key === "Backspace" && !input && tags.length > 0) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "4px",
        ...containerStyles,
      }}
    >
      {tags.map((tag, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: "9999px",
            padding: "0.5rem",
            margin: "0.25rem",
            ...tagStyles,
          }}
        >
          <span style={{ marginRight: "0.5rem" }}>{tag}</span>
          <button
            type="button"
            onClick={() => removeTag(tag)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            {tagIcon}
          </button>
        </div>
      ))}
      {tags.length < maxTags && (
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleInputKeyDown}
          placeholder={placeholder}
          style={{
            flexGrow: 1,
            outline: "none",
            border: "none",
            padding: "0.5rem",
            ...inputStyles,
          }}
        />
      )}
    </div>
  );
};