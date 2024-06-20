import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/utils";

export default function Post({ post, imgUrl, link, feedTitle }) {
  return (
    <div className="text-gray-20 flex flex-col gap-y-1 tablet:gap-y-2">
      <a
        href={link}
        target={"_blank"}
        rel="noopener noreferrer"
        className="flex flex-wrap items-center gap-x-2 "
        onClick={(e) => e.stopPropagation()}
      >
        <img src={imgUrl} alt="logo" className="h-5 w-5 rounded-full" />

        <p className="">{feedTitle}</p>
        {"|"}
        <p className="">{formatDate(post.isoDate)}</p>
      </a>
      <div className="flex flex-col gap-y-4 tablet:gap-x-8 ">
        <a
          href={post.link}
          target={"_blank"}
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 "
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="tablet:order-1 ">{post.title}</h2>
        </a>
      </div>
      <div className="">
        <Link
          to={post.link}
          target={"_blank"}
          rel="noopener noreferrer"
          className="text-gray-50 hover:text-gray-80"
          onClick={(e) => e.stopPropagation()}
        >
          READ MORE
        </Link>
      </div>
    </div>
  );
}
