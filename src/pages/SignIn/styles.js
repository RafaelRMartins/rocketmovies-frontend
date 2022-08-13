import styled from 'styled-components';
import backgroundImg from '../../assets/background.jpg'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`;

export const Form = styled.form`
  padding: 0 134px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: left;

  >h1{
    width: 100%;
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }

  >h2{
    width: 100%;
    font-size: 24px;
    margin-top: 48px;
    margin-bottom: 48px;
  }

  >p{
    width: 100%;
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.SUB_TITLE};
  }

`;

export const Create = styled.div`
  margin-top: 42px;

  a{
    color: ${({ theme }) => theme.COLORS.PINK_100};
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`;