import * as React from "react";
import _ from "lodash";
import styled from "styled-components";

interface Props {
  className?: string;
  children: any;
  onClick: any;
}
export function Button({ className, onClick, children }: Props) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
export default styled(Button)`
  font-weight: bold;
`;
