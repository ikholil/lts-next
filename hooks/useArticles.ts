import { PostType } from "@/components/PostCard";
import { FormEvent, useEffect, useMemo, useState } from "react";

const useArticles = ({ searchText, id }: { searchText?: string, id?: string } = {}) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState<PostType>()
    const memoizedSearchText = useMemo(() => searchText, [searchText]);

    const handleSearch = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!memoizedSearchText) return;
        setLoading(true);
        fetch(`https://dummyjson.com/posts/search?q=${memoizedSearchText}`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data?.posts);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetch("https://dummyjson.com/posts?limit=9")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setPost(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                setLoading(false);
            });
    }, [id]);

    return { posts, loading, handleSearch, post };
};

export default useArticles;
