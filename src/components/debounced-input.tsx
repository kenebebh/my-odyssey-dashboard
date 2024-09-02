import React, { useEffect, useState } from "react";

// Define the InputType with appropriate types
type InputType = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  debounce?: number;
  className?: string; // Include className as an optional property
  placeholder?: string; // Include placeholder as an optional property
  props?: React.InputHTMLAttributes<HTMLInputElement>; // Update props type to allow any input props
};

const DebouncedInput: React.FC<InputType> = ({
  value: initValue,
  onChange,
  debounce = 500,
  className,
  placeholder,
  ...props
}) => {
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  // Debounce the onChange call
  useEffect(() => {
    const timeout = setTimeout(() => {
      const event = {
        target: { value },
      } as React.ChangeEvent<HTMLInputElement>; // Create a synthetic event

      onChange(event); // Pass the synthetic event to the onChange handler
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value, debounce, onChange]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)} // Set value from the actual input event
      className={className} // Apply the className
      placeholder={placeholder} // Apply the placeholder
      {...props} // Spread other props
    />
  );
};

export default DebouncedInput;
