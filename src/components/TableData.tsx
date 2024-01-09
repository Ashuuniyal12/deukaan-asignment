import search from "../assets/search.svg";
import sort from "../assets/sort.svg";
import download from "../assets/download.svg";

const Dummydata: any = [
  {
    id: "#0001",
    status: "Successfull",
    transactionId: "1316344957475",
    refund: "Yesterday, 3:00 PM",
    amount: "₹1,256",
  },
  {
    id: "#0002",
    status: "Processing",
    transactionId: "131634495756",
    refund: "Today, 08:45 PM",
    amount: "₹1,256",
  },
  {
    id: "#0003",
    status: "Successfull",
    transactionId: "131634495745",
    refund: "12 Jul 2023, 03:00 PM",
    amount: "₹1,256",
  },
  {
    id: "#0004",
    status: "Processing",
    transactionId: "131634495745",
    refund: "Today, 08:45 PM",
    amount: "₹1,256",
  },
  {
    id: "#0005",
    status: "Successfull",
    transactionId: "131634495745",
    refund: "12 Jul 2023, 03:00 PM",
    amount: "₹1,256",
  }, 
  {
    id: "#0006",
    status: "Processing",
    transactionId: "131634495745",
    refund: "Today, 08:45 PM",
    amount: "₹1,256",
  },
];
const TableData = () => {
  return (
    <div>
      <h3 className="text-zinc-900 text-xl font-medium font-Roboto mt-8 ml-8 mb-6 leading-7">
        Transactions | This Month
      </h3>
      <div className="flex flex-row gap-3 ml-8">
        <div className="w-[118px] h-8 px-4 py-1.5 bg-neutral-200 rounded-[40px] justify-start items-center gap-2.5 inline-flex">
          <h2 className="text-zinc-500 text-sm font-medium font-Inter leading-tight">
            Payouts (22)
          </h2>
        </div>

        <div className="w-[111px] h-8 px-4 py-1.5 bg-sky-700 rounded-[40px] justify-start items-center gap-1.5 inline-flex">
          <div className="text-white text-sm font-medium font-Inter leading-tight">
            Refunds (6)
          </div>
        </div>
      </div>

      <div className="flex flex-col mx-8 bg-white p-3 w-[1252px] h-[400px] mt-6">
        <div className="w-full h-10 justify-between items-center inline-flex">
          <div className="h-10 justify-start items-start flex">
            <div className="grow shrink basis-0 h-10 px-4 py-2.5 bg-white rounded border border-zinc-300 justify-start items-center gap-2 flex">
              <div className="w-3.5 h-3.5 relative">
                <img src={search} alt="search" />
              </div>
              <input
                className="grow shrink basis-0 text-neutral-400 text-sm font-normal font-Roboto leading-tight outline-none"
                placeholder=" Order ID or transaction ID"
              />
            </div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="justify-end items-center gap-4 flex">
              <button className="justify-start items-center gap-3 flex">
                <div className="px-3 py-1.5 bg-white rounded border border-zinc-300 justify-start items-center gap-1.5 flex">
                  <div className="text-neutral-600 text-base font-normal font-Inter leading-normal">
                    Sort
                  </div>
                  <div className="w-4 h-4 relative">
                    <img src={sort} alt="download" />
                  </div>
                </div>
              </button>
              <button className="w-9 h-9 relative">
                <div className="w-9 h-9 left-0 top-0 absolute rounded border border-zinc-300" />
                <div className="w-5 h-5 left-[8px] top-[8px] absolute">
                  <img src={download} alt="download" />
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <div className=" flex rounded justify-between bg-[#F2F2F2] px-[10px] py-3 text-[#4D4D4D] text-sm font-medium font-Roboto leading-tight">
            <div className="w-[150px] flex justify-start">Order ID</div>
            <div className="w-[150px] flex justify-start">Status</div>
            <div className="w-[200px] flex justify-start">Transation ID</div>
            <div className="w-[200px] flex justify-start">Refund data</div>
            <div className="w-[150px] flex justify-end">Order Amount</div>
          </div>
          {Dummydata.map((item: any, index: number) => (
            <div
              key={index}
              className="flex  px-[10px] py-3 border-b-[1px] justify-between"
            >
              <div className="w-[150px] flex justify-start text-sky-700 text-sm font-medium font-Poppins leading-tight">
                {item.id}
              </div>
              <div className="items-center w-[150px]  gap-2 flex justify-start">
                  {item.status== 'Successfull'?<div className="w-2.5 h-2.5 bg-green-600 rounded-full" />:<div className="w-2.5 h-2.5 bg-neutral-400  rounded-full" /> }
                {item.status}
              </div>
              <div className="w-[200px] flex justify-start">{item.transactionId}</div>
              <div className="w-[200px] flex justify-start">{item.refund}</div>
              <div className="w-[150px] flex justify-end" >{item.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TableData;
