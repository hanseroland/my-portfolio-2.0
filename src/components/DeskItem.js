"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DeskItem({ label, href, children, style, labelPosition }) {
    return (
        <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(0,0,0,0.3)" }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ position: "absolute", cursor: "pointer", ...style }}
        >
            <Link href={href}>
                <div style={{ position: "relative" }}>

                    {children}

                    {/* Label flottant */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        style={{
                            position: "absolute",
                            color: "#1A2E40",
                            fontWeight: 600,
                            ...labelPosition,
                        }}
                    >
                        {label}
                    </motion.div>
                </div>
            </Link>
        </motion.div>
    );
}
