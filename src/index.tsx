import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Hello } from './components/hello';
import { Header } from './components/header';
import { Home } from './components/home';

ReactDOM.render(
	<div className="container">
		<div className="row">
			<div className="col-xs-10 col-xs-offset-1">
				<Header input="" />
			</div>
		</div>
		<div className="row">
			<div className="col-xs-10 xol-xs-offset-1">
				<Home title="input dynamic title" />
			</div>
		</div>
		<Hello compiler="TypeScript" framework="React" />
	</div>,
	document.getElementById('app-root')
);
