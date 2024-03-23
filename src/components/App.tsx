import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<TCanvas userName="Arnab"/>
			<LinkIconButton imagePath="/assets/icons/github.svg" linkPath="https://www.google.com/" />
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