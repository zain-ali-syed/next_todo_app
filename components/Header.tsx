import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between p-4 bg-gray-200">
        <p>Logo</p>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
