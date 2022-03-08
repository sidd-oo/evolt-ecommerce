import React from "react";
import "./MobileFilter.css";

export const MobileFilter = ({ setShowMobileFilter }) => {
	return (
		<div className="mobile-filter-wrapper">
			<div className="mobile-filter card-shadow p-4">
				<div className="flex-row content-space-between items-center pb-1 mb-2 border-bottom">
					<div className="text-base font-semibold">Filters</div>
					<button
						onClick={() => setShowMobileFilter((prev) => !prev)}
						className="mobile-filter-close"
					>
						<i className="fa fa-times-circle-o"></i>
					</button>
				</div>
				<div className="flex-row content-space-between">
					<ul>
						<li className="filter-header mb-2 flex-row content-space-between">
							<div className="text-base font-semibold">Brand</div>
						</li>
						<li className="filter-item mb-1">
							<label>
								<input className="mr-2" type="checkbox" name="bose" />
								Bose
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-fuji">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-fuji"
								/>
								Boat
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-nikon">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-nikon"
								/>
								Marshall
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-olympus">
								<input
									className="mr-2"
									type="checkbox"
									name="price"
									id="filter-olympus"
								/>
								Sony
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-sony">
								<input
									className="mr-2"
									type="checkbox"
									name="price"
									id="filter-sony"
								/>
								JBL
							</label>
						</li>
					</ul>

					<ul>
						<li className="filter-header mb-2">
							<div className="text-base font-semibold">Type</div>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-resolution-1">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-1"
								/>
								Wired
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-resolution-2">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-2"
								/>
								Wireless
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-resolution-3">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-resolution-3"
								/>
								Noise Cancelling
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-resolution-4">
								<input
									className="mr-2"
									type="checkbox"
									name="price"
									id="filter-resolution-4"
								/>
								Tangle Free Cord
							</label>
						</li>
					</ul>

					<ul>
						<li className="filter-header mb-2">
							<div className="text-base font-semibold">Rating</div>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-rating-5">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-5"
								/>
								5 star
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-rating-4">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-4"
								/>
								4 star
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-rating-3">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-3"
								/>
								3 star
							</label>
						</li>
						<li className="filter-item mb-1">
							<label htmlFor="filter-rating-2">
								<input
									className="mr-2"
									type="checkbox"
									name="brand"
									id="filter-rating-2"
								/>
								2 star
							</label>
						</li>
					</ul>
				</div>

				<button className="mobile-clear-btn btn btn-solid mt-2">
					Clear all
				</button>
			</div>
		</div>
	);
};