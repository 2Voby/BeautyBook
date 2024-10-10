import React from "react";
import "./ServicesList.scss";

const ServicesList = ({ list = [] }) => {
	// list = [{ categoryName: "Догляд за нігтями", services: [{ service: "Дизайн нігтів", price: 360, duration: 90 }] }];

	return (
		<div className="services-wrapper">
			{list.map((category, i) => {
				return (
					<div key={i} className="service-category category">
						<div className="category__head head">
							<h3>{category.categoryName}</h3>
						</div>
						<div className="category__services services">
							{category.services.map((service, i) => {
								return (
									<div key={i} className="services__item item">
										<p className="item__name">{service.service}</p>
										<div className="item__price-and-duration">
											<p className="item__price">{service.price}</p>
											<p className="item__duration">{service.duration ? "/ " + service.duration + "хв." : ""}</p>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ServicesList;
