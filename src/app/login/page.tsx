import LoginForm from "@/features/auth/organisms/LoginForm";
import AuthTemplate from "@/features/auth/templates/AuthTemplate";
import React from "react";

export default function page() {
  return (
    <div className="mx-auto mt-20 max-w-[576] rounded-xl">
      <AuthTemplate>
        <LoginForm />
      </AuthTemplate>
    </div>
  );
}
