import "./globals.css"
import localFont from "next/font/local";

const gilroy = localFont({
  src: [
    {
      path: "../../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/fonts/gilroy/Gilroy-Heavy.ttf",
      weight: "800",
    },
  ],
  variable: "--font-gilroy",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={gilroy.className}>{children}</body>
    </html>
  );
}
