import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme, blackcolor }) => blackcolor ? theme.COLORS.BLACK : theme.COLORS.PINK_100};
  color: ${({ theme, blackcolor }) => blackcolor ? theme.COLORS.PINK_100 : theme.COLORS.BACKGROUND_700};
  display: flex;
  align-items: center;
  justify-content: center;

  height: 56px;
  border: 0;
  padding: 0 16px;
  margin-top: 16px;
  border-radius: 10px;
  font-weight: 500;

  >svg{
    margin-right: 8px;
  }

  &:disabled {
    opacity: 0.5;
  }
`