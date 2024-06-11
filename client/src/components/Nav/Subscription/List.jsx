import React from "react";
import { Link } from "react-router-dom";

const list = [
  {
    id: 1,
    name: "TechCrunch",
    url: "www.com",
    category: "Technology",
  },
  {
    id: 2,
    name: "The Next Web",
    url: "www.com",
    category: "Technology",
  },
  {
    id: 3,
    name: "Finance Times",
    url: "www.com",
    category: "Finance",
  },
  {
    id: 4,
    name: "The Economist",
    url: "www.com",
    category: "Economy",
  },
];
export default function List() {
  return (
    <div className="flex-1">
      {list && list.length > 0
        ? list.map((item, index) => {
            return (
              <div className="flex items-center">
                <Link
                  className={"w-full flex items-center gap-x-2 cursor-pointer "}
                >
                  <span className="w-5 h-5 rounded-full bg-primary"></span>
                  <p className="hover:text-gray-50">{item.name}</p>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
}
