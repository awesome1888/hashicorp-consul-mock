import { wrapError } from '../lib/util';

export default app => {
    app.get(
      '/',
      wrapError(async (req, res) => {
          res.status(200).send('Hello!');
      }),
    );
};
