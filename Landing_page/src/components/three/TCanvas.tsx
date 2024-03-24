import React, { Suspense, VFC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
} from '../../modules/glsl/shader';
import { Background } from './Background';
import { Lense } from './Lense';
import { TextPlane } from './TextPlane';

export const TCanvas: VFC = () => {
	const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

	return (
		<Canvas camera={OrthographicCamera} dpr={window.devicePixelRatio}>
			<Suspense fallback={null}>
				<Background />
				<Lense />
				<TextPlane
					text={['Hellooo', 'Good Dayyy!']}
					vertexShader={enVertexShader}
					fragmentShader={enFragmentShader}
				/>
				<TextPlane text={['ನಮಸ್ಕಾರ 🙏 ', 'ಶುಭದಿನ!']} vertexShader={jpVertexShader} fragmentShader={jpFragmentShader} />
			</Suspense>
			{/* helper */}
			{/* <Stats /> */}
		</Canvas>
	)
}
