import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";
import Pallete from "../../components/Pallete";
import FavoriteButton from "../../components/FavoriteButton";
import Comments from "../../components/Comments";

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
    box-shadow: 0 0 30px 2px rgba(0, 0, 0, 0.25), 0 0 5px 0 rgba(0, 0, 0, 0.25);

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
    <>
      <StyledSection>
        <h1>{spotPiece.name}</h1>
        <h2>
          <StyledSpan>Artist: </StyledSpan>
          {spotPiece.artist}
        </h2>
        <div className="image-container">
          <Image
            src={spotPiece.imageSource}
            fill
            alt={spotPiece.description}
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
