// filepath: /src/components/Layouts/WebLayout.js
import React from "react";
import Navbar from "./Navbar";
import { Box, useTheme } from "@mui/material";


const WebLayout = ({ children, themeMode, setThemeMode }) => {

    const theme = useTheme();


    return (
        <Box
            sx={{
                backgroundColor: theme.palette.wall.main,
            }}
        >
            <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
            <main>{children}</main>
        </Box>
    );
};

export default WebLayout;