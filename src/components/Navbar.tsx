import question from "../assets/question.svg";
import search from "../assets/search.svg";
import speaker from "../assets/speaker.svg";
import arrow from "../assets/arrow.svg";

export const Navbar = () => {
  return (
    <div className="sticky top-0 left-0 z-30 mb-[32px]">
      <div className="min-w-[1280px] h-16 px-8 py-3 bg-white border-b border-zinc-300 justify-start items-center gap-4 inline-flex">
        <div className="grow shrink basis-0 h-7 justify-start items-center gap-4 flex">
          <div className="justify-start items-center gap-4 flex">
            <div className="text-zinc-900 text-xl font-medium font-Roboto leading-7">
              Payouts
            </div>
          </div>
          <div className="justify-start items-center gap-1.5 flex">
            <div className="w-3.5 h-3.5 relative">
              <img src={question} alt="question-svg" />
            </div>
            <div className="text-neutral-600 text-xs font-normal font-Roboto leading-none">
              How it works
            </div>
          </div>
        </div>
        <div className="w-[400px] self-stretch px-4 py-[9px] bg-zinc-100 rounded-md justify-start items-center gap-2 flex">
          <div className="w-4 h-4 relative">
            <img src={search} alt="question-svg" />
          </div>
          <input className="text-zinc-500 text-[15px] font-normal font-Roboto leading-snug bg-zinc-100 outline-none"  placeholder="Search features, tutorials, etc."/>
            
        </div>
        <div className="grow shrink basis-0 h-10 justify-end items-start gap-2 flex">
          <div className="justify-start items-start gap-3 flex">
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-0 top-0 absolute flex justify-center items-center bg-neutral-200 rounded-full">
                <img src={speaker} alt="speaker-icon" />
              </div>
            </div>
            <div className="w-10 h-10 relative">
              <div className="w-10 h-10 left-0 top-0 absolute bg-neutral-200 rounded-full">
                <img src={arrow} alt="speaker-icon" />
                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
