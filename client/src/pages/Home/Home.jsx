import React, { useEffect } from "react";

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

import Article from "../../components/Article/Article";
import PageHeader from "../../components/Header/PageHeader";
import useFetch from "../../hooks/useFetch";
import useFetchRss from "../../hooks/useFetchRss";
import { useState } from "react";
import axios from "axios";
export default function Home() {
  // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";
  // console.log("HOME");

  // useEffect(() => {
  //   async function fetchRss() {
  //     const rss_url =
  //       "https://api.rss2json.com/v1/api.json?rss_url=" +
  //       "https://news.ycombinator.com/rss";
  //     const { data } = await axios.get(CORS_PROXY + rss_url, {
  //       withCredentials: false,
  //       baseURL: "",
  //     });
  //     console.log(data);
  //   }

  //   fetchRss();
  // }, []);

  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen pt-14 px-4 tablet:mt-0 tablet:px-8 tablet:pt-0 relative">
      <PageHeader />

      <div
        className="h-full scrollBar overflow-y-scroll grid desktop:grid-cols-2 desktop:gap-x-8 pt-14"
        style={{ scrollbarWidth: "none" }}
      >
        {articles.map((article) => {
          return <Article article={article} key={article.id} />;
        })}
      </div>
    </div>
  );
  ``;
}
