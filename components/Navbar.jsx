import Link from 'next/link';
import Logo from './Logo';

const Navbar = () => {
	return (
		<div className="border-b rounded-sm shadow-md bg-[#fbfbfb] bg-opacity-60 sticky top-0 left-0 w-full z-50 h-16 backdrop-blur-md">
			<div className="flex items-center justify-between mx-auto px-4 py-2 max-w-6xl">
				<div className="flex">
					<Link href="/">
						<a className="flex items-center space-x-4">
							<span>
								<Logo />
							</span>
							<span className="text-[#5f5f5f] font-bold text-2xl">
								TMSL Student
							</span>
						</a>
					</Link>
				</div>
				<div>
					<ul className="flex text-lg font-mediuim items-center space-x-8 text-[#5f5f5f]">
						<li>
							<Link href="/">
								<a>Notes</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>About</a>
							</Link>
						</li>
						<li className="text-[#fbfbfb]">
							<Link href="/">
								<a className=" bg-[#4D44B7] font-medium py-3 px-6 rounded-md md:hover:bg-[#fbfbfb] md:hover:text-[#4D44B7] border-2 border-[#4D44B7] transition-all duration-500 ease-out">
									Contribute
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
