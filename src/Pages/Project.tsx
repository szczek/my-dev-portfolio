import Accordion from "../Components/Accordion";

import { FaDesktop, FaGithub } from "react-icons/fa";

type projectPropTypes = {
  name: string;
  thumbnail_url: string;
  description: string;
  accordion_data: { question: string; answer: JSX.Element | string }[];
  github_url: string;
  live_url: string;
};

export default function ProjectPage({
  name,
  thumbnail_url,
  description,
  accordion_data,
  github_url,
  live_url,
}: projectPropTypes) {
  return (
    <div className="project-main section scale-1/2 relative pt-12 px-2 md:px-32">
      <div className="hidden lg:block">
        <h3 className="text-center text-3xl xxs:text-4xl sm:text-4xl">
          {name}
        </h3>
        <p className="px-4 py-5 text-center xs:text-xl sm:text-2xl md:text-xl lg:p-2">
          {description}
        </p>
      </div>
      <div className="section project lg:flex">
        <div className="hidden w-1/2 items-center lg:flex">
          <img className="relative mx-auto w-3/4 md:my-2" src={thumbnail_url} />
        </div>
        <div className="lg:w-1/2">
          <h3 className="pb-8 text-center text-3xl xxs:text-4xl sm:mb-2 sm:text-5xl lg:hidden lg:pb-2">
            {name}
          </h3>
          <img className="px-8 md:my-2 lg:hidden" src={thumbnail_url} />
          <p className=" px-4 py-5 text-center xs:text-xl sm:text-2xl md:text-3xl lg:hidden lg:p-2">
            {description}
          </p>
          <div className="flex justify-center px-4 pb-5 md:pt-12 lg:p-4">
            <Accordion data={accordion_data} />
          </div>
          <div className="my-[12.5%] flex flex-col items-center lg:my-4">
            <div className="project-links flex justify-center -mt-2 xs:mt-0 xxs:pt-8 lg:pt-0">
              <a className="m-4" href={github_url}>
                {" "}
                <FaGithub />{" "}
              </a>
              <a className="m-4" href={live_url}>
                {" "}
                <FaDesktop />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
