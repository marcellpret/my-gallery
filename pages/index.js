import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Spotlight from "../components/Spotlight/Spotlight";

export default function HomePage({ pieces, favorites, onFavorite }) {
    const [selectedPiece, setSelectedPiece] = useState({});

    const randomArt = () => {
        const randomIndex = Math.floor(Math.random() * 11);
        return pieces[randomIndex];
    };

    useEffect(() => {
        setSelectedPiece(randomArt());
    }, [pieces]);

    const nextRandom = () => {
        setSelectedPiece(randomArt());
    };

    if (!selectedPiece) {
        return <h1>Loading...</h1>;
    }

    return (
        <StyledFrameContainer>
            <Spotlight
                selectedPiece={selectedPiece}
                favorites={favorites}
                onFavorite={onFavorite}
                nextRandom={nextRandom}
            />
        </StyledFrameContainer>
    );
}

const StyledFrameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    flex-grow: 1;
`;
