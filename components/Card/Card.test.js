import { render, screen } from "@testing-library/react";
import Card from "./Card";

test("renders image, name and artist for the piece", () => {
    render(
        <Card
            piece={{
                slug: "woman-statue",
                artist: "Zack Jarosz",
                name: "Woman Statue",
                imageSource:
                    "https://example-apis.vercel.app/assets/art/woman-statue.jpg",
            }}
            onFavorite={() => {}}
            favorites={[]}
        />
    );
    const image = screen.getByAltText("Woman Statue");
    const artist = screen.getByText(/Zack Jarosz/);
    const name = screen.getByText(/Woman Statue/);

    expect(image).toHaveAttribute(
        "src",
        expect.stringContaining(
            encodeURIComponent(
                "https://example-apis.vercel.app/assets/art/woman-statue.jpg"
            )
        )
    );
    expect(artist).toBeInTheDocument();
    expect(name).toBeInTheDocument();
});
