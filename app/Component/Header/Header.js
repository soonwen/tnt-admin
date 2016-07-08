/**
 * Created by robertzzy on 05/07/16.
 */
import React from 'react';
import {PageHeader} from 'react-bootstrap'
import { Link } from 'react-router'

if (process.env.BROWSER) {
	require('./Header.sass');
}

export default class Header extends React.Component {
	constructor() {
		super();
	}

	render(){
		return (
		<div className="mdl-layout--fixed-header">
			<header className="mdl-layout__header">
				<div className="mdl-layout__header-row">
					<span className="mdl-layout-title"><Link to="/">T.N.T 数据管理</Link></span>
					<div className="mdl-layout-spacer"></div>
					<nav className="mdl-navigation">
						<Link to="/search" className="mdl-navigation__link" >搜索</Link>
						<Link to="/create" className="mdl-navigation__link" >添加</Link>
					</nav>
				</div>
			</header>
		</div>
		);
	}
}