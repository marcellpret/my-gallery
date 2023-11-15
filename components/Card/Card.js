import Link from "next/link";
import Image from "next/image";

import styled from "styled-components";
import FavoriteButton from "../FavoriteButton";

export default function Card({ piece, onFavorite, favorites }) {
    return (
        <RelativeDiv>
            <Link href={`gallery/${piece.slug}`} key={piece.slug}>
                <StyledCard>
                    <div className="text">
                        <h3>{piece.name}</h3>
                        <h4>{piece.artist}</h4>
                    </div>

                    <Image
                        src={piece.imageSource}
                        fill
                        alt={piece.name}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                    />
                </StyledCard>
            </Link>
            <FavoriteButton
                slug={piece.slug}
                onFavorite={onFavorite}
                favorites={favorites}
            />
        </RelativeDiv>
    );
}

// Styles

const StyledCard = styled.section`
    border: 1px solid black;
    border-radius: 5px;
    position: relative;
    min-height: 300px;
    display: flex;
    align-items: end;
    aspect-ratio: 3/4;

    img {
        z-index: -1;
    }

    .text {
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        padding: 1rem;
    }
`;

const RelativeDiv = styled.div`
    position: relative;
`;
