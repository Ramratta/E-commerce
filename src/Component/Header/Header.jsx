import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import Logo from "../Image/logo.svg";
import Badge from "@mui/material/Badge";
import { GitCompare, Heart, ShoppingCart } from "lucide-react";

function Header() {
  return (
    <header>
      <div className="text-[12px] font-medium flex items-center justify-evenly border-t border-b border-slate-300 h-12.5 bg-white">
        <div className="w-1/2">
          <p>Get Upto 50% off new season styles. Limited time only</p>
        </div>
        <div>
          <ul className="flex gap-5 ">
            <li className="link ">
              <Link to={"/HelpCenter"}>HelpCenter</Link>
            </li>
            <li className="link">
              <Link to={"/Order Tracking"}>Order Tracking</Link>
            </li>
            <li className="link">
              <Link to={"/About Us"}>About Us</Link>
            </li>
            <li className="link ">
              <Link to={"/Contact Us"}>Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-evenly items-center h-15 border-b-2 border-slate-300 bg-white w-full">
        <div className="w-[15%] flex">
          <Link to={"/"}>
            <img className="w-55" src={Logo} alt="Logo-Icon" />
          </Link>
        </div>
        <div className="flex w-[40%] bg-[whitesmoke] h-10 rounded-sm">
          <select className="focus:outline-none">
            <option>ALL Categories</option>
            <option>Our Store</option>
            <option>Jewellery</option>
            <option>Necklace</option>
            <option>Earrings</option>
            <option>Watches</option>
            <option>Goggles</option>
            <option>Hybrid Watches</option>
            <option>Smart Watches</option>
            <option>Aviator Watches</option>
            <option>Electronics</option>
            <option>Fashion</option>
            <option>Tote Bag</option>
            <option>Purse</option>
            <option>Shoes</option>
            <option>T-Shirt</option>
            <option>Furniture</option>
            <option>Pillow</option>
            <option>Sofas</option>
            <option>Bottle Grinder</option>
            <option>Poufs</option>
            <option>Retro Fashion</option>
            <option>Bucket Hats</option>
            <option>Tie Dye</option>
            <option>Demin Skirt</option>
            <option>Shimmer</option>
          </select>
          <input
            type="Search"
            placeholder="Search here"
            className="mr-2 focus:outline-none flex-1"
          />
          <button
            type="submit"
            className="bg-[#ff5252] text-white cursor-pointer rounded-r-sm"
          >
            Search
          </button>
        </div>
        <div className="flex w-[20%] justify-between">
          <div className="flex justify-between w-[50%]">
            <Link
              className="hover:text-orange-400 hover:text-[20px]"
              to={"/Login"}
            >
              Login
            </Link>
            <p className="border-r-2 border-slate-300"></p>
            <p className="border-r-2 border-slate-300"></p>
            <Link
              className="hover:text-orange-400 hover:text-[20px]"
              to={"/Register"}
            >
              Register
            </Link>
          </div>
          <div className="flex w-[50%] justify-evenly">
            <Badge className="cursor-pointer" badgeContent={5} color="error">
              <GitCompare />
            </Badge>
            <Badge className="cursor-pointer" badgeContent={2} color="error">
              <Heart />
            </Badge>
            <Badge className="cursor-pointer" badgeContent={3} color="error">
              <ShoppingCart />
            </Badge>
          </div>
        </div>
      </div>
      <Navigation />
    </header>
  );
}
export default Header;
