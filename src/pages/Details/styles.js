import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
  "header"
  "content";
  
  >main{
    grid-area: content;
    overflow-y: auto;
    padding: 0 0 64px;
  }
`;

export const Body = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 80px 0;

  >a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK_100};

    >svg{
      margin-right: 8px;
    }
  }
`;

export const Section = styled.div`
  display: flex;
  margin: 40px 0;
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