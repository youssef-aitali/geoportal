import { UserIcon } from "@heroicons/react/16/solid";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] flex justify-between items-center">
      <img src={logo} alt="Logo" className="h-12 ml-4" />

      <input
        type="search"
        placeholder="Search..."
        className="bg-white placeholder:text-blue-200 focus:outline-none"
      />

      <div className="bg-purple-500 flex gap-4 items-center mr-4">
        <div>Thematic</div>
        <div>
          <UserIcon className="size-6 text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
