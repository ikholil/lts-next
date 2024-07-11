import Image from "next/image";
import Link from "next/link";
import Arrow from "./icons/Arrow";
export type PostType = {
  id: number;
  title: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  tags: string[];
  views: number;
  body: string;
};
const PostCard = ({ title, body, id, reactions, tags, views }: PostType) => {
  return (
    <div className="p-3 lg:p-4 rounded-lg shadow-lg bg-neutral-0 dark:bg-neutral-904">
      <div className="h-[200px] mb-4">
        <Image loading="lazy" src={"https://picsum.photos/600/350"} className="object-cover h-full object-center rounded-md" width={600} height={350} alt="" />
      </div>
      <h4 className="my-4 line-clamp-1">{title}</h4>
      <p className="mb-4 line-clamp-3">{body}</p>
      <div className="flex gap-2 flex-wrap mb-6">
        {tags.map((tag) => (
          <span key={tag} className="inline-flex py-1.5 px-2  bg-primary rounded-md text-sm">
            {tag}
          </span>
        ))}
      </div>
      <Link href={`/articles/${id}`} className="text-primary font-medium flex items-center gap-2">
        View Post <Arrow />
      </Link>
    </div>
  );
};

export default PostCard;
