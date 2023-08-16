import { styled } from "styled-components";

import { ReactComponent as logoImg } from "../../assets/icon/mini_logo.svg";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: 64px;

  font-size: 16px;
  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer "};

  .active {
    color: blue;
  }
`;

export const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #fff;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #fff;
`;
