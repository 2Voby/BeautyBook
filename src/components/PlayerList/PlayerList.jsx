import React from "react";
import styles from "./PlayerList.module.scss";
import { Link } from "react-router-dom";
import balanceIcon from "../../img/coin.png";
import classNames from "classnames";
import goldCap from "../../img/rating/goldCap.svg";
import silverCap from "../../img/rating/silverCap.svg";
import bronseCap from "../../img/rating/bronseCap.svg";
import formNumber from "../../helpers/formNumber";
import avatarPlaceholder from "../../img/avatar_placeholder.webp";

const PlayerList = ({ list = [], isFriends = false }) => {
	/*
    list: [
      {
        index,
        name,
        balance
      }
    ]
   */
	const leaders = [
		{ place: 1, src: goldCap },
		{ place: 2, src: silverCap },
		{ place: 3, src: bronseCap },
	];

	list = list.sort((a, b) => b.balance - a.balance);

	const avatarBaseUrl = `${import.meta.env.VITE_API_URL}/avatars/`;

	return (
		<div className={classNames(styles.playersList, isFriends === false ? styles.leaderboard : "")}>
			{list.map((item) => {
				let leader = false;
				if (!isFriends) {
					leader = leaders.find((leader) => leader.place === item.index);
				}
				return (
					<div key={item.index} className={styles.playersListRow}>
						<div>
							<img
								style={{ borderRadius: "50%" }}
								src={item.avatar ? avatarBaseUrl + item.avatar : avatarPlaceholder}
								width={44}
								height={44}
								alt={`avatar`}
							/>
							<div className={styles.info}>
								<p className={styles.name}>{item.name}</p>
								<p className={classNames(styles.position, isFriends ? styles.none : "")}>
									{leader && <img src={leader.src} />}#{item.index}
								</p>
							</div>
						</div>
						<div>
							<p className={styles.money}>
								{formNumber(+item.balance.toFixed(2))?.number} {formNumber(item.balance)?.suffix}
							</p>
							<img src={balanceIcon} height={32} alt="Balance icon" />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default PlayerList;
