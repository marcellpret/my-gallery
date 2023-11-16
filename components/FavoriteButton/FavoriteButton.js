import React from "react";
import styled from "styled-components";

const FavButton = styled.button`
    background-color: ${({ favorites, slug }) =>
        favorites.includes(slug) ? "red" : "transparent"};
    border: 2px solid red;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
    font-size: 1.2rem;
    transition: all 0.2s ease-in-out;
    box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25), 0 0 2px 0 rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1000;
`;

export default function FavoriteButton({ slug, onFavorite, favorites }) {
    return (
        <FavButton
            favorites={favorites}
            slug={slug}
            onClick={() => onFavorite(slug)}
        >
            ❤️
        </FavButton>
    );
}
