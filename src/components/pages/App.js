import React, { Component } from 'react';
import FormContainer from '../molecules/FormContainer.jsx';
import Title from '../atoms/Title.jsx';
import Wrapper from '../atoms/Wrapper.jsx';

import * as tokens from '../../tokens/js/assets_image.js';

export class App extends Component {
	render() {
		return (
			<div>
				<Wrapper>
					<Title>EvilolivE</Title>
					<img
						width="150px"
						src={`data:image/png;base64, ${tokens.assetImageLogo}`}
						alt=""
					/>
				</Wrapper>
				<Wrapper>
					<FormContainer />
				</Wrapper>
			</div>
		);
	}
}

export default App;
