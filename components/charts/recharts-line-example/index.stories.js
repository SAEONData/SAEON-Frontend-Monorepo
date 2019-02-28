import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import StoryWrapper from '../../.storybook/StoryWrapper'
import RechartsLineExample from './src/index'

storiesOf('Charts/Recharts Line Example', module)
  .addParameters({
    info: {
      inline: true,
      header: true,
      propTablesExclude: [RechartsLineExample, StoryWrapper],
    }
  })
  .add('With async data load', () =>
    <RechartsLineExample />,
    {
      info: {
        text: `
          This shows the basic usage of the RechartsLineExample component async data loading.
        `
      }
    }
  )