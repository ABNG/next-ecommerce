import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/lib/theme-provider";
import { ToastContainer } from "@/lib/toast_container";
import { SessionProvider } from "@/lib/session_provider";
import { getServerSession } from "next-auth";
import { ReactQueryProvider } from "@/lib/react_query_provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      {/* <head>
        <script src="http://localhost:8097"></script>
      </head> */}
      {/* `${inter.className} overscroll-y-none` */}
      <body className={`${inter.className} w-full min-h-screen`}>
        <ReactQueryProvider>
          <SessionProvider session={session}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Navbar />
              <div className="xl:mx-28">{children}</div>
            </ThemeProvider>
          </SessionProvider>
        </ReactQueryProvider>
        <ToastContainer />
      </body>
    </html>
  );
}
