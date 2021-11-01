import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import Navbar from '../components/Navbar';
import Notes from '../components/Notes';

export default function Home() {
	return (
		<div className="relative font-Roboto bg-[#fbfbfb]">
			<Head>
				<title>TMSL student</title>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/icons/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/icons/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/icons/favicon-16x16.png"
				/>
				<link rel="manifest" href="/icons/site.webmanifest" />
				<link
					rel="mask-icon"
					href="/icons/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>
			<Navbar />
			<HeroSection />
			<Notes />
			<ul className="text-4xl max-w-6xl mx-auto px-2">
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
				<li>Shubham Sharma</li>
			</ul>
		</div>
	);
}
