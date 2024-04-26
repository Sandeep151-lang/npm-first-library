import * as React from "react";
import { ReactNode } from "react";

type PropsTypes = {
  children: React.ReactNode;
};

const Button = ({ children }: PropsTypes) => {
  return (
    <>
      <button>{children}</button>
    </>
  );
};

export { Button };
