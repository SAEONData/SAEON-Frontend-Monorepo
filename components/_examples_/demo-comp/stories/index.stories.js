import React from 'react';

import { setAddon, storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import StoryWrapper from './StoryWrapper'
import DemoComp from '../src/index'

const style = {
  border: "1px solid gainsboro",
  padding: "30px 40px 30px 40px",
  backgroundColor: "whitesmoke"
}

storiesOf('DemoComp', module)
  .addParameters({
    info: {
      inline: true,
      header: true,
      propTablesExclude: [DemoComp, StoryWrapper],
    }
  })
  .add('With no props (default)', () =>
    <StoryWrapper>
      <DemoComp />
    </StoryWrapper>,
    {
      info: {
        text: `
        This shows the basic usage of the DemoComp component with no props.
        
        Notes: Default usage example
        `
      }
    }
  )
  .add('With custom text', () =>
    <StoryWrapper>
      <DemoComp customText="Some Custom Text" />
    </StoryWrapper>,
    {
      info: {
        text: `
        This shows the basic usage of the DemoComp component with a customText prop.

        'Notes: customText' prop example
        `
      }
    }
  )
  .add('Wrapped with click event', () =>
    <StoryWrapper onClick={() => console.log("What's up!?")}>
      <DemoComp />
    </StoryWrapper>,
    {
      info: {
        text: `
        This shows the basic usage of the DemoComp component wrapped with a click event.

        Notes: Alternate example with console output logged to action logger panel
        `
      },
      options: {
        showAddonPanel: true
      }
    }
  )