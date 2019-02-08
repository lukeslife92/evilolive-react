import React from 'react';
import styled from 'styled-components';

import * as tokens from '../../tokens/variables.js';

// Create a <Title> react component that renders an <h1> which is
// centered, palevioletred and sized at 1.5em
const Title = styled.h1({
	fontSize: tokens.SizeFontLarge,
	textAlign: 'center',
	color: tokens.ColorColorsCloud,
	fontFamily: tokens.FontFamilyBase
});

export default Title;
