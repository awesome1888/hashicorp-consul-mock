module.exports = {
    debug: (message) => {
        if (__DEV__) {
            console.log(message);
            return;
        }
        console.log(JSON.stringify({ level: 'DEBUG', message }));
    },
    info: (message) => {
        if (__DEV__) {
            console.log(message);
            return;
        }
        console.log(JSON.stringify({ level: 'INFO', message }));
    },
    warn: (message) => {
        if (__DEV__) {
            console.log(message);
            return;
        }
        console.log(JSON.stringify({ level: 'WARNING', message }));
    },
    error: (message) => {
        if (__DEV__) {
            console.log(message);
            return;
        }

        if (message instanceof Error) {

            const stack = message.stack.split('\n');
            stack.shift();

            message = {
                message: message.message, // ;)))
                stack: stack.join('\n'),
            };
        }

        console.log(JSON.stringify({ level: 'ERROR', message }));
    },
};
