import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.TEXT_FIELD}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  >button{
    border: none;
    background: none;

    svg{
      font-size: 24px;
      color: ${({ theme }) => theme.COLORS.PINK_100};
    }
  }

  >input{
    height: 56px;
    width: 100%;
    
    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;