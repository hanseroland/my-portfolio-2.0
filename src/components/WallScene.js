import React from 'react';
import { Box } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';







const WallScene = ({ themeMode }) => {


    // Position de la fenêtre
    const windowPosition = {
        top: '2%',
        right: '10%',
        width: '355px',
        height: '370px',
    };

    // Définition des variantes pour l'animation du palmier
    const palmVariants = {
        sway: {
            rotate: [-5, 5, -5],
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
            }
        }
    };

    // Définition des variantes pour l'animation de l'oiseau
    const birdVariants = {
        sway: {
            rotate: [-2, 2, -2],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                repeatType: "mirror"
            }
        }
    };


    return (
        <Box
            sx={{
                width: '100%',
                height: '100vh',
                position: 'absolute',
                top: 0,
                left: 0,
                overflow: 'hidden',
            }}
        >
            {/* Conteneur de la fenêtre et de la vue extérieure */}
            <Box
                sx={{
                    position: 'absolute',
                    ...windowPosition,
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    backgroundColor: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(10px)',
                }}
            >

                {/* Vues extérieures (Soleil et Lune) */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {/* Image de la vue extérieure positionnée en fond */}
                    <Image
                        src="/images/nature-2.png"
                        alt="Vue extérieure"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        priority={true}
                        style={{
                            position: 'absolute',
                            zIndex: 0,
                        }}
                    />

                    {/* Palmiers animés */}
                    <motion.div
                        variants={palmVariants}
                        animate="sway"
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '60%',
                            width: '160px', // Ajustez la taille
                            height: '200px',
                            transformOrigin: 'bottom', // Point de rotation en bas
                        }}
                    >
                        <Image
                            src="/images/palm.png" // Chemin de l'image du palmier
                            alt="Palmier animé"
                            width={150} // Ajuste la largeur
                            height={250} // Ajuste la hauteur
                        />
                    </motion.div>
                    {/* Soleil animé */}
                    <motion.div
                        initial={{ opacity: 1, y: 0 }}
                        animate={{
                            opacity: themeMode === 'light' ? 1 : 0,
                            y: themeMode === 'light' ? 0 : 200, // Se déplace vers le bas
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Image
                            src="/images/sun.png" // Remplace par le chemin de ton image du soleil
                            alt="Soleil"
                            width={100}
                            height={100}
                        />
                    </motion.div>

                    {/* Lune animée */}
                    <motion.div
                        initial={{ opacity: 0, y: 200 }} // Commence en bas et invisible
                        animate={{
                            opacity: themeMode === 'dark' ? 1 : 0,
                            y: themeMode === 'dark' ? 0 : 200, // Se déplace vers le haut
                        }}
                        transition={{ duration: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <Image
                            src="/images/bousmoon.svg"
                            alt="Lune"
                            width={80}
                            height={80}
                        />
                    </motion.div>
                </Box>

                {/* Oiseaux animés sur le bord de la fenêtre */}
                {/* Oiseau éveillé (pour le mode clair) */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: themeMode === 'light' ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '2%',
                        left: '10%',
                        zIndex: 2, // 
                    }}
                >
                    <motion.div
                        variants={birdVariants}
                        animate="sway"
                        style={{
                            transformOrigin: 'bottom', // L'oiseau pivote depuis son bas
                        }}
                    >
                        <Image
                            src="/images/awake_adium_bird.png"
                            alt="Oiseau éveillé"
                            width={50}
                            height={50}
                        />
                    </motion.div>

                </motion.div>

                {/* Oiseau endormi (pour le mode sombre) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: themeMode === 'dark' ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'absolute',
                        bottom: '2%',
                        left: '10%',
                        zIndex: 2,
                    }}
                >
                    <motion.div
                        variants={birdVariants}
                        animate="sway"
                        style={{
                            transformOrigin: 'bottom', // L'oiseau pivote depuis son bas
                        }}
                    >
                        <Image
                            src="/images/sleep_adium_bird.png"
                            alt="Oiseau endormi"
                            width={50}
                            height={50}
                        />
                    </motion.div>

                </motion.div>
                {/* Image de la fenêtre au-dessus de la vue extérieure */}
                <Image
                    src="/images/fenêtre.png"
                    alt='Fenêtre ouverte'
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                    }}
                />
            </Box>
        </Box>
    );
};

export default WallScene;