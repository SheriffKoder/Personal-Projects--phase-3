import React from "react";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  
  
    return (
  
      // this route (model) does not appear in the url as it is wrapped between ()
      //  display the 3d component full screen over the portfolio layout
        <section className="w-[100%] h-[100%] top-0 left-0 absolute ambientBackground">
            {children}
        </section>
    );
  }
  