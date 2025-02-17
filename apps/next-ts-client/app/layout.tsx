import React from "react";

import "@/shared/styles/globals.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head></head>
      <body className="p-0 m-0">
        <main className="w-full">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
