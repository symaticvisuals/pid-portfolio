import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import "../../styles/cardTheme.css";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
import { SectionChangeContext } from "../Hero";
function WorkCard({ workObj }) {
	let { setSelected } = useContext(SectionChangeContext);
	let { setWork } = useContext(SectionChangeContext);
	let setSection = () => {
		setSelected(true);
		setWork(workObj);
		console.log("setSection", workObj);
	};
	return (
		<div className='root'>
			<div className='cards'>
				<div>
					<div className='card'>
						<img src={workObj.bestImage} className='card__image' alt='' />
						<div className='card__overlay'>
							<div className='card__header'>
								<svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
									<path />
								</svg>
								<img className='card__thumb' src={workObj.bestImage} alt='' />
								<div className='card__header-text'>
									<h3 className='card__title'>{workObj.title}</h3>
									<span className='card__status'>1 hour ago</span>
								</div>
							</div>
							<div className='card__description'>
								<button onClick={setSection}>
									<Typography variant='p'>Explore</Typography>
									<KeyboardArrowRightRoundedIcon />
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WorkCard;
