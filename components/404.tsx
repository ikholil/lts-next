import ErrorImg from "@/public/404.jpeg";
import Image from "next/image";
import Link from "next/link";
const NotFound = () => {
  return (
    <div className="grid place-items-center">
      <div className="container py-32">
        <div className="flex flex-col text-center justify-center items-center">
          <Image src={ErrorImg} height={600} className="mb-4" alt="404" />
          <h2 className="font-semibold mb-5">Page Nont Found!</h2>
          <Link href="/" className="btn">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
