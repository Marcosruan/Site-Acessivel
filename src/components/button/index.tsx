import type React from "react";

type props = React.ComponentProps<"button"> & {
  name: string;
};

export function Button({ name }: props) {
  return <button>{name}</button>;
}
