import React, { VFC } from 'react';
import { css } from '@emotion/css';
import { LinkIconButton } from './LinkIconButton';
import { TCanvas } from './three/TCanvas';

export const App: VFC = () => {
	return (
		<div className={styles.container}>
			<TCanvas />
			<LinkIconButton imagePath="/assets/icons/github.svg" linkPath="http://localhost:3000" />
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
