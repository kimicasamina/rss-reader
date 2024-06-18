import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Article from "../../components/Article/Article";
import { useSelector } from "react-redux";

export default function Feed() {
  const location = useLocation();
  // const id = location.state.id;
  const { id } = useParams();
  const subs = useSelector((state) => state.subscription);
  const sub = subs.find((sub) => sub._id === id);
  console.log("subs", sub);
  console.log("id", id);

  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen px-4 tablet:px-8 pt-[calc(theme(spacing.12)+72px)] tablet:pt-[48px]">
      <div
        className="h-full scrollBar overflow-y-scroll grid desktop:grid-cols-1 desktop:gap-y-8 "
        style={{ scrollbarWidth: "none" }}
      >
        {sub
          ? sub?.blogs.map((blog, index) => {
              return (
                <Article
                  article={blog}
                  imgUrl={sub?.image_url}
                  link={sub?.link}
                  feedTitle={sub?.title}
                  key={index}
                />
              );
            })
          : null}
        {/* {blogs.map((blog) => {
          return <Article article={blog} key={blog.id} />;
        })} */}
      </div>
    </div>
  );
}
