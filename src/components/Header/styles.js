import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;

  padding: 0 80px;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 9px;

    > a {
      color: ${({ theme }) => theme.COLORS.TEXT_FIELD};
    }

    strong{
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.PINK_100};
  font-size: 24px;
  font-weight: 700;
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