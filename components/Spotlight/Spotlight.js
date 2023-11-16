import Image from "next/image";
import styled from "styled-components";

import FavoriteButton from "../FavoriteButton/FavoriteButton";

export default function Spotlight({ selectedPiece, onFavorite, favorites }) {
    return (
        <>
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
