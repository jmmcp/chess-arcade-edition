import React from 'react';
import Textfit from 'react-textfit';
import './Piece.scss';
import tileCodes from './tilecodes';



class Piece extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: "Unnamed Piece",
			icons: [
				"no_icons",
				"dab"
			],
			grid: [
				["a7", "  ", "a8", "  ", "a9"],
				["  ", "\\", "||", "//", "  "],
				["a4", "==", "XX", "==", "a6"],
				["  ", "//", "||", "\\", "  "],
				["a1", "  ", "a2", "  ", "a3"]
			],
			rules: "This piece has no special rules. You can leave this blank.",

		};
	}

	componentDidMount() {
		if (this.props !== undefined) {
			this.setState(this.props);
		}
	}

	iconSquare(iconName) {
		return <div className="piece-icon">{iconName.charAt(0)}</div>;
	}

	gridSquare(char) {
		const fileName = tileCodes[char] === undefined ? null : `tiles/${tileCodes[char]}.svg`;
		return <div className="piece-grid-square" ><img src={fileName} /></div>;
	}

	render() {
		const data = this.state;
		return (
			<div className="piece">
				<div className="piece-contents">
					<div className="piece-name-wrap">
						<div className="piece-name">
							<Textfit>
								{data.name}
							</Textfit>
						</div>
					</div>
					<div className="piece-icons">
						{data.icons.map((item) => {
							return this.iconSquare(item);
						})}
					</div>
					<div className="piece-grid">
						{data.grid.map((i) => {
							return (<div className="piece-grid-row">
								{i.map((j) => {
									return this.gridSquare(j);
								})}
							</div>);
						})}
					</div>
					<div className="flex-spacer"></div>
					<div className="piece-rules">{data.rules}</div>
				</div>
			</div>
		);
	}
}

export default Piece;