import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import StoryWrapper from '../../.storybook/StoryWrapper'
import MapServiceWrapper from './src/index'

storiesOf('Map Service Wrapper', module)
  .addParameters({
    info: {
      inline: true,
      header: true,
      propTablesExclude: [MapServiceWrapper, StoryWrapper],
    }
  })
  .add('With no props (default)', () =>
    <MapServiceWrapper />,
    {
      info: {
        text: `
        This shows the basic usage of the MapServiceWrapper component with no props (default state).
        `
      }
    }
  )
  .add('With width and height set', () =>
    <MapServiceWrapper width={520} height={280} />,
    {
      info: {
        text: `
        This shows the basic usage of the MapServiceWrapper component with height and width props.
        `
      }
    }
  )
  .add('With region filter', () =>
    <MapServiceWrapper regionFilter={1} />,
    {
      info: {
        text: `
      This shows the basic usage of the MapServiceWrapper component witha region filter.

      - Filters:
       - Region: Western Cape
      `
      }
    }
  )
  .add('With multiple filters', () =>
    <MapServiceWrapper regionFilter={1} typologyFilter={1} statusFilter={1} />,
    {
      info: {
        text: `
      This shows the basic usage of the MapServiceWrapper component with multiple filters.

      - Filters:
       - Region: Western Cape
       - Typology: Mitigation
       - Status: Planned
      `
      }
    }
  )
  .add('With click event', () =>
    <MapServiceWrapper onFeatureClick={action("data")} />,
    {
      info: {
        text: `
        This shows the basic usage of the MapServiceWrapper component with a click event.

        The onFeatureClick event returns a "data" object that you can use. 
        
        In this example we just output "data" to the action logger.
        `
      },
      options: {
        showAddonPanel: true
      }
    }
  )