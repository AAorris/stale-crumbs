import Link from "next/link";

export function Page(): JSX.Element {
  return (
    <div className="flex flex-col gap-4">
      <p className="border rounded-md p-4 w-full">
        Parallel routes slot into the layout. Parallel routes can have a{" "}
        <code>default</code>, but the default is not used on soft transitions,
        and this can create the feeling that the layout has become stale in some
        cases.
      </p>
      <ul className="border rounded-md p-4 w-full list-inside list-disc">
        <p>Routes</p>
        <li>
          <Link className="underline" href="/parallel/matched">
            matched
          </Link>
        </li>
        <li>
          <Link className="underline" href="/parallel/unmatched">
            unmatched
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Page;
