import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../tokens/variables.js';

// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section({
	padding: '4em',
	background: tokens.ColorColorsZomp,
	borderRadius: tokens.BorderRadiusCircle
});

export default Wrapper;
