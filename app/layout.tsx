import { UIProvider } from "@/context/UI/UIProvider";
import StyledComponentsRegistry from "@/lib/registry";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <UIProvider>
        <body>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </UIProvider>
    </html>
  );
}
