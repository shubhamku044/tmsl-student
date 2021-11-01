import Link from 'next/link';
import { MenuAlt3Icon, XIcon } from '@heroicons/react/outline';
import Logo from './Logo';
import { useState } from 'react';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNav = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="border-b rounded-sm shadow-md bg-[#fbfbfb] bg-opacity-60 sticky top-0 left-0 w-full z-50 h-16 backdrop-filter backdrop-blur-md ">
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
				<div className="hidden sm:block">
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
								<a className=" bg-[#4D44B7] font-medium py-3 px-6 rounded-md md:hover:bg-[#fbfbfb] md:hover:text-[#4D44B7] border-2 border-[#4D44B7] transition-all duration-300 ease-out">
									Contribute
								</a>
							</Link>
						</li>
					</ul>
				</div>

				{!isOpen ? (
					<MenuAlt3Icon
						className="h-10 w-10 cursor-pointer sm:hidden text-[#5f5f5f]"
						onClick={toggleNav}
					/>
				) : (
					<XIcon
						className="h-10 w-10 cursor-pointer sm:hidden text-[#5f5f5f] "
						onClick={toggleNav}
					/>
				)}
				{/* <XIcon className="h-10 w-10 cursor-pointer sm:hidden text-[#5f5f5f]" /> */}
				{isOpen && (
					<div className="bg-opacity-95 sm:hidden absolute w-11/12 left-1/2 -translate-x-1/2 top-24 py-8 bg-[#fbfbfb] rounded-md shadow-2xl z-40 backdrop-filter backdrop-blur-md">
						<ul className="flex text-lg flex-col items-center space-y-6 ">
							<li className="w-full text-center">
								<Link href="/">
									<a onClick={toggleNav}>Notes</a>
								</Link>
							</li>
							<li className="w-full text-center">
								<Link href="/">
									<a onClick={toggleNav}>About</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a
										className="text-[#fbfbfb] bg-[#4D44B7] font-medium py-3 px-6 rounded-md md:hover:bg-[#fbfbfb] md:hover:text-[#4D44B7] border-2 border-[#4D44B7] transition-all duration-300 ease-out"
										onClick={toggleNav}
									>
										Contribute
									</a>
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
