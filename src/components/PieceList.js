import React from 'react';
import Piece from './Piece';
import './PieceList.scss';

function PieceList(props) {
	return(
		<div className="piece-list">
			{props.pieces.map((item) => {
		    	return <Piece {...item} />;
		    })}
		</div>
	);
}

export default PieceList;