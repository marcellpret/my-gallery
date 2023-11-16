import React from "react";
import styled from "styled-components";

export default function Comments({ onComment, slug, comments }) {
    const commentsFiltered = comments.filter(
        (comment) => comment.slug === slug
    );

    const commentSubmit = (e) => {
        e.preventDefault();
        const comment = e.target.comment.value;
        const user = e.target.user.value;
        onComment({ slug, comment, user });
        e.target.comment.value = "";
        e.target.comment.focus();
    };
    return (
        <>
            <StyledForm onSubmit={commentSubmit}>
                <label htmlFor="comment">Leave your comment:</label>
                <textarea
                    name="comment"
                    id="comment"
                    cols="30"
                    rows="3"
                ></textarea>
                <label htmlFor="user">Your name:</label>
                <input type="text" name="user" id="user" />
                <button type="submit">Submit</button>
            </StyledForm>
            {commentsFiltered.length != 0 ? (
                <StyledCommentsList>
                    {commentsFiltered.map(({ comment, user, slug }) => (
                        <li key={slug}>
                            <p className="comment">{comment}</p>
                            <p className="by">by {user}</p>
                        </li>
                    ))}
                </StyledCommentsList>
            ) : (
                <StyledCommentsList>
                    <h2>No comments yet..</h2>
                </StyledCommentsList>
            )}
        </>
    );
}

// Styles

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 500px;
    max-width: 90vw;
    margin: 0 auto;
    margin-top: 3rem;

    textarea,
    input {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    button {
        align-self: center;
        padding: 0.3rem 0.9rem;
    }
`;

const StyledCommentsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    margin-block: 2rem;
    align-items: start;
    width: 500px;
    max-width: 90vw;

    li {
        background-color: whitesmoke;
        border-radius: 5px;
        padding: 1rem 1.3rem;
        min-width: 60%;
        text-align: left;
        position: relative;
        color: gray;
        box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25),
            0 0 2px 0 rgba(0, 0, 0, 0.25);
        list-style: none;

        &::before {
            left: 1rem;
            bottom: -0.9rem;
            clip-path: polygon(0 0, 75% 0, 100% 100%);
            background: whitesmoke;
            border-radius: 0.25rem;
            padding: 0.7rem;
            content: "";
            position: absolute;
            transform: scaleX(-1);
            box-shadow: 0 0 10px 0px rgba(0, 0, 0, 0.25),
                0 0 2px 0 rgba(0, 0, 0, 0.25);
        }
    }

    li:nth-child(even) {
        text-align: right;
        justify-content: flex-end;
        align-self: end;

        &::before {
            left: auto;
            right: 1rem;
            transform: scaleX(1);
        }
    }

    .by {
        font-style: italic;
        font-size: 0.8rem;
        color: gray;
        margin-top: 0.3rem;
        opacity: 0.7;
    }

    h2 {
        align-self: center;
    }
`;
