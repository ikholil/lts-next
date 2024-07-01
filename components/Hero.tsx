import HeroImg from "@/public/hero.png";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="container h-full min-h-screen">
      <div className="grid grid-cols-2 items-center py-20 3xl:py-32 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <h6 className="mb-2">Breaking News</h6>
          <h2 className="display-4 capitalize mb-4">Stay Updated With Latest Headlines</h2>
          <p className="mb-6 lg:mb-8">Get the most recent news updates, in-depth analysis, and exclusive stories from around the world.</p>
          <div className="flex gap-4">
            <Link className="btn" href="#">
              Explore Now
            </Link>
            <Link className="btn-outlined" href="#">
              Join Us
            </Link>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1">
          <Image src={HeroImg} alt="hero img" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
