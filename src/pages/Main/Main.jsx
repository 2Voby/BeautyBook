import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import "./Main.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import pageRoutes from "../../consts/pageRoutes";
import { setUser } from "../../store/slice";
import LinkButton from "../../ui/LinkButton/LinkButton";
import locationIcon from "../../img/navigation/location.svg";
import shareIcon from "../../img/share-icon.svg";
import FeedbackList from "../../components/FeedbackList/FeedbackList";
import ServicesList from "../../components/ServicesList/ServicesList";

const Main = () => {
	const [selectedScreen, setSelectedScreen] = useState(1);
	const [feedbackList, setFeedbackList] = useState([]);
	const [servicesList, setServicesList] = useState([]);

	useEffect(() => {
		if (selectedScreen === 5) {
			setFeedbackList([
				{
					name: "Olga Paschenko",
					comment: "We want our pupils to become informed, articulate and empowered citizens.",
					stars: 5,
					for: "Оксана Герасимчук",
					img: null,
				},
				{
					name: "Olga Paschenko",
					comment: "We want our pupils to become informed, articulate and empowered citizens.",
					stars: 5,
					for: " Оксана Герасимчук",
					img: null,
				},
				{
					name: "Olga Paschenko",
					comment: "We want our pupils to become informed, articulate and empowered citizens.",
					stars: 4,
					for: " Оксана Герасимчук",
					img: null,
				},
				{
					name: "Olga Paschenko",
					comment: "We want our pupils to become informed, articulate and empowered citizens.",
					stars: 4,
					for: "Оксана Герасимчук",
					img: null,
				},
			]);
		} else if (selectedScreen === 4) {
			setServicesList([
				{
					categoryName: "Догляд за нігтями",
					services: [
						{ service: "Дизайн нігтів", price: 360, duration: 90 },
						{ service: "Нарощування гелем з покриттям в один тон", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
					],
				},
				{
					categoryName: "Перманентний макіяж",
					services: [
						{ service: "Дизайн нігтів", price: 360, duration: 90 },
						{ service: "Дизайн нігтів", price: 360, duration: 90 },
					],
				},
				{
					categoryName: "Догляд за ногами",
					services: [
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
						{ service: "Дизайн нігтів", price: 360 },
					],
				},
			]);
		}
	}, [selectedScreen]);

	const renderScreen = () => {
		switch (selectedScreen) {
			case 1:
				return <div>Інфо</div>;
			case 2:
				return <div>Локація</div>;
			case 3:
				return <div>Майстри</div>;
			case 4:
				return <ServicesList list={servicesList} />;
			case 5:
				return <FeedbackList list={feedbackList} />;
			default:
				return <div>Content not found!</div>;
		}
	};

	return (
		<>
			<div className="page">
				<div className="page__head page-head">
					<h1 className="page-head__title">Karamel Club</h1>
					<h4 className="page-head__address">Вул. Вітрука 9б, 4 поверх</h4>
					<p className="page-head__description">“Створи враження з ідеальним манікюром та макіяжем”</p>
					<LinkButton className="page-head__share">
						<span>Поділитися</span>
						<img src={shareIcon} alt="" />
					</LinkButton>
				</div>
				<div className="page__navigation navigation">
					{[
						{ id: 1, text: "Інфо" },
						{ id: 2, text: "Локація" },
						{ id: 3, text: "Майстри" },
						{ id: 4, text: "Послуги" },
						{ id: 5, text: "Відгуки" },
					].map((navItem, index) => (
						<button
							key={index}
							className={`navigation__item ${selectedScreen === navItem.id ? "active" : ""}`}
							onClick={() => setSelectedScreen(navItem.id)}>
							<span>{navItem.text}</span>
						</button>
					))}
				</div>
				<div className="page__main main-block">{renderScreen()}</div>
			</div>
		</>
	);
};

export default Main;
