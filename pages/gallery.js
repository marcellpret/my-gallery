import React from "react";
import Card from "../components/Card";
import StyledGrid from "../components/Styled/StyledGrid";

export default function Gallery({ pieces, onFavorite, favorites }) {
    return (
        <div>
            <h1>Gallery</h1>
            <StyledGrid>
                {pieces.map((piece) => (
                    <Card
                        piece={piece}
                        key={piece.slug}
                        onFavorite={onFavorite}
                        favorites={favorites}
                    />
                ))}
            </StyledGrid>
        </div>
    );
}
