import { styled } from "styled-components";

const getType = (type) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #FFFFFF",
        color: "white",
      };
    case "light":
      return {
        background: "#FFFFFF",
        border: "1px solid #E6E9EC",
        color: "0D263B",
      };
    case "primry":
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF ",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#FFFFFF",
      };
  }
};

export const Container = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;

  font-size: 14px;
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: "none";
  border: 1px solid #e6e9ec;

  /* ${({ type }) => getType(type)} */
`;
