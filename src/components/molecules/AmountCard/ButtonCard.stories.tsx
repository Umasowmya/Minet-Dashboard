// Button.stories.ts|tsx

import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import Index from "./ButtonCard";
import { Button } from "@material-ui/core";
import Buttons from "../../atoms/Buttons/Buttons";
import VerticalHeader from "../../organisms/SideBar/index";

export default {
  title: "molecules/card1",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index {...args} />;

export const AmountCard = Template.bind({});
AmountCard.args = {};
