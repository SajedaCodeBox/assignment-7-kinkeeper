import AllCards from "@/components/AllCards";
import Bannar from "@/components/Bannar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
     
     <main className="container mx-auto w-11/12 ">
        <Bannar></Bannar>
        <AllCards></AllCards>
     </main>
     </div>
  );
}
