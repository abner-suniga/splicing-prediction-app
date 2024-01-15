import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-32 py-4 mb-8">
      <h1 className="text-xl font-medium">
        <a href="/">AS Splicing</a>
      </h1>
      <UserButton afterSignOutUrl="/" showName />
    </header>
  );
}
