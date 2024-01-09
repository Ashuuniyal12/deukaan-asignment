import { Navbar } from "./Navbar";
import question from "../assets/questionwhite.svg";
import question2 from "../assets/question.svg";
import TableData from "./TableData";

const MainBody = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-between mx-8 items-start mb-6">
        <div className="w-full h-9 justify-between items-center inline-flex">
          <div className="text-zinc-900 text-xl font-medium font-Roboto leading-7">
            Overview
          </div>
          <div className="justify-end items-center gap-4 flex">
            <div className="w-[137px] h-9 relative">
              <div className="w-[137px] h-9 left-0 top-0 absolute bg-white rounded border border-zinc-300" />
              <select className="left-[14px] top-[6px] absolute text-neutral-600 text-base font-normal font-Roboto leading-normal">
               <option  value="" >This Week</option>
               <option value="" selected>This Month</option>
               <option value="" >This Year</option>
              
              </select>
              <div className="w-4 h-4 left-[107px] top-[10px] absolute" />
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-row justify-between gap-5 mx-8">
        <div className="w-[370.67px] h-[154px]  bg-[#146EB4] rounded-lg flex-col justify-start items-start gap-4 inline-flex">
          <div className="flex gap-2 items-center justify-center m-5 text-white text-base font-normal font-Inter leading-normal">
            Next Payout
            <div className="w-3.5 h-3.5 relative">
              <img src={question} alt="question-svg" className="text-white" />
            </div>
          </div>

          <div className=" mx-5 flex w-[90%] justify-between items-center">
            <h1 className="text-white text-[32px] font-medium font-Roboto leading-[38px]">
              ₹2,312.23
            </h1>
            <div className="justify-start items-center flex">
              <div className="justify-start items-start gap-2 flex">
                <div className="text-white text-base font-medium font-Roboto underline leading-normal">
                  23 orders
                </div>
              </div>
              <div className="w-6 h-6 relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.9594 5.29289C9.34992 4.90237 9.98309 4.90237 10.3736 5.29289L16.3736 11.2929C16.5611 11.4804 16.6665 11.7348 16.6665 12C16.6665 12.2652 16.5611 12.5196 16.3736 12.7071L10.3736 18.7071C9.98309 19.0976 9.34992 19.0976 8.9594 18.7071C8.56887 18.3166 8.56887 17.6834 8.9594 17.2929L14.2523 12L8.9594 6.70711C8.56887 6.31658 8.56887 5.68342 8.9594 5.29289Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-[370.67px] h-9 px-6 py-2 bg-[#0E4F82] rounded-lg justify-between items-start inline-flex">
            <div className="text-zinc-100 text-sm font-normal font-Roboto leading-tight">
              Next payout date:
            </div>
            <div className="text-zinc-100 text-sm font-medium font-Roboto leading-tight">
              Today, 04:00PM
            </div>
          </div>
        </div>

        <div className="w-[370.67px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-600 text-base font-normal font-Inter leading-normal">
                Amount Pending
              </div>
              <div className="w-4 h-4 relative">
                <img src={question2} alt="question-svg" className="text-white" />
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="text-zinc-900 text-[32px] font-medium font-Roboto leading-[38px]">
                ₹92,312.20
              </div>
              <div className="justify-start items-center flex">
                <div className="justify-start items-start gap-2 flex">
                  <div className="text-[#146EB4] text-base font-medium font-Roboto underline leading-normal">
                    13 orders
                  </div>
                </div>
                <div className="w-6 h-6 relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8.6259 5.29289C9.01643 4.90237 9.64959 4.90237 10.0401 5.29289L16.0401 11.2929C16.2277 11.4804 16.333 11.7348 16.333 12C16.333 12.2652 16.2277 12.5196 16.0401 12.7071L10.0401 18.7071C9.64959 19.0976 9.01643 19.0976 8.6259 18.7071C8.23538 18.3166 8.23538 17.6834 8.6259 17.2929L13.9188 12L8.6259 6.70711C8.23538 6.31658 8.23538 5.68342 8.6259 5.29289Z"
                      fill="#146EB4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[370.67px] h-[118px] p-5 bg-white rounded-lg shadow flex-col justify-start items-start gap-4 inline-flex">
          <div className="self-stretch h-[78px] flex-col justify-start items-start gap-4 flex">
            <div className="justify-start items-center gap-2 inline-flex">
              <div className="text-neutral-600 text-base font-normal font-Inter leading-normal">
                Amount Processed
              </div>
              <div className="w-4 h-4 relative">
                <img src={question2} alt="question-svg" className="text-white" />
              </div>
            </div>
            <div className="self-stretch justify-between items-center inline-flex">
              <div className="grow shrink basis-0 h-[38px] justify-between items-center flex">
                <div className="text-zinc-900 text-[32px] font-medium font-Roboto leading-[38px]">
                  ₹23,92,312.19
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TableData/>
    </div>
  );
};

export default MainBody;
