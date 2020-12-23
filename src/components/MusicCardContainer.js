import React from "react";
import PropTypes from "prop-types";
import MusicCard from "./MusicCard";

const MusicCardContainer = ({title, items}) => {
	return (
		<div className="text-white p-4">
			<h2 className="font-bold text-xl mb-4">{title}</h2>
			{items && (
				<div className="grid grid-cols-5 gap-4">
					{items.map((item) => (
						<MusicCard info={item}/>
					))}
				</div>
			)}
		</div>
	);
};

MusicCardContainer.propTypes = {
	title: PropTypes.string.isRequired,
	items: PropTypes.array,
};

export default MusicCardContainer;
