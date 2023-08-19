import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import {
  Container,
  FilterIco,
  SearchIng,
  Houses,
  MenuWrapper,
  Section,
} from "./style";
import { Dropdown } from "antd";
import Items from "./item.js";

export const Filter = () => {
  
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();
  
  const minRef = useRef();
  const maxRef = useRef();
  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder={"Country"} />
        <Input ref={cityRef} placeholder={"Region"} />
        <Input ref={regionRef} placeholder={"City"} />
        <Input ref={zipRef} placeholder={"Zip code"} />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomRef} placeholder={"Rooms"} />
        <Input ref={sizeRef} placeholder={"Size"} />
        <Input ref={sortRef} placeholder={"Sort"} />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minRef} placeholder={"Min price"} />
        <Input ref={maxRef} placeholder={"Max price"} />
      </Section>
    </MenuWrapper>
  );
  return (
    <Container>
      <Input
        icon={<Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        menu={{
          Items,
        }}
        dropdownRender={() => menu}
        trigger={["click"]}
      >
        <div>
          <Button type="light">
            <FilterIco /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <SearchIng /> Search
      </Button>
    </Container>
  );
};

export default Filter;
