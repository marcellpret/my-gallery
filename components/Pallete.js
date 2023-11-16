import React from "react";
import styled from "styled-components";

const StyledColors = styled.section`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-block: 2rem 0.8rem;
    width: 100%;
    max-width: 350px;
    padding-inline: 1rem;

    .colors {
        border-radius: 50%;
        border: 2px solid whitesmoke;
        cursor: pointer;
        color: gray;
        width: 35px;
        height: 35px;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25),
            0 0 2px 0 rgba(0, 0, 0, 0.25);
        transition: all 0.2s ease-in-out;
        list-style: none;

        &:hover {
            transform: scale(1.1);
            box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.25),
                0 0 10px 0 rgba(0, 0, 0, 0.25);
        }
    }
    .line {
        position: absolute;
        top: 50%;
        left: 1rem;
        right: 1rem;
        transform: translateY(-50%);
        /* width: 100%; */
        height: 2px;
        background-color: whitesmoke;
        z-index: -1;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25),
            0 0 2px 0 rgba(0, 0, 0, 0.25);
    }
`;

const ExtraText = styled.p`
    font-size: 12px;
    color: whitesmoke;
`;
export default function Pallete({ colors }) {
    return (
        <>
            <StyledColors>
                {colors.map((color) => (
                    <li
                        className="colors"
                        onClick={() => navigator.clipboard.writeText(color)}
                        key={color}
                        style={{ backgroundColor: color }}
                        aria-label={`Color HEX code: ${color}`}
                    ></li>
                ))}
                <div className="line"></div>
            </StyledColors>
            <ExtraText>Click on the color to copy its HEX code!</ExtraText>
        </>
    );
}
