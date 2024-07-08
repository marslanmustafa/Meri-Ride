"use client"
import React, { useEffect, useRef } from 'react';

interface TextareaInputProps {
  label: string; // The label text for the textarea
  name: string; // The name attribute for the textarea
  value: string; // The current value of the textarea
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void; // Function to handle changes in the textarea
  required?: boolean; // Boolean to indicate if the textarea is required
}

const TextareaInput: React.FC<TextareaInputProps> = ({ label, name, value, onChange, required = false }) => {
  // Create a ref to the textarea element
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  // Maximum number of rows allowed for the textarea
  const maxRows = 5;

  // Handle input change event
  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Update the value state with the new value from the event
    onChange(event);
    // Adjust the height of the textarea
    adjustHeight();
  };

  // Adjust the height of the textarea based on its content
  const adjustHeight = () => {
    if (textareaRef.current) {
      // Reset height to auto to calculate scrollHeight properly
      textareaRef.current.style.height = "auto";
      const scrollHeight = textareaRef.current.scrollHeight;
      // Get the line height of the textarea
      const lineHeight = parseInt(getComputedStyle(textareaRef.current).lineHeight, 10);
      // Calculate the maximum height based on maxRows
      const maxHeight = lineHeight * maxRows;
      // Set the height of the textarea to the minimum of scrollHeight and maxHeight
      textareaRef.current.style.height = `${Math.min(scrollHeight, maxHeight)}px`;
      // Set overflowY to auto if content exceeds maxHeight, otherwise hidden
      textareaRef.current.style.overflowY = scrollHeight > maxHeight ? "auto" : "hidden";
    }
  };

  // Use useEffect to adjust the height when the value changes
  useEffect(() => {
    adjustHeight();
  }, [value]);

  return (
    <div className="w-full min-h-11 border-b border-border flex items-end">
      {/* Label for the textarea */}
      {/* <label htmlFor={name}>{label}</label> */}
      {/* Textarea element */}
      <textarea
        name={name}
        className="w-full pb-2 outline-none resize-none"
        placeholder={label}
        value={value}
        onChange={handleInput}
        required={required}
        ref={textareaRef}
        rows={1}
      />
    </div>
  );
};

export default TextareaInput;
