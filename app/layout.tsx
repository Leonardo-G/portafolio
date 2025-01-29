import { UIProvider } from "@/context/UI/UIProvider";
import './globals.css'
import Navbar from "@/components/navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <UIProvider>
        <body>
          <Navbar />
            {children}
        </body>
      </UIProvider>
    </html>
  );
}
