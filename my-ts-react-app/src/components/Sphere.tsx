import three from 'three';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';

const Sphere = () => {
    const myMesh = useRef<THREE.Mesh | null>(null)
    useFrame((state, delta) => {
        console.log(state)
    })
    return (
        <Canvas>
            <mesh ref={myMesh} position={[0, 2, 0]}>
                <directionalLight position={[-4, 2, 6]}/>
                <ambientLight intensity={0.3}/>
                <sphereGeometry/>
                <meshStandardMaterial color='#6b66fc' />
            </mesh>
        </Canvas>
    )
}

export default Sphere;