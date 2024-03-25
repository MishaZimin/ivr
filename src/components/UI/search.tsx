import { FC, useState } from "react";

interface DataItem {
  id: number;
  name: string;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "ok",
  },
  {
    id: 2,
    name: "aaa",
  },
  {
    id: 3,
    name: "abc",
  },
  {
    id: 4,
    name: "cb",
  },
];

export const Search: FC = () => {
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <>
      <div className="w-full text-center border-black border-spacing-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-1/2 border-2 border-black p-[5px] rounded-md"
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="mt-[20px]">
          {data
            .filter((item) => item.name.includes(query))
            .map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
        </ul>
      </div>
    </>
  );
};
