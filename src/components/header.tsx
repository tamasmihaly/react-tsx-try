import * as React from 'react';

export interface HeaderProps {
	input: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Header extends React.Component<HeaderProps, {}> {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav"></ul>
					</div>
				</div>
			</nav>
		);
	}
}
