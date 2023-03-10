import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import Head from "next/head";
import { useState } from "react";

const index = () => {
  const [show, setShow] = useState(false);
  const cancelOrder = (param) => {
    const confirmation = window.confirm("Do you want to cancel this order?");
    if (confirmation) {
      alert(param);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Dashboard : Transactions</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="main-section dmSans">
          <div
            className={`left-side ${
              show
                ? "block lg:relative absolute top-0"
                : "md:hidden lg:block hidden"
            }`}
          >
            <Sidebar setShow={setShow} show={show} />
          </div>
          {/* main-right */}
          <div className="right-side pb-7">
            <Topbar pageName={"Manage Order"} show={show} setShow={setShow} />

            <div className="grid md:grid-cols-1 my-0 mx-4">
              <div className="overflow-x-auto">
                <table className="table-auto w-full  mt-10 font-normal">
                  <thead className="text-white">
                    <tr className="text-black flex md:flex-row flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 h-[59.99px]">
                      <th className="p-3 h-full border-2 text-left text-[#717D82] ">
                        <input type="checkbox" className=" w-full" />
                      </th>
                      <th className=" border-2 p-3 sm:p-1 text-left text-[#717D82]">
                        User
                      </th>
                      <th className="p-3  text-center border-2 text-[#717D82]">
                        Order ID
                      </th>
                      <th className="p-3 text-center  border-2 text-[#717D82]">
                        Service/Price
                      </th>
                      <th className="p-3 text-center border-2 text-[#717D82]">
                        Link/QTY
                      </th>
                      <th className="p-3 text-center  border-2 text-[#717D82]">
                        Counter / Api Response
                      </th>
                      <th className="p-3 text-center  border-2 text-[#717D82]">
                        Status
                      </th>
                      <th className="p-3 text-center  border-2 text-[#717D82]">
                        Order at
                      </th>
                      <th className="p-3 text-center  border-2 text-[#717D82]">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow cancelOrder={cancelOrder} />
                    <TableRow cancelOrder={cancelOrder} />
                    <TableRow cancelOrder={cancelOrder} />
                    <TableRow cancelOrder={cancelOrder} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;

const TableRow = ({ data, cancelOrder }) => {
  return (
    <>
      <tr className="flex md:flex-row flex-no wrap sm:table-row mb-2 sm:mb-0">
        <td className="text-[#464F53]  border-2 font-normal  p-3">
          <input type="checkbox" className="p-2 w-full" />
        </td>
        <td className="text-[#464F53]  border-2 font-normal  p-3">user</td>
        <td className="text-[#464F53] text-center  border-2 font-normal  p-3">
          45453
        </td>
        <td className="text-[#464F53]  border-2 font-normal p-3">
          <div className="flex flex-col items-center py-1">
            <h5>Facebook Page Likes (23k)</h5>
            <div className="hr my-3"></div>
            <p className="text-[#465EED]">Price : 0.21 USD</p>
          </div>
        </td>
        <td className="text-[#464F53]  border-2 font-normal p-3">
          <div className="flex flex-col items-center py-1">
            <h5>
              <a className="text-[#465EED]" href="/">
                https://examplewebsite.com
              </a>
            </h5>
            <div className="hr my-3"></div>
            <p>Quantity: 100</p>
          </div>
        </td>
        <td className="text-[#464F53]  border-2 font-normal p-3">
          <div className="flex flex-col items-center py-1">
            <h5 className="text-[#47C363]">Start Counter: 0</h5>
            <h5 className="text-[#C34747]">Remainings: 5</h5>
            <div className="hr my-3"></div>
            <p className="text-[#465EED]">Quantity less then minimal 100</p>
          </div>
        </td>
        <td className="border-2 lg:px-5 text-center">
          <button className="bg-[#3ABAF4] px-6 py-1 rounded-md text-[12px] text-white">
            Processing
          </button>
        </td>
        <td className="border-2 text-[#464F53] text-center  font-normal">
          <p>22 Jun 2023</p>
        </td>
        <td className="border-2 text-center">
          <button className="text-white bg-[#6777EF] p-2 block mx-auto rounded-lg">
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={() => cancelOrder("abc")}
            className="text-white bg-[#FC544B] block mx-auto mt-2 p-2 rounded-lg"
          >
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
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
          </button>
        </td>
      </tr>
    </>
  );
};
