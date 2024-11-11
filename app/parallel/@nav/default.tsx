import Link from "next/link";

export default function Default() {
  return (
    <ul className="flex flex-row gap-2 items-center">
      <span className="text-xl opacity-50">/</span>
      <li>
        <Link href="/parallel">parallel routes</Link>
      </li>
    </ul>
  );
}
