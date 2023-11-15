import React from "react";
import StyledGrid from "../../components/Styled/StyledGrid";
import ArtPieces from "../../components/ArtPieces/ArtPieces";

export default function Gallery({ pieces, onFavorite, favorites }) {
    return (
        <div>
            <h1>Gallery</h1>
            <StyledGrid>
                <ArtPieces
                    pieces={pieces}
                    onFavorite={onFavorite}
                    favorites={favorites}
                />
            </StyledGrid>
        </div>
    );
}
