import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';

interface DropdownProps {
  label: string;
  options: { value: string; label: string }[];
  selectedOption: { value: string; label: string } | null;
  onChange: (option: { value: string; label: string }) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedOption,
  onChange,
}) => (
  <div className="w-full border-b border-border flex flex-col">
    <label>{label}</label>
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative">
          <div className="w-full h-9 py-2 pr-3 outline-none cursor-pointer flex items-center justify-between">
            {selectedOption ? (
              <span>{selectedOption.label}</span>
            ) : (
              <span className="text-gray-500">Select {label}</span>
            )}
            <ChevronDown />
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="py-1 bg-white border border-gray-200 rounded-lg shadow-lg absolute top-10 left-0 w-full">
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.value}
            checked={selectedOption?.value === option.value}
            onCheckedChange={() => onChange(option)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default Dropdown;
