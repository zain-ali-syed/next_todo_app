import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import Image from "next/image";

import Link from "next/link";

const Header = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser(); // from Kinde SDK

  return (
    <header>
      <div className="flex justify-between p-4 bg-gray-200 items-center">
        <Image
          src={user?.picture ?? "/default-avatar.png"}
          alt="avatar"
          height={60}
          width={60}
          className="rounded-xl"
        />
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <LogoutLink className="bg-black text-white rounded px-4 py-2">Logout</LogoutLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
