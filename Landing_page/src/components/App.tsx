import React, { useState, VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	
	const newPath = "/3001"; // Specify the path to navigate to when the button is clicked
	return (
		<div className={styles.container}>
			<TCanvas userName="Arnab"/>
			<LinkIconButton imagePath="/assets/icons/github.svg" linkPath="http://localhost:3000"/>
			{/* <button className={styles.button}> Get Started </button> */}
		</div> 
	)
}

const styles = {
	container: css`
		position: relative;
		width: 100vw;
		height: 100vh;
	`,
}
