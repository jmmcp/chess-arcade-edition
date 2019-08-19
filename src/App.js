import React from 'react';
import PieceList from './components/PieceList';
import './App.scss';

function App() {

	const pieces = [
		{
			name: "Cool Piece"
		},
		{
			name: "La Jinn, Mystical Genie of the Lamp",
			rules: "stupid stinky ugly"
		},
		{
			name: "Bad Hell Piece",
			icons: ["H", "J"],
			rules: "piece is from hell"
		},
		{
			grid: [
				["  ", "  ", "  "],
				["a4", "XX", "  "],
				["  ", "  ", "  "],
			]
		}
	];
	return (
		<div className="App">
			<PieceList pieces={pieces} />
		</div>
	);
}

export default App;
