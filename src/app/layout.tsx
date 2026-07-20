import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

/**
 * Applies the saved theme before first paint so an explicitly-chosen theme
 * never flashes the OS default on load.
 */
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      document.documentElement.setAttribute('data-theme', saved);
    }
  } catch (e) {}
})();
`;

const siteDescription =
  "Full stack developer with 3+ years building React-based production systems, plus an MS in Computer Science and graduate research in NLP and machine learning. Portfolio of web, ML, and agentic development work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://robertolozanojr.com"),
  title: "Roberto Lozano Jr. - Full Stack Developer",
  description: siteDescription,
  keywords: [
    "Roberto Lozano",
    "Full Stack Developer",
    "Software Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Machine Learning",
    "Natural Language Processing",
    "Claude Code",
    "Agentic Workflows",
  ],
  authors: [{ name: "Roberto Lozano Jr." }],
  openGraph: {
    title: "Roberto Lozano Jr. - Full Stack Developer",
    description: siteDescription,
    url: "https://robertolozanojr.com",
    siteName: "Roberto Lozano Jr.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Roberto Lozano Jr. - Full Stack Developer",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skipLink" href="#main">
          Skip to content
        </a>
        <Header />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
