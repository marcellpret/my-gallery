import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function HomePage({ pieces }) {
    const [selectedPiece, setSelectedPiece] = useState({});

    useEffect(() => {
        function randomArt() {
            const randomIndex = Math.floor(Math.random() * 11);
            return pieces[randomIndex];
        }
        setSelectedPiece(randomArt());
    }, [pieces]);

    if (!selectedPiece) {
        return <h1>Loading...</h1>;
    }

    return (
        <StyledFrameContainer>
            <div className="frame">
                <Image
                    src={
                        selectedPiece.imageSource ||
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                    }
                    fill
                    alt={selectedPiece.name}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPcvHnbdwAHUgMVjiMF2wAAAABJRU5ErkJggg=="
                />
            </div>
            <p>{selectedPiece.name}</p>
        </StyledFrameContainer>
    );
}

const StyledFrameContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    flex-grow: 1;
`;
