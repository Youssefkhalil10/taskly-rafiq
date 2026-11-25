import Input from "@/components/ui/atoms/Input";
import React from "react";

type InputProps = {
  label: string;
};

export default function FormField({ label }: InputProps) {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <Input type="email" placeholder="Enter your email" />
    </div>
  );
}
