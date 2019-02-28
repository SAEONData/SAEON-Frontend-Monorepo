import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
// import { linkTo } from '@storybook/addon-links';

import StoryWrapper from '../../.storybook/StoryWrapper'
import MapServiceWrapper from './src/index'
import { MapConfig } from './config/mapConfig'

storiesOf('2D-Maps/Map Service Wrapper', module)
  .addParameters({
    info: {
      inline: true,
      header: true,
      propTablesExclude: [MapServiceWrapper, StoryWrapper],
    }
  })
  // .add('Default state (no props)', () =>
  //   <MapServiceWrapper />,
  //   {
  //     info: {
  //       text: `
  //     This shows the basic usage of the MapServiceWrapper component with no props (default state).
  //     `
  //     }
  //   }
  // )
  .add('Default state (with config)', () =>
    <MapServiceWrapper mapConfig={MapConfig} />,
    {
      info: {
        text: `
        This shows the basic usage of the MapServiceWrapper component with just the mapConfig prop (default state with config).
        `
      }
    }
  )
  .add('With width and height set', () =>
    <MapServiceWrapper mapConfig={MapConfig} width={520} height={280} />,
    {
      info: {
        text: `
        This shows the basic usage of the MapServiceWrapper component with height and width props.
        `
      }
    }
  )
  .add('With region filter', () =>
    <MapServiceWrapper mapConfig={MapConfig} regionFilter={1} />,
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
    <MapServiceWrapper mapConfig={MapConfig} regionFilter={1} typologyFilter={1} statusFilter={1} />,
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
    <MapServiceWrapper mapConfig={MapConfig} onFeatureClick={action("data")} />,
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