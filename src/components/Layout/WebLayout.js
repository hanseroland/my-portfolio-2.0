// filepath: /src/components/Layouts/WebLayout.js
import React from "react";
import Navbar from "./Navbar";


const WebLayout = ({ children, themeMode, setThemeMode }) => {



    return (
        <>
            <Navbar themeMode={themeMode} setThemeMode={setThemeMode} />
            <main>{children}</main>
        </>
    );
};

export default WebLayout;