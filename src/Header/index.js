// /me/src/Header/index.js

import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'

import './../styles/_header.scss'

const Me = React.createClass({
	render(){
		return (
			<section id="_Header">
				<div className="half me">
					<div className="pic" />
					<div className="name">Adam Adams</div>
				</div>

				<div className="half">
					<div>Phone</div>
					<div>Address</div>
					<div>Email</div>
					<div>linkedin</div>
					<div>github</div>
				</div>


				<div>
					<div className="circles">
						<div />
						<div className="circ2" />
						<div className="circ3" />
					</div>
				</div>

				<div className="music">
					<div className="bar1" />
					<div className="bar2" />
					<div className="bar3" />
					<div className="bar4" />
					<div className="bar5" />
					<div className="bar6" />
					<div className="bar7" />
					<div className="bar8" />
					<div className="bar9" />
					<div className="bar10" />
				</div>

				<div className="blinky" />

				<div className="pulse" />

			</section>
		);
	}
});

const mapStateToProps = (state, props) => {
	return {
		me: state.me,
	};
};

export default connect(mapStateToProps)(Me);