import GlobalStyle from "../styles";
import useSWR from "swr";
import { useImmerLocalStorageState } from "../lib/useImmerLocalStorageState";
import Layout from "../components/Layout";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function App({ Component, pageProps }) {
    const [favorites, updateFavorites] = useImmerLocalStorageState(
        "favorites",
        {
            defaultValue: [],
        }
    );

    const [comments, updateComments] = useImmerLocalStorageState("comments", {
        defaultValue: [],
    });

    const { data, error } = useSWR(
        `https://example-apis.vercel.app/api/art`,
        fetcher
    );

    const addFavorite = (slug) => {
        updateFavorites((draft) => {
            if (draft.includes(slug)) {
                const index = draft.indexOf(slug);
                draft.splice(index, 1);
                return;
            } else {
                draft.push(slug);
            }
        });
    };

    const addComment = ({ slug, comment, user }) => {
        updateComments((draft) => {
            draft.push({ slug, comment, user });
        });
    };

    if (error) return "An error has occurred.";

    return (
        <Layout>
            <GlobalStyle />
            {data ? (
                <Component
                    {...pageProps}
                    pieces={data}
                    onFavorite={addFavorite}
                    favorites={favorites}
                    onComment={addComment}
                    comments={comments}
                />
            ) : (
                <h1>Loading...</h1>
            )}
        </Layout>
    );
}
