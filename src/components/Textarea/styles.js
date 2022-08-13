import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 270px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  padding: 12px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  border: 0;
  border-radius: 10px;
  resize: none;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;