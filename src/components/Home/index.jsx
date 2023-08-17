import React from "react";
import { Container } from "./style";
import { Input, Button } from "../Generic";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Input width={200} placeholder={"name"} />
    </Container>
  );
};

export default Home;
