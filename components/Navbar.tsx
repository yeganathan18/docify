import Image from "next/image";
import { Button, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import '../styles/Home.module.css';

const Logo = () => {
  return (
    <Link href="/home">
      <Image
        src="/docify-inverse.png"
        alt="docify-logo"
        height={80}
        width={80}
      />
    </Link>
  );
};

const Navbar = () => {
  const navRoutes = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Explore",
      path: "#",
    },
    {
      name: "More",
      path: "#",
    },
  ];

  return (
    <div className="flex flex-row justify-center items-center py-4 border-b-2 border-pink-400">
      <nav className="w-3/4 flex flex-row justify-between items-center">
        <div className="flex flex-row items-center gap-4 text-sm">
          <Logo />
          <Input
            className="font-semibold"
            size="large"
            placeholder="Search..."
            prefix={<SearchOutlined />}
          />
          {navRoutes.map((route) => (
            <Link
              key={route.name}
              href={route.path}
              className="py-2 px-3 hover:bg-gray-200 font-bold rounded-lg"
            >
              {route.name}
            </Link>
          ))}
        </div>
        <div>
          <Button
            size="large"
            className="font-semibold !border-none !text-gray-900 bg-pink-400"
          >
            Logout
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
