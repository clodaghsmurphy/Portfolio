import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere';

const Three = () => {
    
    return (
        <Canvas>
            
            <mesh position={[0, 2, 0]}>
                <directionalLight position={[-4, 2, 6]}/>
                <ambientLight intensity={0.3}/>
                <boxGeometry/>
                <meshStandardMaterial color='#6b66fc' />
            </mesh>
        </Canvas>
    )
}

export default Three;
