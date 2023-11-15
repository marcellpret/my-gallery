import Nav from "./Nav/Nav";
import styled from "styled-components";

export default function Header() {
    return (
        <StyledHeader>
            <Nav />
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    width: 95vw;
    margin: 0 auto;
    text-align: center;

    h1 {
        margin: 0;
    }
`;
