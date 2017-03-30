// /me/src/Me/index.js

import React from 'react'
import { connect } from 'react-redux'
import DocumentTitle from 'react-document-title'

const Me = React.createClass({
	render(){
		return (
			<DocumentTitle title="Me | Adam Adams">
				<div>It's me!</div>
			</DocumentTitle>
		);
	}
});

const mapStateToProps = (state, props) => {
	return {
		me: state.me,
	};
};

export default connect(mapStateToProps)(Me);