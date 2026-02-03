import type { Metadata } from "next"
import "./globals.css"
import localFont from "next/font/local"

export const metadata: Metadata = {
  title: "Avion",
  description: "Avion - wonderful brand",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
}

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
})

const clashDisplay = localFont({
  src: [
    {
      path: "../fonts/clash-display/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/clash-display/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-clashDisplay",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${satoshi.variable}
          ${clashDisplay.variable}
           antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
