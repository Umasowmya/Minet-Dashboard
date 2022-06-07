// Button.stories.ts|tsx

import React from 'react';

import { ComponentMeta,ComponentStory } from '@storybook/react';

import Index from './index'
import explore from '../../../assets/explore.png'

export default {
  
  title: 'molecules/paymentMethod',
  component: Index,
} as ComponentMeta<typeof Index>;


const Template:ComponentStory<typeof Index> = () => <Index />;


export const paymentMethod = Template.bind({});



