import React from "react";
import { Container, Logo, Section, Wrapper, Link } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Section onClick={() => navigate("./home")} >
          <Logo />
          <h3>Hauzing</h3>
        </Section>
        <Section>
          {navbar.map(({ title, path }, index) => {
            return (
              <Link
                className={({ isActive }) => isActive && "active"}
                to={path}
                key={index}
              >
                {title}
              </Link>
            );
          })}
        </Section>
        <Section>
          <button>Sign in</button>
        </Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
