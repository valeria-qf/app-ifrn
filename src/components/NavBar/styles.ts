import styled from 'styled-components/native';

export const NavBarContainer = styled.View`
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  padding-bottom: 15px;
  background-color: ${({ theme }) => theme.colors.background};
`;
