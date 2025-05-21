import React, { useState, useRef, useEffect, ReactNode } from "react";

interface PopoverProps {
  trigger: ReactNode; // The element that triggers the popover
  content: ReactNode; // The content that will be displayed inside the popover
}

const Popover: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement | null>(null);

  // Toggle popover visibility
  const togglePopover = () => setIsOpen(!isOpen);

  // Close popover when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block">
      <div className="cursor-pointer" onClick={togglePopover}>
        {trigger}
      </div>
      {isOpen && (
        <div
          ref={popoverRef}
          className="absolute right-0 mt-2 bg-white border rounded-md border-gray-300 shadow-lg z-50"
        >
          <div className="text-gray-700">{content}</div>
        </div>
      )}
    </div>
  );
};

export default Popover;
