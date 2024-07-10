// RadioInput.tsx
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface RadioInputProps {
  label: string;
  name: string;
  value: string;
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, name, value, options, onChange }) => {
  return (
    <div className="flex flex-col">
      <p>{label}</p>
      <RadioGroup value={value} onValueChange={onChange} className="pt-4 flex items-center gap-5">
        {options.map((option) => (
          <div className="flex items-center justify-start gap-3" key={option.value}>
            <RadioGroupItem value={option.value} id={`${name}-${option.value}`} />
            <Label htmlFor={`${name}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default RadioInput;
