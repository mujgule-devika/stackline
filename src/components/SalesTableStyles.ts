import { styled } from "styled-components";

export const TableContainer = styled.div`
  margin: 10px;
  border-radius: 8px;
  overflow-x: auto;
  overflow-y: auto;
  height: 400px;
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
background-color: #fff;
`;

export const TableHeader = styled.th`
  padding: 12px 15px;
  text-align: left;
  font-size: 16px;
  font-weight: 500;
  color: #7e7e7e;
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
  color: #939393;
  border-bottom: 1px solid #eaeaea;
`;
