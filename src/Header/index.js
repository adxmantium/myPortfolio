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