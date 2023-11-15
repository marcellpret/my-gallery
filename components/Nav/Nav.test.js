import { render, screen } from "@testing-library/react";
import Nav from "./Nav";

jest.mock("next/router", () => ({
    useRouter() {
        return {
            push: jest.fn(),
            asPath: "/",
        };
    },
}));

test("renders three links", () => {
    render(<Nav />);

    const spotlightLink = screen.getByRole("link", { name: "Spotlight" });
    const artPiecesLink = screen.getByRole("link", { name: "Gallery" });
    const favoritesLink = screen.getByRole("link", { name: "Favorites" });

    expect(spotlightLink).toBeInTheDocument();
    expect(artPiecesLink).toBeInTheDocument();
    expect(favoritesLink).toBeInTheDocument();
});
