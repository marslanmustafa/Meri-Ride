import React from 'react';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuGroup,
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
  <div className="">
    <DropdownMenu>
      <DropdownMenuTrigger className='w-full h-11 justify-end border-b border-border flex flex-col overflow-hidden relative outline-none'>
        <div className="w-full py-2 pr-3 outline-none cursor-pointer flex justify-between items-end">
          {selectedOption ? (
            <span>{selectedOption.label}</span>
          ) : (
            <span className="text-gray-500">Select {label}</span>
          )}
          <ChevronDown />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-64 border-gray-100 shadow-lg overflow-scroll max-h-[280px] scrollbar">
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuGroup>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => onChange(option)}
              className="pt-2"
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  </div>
);

export default Dropdown;
