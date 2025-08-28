import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Alvian - Transformando Datos en Insights Financieros",
  description: "Ayudamos a instituciones financieras a generar insights poderosos con sus datos mediante dashboards avanzados en Power BI. Transforma tus datos en decisiones estratégicas.",
  keywords: ["analytics", "datos financieros", "power bi", "insights", "instituciones financieras", "business intelligence"],
  authors: [{ name: "Alvian Analytics" }],
  openGraph: {
    title: "Alvian - Transformando Datos en Insights Financieros",
    description: "Ayudamos a instituciones financieras a generar insights poderosos con sus datos mediante dashboards avanzados en Power BI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-alvian-dark`}>
        {children}
      </body>
    </html>
  );
}
