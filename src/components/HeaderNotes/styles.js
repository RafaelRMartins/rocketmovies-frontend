import styled from "styled-components";

export const Container = styled.section`
  
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  >h1{
    margin-right: 19px;
  }
`;

export const Info = styled.div`
  display: flex;
  >div{
    display: flex;
    align-items: center;
    margin-right: 16px;

    >img{
      border-radius: 35px;
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }

    >svg{
      color: ${({ theme }) => theme.COLORS.PINK_100};
      margin-right: 8px;
    }
    
  }
`;
