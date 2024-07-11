"use client";
import NotFound from "@/components/404";
import Loader from "@/components/Loader";
import useArticles from "@/hooks/useArticles";
import Image from "next/image";
import { useParams } from "next/navigation";

const Page = () => {
  const { id } = useParams();

  const { loading, post } = useArticles({ id: id as string });

  if (loading) return <Loader />;

  return (
    <div className="container py-20">
      {post?.title ? (
        <div>
          <Image loading="lazy" src={"https://picsum.photos/600/350"} className="object-cover mb-5 h-full object-center rounded-md" width={600} height={350} alt="" />

          <h2 className="mb-5">{post?.title}</h2>
          <p>Post Views : {post?.views} </p>
          <p>Likes : {post?.reactions.likes} </p>
          <p className="mb-4">Dislikes : {post?.reactions.dislikes}</p>
          <p>{post?.body}</p>
          <div className="flex gap-3 mt-6">
            {post?.tags.map((tag) => (
              <span key={tag} className="inline-flex py-1.5 px-2  bg-primary rounded-md text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Page;
