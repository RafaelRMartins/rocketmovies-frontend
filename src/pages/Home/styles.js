import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "top"
  "content";
  
  >main{
    grid-area: content;
    overflow-y: auto;
    padding: 0 80px 44px;
  }
`;

export const Head = styled.div`
  grid-area: top;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  padding: 0px 80px 16px;
`;

export const Controller = styled.div`

`;

export const NewButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.PINK_100};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const List = styled.div`
  margin-top: 30px;
`;

export const Search = styled.div`
  flex: 0 1 630px;
  display: flex;
  align-items: center;
  margin: 0 20px 0;
  color: ${({ theme }) => theme.COLORS.PINK_100};
  font-size: 24px;
  font-weight: 700;
`;