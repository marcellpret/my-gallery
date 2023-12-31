import { render, screen } from "@testing-library/react";
import ArtPiecesDetails from "./ArtPiecesDetails";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            push: jest.fn(),
            asPath: "/",
        };
    },
}));

test("displays image, title, artist, year, genre, back link and colors of art piece", () => {
    render(
        <ArtPiecesDetails
            spotPiece={{
                artist: "Min An",
                name: "Silhouette Photo of Trees",
                imageSource:
                    "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg",
                year: "2017",
                genre: "Nature",
                colors: ["#0f5855", "#e6ba15", "#b42011", "#cec4c6", "#d5561f"],
            }}
            onFavorite={() => {}}
            favorites={[]}
            onComment={() => {}}
            comments={[]}
        />
    );

    const image = screen.getByAltText("Silhouette Photo of Trees");
    const artist = screen.getByText("Min An");
    const title = screen.getByRole("heading", {
        level: 1,
        name: "Silhouette Photo of Trees",
    });
    const year = screen.getByText("2017");
    const genre = screen.getByText("Nature");
    const backButton = screen.getByRole("button", {
        name: "↩ Back",
    });
    const greenColor = screen.getByRole("listitem", {
        name: "Color HEX code: #0f5855",
    });
    const goldColor = screen.getByRole("listitem", {
        name: "Color HEX code: #e6ba15",
    });
    const redColor = screen.getByRole("listitem", {
        name: "Color HEX code: #b42011",
    });
    const greyColor = screen.getByRole("listitem", {
        name: "Color HEX code: #cec4c6",
    });
    const orangeColor = screen.getByRole("listitem", {
        name: "Color HEX code: #d5561f",
    });

    expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(
            encodeURIComponent(
                "https://example-apis.vercel.app/assets/art/silhouette-trees.jpg"
            )
        )
    );
    expect(title).toBeInTheDocument();
    expect(artist).toBeInTheDocument();
    expect(year).toBeInTheDocument();
    expect(genre).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
    expect(greenColor).toBeInTheDocument();
    expect(goldColor).toBeInTheDocument();
    expect(redColor).toBeInTheDocument();
    expect(greyColor).toBeInTheDocument();
    expect(orangeColor).toBeInTheDocument();
});
