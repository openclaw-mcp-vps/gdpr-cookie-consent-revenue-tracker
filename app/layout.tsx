import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GDPR Cookie Consent Revenue Tracker",
  description: "Track revenue lost to cookie consent rejections. Measure ad revenue differences between users who accept vs reject GDPR cookie consent."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="6270dec7-7984-4e59-a9f4-acdbdc8c013b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
