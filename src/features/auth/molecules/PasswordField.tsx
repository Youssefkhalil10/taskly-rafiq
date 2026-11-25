import Input from "@/components/ui/atoms/Input";
import React from "react";

export default function PasswordField() {
  return (
    <div>
      <label htmlFor="">Password</label>
      <div>
        <Input type="password" placeholder="password" />
        <img src={"/src/docs/Icon.svg"} alt="" />
      </div>
    </div>
  );
}
