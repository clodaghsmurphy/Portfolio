import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const Sphere = () => {
    const myMesh = useRef<THREE.Mesh | null>(null)
    useFrame((state, delta) => {
        state
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