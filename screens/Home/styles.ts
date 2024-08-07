import styled from "styled-components/native";
import { theme } from "../../global/styles/theme";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.primary};
    align-items: center;
    gap:10px;
`;

export const Title = styled.Text`
    font-size: 40px;
    color: #fefefe;
    font-weight: bold;
  `;

export const Logo = styled.Image`
    margin-top: 100px;
    margin-bottom: 70px;
    width: 120px;
    height: 160px;                                                              
`;