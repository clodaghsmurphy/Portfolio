import three from 'three';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Mesh } from 'three';
import { OrbitControls } from '@react-three/drei';

const Sphere = () => {
    const myMesh = useRef<THREE.Mesh | null>(null)
    useFrame((state, delta) => {
        myMesh.current!.rotation.y += delta / 2
        myMesh.current!.rotation.x += delta / 2
    })


     
    return (
            <mesh ref={myMesh} position={[0, 0, 2]}>
                
            <torusKnotGeometry  />
            <meshStandardMaterial color='#6b66fc' wireframe />
            </mesh>
    )
}

export default Sphere;