import React, {Component} from 'react';
import './metronome.css';

class Metronome extends Component {

	constructor(props) {
		super(props);

		this.state = {
			playing: false,
			bpm: 100
		}
	}

	handleBpmChange = e => {
		const bpm = e.target.value;
		this.setState({bpm});
	}

	handlePlaying = () => {
		const playing = !this.state.playing;
		this.setState({playing});
	}

	render() {
		let {bpm, playing} = this.state;

		return (
			<div className="metronome">
				<div className="bpm-slider">
					<div>{bpm} BPM</div>
					<input onChange={this.handleBpmChange} type="range" min="60" max="240" value={bpm}/>
				</div>
				<button className={playing ? 'start' : 'stop'} onClick={this.handlePlaying}>{playing ? 'Start' : 'Stop'}</button>
			</div>
		);
	}

}

export default Metronome;
