import React from "react";

import { AddIcon } from "../../assets/icons";
import { Discount, people03, robot, Send } from "../../assets/images";

const articles = [
  {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.",
    body: `Qui error ut aut. Et at non quisquam quae cum itaque. Ipsum rerum sed cumque ea possimus. Ut eum commodi rerum eos voluptatum impedit quae quisquam voluptas. Laborum veritatis aut consequatur saepe esse ut delectus. Corporis eos aliquam hic quia.

    Reiciendis dolorum perspiciatis nisi magnam corrupti sequi. Ab fugit totam autem et. Occaecati voluptatum omnis voluptatum praesentium ipsum.
    
    Fuga exercitationem itaque voluptas qui reiciendis quisquam sunt exercitationem. Expedita iure molestiae rem voluptatem exercitationem amet. Atque impedit natus amet magni in.`,
    category: "Tech",
    subscription: {
      id: crypto.randomUUID(),
      name: "TechCrunch",
      imgSrc: Discount,
      createdAt: new Date(),
      category: "Tech",
    },
  },
  {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    title:
      "Hic a consequatur commodi et. Excepturi qui repellat voluptatem vel et voluptas.",
    body: `Qui error ut aut. Et at non quisquam quae cum itaque. Ipsum rerum sed cumque ea possimus. Ut eum commodi rerum eos voluptatum impedit quae quisquam voluptas. Laborum veritatis aut consequatur saepe esse ut delectus. Corporis eos aliquam hic quia.

    Reiciendis dolorum perspiciatis nisi magnam corrupti sequi. Ab fugit totam autem et. Occaecati voluptatum omnis voluptatum praesentium ipsum.
    
    Fuga exercitationem itaque voluptas qui reiciendis quisquam sunt exercitationem. Expedita iure molestiae rem voluptatem exercitationem amet. Atque impedit natus amet magni in.`,
    category: "Tech",
    subscription: {
      id: crypto.randomUUID(),
      name: "TechCrunch",
      imgSrc: people03,
      createdAt: new Date(),
      category: "Tech",
    },
  },
  {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas.",
    body: `Qui error ut aut. Et at non quisquam quae cum itaque. Ipsum rerum sed cumque ea possimus. Ut eum commodi rerum eos voluptatum impedit quae quisquam voluptas. Laborum veritatis aut consequatur saepe esse ut delectus. Corporis eos aliquam hic quia.

    Reiciendis dolorum perspiciatis nisi magnam corrupti sequi. Ab fugit totam autem et. Occaecati voluptatum omnis voluptatum praesentium ipsum.
    
    Fuga exercitationem itaque voluptas qui reiciendis quisquam sunt exercitationem. Expedita iure molestiae rem voluptatem exercitationem amet. Atque impedit natus amet magni in.`,

    category: "Economy",
    subscription: {
      id: crypto.randomUUID(),
      name: "The Economist",
      imgSrc: robot,
      createdAt: new Date(),
      category: "Tech",
    },
  },
  {
    id: crypto.randomUUID(),
    createdAt: new Date(),
    title:
      "Hic a consequatur commodi et. Excepturi qui repellat voluptatem vel et voluptas.",
    body: `Qui error ut aut. Et at non quisquam quae cum itaque. Ipsum rerum sed cumque ea possimus. Ut eum commodi rerum eos voluptatum impedit quae quisquam voluptas. Laborum veritatis aut consequatur saepe esse ut delectus. Corporis eos aliquam hic quia.

    Reiciendis dolorum perspiciatis nisi magnam corrupti sequi. Ab fugit totam autem et. Occaecati voluptatum omnis voluptatum praesentium ipsum.
    
    Fuga exercitationem itaque voluptas qui reiciendis quisquam sunt exercitationem. Expedita iure molestiae rem voluptatem exercitationem amet. Atque impedit natus amet magni in.`,
    imgSrc: Send,
    category: "Tech",
    subscription: {
      id: crypto.randomUUID(),
      name: "5 minutes physics",
      imgSrc: Send,
      createdAt: new Date(),
      category: "Science",
    },
  },
];

import { RestartIcon } from "../../assets/icons";
import Article from "../../components/Article/Article";
import useFetch from "../../hooks/useFetch";
export default function Home() {
  const [data, isLoading, error] = useFetch(`https://news.ycombinator.com/rss`);
  console.log(data);
  console.log("articles", articles);
  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen pt-14 px-4 tablet:mt-0 tablet:px-8 tablet:pt-0 ">
      <div className="flex w-full justify-between items-center my-4">
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-x-2">
            <h1 className="text-black ">Home</h1>
            <RestartIcon className={``} />
          </div>
          <p className="text-sm w-full opacity-70">Latest from your feeds.</p>
        </div>
        <button className="btn text-base bg-gray-80 text-tertiary flex items-center justify-evenly px-2 hover:bg-gray-50 hover:text-gray-80 shadow-md ">
          <AddIcon className={`h-5`} />
          New Feed
        </button>
      </div>

      <div
        className="h-full scrollBar overflow-y-scroll grid desktop:grid-cols-2 desktop:gap-x-8"
        style={{ scrollbarWidth: "none" }}
      >
        {articles.map((article) => {
          return <Article article={article} key={article.id} />;
        })}
      </div>
    </div>
  );
}
