import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import Head from "next/head";
import { useState } from "react";

const FundManagement = () => {
  const [showBulk, setShowBulk] = useState(false);
  const [showShort, setShowShort] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="main-section">
          <div
            className={`left-side ${
              show
                ? "block lg:relative absolute top-0"
                : "md:hidden lg:block hidden"
            }`}
          >
            <Sidebar setShow={setShow} show={show} />
          </div>

          <div className="right-side pb-10">
            <Topbar
              pageName={"Fund Management"}
              color={"#7845E7"}
              show={show}
              setShow={setShow}
            />
            <section className="main-right lg:ml-[38px] px-10">
              <div className="flex justify-between mt-10">
                <div className="w-[19px] h-[15px]">
                  <input type="checkbox" className="w-full h-full" />
                </div>

                <div className="md:flex items-center btn-group-lmt">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => {
                          showBulk ? setShowBulk(false) : setShowBulk(true);
                        }}
                        type="button"
                        className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md flex"
                      >
                        Bulk Action
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {showBulk && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                          >
                            Deleted
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                          >
                            Hold
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                          >
                            Approve
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  <button className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md">
                    All Ad Accounts
                  </button>

                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        onClick={() => {
                          showShort ? setShowShort(false) : setShowShort(true);
                        }}
                        type="button"
                        className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] flex rounded-md"
                      >
                        SortBy
                        <svg
                          className="-mr-1 ml-2 h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>

                    {showShort && (
                      <div
                        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex={-1}
                      >
                        <div className="py-1" role="none">
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-0"
                          >
                            Sort By Name
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                          >
                            Sort By Ammount
                          </a>
                          <a
                            href="#"
                            className="text-gray-700 block px-4 py-2 text-sm"
                            role="menuitem"
                            tabIndex={-1}
                            id="menu-item-1"
                          >
                            Sort By Status
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                  <button className="text-[14.27px] border font-medium px-[20px] py-[9px] border-[#7A8489] rounded-md">
                    Type & Enter
                  </button>
                </div>
              </div>

              <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg  mt-[26px]">
                <thead className="text-white">
                  <tr className="text-black flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 font-medium">
                    <th className=" text-left text-[#717D82]">
                      <div className="w-[15px] h-[15px]">
                        <input type="checkbox" className="w-full h-full" />
                      </div>
                    </th>
                    <th className="p-3 text-left text-[#717D82]">User Name</th>
                    <th className="p-3 text-left text-[#717D82]">
                      Whatsapp Number
                    </th>
                    <th className="p-3 text-left">Request Amount Amount</th>
                    <th className="p-3 text-left">Load By</th>
                    <th className="p-3 text-left">Payment Proof</th>
                    <th className="p-3 text-left">Status</th>

                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody className="flex-1 sm:flex-none">
                  <TableRow />
                  <TableRow />
                  <TableRow />
                </tbody>
              </table>
            </section>
          </div>
        </section>
      </main>
    </>
  );
};

export default FundManagement;

const TableRow = ({ data }) => {
  const [showReject, setShowReject] = useState(false);
  return (
    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 text-[14px]">
      <td className="text-[#464F53] text-center">
        <div className="w-[15px] h-[15px]">
          <input type="checkbox" className="w-full h-full" />
        </div>
      </td>
      <td className="text-[#464F53]   font-normal   p-3 truncate">Ibrahim</td>
      <td className="text-[#464F53]   font-normal   p-3 ">Nell Akash</td>
      <td className="text-[#464F53]   font-normal   p-3 ">150 $</td>

      <td className="text-[#464F53]   font-normal   p-3 ">Bkash</td>
      <td className="text-[#464F53]   font-normal   p-3 ">
        <button className="text-[14.27px] border-2 font-bold  px-[20px] py-[9px] border-black rounded-md flex items-center text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
          Attach File
        </button>
      </td>
      <td className="text-center">
        <button className="bg-[#C3BE47] font-semibold text-black text-[12px] rounded-lg p-2">
          Pending
        </button>
      </td>
      <td>
        <div className="flex ">
          <div className="relative inline-block text-left ">
            <div>
              <button
                onClick={() => {
                  showReject ? setShowReject(false) : setShowReject(true);
                }}
                className="bg-[#C34747] rounded-tl-md rounded-bl-lg font-semibold text-black text-[12px]  py-2 px-3 flex"
              >
                Reject
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {showReject && (
              <div
                className="absolute z-50 right-0  mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="text-gray-700 block hover:bg-slate-200 px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Proof Not Mached
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-slate-200 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    ProoF Not Found
                  </a>
                  <a
                    href="#"
                    className="text-gray-700 hover:bg-slate-200 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Payment System Error
                  </a>
                </div>
              </div>
            )}
          </div>
          <button className="bg-[#26C536] rounded-tr-md border-l rounded-br-lg font-semibold text-black text-[12px]  p-2">
            Approve
          </button>
        </div>
      </td>
    </tr>
  );
};
