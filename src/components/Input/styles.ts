import styled from 'styled-components/native';

export const InputField = styled.TextInput`
  width: 100%;
  max-width: 313px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.background};
`;
