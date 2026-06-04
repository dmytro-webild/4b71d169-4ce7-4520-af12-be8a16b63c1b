import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Public_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Barber DZ - منصة حجز مواعيد الحلاقين',
  description: 'Barber DZ هي منصة احترافية ومتكاملة تربط الحلاقين بالعملاء في الجزائر. اكتشف أفضل الحلاقين، احجز مواعيدك بسهولة، واستمتع بتجربة حلاقة فاخرة.',
  keywords: ["Barber DZ, حلاقين الجزائر, حجز مواعيد, صالونات حلاقة, منصة حلاقة, Algerian barbers, barbershop booking, حلاقة فاخرة"],
  openGraph: {
    "title": "Barber DZ - منصة حجز مواعيد الحلاقين",
    "description": "Barber DZ هي منصة احترافية ومتكاملة تربط الحلاقين بالعملاء في الجزائر. اكتشف أفضل الحلاقين، احجز مواعيدك بسهولة، واستمتع بتجربة حلاقة فاخرة.",
    "url": "https://www.barberdz.com",
    "siteName": "Barber DZ",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94766.jpg",
        "alt": "Luxurious barbershop interior"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Barber DZ - منصة حجز مواعيد الحلاقين",
    "description": "Barber DZ هي منصة احترافية ومتكاملة تربط الحلاقين بالعملاء في الجزائر. اكتشف أفضل الحلاقين، احجز مواعيدك بسهولة، واستمتع بتجربة حلاقة فاخرة.",
    "images": [
      "http://img.b2bpic.net/free-photo/man-getting-his-beard-shaved-with-razor_107420-94766.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${publicSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
