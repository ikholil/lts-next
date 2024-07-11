import Link from "next/link";
import ModeSwither from "./ModeSwither";

const Navbar = () => {
  return (
    <nav className="shadow-lg items-center py-3 bg-neutral-0 dark:bg-neutral-904">
      <div className="container flex justify-between ">
        <Link className="text-2xl md:text-3xl font-semibold" href="/">
          Lts News
        </Link>

        <div className="flex">
          <Link className="inline-flex px-2 md:px-5 py-3 font-medium" href="/">
            Home
          </Link>
          <Link className="inline-flex px-2 md:px-5 py-3 font-medium" href="/articles">
            Articles
          </Link>
          <ModeSwither />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
