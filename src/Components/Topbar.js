import useActiveUser from "@/Hooks/useActiveUser";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Swal from "sweetalert2";
import Loader from "./Shared/Loader/Loader";

const Topbar = ({ pageName, color, size, show, setShow }) => {
  const [activeUser, isLoading] = useActiveUser();
  const [showSearch, setSearch] = useState(false);
  console.log("activeUser", activeUser);
  const router = useRouter();

  const logOut = (id) => {
    // console.log("id", id);
    const url = `https://boosterbd-server.onrender.com/api/v1/user/register/updateStatus/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify({ status: "inactive" }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("logout status inactivated", data);
        localStorage.removeItem("accessToken");
        if (data.code === 400) {
          Swal.fire({
            title: data?.status,
            text: data?.message,
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Logout Successfully",
            icon: "success",
          });
          router.push("/");
        }
      });

    // navigate("/");
    // window.location.reload();
  };

  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <>
      <div className="top-bar shadow-lg shadow-gray-200 flex justify-between items-center px-10">
        <h1 className={`font-bold text-2xl text-[#7845E7] flex items-center`}>
          <button
            className="mr-3 lg:hidden"
            onClick={() => {
              show ? setShow(false) : setShow(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          {pageName}
        </h1>

        <div className="search-bar">
          <input
            type="text"
            className="w-full bg-[#F7F7F7] rounded-md h-full"
            placeholder="Search..."
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 glass"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <button
          className="glass-only"
          onClick={() => {
            showSearch ? setSearch(false) : setSearch(true);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 glass"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>

        {/* <div class="flex justify-center">
          <div>
            <div class="relative" data-te-dropdown-ref>
              <button
                class="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
                type="button"
                id="dropdownMenuButton1"
                data-te-dropdown-toggle-ref
                aria-expanded="false"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Dropdown button
                <span class="ml-2 w-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    class="h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <ul
                class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                aria-labelledby="dropdownMenuButton1"
                data-te-dropdown-menu-ref
              >
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Another action
                  </a>
                </li>
                <li>
                  <a
                    class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                    href="#"
                    data-te-dropdown-item-ref
                  >
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="dropdown relative">
          <a
            className="dropdown-toggle flex items-center hidden-arrow"
            href="#"
            id="dropdownMenuButton2"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {activeUser?.imageURL ? (
              <img
                src={`https://boosterbd-server.onrender.com/${activeUser?.imageURL}`}
                alt="avatar"
                className="rounded-lg"
                style={{ height: "40px", width: "40px" }}
                loading="lazy"
              />
            ) : (
              <img
                src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                className="rounded-lg"
                style={{ height: "40px", width: "40px" }}
                alt=""
                loading="lazy"
              />
            )}
            <h3 className={`text-[18.67px] ml-2 `}>Admin</h3>
            <button className="ml-2 primary font-bold">
              <Image src="/images/Vector.png" width={18} height={12} alt="" />
            </button>
          </a>
          <ul
            className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 hidden m-0 bg-clip-padding border-none left-auto right-0
  "
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <Link
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href={`/users/profile/${activeUser?.email}`}
              >
                Profile ({activeUser?.name && activeUser?.name?.slice(0, 6)})..
              </Link>
            </li>
            <li>
              <a
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                href="#"
              >
                Another Action
              </a>
            </li>
            {activeUser?.email ? (
              <li
                onClick={() => logOut(activeUser?._id)}
                className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              >
                Log out
              </li>
            ) : (
              <li className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100">
                <Link href={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        {showSearch && (
          <div className="absolute px-5 top-[100px] flex justify-center items-center left-0 right-0 w-full h-96 s-modal">
            <div className="search-bar-2">
              <input
                type="text"
                className="w-full bg-[#F7F7F7] rounded-md h-full"
                placeholder="Search..."
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 glass"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Topbar;
