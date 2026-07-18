import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { portfolio } from "@/data/portfolio";
import { KEYWORDS, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s — ${portfolio.name}`,
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: portfolio.name, url: SITE_URL }],
  creator: portfolio.name,
  applicationName: `${portfolio.name} Portfolio`,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: `${portfolio.name} Portfolio`,
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    locale: "en_US",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name} — ${portfolio.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#05050a" },
    { media: "(prefers-color-scheme: light)", color: "#f8f8fc" },
  ],
  colorScheme: "dark light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  jobTitle: portfolio.title,
  url: SITE_URL,
  email: `mailto:${portfolio.contact.email}`,
  telephone: portfolio.contact.phone,
  sameAs: [portfolio.contact.linkedin, portfolio.contact.github],
  worksFor: {
    "@type": "Organization",
    name: portfolio.experience[0]?.company,
    url: portfolio.experience[0]?.companyWebsite,
  },
  alumniOf: portfolio.education
    .filter((e) => e.degree.toLowerCase().includes("bachelor"))
    .map((e) => ({
      "@type": "CollegeOrUniversity",
      name: e.institution,
    })),
  knowsAbout: Object.values(portfolio.skills).flat(),
  description: SITE_DESCRIPTION,
};

const themeInitScript = `
try {
  var stored = localStorage.getItem('theme');
  var theme = stored === 'light' || stored === 'dark'
    ? stored
    : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-pt-20`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-bg text-text"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
