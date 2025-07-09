import "./globals.css";

export const metadata = {
  title: "Clifford IT - Software, Data & AI Engineering Consultancy",
  description: "Clifford IT specializes in software engineering, data analysis, and AI applications. We focus on intelligent use of cutting-edge technologies to automate processes and improve efficiency.",
  keywords: "software engineering, data engineering, AI consulting, machine learning, process automation, data analysis",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
