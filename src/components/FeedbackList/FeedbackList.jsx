import React from "react";
import "./FeedbackList.scss";
import starImg from "../../img/star.png";
import avatarPlaceholder from "../../img/avatar_placeholder.png";

const FeedbackList = ({ list = [] }) => {
	/*
    list: [
      {
        img,
        name,
        stars,
        for 
        comment
      }
    ]
   */

	list = list.sort((a, b) => b.stars - a.stars);

	const avatarBaseUrl = `${import.meta.env.VITE_API_URL}/avatars/`;

	return (
		<div className="feedbacks-wrapper">
			{list.map((item, i) => {
				return (
					<div className="feedback" key={i}>
						<div className="feedback__head head">
							<img className="head__avatar" src={avatarPlaceholder} alt="" />
							<h4 className="head__author">{item?.name}</h4>
						</div>
						<div className="feedback__mark mark">
							<div className="mark__stars">
								{Array.from({ length: item?.stars || 0 }).map((_, index) => (
									<img className="star" key={index} src={starImg} alt="star" />
								))}
							</div>
							<p className="mark__for">
								{item?.for ? (
									<>
										для <a>{item.for}</a>
									</>
								) : (
									""
								)}
							</p>
						</div>
						<p className="feedback__comment">{item?.comment}</p>
					</div>
				);
			})}
		</div>
	);
};

export default FeedbackList;
