"use client";
import { useRef, useEffect, HTMLAttributes, RefObject } from "react";
// There is a problem with the code below prior to react 19. Can you find the problem and how to fix it?
// You can see the output by running:
// npm run dev and navigate to http://localhost:3000/assessment/6

const CustomInput: React.FC<
  HTMLAttributes<HTMLInputElement> & { ref: RefObject<HTMLInputElement | null> }
> = (props) => {
  return <input {...props} />;
};

export const Assessment6 = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <CustomInput ref={inputRef} />;
};
