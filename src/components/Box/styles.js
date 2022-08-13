import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.COLORS.PINK_200};
  border-radius: 16px;
  margin-bottom: 24px;
  border: none;
  text-align: left;


  >h2{
    color: ${({ theme }) => theme.COLORS.WHITE};
    flex: 1;
    text-align: left;
    margin-bottom: 6px;
    font-weight: 700;
  }

  >p{
    color: ${({ theme }) => theme.COLORS.TEXT};
    margin-top: 16px;
    text-align: justify;
  }

  >footer{
    display: flex;
    margin-top: 24px;
  }
`;