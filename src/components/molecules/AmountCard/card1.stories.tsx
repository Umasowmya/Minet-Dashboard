// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./card1";
import img from "../../../assets/avatar.png";

export default {
  title: "molecules/card1",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const AmountCard = Template.bind({});
AmountCard.args = { buttonval: "Sell max", label1: "0.0234510 " };
