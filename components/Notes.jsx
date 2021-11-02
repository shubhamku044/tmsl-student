import Link from 'next/link';

const Notes = () => {
	return (
		<div className="mt-6 py-14" id="notes">
			<div className="bg-[#F7937C]">
				<div className="max-w-5xl mx-auto px-4">
					<div className="flex justify-center items-center pt-8 pb-6">
						<h1 className="text-[#5f5f5f] font-bold text-4xl md:text-5xl">
							Notes📗
						</h1>
					</div>
					<div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center">
								<img
									src="/writing.png"
									className="w-96 sm:w-80 md:w-96 scale-110 md:scale-125"
								/>
							</div>
						</div>
						<div className="mt-12 md:mr-14 lg:mr-20">
							<table className="table-auto text-[#5f5f5f] border-collapse">
								<thead className="font-semibold text-xl">
									<tr>
										<th>Name</th>
										<th>Link</th>
									</tr>
								</thead>
								<tbody className="font-normal text-lg">
									<tr>
										<td>Matrix and Determinants</td>
										<td>
											<Link href="https://drive.google.com/file/d/1UkPxKUgsrcjcHibwsPVuma0GoQXIYM6u/view?usp=sharing">
												<a className="md:hover:underline text-[#4D44B7]">
													Click here
												</a>
											</Link>
										</td>
									</tr>
									<tr>
										<td>Physics&#40;1st Sem&#41;</td>
										<td>
											<Link href="https://drive.google.com/file/d/1l3FVLteeEJ3L4Dnnfdpg3QrHrDEHegwa/view?usp=sharing">
												<a className="md:hover:underline text-[#4D44B7]">
													Click here
												</a>
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
							{/* <ul>
							<li>
								<Link href="https://wa.link/2sxhcv">
									<a className="md:hover:text-[#4D44B7] transition-all duration-300 ease-in-out">
										Matrix and Determinants
									</a>
								</Link>
							</li>
							<li>
								<Link href="https://wa.link/2sxhcv">
									<a className="md:hover:text-[#4D44B7] transition-all duration-300 ease-in-out">
										Physics&#40;1st Sem&#41;
									</a>
								</Link>
							</li>
						</ul> */}
						</div>
					</div>
					<div className="flex justify-center font-normal text-xl items-center pt-4 pb-4">
						<p>
							<span className="text-[#5f5f5f]">
								Will upload more soon. If you have notes,&nbsp;
							</span>
							<Link href="https://wa.link/2sxhcv">
								<a className="text-[#4D44B7] md:hover:underline transition-all duration-300 ease-in-out">
									send here.
								</a>
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Notes;
