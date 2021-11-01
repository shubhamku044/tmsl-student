import Link from 'next/link';

const HeroSection = () => {
	return (
		<div>
			<div className="mt-4 sm:items-center flex-col-reverse sm:flex-row max-w-5xl mx-auto px-4 flex justify-center sm:justify-between">
				<div className="mt-8 md:mt-2 space-y-3">
					<h1 className="font-bold text-3xl md:text-4xl text-[#5f5f5f] text-left">
						L👀king for college study material?
					</h1>
					<h2 className="font-medium text-xl md:text-2xl text-[#5f5f5f] text-left">
						Get free study material here.
					</h2>
					<div className="flex space-x-6">
						<Link href="#">
							<a className="text-[#fbfbfb] bg-[#4D44B7] font-normal text-lg py-2 px-6 rounded-md border-2 border-[#4D44B7] md:hover:animate-bounce">
								Get Notes
							</a>
						</Link>
						<Link href="#">
							<a className="text-[#4D44B7] bg-[#fbfbfb] font-normal text-lg py-2 px-6 rounded-md md:hover:bg-[#4D44B7] md:hover:text-[#fbfbfb] border-2 border-[#4D44B7] transition-all duration-300 ease-out">
								Contact Me
							</a>
						</Link>
					</div>
				</div>
				<div className="flex-shrink-0">
					<div className="flex items-center justify-center">
						<img src="/girl.png" className="w-96 sm:w-72 md:w-96" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
