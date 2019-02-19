import '@babel/polyfill';

import Application from './lib/application';

Application.make().then(app => app.launch());
