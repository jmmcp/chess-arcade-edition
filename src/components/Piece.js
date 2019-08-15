import React from 'react';
import ScaleText from 'react-scale-text';
import './Piece.scss';

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
				[" ", " ", " ", " ", " "],
				[" ", " ", " ", " ", " "],
				[" ", " ", "X", " ", " "],
				[" ", " ", " ", " ", " "],
				[" ", " ", " ", " ", " "]
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
		return <td >{char}</td>;
	}

	render() {
		const data = this.state;
		return (
			<div className="piece">
				<div className="piece-contents">
					<div className="piece-name">
						<ScaleText>
							<span>{data.name}</span>
						</ScaleText>
					</div>
					<div className="piece-icons">
						{data.icons.map((item) => {
							return this.iconSquare(item);
						})}
					</div>
					<table className="piece-grid">
						{data.grid.map((i) => {
							return(<tr>
								{i.map((j) => {
									return this.gridSquare(j);
								})}
							</tr>);
						})}
					</table>
					<div className="flex-spacer"></div>
					<div className="piece-rules">{data.rules}</div>
				</div>
			</div>
		);
	}
}

export default Piece;