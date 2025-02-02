import TailwindScrollbar from "tailwind-scrollbar";
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                background: {
                    400: "#af7ac5",
                    500: "#9b59b6",
                    600: "#884ea0",
                    700: "#76448a",
                    800: "#633974",
                    900: "#512e5f"
                },
                primary: {
                    50: "#f4f4f4",
                    100: "#e8e8e8",
                    200: "#c6c6c6",
                    300: "#a3a3a3",
                    400: "#5e5e5e",
                    500: "#191919",
                    600: "#171717",
                    700: "#131313",
                    800: "#0f0f0f",
                    900: "#0c0c0c"
                },
                highlight: {
                    50: "#f4f3f4",
                    100: "#eae7ea",
                    200: "#cac4ca",
                    300: "#a9a0ab",
                    400: "#69586b",
                    500: "#29112c",
                    600: "#250f28",
                    700: "#1f0d21",
                    800: "#190a1a",
                    900: "#140816"
                },
                gray: {
                    50: "#fafafa",
                    100: "#f5f5f5",
                    200: "#e6e6e6",
                    300: "#d6d6d6",
                    400: "#b8b8b8",
                    500: "#999999",
                    600: "#8a8a8a",
                    700: "#737373",
                    800: "#5c5c5c",
                    900: "#4b4b4b"
                },
                secondary1: {
                    50: "#fcf2ff",
                    100: "#fae6ff",
                    200: "#f2bfff",
                    300: "#eb99ff",
                    400: "#db4dff",
                    500: "#cc00ff",
                    600: "#b800e6",
                    700: "#9900bf",
                    800: "#7a0099",
                    900: "#64007d"
                },
                secondary: {
                    50: "#fef2ff",
                    100: "#fde6ff",
                    200: "#fbbfff",
                    300: "#f899ff",
                    400: "#f34dff",
                    500: "#ee00ff",
                    600: "#d600e6",
                    700: "#b300bf",
                    800: "#8f0099",
                    900: "#75007d"
                },
                text: {
                    500: "#ffffff",
                    600: "#e6e6e6",
                    700: "#bfbfbf",
                    800: "#999999",
                    900: "#7d7d7d"
                }
            }
        }
    },
    plugins: [TailwindScrollbar({ nocompatible: true })]
};
