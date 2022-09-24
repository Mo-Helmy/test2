import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">nextjs</Link>
        </li>
        <li>
          <Link href="/news/react-app">React app</Link>
        </li>
      </ul>
    </>
  );
};

export default HomePage;
