import Link from "next/link";
import Button from "./Button";

export default function Card({ title, link, description, enabled, github }) {
  return (
    <div className="border p-4 rounded-lg space-y-2 grid grid-rows-subgrid row-span-5 gap-0">
      <h2>{title}</h2>
      <p>
        <span className="font-bold">Link: </span>
        <Link href={link} className="underline text-zinc-500">
          Click to open deployed link
        </Link>
      </p>
      <p>
        <span className="font-bold">Github: </span>
        <Link href={github} className="underline text-zinc-500">
          Click to Github link
        </Link>
      </p>
      <p className="text-zinc-500">{description}</p>
      <div className="flex justify-end">
        <Button enabled={enabled} />
      </div>
    </div>
  );
}
