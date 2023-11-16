import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "./FavoriteButton.js";

const user = userEvent.setup();
const mockOnFavorite = jest.fn();
test("calls onFavorite on button click", async () => {
    render(
        <FavoriteButton slug={""} favorites={[]} onFavorite={mockOnFavorite} />
    );

    const button = screen.getByRole("button", { name: "❤️" });

    await user.click(button);

    expect(mockOnFavorite).toHaveBeenCalled();
});

test("displays the red background on the favorite button if favorites contain the art slug", () => {
    render(
        <FavoriteButton
            slug={"silhouette-photo-of-trees"}
            favorites={["silhouette-photo-of-trees"]}
            onFavorite={mockOnFavorite}
        />
    );

    const button = screen.getByRole("button", { name: "❤️" });

    expect(button).toHaveStyle({ "background-color": "red" });
});
