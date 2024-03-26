import { FC, useState } from "react";

interface DataItem {
  id: number;
  name: string;
}

const data: DataItem[] = [
  {
    id: 1,
    name: "ok 1",
  },
  {
    id: 2,
    name: "oao",
  },
  {
    id: 3,
    name: "ok 3",
  },
  {
    id: 4,
    name: "aa",
  },
];

export const Search: FC = () => {
  const [query, setQuery] = useState("");

  console.log(query);

  return (
    <>
      <div className="w-full shadow-lg rounded-xl">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-xl "
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="py-3 text-left pl-4">
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
