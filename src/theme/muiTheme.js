// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";

const palette = {
    light: {
        primary: {
            main: "#3B82F6", // Blue iOS
        },
        secondary: {
            main: "#A78BFA", // Lavender
        },
        accent: {
            mint: "#34D399",
            peach: "#FCA5A5",
            coral: "#FB7185",
        },
        background: {
            default: "rgba(245, 247, 250, 0.7)", // translucide clair
            paper: "rgba(255, 255, 255, 0.6)", // effet verre
        },
        wall: {
            main: "#6EE7B7", // Mint pastel
            ground: "#FEF9C3", // Jaune doux
        },
        window: {
            main: "rgba(255, 255, 255, 0.2)", // transparent glass
        },
        text: {
            primary: "#1E293B", // gris-bleu foncé
            secondary: "#475569", // gris doux
            third: "#334155",
        },
    },
    dark: {
        primary: {
            main: "#60A5FA", // iOS Blue plus clair
        },
        secondary: {
            main: "#C084FC", // Violet lumineux
        },
        accent: {
            mint: "#2DD4BF",
            peach: "#FCA5A5",
            coral: "#FB7185",
        },
        wall: {
            main: "#0d6b60ff", // teal
            ground: "#57534E", // gris-brun doux
        },
        background: {
            default: "rgba(13, 17, 23, 0.85)", // noir translucide
            paper: "rgba(28, 31, 38, 0.7)", // effet verre
        },
        window: {
            main: "rgba(255, 255, 255, 0.1)", // verre sombre
        },
        text: {
            primary: "#F8FAFC", // blanc cassé
            secondary: "#CBD5E1", // gris clair
            third: "#E2E8F0",
        },
    },
};

export const getAppTheme = (mode = "light") =>
    createTheme({
        palette: {
            mode,
            ...palette[mode],
        },
        typography: {
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, sans-serif",
            h1: { fontWeight: 700, fontSize: "2.5rem" },
            h2: { fontWeight: 600, fontSize: "2rem" },
            body1: { fontSize: "1rem", lineHeight: 1.6 },
        },
        shape: {
            borderRadius: 28, // plus arrondi comme iOS
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: "2rem",
                        textTransform: "none",
                        padding: "0.7rem 1.6rem",
                        fontWeight: 600,
                        backdropFilter: "blur(12px)",
                        background: "rgba(255, 255, 255, 0.15)",
                        boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            transform: "translateY(-2px)",
                            boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                            background: "rgba(255, 255, 255, 0.25)",
                        },
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        borderRadius: "2rem",
                        padding: "1rem",
                        backdropFilter: "blur(18px)",
                        background: palette[mode].background.paper,
                        boxShadow: "0 6px 30px rgba(0,0,0,0.12)",
                    },
                },
            },
        },
    });
