import React, { ReactNode } from "react";

type ButtonPorps = {
  children: ReactNode;
};
export default function Button({ children }: ButtonPorps) {
  return <button>{children}</button>;
}
