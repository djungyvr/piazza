import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

class Header extends React.Component {
	render() {
		return (
			<div>
				<Navbar className="topHeader">
					<h3>Piazza</h3>
				</Navbar>
				<Navbar className="bottomHeader">
				</Navbar>
				<Navbar className="bottomHeader">
				</Navbar>
			</div>
		);
	}
}

export default Header
