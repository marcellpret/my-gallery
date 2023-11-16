import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders image, artist and name of spotlight art piece", () => {
    render(
        <Spotlight
            selectedPiece={{
                artist: "Steve Johnson",
                imageSource:
                    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
                name: "Orange, Red and Green",
            }}
            onFavorite={() => {}}
            favorites={[]}
        />
    );

    const artist = screen.getByText("Steve Johnson");
    expect(artist).toBeInTheDocument();

    const name = screen.getByText("Orange, Red and Green");
    expect(name).toBeInTheDocument();

    const image = screen.getByAltText("Orange, Red and Green");
    expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(
            encodeURIComponent(
                "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg"
            )
        )
    );
});
