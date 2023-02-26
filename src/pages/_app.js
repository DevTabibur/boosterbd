import "@/styles/globals.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import { Toaster } from "react-hot-toast";
dynamic(() => import ("react-phone-number-input/style.css"));
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></Script>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

// ** /currancy , /customer-order , manage-order , transactions , users , users/manage */
