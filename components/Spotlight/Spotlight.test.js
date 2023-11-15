import { render, screen } from "@testing-library/react";
import Spotlight from "./Spotlight";

test("renders image and artist of spotlight art piece", () => {
    render(
        <Spotlight
            selectedPiece={{
                artist: "Steve Johnson",
                imageSource:
                    "https://example-apis.vercel.app/assets/art/orange-red-and-green.jpg",
                name: "Orange, Red and Green",
            }}
        />
    );

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
