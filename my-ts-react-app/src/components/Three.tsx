import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere';

const Three = () => {
    
    return (
        <Canvas>
            <pointLight intensity={1.0} position={[-1, 2, 2]} />
            <pointLight intensity={1.0} position={[0, 1, 3]} />
            <pointLight intensity={1.0} position={[0, -1, 3]} />
            <ambientLight intensity={0.6} />
            <Sphere />
        </Canvas>
    )
}

export default Three;
