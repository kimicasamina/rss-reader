import React from "react";
import { cover, robot } from "../../assets/images";
import { FacebookIcon, TwitterIcon } from "../../assets/icons";

import tailwindConfig from "../../../tailwind.config";
import { Link, NavLink } from "react-router-dom";

export default function Article({ article, imgUrl, link, feedTitle }) {
  console.log("link", link);
  return (
    <Link>
      <div className="bg-transparent text-secondary flex flex-col  py-8 gap-y-4">
        {/* <div >
        </div> */}
        <a
          href={link}
          target={"_blank"}
          rel="noopener noreferrer"
          className="flex items-center gap-x-2 hover:bg-primary"
          onClick={(e) => e.stopPropagation()}
        >
          <img src={imgUrl} alt="logo" className="h-5 w-5 rounded-full" />

          <p className="">{feedTitle}</p>
          {"|"}
          <p className="">{article.pubDate}</p>
        </a>
        <div className="flex flex-col gap-y-4 tablet:gap-x-8 ">
          {/* <img src={cover} alt="" className="w-full " /> */}
          <h2 className="tablet:order-1 text-3xl ">{article.title}</h2>
          {/* <p className="">{article.content}</p> */}
        </div>

        <div className="">
          <Link
            to={article.link}
            target={"_blank"}
            rel="noopener noreferrer"
            className="hover:text-primary"
            onClick={(e) => e.stopPropagation()}
          >
            READ MORE
          </Link>
          {/* <a
            href={"www.google.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-x-2"
            onClick={(e) => {
              console.log(article.link);
              e.preventDefault();
              
            }}
          >
            READ MORE
          </a> */}

          {/* <p className="">5 min</p>
          <div className="flex gap-x-1">
            <FacebookIcon
              fill={tailwindConfig.theme.colors.secondary}
              className={"w-5 h-5"}
            />
            <TwitterIcon
              fill={tailwindConfig.theme.colors.secondary}
              className={"w-5 h-5"}
            />
          </div> */}
        </div>
      </div>
    </Link>
  );
}
