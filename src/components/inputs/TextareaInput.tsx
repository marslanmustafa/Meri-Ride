import React from 'react';

interface TextareaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextareaInput: React.FC<TextareaInputProps> = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="w-full border-b border-border flex flex-col">
      <label htmlFor={name}>{label}</label>
      <textarea
        name={name}
        className="w-full h-20 py-2 outline-none resize-none"
        placeholder={label}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextareaInput;
