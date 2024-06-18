import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Feed() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location:", location);
  const [searchParams, setSearchParams] = useSearchParams();
  console.log("searchParams:", searchParams);

  // setSearchParams(`?${new URLSearchParams({ paramName: "whatever" })}`);
  console.log("new searchParams:", searchParams);
  const paramName = location.pathname.split("%");
  setSearchParams(`${paramName.join("_")}`);

  useEffect(() => {
    navigate(`${searchParams}`);
  }, []);
  return (
    <div className="flex-1 flex flex-col bg-gray-5 w-full h-screen px-4 tablet:px-8 pt-[calc(theme(spacing.12)+72px)] tablet:pt-[48px]">
      <div
        className="h-full scrollBar overflow-y-scroll grid desktop:grid-cols-2 desktop:gap-x-8 "
        style={{ scrollbarWidth: "none" }}
      >
        <h1 className="">FEED PAGE</h1>
        {/* {articles.map((article) => {
          return <Article article={article} key={article.id} />;
        })} */}
      </div>
    </div>
  );
}
