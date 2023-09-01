import React from "react";
import { Container } from "./style";
import GenCarusel from "../Carusel";
import HouseCard from "../HouseCard";

export const Home = () => {
  return (
    <Container>
      <h1>Home</h1>
      <GenCarusel />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </Container>
  );
};

export default Home;
