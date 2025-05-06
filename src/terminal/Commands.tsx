interface ExecuteResult {
    cmd: string;
    output: string;
}

type CommandHandler = (cmd: string) => ExecuteResult;

const commandHandlers: Record<string, CommandHandler> = {
    help: (cmd) => ({
        cmd,
        output: 'Commandes disponibles : help, clear, echo [votre texte]',
    }),
    clear: (cmd) => ({
        cmd,
        output: '',
    }),
    'welcome-message': (cmd) => ({
        cmd,
        output: 'Welcome to the useless terminal! Type "help" for a list of commands.',
    }),
    'version': (cmd) => ({
        cmd,
        output: 'Version 1.0.0',
    }),
};

export default function executeCommand(command: string): ExecuteResult {
    const cmd = command.trim();

    if (cmd.startsWith('echo ')) {
        return {
            cmd,
            output: cmd.substring(5),
        };
    }

    const handler = commandHandlers[cmd];
    if (handler) {
        return handler(cmd);
    }

    return {
        cmd,
        output: `Commande non reconnue : ${cmd}`,
    };
}