import { createTheme } from '@mui/material/styles';

// Les palettes de couleurs sont inspirées de thèmes de terminaux populaires et de styles de codage.
// Elles ont été générées par IA.

const terminalDefaultTheme = createTheme({
    typography: {
        fontFamily: 'hack, Fira Code, monospace',
    },
    palette: {
        primary: { main: '#f50057' },
        secondary: { main: '#f50057' },
        error: { main: '#f44336', },
        warning: { main: '#ff9800', },
        info: { main: '#2196f3', },
        success: { main: '#4caf50', },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        divider: '#424242',
        action: {
            active: '#ffffff',
            hover: '#424242',
            selected: '#424242',
            disabled: '#b0bec5',
            disabledBackground: '#424242',
            focus: '#424242',
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
        },
        text: {
            primary: '#ffffff',
            secondary: '#b0bec5',
        },

        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
    },
});


const TerminalMatrixTheme = createTheme({
    typography: {
        fontFamily: 'hack, Fira Code, monospace',
    },
    palette: {
        primary: {
            main: '#00ff41',
        },
        secondary: {
            main: '#00cc33',
        },
        error: {
            main: '#ff0033',
        },
        warning: {
            main: '#ffcc00',
        },
        info: {
            main: '#00ffff',
        },
        success: {
            main: '#00ff41',
        },
        common: {
            black: '#000000',
            white: '#00ff41',
        },
        divider: '#003300',
        action: {
            active: '#00ff41',
            hover: '#003300',
            selected: '#005500',
            disabled: '#005500',
            disabledBackground: '#002200',
            focus: '#00ff41',
            focusOpacity: 0.2,
            activatedOpacity: 0.2,
        },
        text: {
            primary: '#00ff41',
            secondary: '#00cc33',
        },
        background: {
            default: '#000000',
            paper: '#0a0a0a',
        }
    },
});

const CyberpunkNeonTheme = createTheme({
    typography: {
        fontFamily: 'Fira Code, monospace',
    },
    palette: {
        primary: { main: '#ff00ff' },
        secondary: { main: '#00ffff' },
        error: { main: '#ff1744' },
        warning: { main: '#ff9100' },
        info: { main: '#2979ff' },
        success: { main: '#00e676' },
        common: {
            black: '#000000',
            white: '#ffffff',
        },
        divider: '#4a148c',
        action: {
            active: '#ffffff',
            hover: '#1a1a2e',
            selected: '#ff00ff',
            disabled: '#555555',
            disabledBackground: '#222222',
            focus: '#00ffff',
            focusOpacity: 0.3,
            activatedOpacity: 0.3,
        },
        text: {
            primary: '#ffffff',
            secondary: '#ff00ff',
        },
        background: {
            default: '#0d0d0d',
            paper: '#1a1a1a',
        },
    },
});

const SolarizedDarkTheme = createTheme({
    typography: {
        fontFamily: 'Source Code Pro, monospace',
    },
    palette: {
        primary: { main: '#268bd2' },    // Bleu doux
        secondary: { main: '#2aa198' },  // Cyan-vert
        error: { main: '#dc322f' },
        warning: { main: '#b58900' },
        info: { main: '#839496' },
        success: { main: '#859900' },
        common: {
            black: '#073642',
            white: '#eee8d5',
        },
        divider: '#586e75',
        action: {
            active: '#eee8d5',
            hover: '#002b36',
            selected: '#073642',
            disabled: '#586e75',
            disabledBackground: '#002b36',
            focus: '#268bd2',
            focusOpacity: 0.1,
            activatedOpacity: 0.1,
        },
        text: {
            primary: '#839496',
            secondary: '#586e75',
        },
        background: {
            default: '#002b36',
            paper: '#073642',
        },
    },
});

const MonokaiProTheme = createTheme({
    typography: {
        fontFamily: 'Hack, Menlo, monospace',
    },
    palette: {
        primary: { main: '#fc9867' },   // Orange pastel
        secondary: { main: '#ab9df2' }, // Lavande
        error: { main: '#ff6188' },
        warning: { main: '#ffd866' },
        info: { main: '#78dce8' },
        success: { main: '#a9dc76' },
        common: {
            black: '#1e1e1e',
            white: '#f8f8f2',
        },
        divider: '#383838',
        action: {
            active: '#f8f8f2',
            hover: '#49483e',
            selected: '#3e3d32',
            disabled: '#75715e',
            disabledBackground: '#272822',
            focus: '#fc9867',
            focusOpacity: 0.1,
            activatedOpacity: 0.1,
        },
        text: {
            primary: '#f8f8f2',
            secondary: '#75715e',
        },
        background: {
            default: '#272822',
            paper: '#1e1e1e',
        },
    },
});

const GruvboxDarkTheme = createTheme({
    typography: {
        fontFamily: 'JetBrains Mono, monospace',
    },
    palette: {
        primary: { main: '#fabd2f' },   // Jaune ocre
        secondary: { main: '#fe8019' }, // Orange brûlé
        error: { main: '#fb4934' },
        warning: { main: '#d79921' },
        info: { main: '#83a598' },
        success: { main: '#b8bb26' },
        common: {
            black: '#282828',
            white: '#ebdbb2',
        },
        divider: '#3c3836',
        action: {
            active: '#ebdbb2',
            hover: '#3c3836',
            selected: '#504945',
            disabled: '#928374',
            disabledBackground: '#3c3836',
            focus: '#fabd2f',
            focusOpacity: 0.1,
            activatedOpacity: 0.1,
        },
        text: {
            primary: '#ebdbb2',
            secondary: '#a89984',
        },
        background: {
            default: '#1d2021',
            paper: '#282828',
        },
    },
});


export { terminalDefaultTheme, TerminalMatrixTheme, CyberpunkNeonTheme, SolarizedDarkTheme, MonokaiProTheme, GruvboxDarkTheme };