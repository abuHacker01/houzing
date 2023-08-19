import styled from "styled-components";
import { ReactComponent as MiniHouses } from "../../assets/icon/hauses.svg";
import { ReactComponent as MiniFilter } from "../../assets/icon/filter.svg";
import { ReactComponent as MiniSearch } from "../../assets/icon/serch.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
`;  

export const MenuWrapper = styled.section`
  padding: 30px;
  background-color: white;
  border: 1px solid black;
`;
export const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export const Houses = styled(MiniHouses)`
  margin-right: 8px;
`;
export const FilterIco = styled(MiniFilter)`
  margin-right: 8px;
`;
export const SearchIng = styled(MiniSearch)`
  margin-right: 8px;
`;

export { Container };
