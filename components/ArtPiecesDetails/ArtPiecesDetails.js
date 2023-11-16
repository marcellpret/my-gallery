import Image from "next/image";
import styled from "styled-components";
import Pallete from "../Pallete";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import Comments from "../Comments/Comments";
import { useRouter } from "next/router";

const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-container {
        position: relative;
        aspect-ratio: 3/4;
        height: 60vh;
        max-width: 90vw;
        border-radius: 5px;
        overflow: hidden;
        margin-block: 1rem;
        box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25),
            0 0 5px 0 rgba(0, 0, 0, 0.25);

        h2 {
            font-size: 1.2rem;
            background-color: whitesmoke;
            padding: 0.3rem 0.6rem;
            border-radius: 5px 5px 0 0;
        }
        .genre {
            font-size: 1.2rem;
            background-color: whitesmoke;
            padding: 0.3rem 0.6rem;
            border-radius: 5px 5px 0 0;
        }
    }

    .back {
        all: unset;
        color: white;
        margin-top: 1rem;
        transition: opacity 0.2s ease-in-out;

        &:hover {
            opacity: 0.5;
        }
    }

    h1 {
        font-size: 2rem;
    }

    .genre {
        font-style: italic;
    }
`;

const Backdrop = styled.div`
    position: fixed;
    inset: 0;
    z-index: -2;
    overflow: hidden;
`;

const BackdropGradient = styled.div`
    position: fixed;
    inset: -150px;
    background: ${({ colors }) => `linear-gradient(170deg, ${colors})`};
    z-index: -2;
    filter: blur(100px);
`;

const StyledSpan = styled.span`
    opacity: 0.6;
`;

export default function ArtPiecesDetails({
    spotPiece,
    onFavorite,
    favorites,
    onComment,
    comments,
}) {
    const router = useRouter();
    return (
        <>
            <StyledSection>
                <button className="back" onClick={() => router.back()}>
                    ↩ Back
                </button>
                <h1>{spotPiece.name}</h1>
                <h2>
                    <StyledSpan>Artist: </StyledSpan>
                    {spotPiece.artist}
                </h2>
                <div className="image-container">
                    <Image
                        src={spotPiece.imageSource}
                        fill
                        alt={spotPiece.name}
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    ></Image>
                    <FavoriteButton
                        slug={spotPiece.slug}
                        onFavorite={onFavorite}
                        favorites={favorites}
                    />
                </div>
                <p className="genre">
                    <StyledSpan>Genre: </StyledSpan>
                    {spotPiece.genre}
                </p>
                <p className="year">
                    <StyledSpan>Year: </StyledSpan>
                    {spotPiece.year}
                </p>

                <Pallete colors={spotPiece.colors} />
            </StyledSection>

            <Comments
                slug={spotPiece.slug}
                onComment={onComment}
                comments={comments}
            />

            <Backdrop colors={spotPiece.colors}>
                <BackdropGradient colors={spotPiece.colors}></BackdropGradient>
            </Backdrop>
        </>
    );
}
