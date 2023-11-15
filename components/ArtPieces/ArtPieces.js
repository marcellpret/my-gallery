import Card from "../Card/Card";

export default function ArtPieces({ pieces, onFavorite, favorites }) {
    return (
        <>
            {pieces.map((piece) => (
                <Card
                    piece={piece}
                    key={piece.slug}
                    onFavorite={onFavorite}
                    favorites={favorites}
                />
            ))}
        </>
    );
}
