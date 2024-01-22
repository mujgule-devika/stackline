import { styled } from "styled-components";

export const TableContainer = styled.div`
  margin: 1em;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  height: 400px; // Adjust this to your preference
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
`;

export const TableHead = styled.thead`
  background-color: #ececec;
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: #f7f7f7;
  }
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: #333;
  background-color: #fff;
  position: sticky;
  top: 0; 
  scroll area
  z-index: 10;
`;

export const TableCell = styled.td`
  padding: 12px 15px;
  text-align: left;
  font-size: 14px;
  color: #555;
  border-bottom: 1px solid #eaeaea;
`;
