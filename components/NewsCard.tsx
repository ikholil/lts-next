import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="p-4 lg:p-6 rounded-lg shadow-lg">
      <Image src="https://picsum.photos/600/350" width={600} height={350} alt="" />
    </div>
  );
};

export default NewsCard;
