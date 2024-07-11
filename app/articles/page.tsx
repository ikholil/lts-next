"use client";
import Search from "@/components/icons/Search";
import Loader from "@/components/Loader";
import PostCard, { PostType } from "@/components/PostCard";
import UseArticles from "@/hooks/useArticles";
import { useState } from "react";

const LatestNews = () => {
  const [searchText, setSearchText] = useState("");
  const { loading, posts, handleSearch } = UseArticles({ searchText });

  if (loading) return <Loader />;

  return (
    <section className="py-16 xl:py-32 bg-neutral-20 dark:bg-neutral-903">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-3">All Posts</h2>
          <p>Stay informed with our up-to-the-minute coverage of breaking news, trending stories, and in-depth reports from around the world.</p>
        </div>
        <form className="flex max-w-5xl my-5 mx-auto" onSubmit={handleSearch}>
          <input value={searchText} onChange={(e) => setSearchText(e.target.value)} placeholder="Search Post" className="grow focus:outline-none border py-1.5 px-3 rounded-l-md" type="search" />
          <button type="submit" className="bg-primary text-neutral-0 shrink-0 size-10 flex items-center justify-center rounded-r-md">
            <Search />
          </button>
        </form>
        <div className="grid grid-cols-12 gap-6">
          {posts.map((singleNews: PostType, i) => (
            <div key={`news-${i}`} className="col-span-12 md:col-span-6 xl:col-span-4">
              <PostCard {...singleNews} />
            </div>
          ))}
          {posts.length == 0 && (
            <div className="text-center py-20 col-span-12">
              <h3 className="text-4xl font-semibold">No Posts Found! try another words</h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
