// src/components/ProjectScreen.js
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectScreen = () => {
    return (
        <Link href="/projects" passHref>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.1 }}
                style={{
                    position: 'absolute',
                    top: '20%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '100px',
                    height: '100px',
                    cursor: 'pointer',
                    zIndex: 2,
                }}
            >
                <Image
                    src="/images/folder_react.svg"
                    alt="Icône de projets"
                    layout="fill"
                />
            </motion.div>
        </Link>
    );
};

export default ProjectScreen;