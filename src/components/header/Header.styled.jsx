import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;
`;

export const HeaderLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-size: 24px;
  font-weight: 500;
  cursor: pointer;

&:hover,
  &:focus {
    color: red;
    text-decoration: ;

  &.active {
    color: red;
  }
`;
