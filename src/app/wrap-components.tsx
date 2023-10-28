// import { useState } from "react";
// import { Header } from "@/components";
// import ExpHeaderMob from "@/components/explorer/exp-header-mobile/ExpHeaderMob";
// import ExpHeader from "@/components/explorer/exp-header/ExpHeader";
// import SideNav from "@/components/explorer/side-nav/side-nav";
// import PageWrapper from "@/components/explorer/page-wrapper/page-wrapper";
// import MarginWidthWrapper from "@/components/explorer/margin-witdh-wrapper/margin-width-wrapper";
// export default function WrapComponents({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [expanded, setExpanded] = useState(true);
//   return (
//     <div className="flex">
//       <SideNav expanded={expanded} setExpanded={setExpanded} />

//       <main className="flex-1">
//         <MarginWidthWrapper>
//           <ExpHeader />
//           <ExpHeaderMob />
//           <PageWrapper navExpand={expanded}>{children}</PageWrapper>
//         </MarginWidthWrapper>
//       </main>

//       {/* Aqui o SubMenu com w-60 que irá aparecer na tela em uma transição da direita para a esquerda quando qualquer botão do SideNav for apertado, menos o do Visualizer, que quando apertado o SideMenu irá fechar  */}
//     </div>
//   );
// }
