import React from "react";
import { cover, robot } from "../../assets/images";
import { FacebookIcon, TwitterIcon } from "../../assets/icons";

import tailwindConfig from "../../../tailwind.config";
import { Link } from "react-router-dom";

export default function Article({ article }) {
  return (
    <Link>
      <div className="bg-transparent text-secondary flex flex-col  py-8 gap-y-4">
        <div className="flex items-center gap-x-2">
          <img
            src={article.subscription.imgSrc}
            alt="logo"
            className="h-5 w-5 rounded-full"
          />
          <p className="">{article.subscription.name}</p>
          {"|"}
          <p className="">{article.createdAt.toDateString()}</p>
        </div>
        <div className="flex flex-col gap-y-4 tablet:gap-x-8 ">
          <img src={cover} alt="" className="w-full " />
          <h2 className="tablet:order-1">{article.title}</h2>
        </div>

        <div className="">
          <p className="">5 min</p>
          <div className="flex gap-x-1">
            <FacebookIcon
              fill={tailwindConfig.theme.colors.secondary}
              className={"w-5 h-5"}
            />
            <TwitterIcon
              fill={tailwindConfig.theme.colors.secondary}
              className={"w-5 h-5"}
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
