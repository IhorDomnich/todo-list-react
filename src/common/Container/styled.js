import styled from "styled-components";

export const Wrapper = styled.main`
    max-width: 1200px;
    padding: 20px;
    margin: 0 auto;
    background-color: ${({ theme }) => theme.color.gallery}
`;