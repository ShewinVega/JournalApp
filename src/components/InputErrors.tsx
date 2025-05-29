import React from "react";

interface Props {
  errors: string[];
}

export const InputErrors: React.FC<Props> = ({ errors }: Props) => {
  return (
    <>
      {errors.map((item: string) => (
        <span key={item}>
          {item}
          <br />
        </span>
      ))}
    </>
  );
};
