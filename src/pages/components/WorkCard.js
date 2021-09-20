import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import "../../styles/cardTheme.css";
import KeyboardArrowRightRoundedIcon from "@material-ui/icons/KeyboardArrowRightRounded";
function WorkCard({ work }) {
	return (
		<div className='root'>
			<div className='cards'>
				<div>
					<div className='card'>
						<img src={work.bestImage} className='card__image' alt='' />
						<div className='card__overlay'>
							<div className='card__header'>
								<svg className='card__arc' xmlns='http://www.w3.org/2000/svg'>
									<path />
								</svg>
								<img className='card__thumb' src={work.bestImage} alt='' />
								<div className='card__header-text'>
									<h3 className='card__title'>{work.title}</h3>
									<span className='card__status'>1 hour ago</span>
								</div>
							</div>
							<div className='card__description'>
								<button>
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
