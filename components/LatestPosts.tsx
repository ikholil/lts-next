"use client";
import Loader from "@/components/Loader";
import PostCard, { PostType } from "@/components/PostCard";
import UseArticles from "@/hooks/useArticles";

const LatestNewsContent = () => {
  const { loading, posts } = UseArticles();

  if (loading) return <Loader />;

  return (
    <section className="py-16 xl:py-32 bg-neutral-20 dark:bg-neutral-903">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="mb-3">Latest Posts</h2>
          <p>Stay informed with our up-to-the-minute coverage of breaking news, trending stories, and in-depth reports from around the world.</p>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {posts.map((singleNews: PostType, i) => (
            <div key={`news-${i}`} className="col-span-12 md:col-span-6 xl:col-span-4">
              <PostCard {...singleNews} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsContent;
