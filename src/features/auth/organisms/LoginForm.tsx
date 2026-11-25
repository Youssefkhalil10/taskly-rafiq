import React from "react";
import FormField from "../molecules/FormField";
import PasswordField from "../molecules/PasswordField";
import Button from "@/components/ui/atoms/Button";

export default function LoginForm() {
  return (
    <div>
      <FormField label="Email" />
      <PasswordField />

      <Button>Log in</Button>
    </div>
  );
}
