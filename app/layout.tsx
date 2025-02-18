import { UIProvider } from "@/context/UI/UIProvider";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "next-themes";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <UIProvider>
        <body>
          <ThemeProvider themes={['light', 'dark']} defaultTheme="light" enableSystem attribute={"class"}>
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </UIProvider>
    </html>
  );
}
