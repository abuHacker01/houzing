import React from "react";
import { Container, Logo, Section, Wrapper, Link, Main } from "./style";
import { Outlet, useNavigate } from "react-router-dom";
import navbar from "../../utils/navbar";
import { Button } from "../Generic/Button";
import Serching from "../Filter";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("./home")}>
            <Logo />
            <h3>Hauzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    to={path}
                    key={index}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            <Button onClick={() => navigate("./signin")} type={"dark"}>
              Sign In
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Serching />
      <Outlet />
    </Container>
  );
};

export default Navbar;
