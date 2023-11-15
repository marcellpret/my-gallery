import Image from "next/image";

export default function Spotlight({ selectedPiece }) {
    return (
        <>
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
            <p>{selectedPiece.artist}</p>
        </>
    );
}
