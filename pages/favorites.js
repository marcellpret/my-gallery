import Card from "../components/Card/Card";
import StyledGrid from "../components/Styled/StyledGrid";

export default function Favorites({ pieces, onFavorite, favorites }) {
    const favoritePieces = pieces.filter((piece) =>
        favorites.includes(piece.slug)
    );

    return (
        <div>
            <h1>Favorites</h1>
            <StyledGrid>
                {favoritePieces.map((piece) => (
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
