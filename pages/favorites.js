import ArtPieces from "../components/ArtPieces/ArtPieces";
import StyledGrid from "../components/Styled/StyledGrid";

export default function Favorites({ pieces, onFavorite, favorites }) {
    const favoritePieces = pieces.filter((piece) =>
        favorites.includes(piece.slug)
    );

    return (
        <div>
            <h1>Favorites</h1>
            <StyledGrid>
                <ArtPieces
                    pieces={favoritePieces}
                    onFavorite={onFavorite}
                    favorites={favorites}
                />
            </StyledGrid>
        </div>
    );
}
