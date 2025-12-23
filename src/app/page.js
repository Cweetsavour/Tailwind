import Homepage from "@/components/Homepage";
import Navbar from "@/components/Navbar";
import Navbar2 from "@/components/Navbar-2";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
        <Navbar />
        <Navbar2 />
        <div className="relative z-20">
          <Homepage />
        </div>
        <div
          className="absolute inset-0 bg-contain bg-right opacity-40 z-0"
          style={{ backgroundImage: "url('/dans.jpg')" }}
        />

        <div className="absolute inst-0 bg-black z-10" />
    </div>
  );
}
