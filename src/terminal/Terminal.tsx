import { Box, Button, Paper, TextField, ThemeProvider, Typography } from '@mui/material';
import React from 'react';
import executeCommand from './Commands';
import { terminalDefaultTheme, TerminalMatrixTheme, CyberpunkNeonTheme, SolarizedDarkTheme, MonokaiProTheme, GruvboxDarkTheme } from './Themes';


interface CommandEntry {
    command: string;
    output: string;
};

const Prompt: React.FC = () => {
    const username = 'username';
    const fakehost = 'fakehost';

    return (
        <Box sx={{ display: 'inline-flex', alignItems: 'center', color: 'primary.main' }}>
            <Typography component={'span'} sx={{ mr: 0.5 }}>
                [
                <Typography component={'span'} sx={{ mr: 0.5 }}>
                    {username}
                </Typography>
                <Typography component={'span'} sx={{ color: 'text.secondary' }}>
                    @{fakehost}
                </Typography>
                ]
                <Typography component={'span'} sx={{ mx: 0.5, color: 'text.secondary' }}>
                    $
                </Typography>
            </Typography>
        </Box>
    )
};

const HistoryLine: React.FC<{ entry: CommandEntry }> = ({ entry }) => {
    return (
        <Box sx={{ mb: 1, textAlign: 'left' }}>
            <Prompt />
            <Typography component="span" sx={{ whiteSpace: 'pre-wrap' }}>
                {entry.command}
            </Typography>
            <br />
            <Typography component="span" sx={{ whiteSpace: 'pre-wrap' }}>
                {entry.output}
            </Typography>
        </Box>
    )
};

const Terminal: React.FC = () => {
    const [history, setHistory] = React.useState<CommandEntry[]>([
        {
            command: 'welcome-message',
            output: 'Welcome to P3H Terminal! Type "help" for a list of commands.',
        },
    ]);
    const [inputValue, setInputValue] = React.useState('');
    const outputEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history]);

    const handleCommand = (cmd: string) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;

        if (trimmed === 'clear') {
            setHistory([]);
        } else {
            const result = executeCommand(trimmed);
            setHistory(prev => [...prev, { command: result.cmd, output: result.output }]);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(inputValue);
            setInputValue('');
        }
    };

    const [theme, setTheme] = React.useState(terminalDefaultTheme);
    const handleThemeChange = (newTheme: string) => {
        switch (newTheme) {
            case 'default':
                setTheme(terminalDefaultTheme);
                break;
            case 'matrix':
                setTheme(TerminalMatrixTheme);
                break;
            case 'cyberpunk':
                setTheme(CyberpunkNeonTheme);
                break;
            case 'solarized':
                setTheme(SolarizedDarkTheme);
                break;
            case 'monokai':
                setTheme(MonokaiProTheme);
                break;
            case 'gruvbox':
                setTheme(GruvboxDarkTheme);
                break;
            default:
                setTheme(terminalDefaultTheme);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            {/* inline buttons to change theme color */}


            <Paper
                elevation={3}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    height: '300px',
                    fontSize: '0.9rem',
                    borderRadius: 2,
                    overflowY: 'auto',
                    backgroundColor: 'background.paper',
                }}
                className='terminal'
            >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                    <Button onClick={() => handleThemeChange('default')}>Default</Button>
                    <Button onClick={() => handleThemeChange('matrix')}>Matrix</Button>
                    <Button onClick={() => handleThemeChange('cyberpunk')}>Cyberpunk</Button>
                    <Button onClick={() => handleThemeChange('solarized')}>Solarized</Button>
                    <Button onClick={() => handleThemeChange('monokai')}>Monokai</Button>
                    <Button onClick={() => handleThemeChange('gruvbox')}>Gruvbox</Button>
                </Box>
                <Box sx={{ flex: 1, overflowY: 'auto', mb: 2, }}>
                    {history.map((entry, index) => (<HistoryLine key={index} entry={entry} />))}
                    <div ref={outputEndRef} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', borderTop: 1, borderColor: 'divider', pt: 1, }}>
                    <Prompt />
                    <TextField
                        variant="standard"
                        fullWidth
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter command..."
                        InputProps={{ disableUnderline: true }}
                    />
                </Box>
            </Paper>
        </ThemeProvider>
    );
};

export default Terminal;