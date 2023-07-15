import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px 20px 20px;
`;

export const LinkBackBtn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 20px;
  max-width: 70px;
  text-decoration: none;

  padding: 8px 12px;
  cursor: pointer;
  border-radius: 10px;
  border: 1.5px solid black;
  margin-bottom: 20px;

  :hover {
    background-color: yellow;
  }
`;
export const Title = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: black;
  margin: 10px 0;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: black;
  margin: 10px 0;
`;

export const MainTitle = styled.h1`
  font-size: 25px;
  font-weight: 700;
  color: black;
  margin: 10px 0;
`;

export const Score = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin: 10px 0;
`;

export const MovieCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid black;
`;

export const MovieInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;
`;

export const AdditionalInfo = styled.div`
  border-bottom: 1px solid black;
`;
