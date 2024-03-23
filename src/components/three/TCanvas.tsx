import React, { Suspense, VFC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {
	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
} from '../../modules/glsl/shader';
import { Background } from './Background';
import { Lense } from './Lense';
import { TextPlane } from './TextPlane';

interface TCanvasProps {
	userName: string;
}

export const TCanvas: VFC<TCanvasProps> = ({ userName }) => {
	const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

	return (
		<Canvas camera={OrthographicCamera} dpr={window.devicePixelRatio}>
			<Suspense fallback={null}>
				<Background />
				<Lense />
				<TextPlane
					text={[`Helloo ${userName}`, 'Good Dayyy!']}
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
