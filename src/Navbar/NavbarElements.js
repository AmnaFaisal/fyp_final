import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &.active {
    color: #FEF3C7;
  }
`;
