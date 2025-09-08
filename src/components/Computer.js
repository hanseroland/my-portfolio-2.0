// src/components/Computer.js
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import FloatingLabel from './FloatingLabel';
import Image from 'next/image';

const Computer = ({ onHoverStart, onHoverEnd }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/projects');
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05, cursor: 'pointer' }}
            whileTap={{ scale: 0.95 }}
            //onClick={handleClick}
            onHoverStart={onHoverStart}
            onHoverEnd={onHoverEnd}
            style={{
                position: 'relative',
                width: '130px',
                height: '120px'
            }}
        >
            <Image
                src="/images/mac.svg" // Assure-toi d'avoir une image de bureau ici
                alt="Ordinateur interactif"
                layout="fill"
                objectFit="cover"
                quality={100}
                priority={true} // Pour un chargement rapide
            />

            <FloatingLabel label="Mes projets" position="bottom" />
        </motion.div>
    );
};

export default Computer;