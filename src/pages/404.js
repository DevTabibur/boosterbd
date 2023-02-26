import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <section className="page_404">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-1 gap-4 text-center">
        <div className="four_zero_four_bg">
          <h1 className="text-center ">404</h1>
        </div>

        <div className="contant_box_404">
          <h3 className="h2">Look like you're lost</h3>


          <Link href={"/"} className="link_404">
            Go to Home
          </Link>
        </div>
        </div>
      
    </div>
    </section>
  );
};

export default index;
