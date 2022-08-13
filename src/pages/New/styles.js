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
    padding: 40px 80px 64px;
  }
`;

export const Form = styled.form`
  >header{
    h1{
      margin-top: 20px;
    }
    
    >a{
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.COLORS.PINK_100};

    >svg{
      margin-right: 8px;
    }
  }
  }

  >h2{
    font-weight: 400;
    font-size: 20px;
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 30px;
  }
`;

export const Box = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  display: flex;
  gap: 40px;
`;

export const BoxNote = styled.div`
  margin-top: 20px;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  background-color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const BoxButton = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 40px;
`;