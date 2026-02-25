import Head from "next/head";
import DeskScene from "@/components/DeskScene";
import { Box, useTheme } from "@mui/material";
import WallScene from "@/components/WallScene";
import FurnitureScene from "@/components/FurnitureScene";
import WallArtScene from "@/components/WallArtScene";
import { useState } from "react";
import ComputerScreenOverlay from "@/components/UI/ComputerScreenOverlay";
import StackWallArt from "@/components/UI/StackWallArt";



export default function Home({ themeMode }) {

  const theme = useTheme();

  // État centralisé pour contrôler l'affichage de l'Overlay
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOpenOverlay = () => setIsOverlayOpen(true);
  const handleCloseOverlay = () => setIsOverlayOpen(false);

  return (
    <>
      <Head>
        <title>Hanse Roland Parfait - Développeur Web FullStack</title>
        <meta name="description" content="Ingénieur Full-Stack spécialisé dans la digitalisation
          Je vous aide à transformer vos opérations en systèmes digitaux performants et évolutifs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="googlebot" content="notranslate" />
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-end" },
            paddingBottom: '2vh',
            height: "100vh",
            position: 'relative',
            overflow: 'hidden',
            background: {
              xs: `linear-gradient(180deg,
              ${theme.palette.wall?.main || '#fef8e3'} 0%,
              ${theme.palette.wall?.main || '#fef8e3'} 60%,
              ${theme.palette.wall?.ground || '#f5ebc8'} 60%,
              ${theme.palette.wall?.ground || '#f5ebc8'} 100%)`,
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)',
              md: `linear-gradient(180deg,
              ${theme.palette.wall?.main || '#fef8e3'} 0%,
              ${theme.palette.wall?.main || '#fef8e3'} 70%,
              ${theme.palette.wall?.ground || '#f5ebc8'} 60%,
              ${theme.palette.wall?.ground || '#f5ebc8'} 100%)`,
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.1)',

            },

            '&::before': {
              content: '""',
              position: 'absolute',
              top: 100,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg,
                transparent 0%,
                ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)'} 30%,
                transparent 70%,
                ${theme.palette.mode === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 100%)`,
              pointerEvents: 'none',
              zIndex: 1,
            },
            // Effet de sol en perspective (bas)
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: '10%',
              right: '10%',
              height: '30%',
              background: `linear-gradient(to bottom,
                transparent 0%,
                ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)'} 50%,
                ${theme.palette.mode === 'light' ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.15)'} 100%)`,
              clipPath: 'polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)',
              pointerEvents: 'none',
              zIndex: 0,
            },
          }}
        >
          <WallScene themeMode={themeMode} />
          <WallArtScene />
          <StackWallArt
            position={{

              top: '5%',
              left: '15%',
              width: '15%',
              height: '40%'
            }}
          />
          <FurnitureScene themeMode={themeMode} />
          <DeskScene
            onComputerHover={handleOpenOverlay}
            onComputerLeave={handleCloseOverlay}
          />
        </Box>

        <ComputerScreenOverlay
          isVisible={isOverlayOpen}
          onClose={handleCloseOverlay}
        />
      </div>
    </>
  );
}
