import { useRouter } from "next/router";
import ArtPiecesDetails from "../../../components/ArtPiecesDetails/ArtPiecesDetails";

export default function ArtPiece({
    pieces,
    onFavorite,
    favorites,
    onComment,
    comments,
}) {
    const { query } = useRouter();

    const spotPiece = pieces.find((piece) => piece.slug === query.slug);

    return (
        <ArtPiecesDetails
            spotPiece={spotPiece}
            onFavorite={onFavorite}
            favorites={favorites}
            onComment={onComment}
            comments={comments}
        />
    );
}
