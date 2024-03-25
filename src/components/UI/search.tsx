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
      <div className="w-1/2 m-auto text-center border-black border-spacing-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border-2 border-silver focus:outline-none focus:border-2 focus:border-black p-[5px] rounded-md "
          onChange={(e) => setQuery(e.target.value)}
        />

        <ul className="mt-[20px] text-left">
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
