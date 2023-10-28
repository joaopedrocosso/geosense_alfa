import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Header } from "@/components";
import ExpHeaderMob from "@/components/explorer/exp-header-mobile/ExpHeaderMob";
import ExpHeader from "@/components/explorer/exp-header/ExpHeader";
import SideNav from "@/components/explorer/side-nav/side-nav";
import PageWrapper from "@/components/explorer/page-wrapper/page-wrapper";
import MarginWidthWrapper from "@/components/explorer/margin-witdh-wrapper/margin-width-wrapper";
import { AppProvider } from "@/store/ContextApi";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GeoSense Explorer",
  description: "Unlock the World. Research Precisely",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white ${inter.className}`}>
        <AppProvider>
          <div className="flex">
            <SideNav />

            <main className="flex-1">
              <MarginWidthWrapper>
                <ExpHeader />
                <ExpHeaderMob />
                <PageWrapper>{children}</PageWrapper>
              </MarginWidthWrapper>
            </main>

            {/* Aqui o SubMenu com w-60 que irá aparecer na tela em uma transição da direita para a esquerda quando qualquer botão do SideNav for apertado, menos o do Visualizer, que quando apertado o SideMenu irá fechar  */}
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
