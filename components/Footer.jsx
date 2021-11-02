import Link from 'next/link';
import { useEffect, useState } from 'react';
import Fork from './Fork';
import Star from './Star';

const Footer = () => {
	const [Data, setData] = useState({});

	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		return fetch('https://api.github.com/repos/shubhamku044/tmsl-student')
			.then((response) => response.json())
			.then((data) => {
				return setData(data);
			});
	};
	return (
		<div>
			<footer className="max-w-5xl mx-auto px-4 pt-6 pb-2">
				<div className="flex flex-col justify-center items-center">
					<div className="text-[#5f5f5f] text-xs sm:text-sm md:text-base">
						<p className="inline font-normal">
							Build with 🖐&#40;Fingers&#41; by&nbsp;
						</p>
						<Link href="https://github.com/shubhamku044">
							<a
								target="_blank"
								className="inline font-medium md:hover:text-[#4D44B7] transition-all duration-400 ease-in-out "
							>
								Noob Coder &#40;Shubham&#41;
							</a>
						</Link>
					</div>
					<div className="text-[#5f5f5f] font-semibold">
						<Link href="https://github.com/shubhamku044/tmsl-student">
							<a
								target="_blank"
								className="inline font-medium md:hover:text-[#4D44B7] transition-all duration-400 ease-in-out "
							>
								<span>
									{Data.forks_count}
									<Fork className="h-4 sm:h-5 md:h-6 inline " />
								</span>
								&nbsp; &nbsp;
								<span>
									{Data.stargazers_count}
									<Star className="h-4 sm:h-5 md:h-6 inline" />
								</span>
							</a>
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
