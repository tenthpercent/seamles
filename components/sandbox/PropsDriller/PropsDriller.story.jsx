import React, { useEffect } from 'react';
import { action } from '@storybook/addon-actions';

import PropsDriller from './PropsDriller';

const logAction = action('Props received.');

const PropsLogger = (props) => {
  useEffect(() => logAction(props), [props]);
  return null;
};

const PropsOwner = (props) => (
  <PropsDriller toDrill={props}>
    <PropsLogger />
  </PropsDriller>
);

const ManagedPropsOwner = () => <PropsOwner foo="bar" />;

ManagedPropsOwner.story = {
  name: 'PropsDriller',
  parameters: {
    info: {
      inline: true,
      propTablesExclude: [PropsOwner],
      text: `
        ~~~js
        const logAction = action('Props received.');

        const PropsLogger = (props) => {
          useEffect(() => logAction(props), [props]);
          return null;
        };

        const PropsOwner = (props) => (
          <PropsDriller toDrill={props}>
            <PropsLogger />
          </PropsDriller>
        );
        ~~~
      `,
    },
  },
};

export default ManagedPropsOwner;
