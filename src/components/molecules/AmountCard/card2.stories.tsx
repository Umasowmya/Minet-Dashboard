// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./card2";

export default {
  title: "molecules/card2",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const AmountCard2 = Template.bind({});
AmountCard2.args = { label2: "USD coin(cash)", value: "$34,000.00" };
