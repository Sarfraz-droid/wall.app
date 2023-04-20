import Image from "next/image";
import { Inter } from "next/font/google";
import Profile from "@/components/Profile/profile";
import Highlights from "@/components/Highlights";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex bg-black/90 min-h-screen items-center justify-evenly py-5">
			<Profile />
			<Highlights />
		</main>
	);
}
