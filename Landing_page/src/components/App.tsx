import React, { useState, VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	
	const newPath = "/3001"; // Specify the path to navigate to when the button is clicked
	return (
		<div className={styles.container}>
			<TCanvas userName="Arnab"/>
			<LinkIconButton imagePath="/assets/icons/github.svg" linkPath="https:www.google.com"/>
			{/* <button> Button </button> */}
		</div>
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`
}
