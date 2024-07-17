import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-row items-center justify-between p-10">
      <h1>This is the Header</h1>
      <Link href="/">Home</Link>
      <Link href="/posts">Posts</Link>
    </div>
  );
}
