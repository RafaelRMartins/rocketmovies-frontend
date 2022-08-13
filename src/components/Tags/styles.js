import styled from "styled-components";

export const Container = styled.section`
  font-size: 12px;
  color: ${({ theme }) => theme.COLORS.TEXT_THEME};
  padding: 8px 16px;
  background-color: ${({ theme, typeColor }) => typeColor ? theme.COLORS.BACKGROUND_700 : theme.COLORS.PINK_300};
  border-radius: 8px;
  margin-right: 8px;
`;
