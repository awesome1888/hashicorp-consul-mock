module.exports = {
  debug: message => {
    if (__DEV__) {
      console.log(message);
      return;
    }
    console.log(JSON.stringify({ level: 'DEBUG', message }));
  },
  info: message => {
    if (__DEV__) {
      console.log(message);
      return;
    }
    console.log(JSON.stringify({ level: 'INFO', message }));
  },
  warn: message => {
    if (__DEV__) {
      console.log(message);
      return;
    }
    console.log(JSON.stringify({ level: 'WARNING', message }));
  },
  error: (message, error) => {
    console.dir(message);
    if (__DEV__) {
      console.log(message);
      console.dir(error);
      return;
    }

    if (error instanceof Error) {
      const stack = error.stack.split('\n');
      stack.shift();

      error = {
        message: error.message, // ;)))
        stack: stack.join('\n'),
      };
    }

    console.log(JSON.stringify({ level: 'ERROR', message, error }));
  },
};
