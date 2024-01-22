import styled from "styled-components";
import { Card } from "../resusableComponents/Card/Card";

export const ProductCard = styled(Card)`
  padding: 12px;
  display: flex;
  height: auto;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
`;

export const ProductImage = styled.img`
  width: 200px; // Adjust size as needed
  height: auto;
  margin-bottom: 8px;
`;

export const ProductTitle = styled.h1`
  color: #333;
  margin-bottom: 4px;
`;

export const Subtitle = styled.h2`
  text-align: center;
  font-size: 14px;
  color: #68778e;
  flex-wrap: wrap;
  padding: 1%;
`;
