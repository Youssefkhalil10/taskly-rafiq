import React, { ReactNode } from "react";

type formProps = {
  children: ReactNode;
};

export default function AuthTemplate({ children }: formProps) {
  return <form>{children}</form>;
}
