import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  font-weight: 500;
`;
export const Item = styled.li`
  padding: 5px 5px;
`;

export const LinkInfo = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover,
  &:focus {
    color: red;
  }
`;
