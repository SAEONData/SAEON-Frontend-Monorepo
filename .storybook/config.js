import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { withInfo } from '@storybook/addon-info';
//import { withConsole } from '@storybook/addon-console';
//import { withNotes } from '@storybook/addon-notes';
// import { themes } from '@storybook/components';

addDecorator(withInfo);
//addDecorator(withNotes);
//addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addDecorator(
  withOptions({
    name: 'Components',
    //theme: themes.dark,
    showAddonPanel: false,
    // sortStoriesByKind: true
  })
);

// automatically import all files ending in *.stories.js
const req = require.context('../components', true, /.stories.js$/);
function loadStories() {
  req.keys().sort().forEach(filename => req(filename));
}

configure(loadStories, module);