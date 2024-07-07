import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';

interface CheckboxGroupProps {
  label: string;
  options: { value: string; label: string }[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  selectedOptions,
  onChange,
}) => {
  const handleCheckboxChange = (value: string) => {
    const newSelectedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];
    onChange(newSelectedOptions);
  };

  return (
    <div className="w-full border-border flex flex-col">
      <h3 className='text-lg font-semibold mb-4'>{label}</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <Checkbox
              id={option.value}
              checked={selectedOptions.includes(option.value)}
              onCheckedChange={() => handleCheckboxChange(option.value)}
            />
            <label htmlFor={option.value} className="text-sm font-medium">
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
