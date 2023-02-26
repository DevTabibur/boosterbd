import Analytic from "@/Components/Shared/Homepage/Analytic";
import Sidebar from "@/Components/Sidebar/Sidebar";
import Topbar from "@/Components/Topbar";
import Head from "next/head";
import React from "react";
import { useState } from "react";
const index = () => {
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
            <Topbar pageName={"Analytic"} show={show} setShow={setShow} />
            <div className="col-span-4 mt-10 lg:px-4">
                <Analytic />
              </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default index;