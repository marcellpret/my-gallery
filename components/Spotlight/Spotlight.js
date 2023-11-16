import Image from "next/image";
import styled from "styled-components";

import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useState } from "react";

export default function Spotlight({
    selectedPiece,
    onFavorite,
    favorites,
    nextRandom,
}) {
    const [btnRotation, setBtnRotation] = useState(0);
    const refreshPicture = () => {
        setBtnRotation(btnRotation + 180);
        nextRandom();
    };

    return (
        <>
            <StyledButton onClick={refreshPicture} rotation={btnRotation}>
                🔄
            </StyledButton>

            <div className="frame">
                <Image
                    src={
                        selectedPiece.imageSource ||
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                    }
                    fill
                    alt={selectedPiece.name || "Waiting for art to load"}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <FavoriteButton
                    slug={selectedPiece.slug}
                    favorites={favorites}
                    onFavorite={onFavorite}
                />
            </div>
            <p>{selectedPiece.name}</p>
            <StyledArtist className="artist">
                {selectedPiece.artist}
            </StyledArtist>
        </>
    );
}

const StyledArtist = styled.p`
    font-size: 0.8rem;
    opacity: 0.5;
    font-style: italic;
`;

const StyledButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: transparent;
    align-self: center;
    border: none;
    font-size: 2.5rem;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
    transform: rotate(${({ rotation }) => rotation}deg);
    transition: transform 0.2s ease-out;
`;
