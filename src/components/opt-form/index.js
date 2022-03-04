import React from "react";
import { Input, Button, Text, Container, Break } from "./styles/opt-form";

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
      <img
        src={process.env.PUBLIC_URL + "/images/icons/chevron-right.png"}
        alt="Try now"
      />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
