import { render, screen } from "@testing-library/react";
import Comments from "./Comments.js";

const exampleComments = [
    {
        comment: "Very beautiful!",
        slug: "blue-and-red",
        user: "John",
    },
    {
        comment: "Nice!",
        slug: "silhouette-photo-of-trees",
        user: "Jane",
    },
    { comment: "Cool!", slug: "silhouette-photo-of-trees", user: "John" },
];

test("renders comments", () => {
    render(
        <Comments
            comments={exampleComments}
            slug={"silhouette-photo-of-trees"}
            onComment={() => {}}
        />
    );

    const comments = screen.getAllByRole("listitem");
    expect(comments).toHaveLength(2);
    expect(comments[0]).toHaveTextContent("Nice!");
    expect(comments[1]).toHaveTextContent("Cool!");
});
