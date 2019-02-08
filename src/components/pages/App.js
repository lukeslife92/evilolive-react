import React, { Component } from 'react';
import FormContainer from '../molecules/FormContainer.jsx';
import Title from '../atoms/Title.jsx';
import Wrapper from '../atoms/Wrapper.jsx';

export class App extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<Title>EvilolivE</Title>
				</Wrapper>
				<Wrapper>
					<FormContainer />
				</Wrapper>
			</div>
		);
	}
}

export default App;
