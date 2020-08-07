import Link from "next/link";

function HomePage() {
  return (
    <div>
      <p>Welcome to Next.js!</p>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </div>
  );
}

export default HomePage;
