import * as React from 'react';

type HomeProps = {
	title: string;
};

export class Home extends React.Component<HomeProps> {
	private counter = 0;
	private hobbies: string[] = ['running', 'skateboard', 'violin'];

	private adder(): number {
		this.setState({});
		return (this.counter += 1);
	}

	constructor(props: HomeProps) {
		super(props);
		this.counter;
	}

	render() {
		return (
			<div>
				<p>New componenet</p>
				{this.props.title}
				<p>Hobbies</p>
				<ul>
					{this.hobbies.map((hobby, i) => (
						<li key={i}>{hobby}</li>
					))}
				</ul>
				<hr />
				<button
					className="btn btn-primary"
					onClick={() => {
						this.adder();
					}}
				>
					Add one!
				</button>
				<div className="counter">{this.counter}</div>
			</div>
		);
	}
}
