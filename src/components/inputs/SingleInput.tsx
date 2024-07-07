import React from 'react';

interface SingleInputProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const SingleInput: React.FC<SingleInputProps> = ({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
}) => (
  <div className="w-full border-b border-border flex flex-col">
    <label htmlFor={name}>{label}</label>
    <input
      type={type}
      name={name}
      className="w-full h-9 py-2 outline-none"
      placeholder={label}
      value={value}
      onChange={onChange}
      // required={required}
    />
  </div>
);

export default SingleInput;
