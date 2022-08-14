import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stats from "./Stats";

export default {
  title: "Stats",
  component: Stats,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Stats>;

const Template: ComponentStory<typeof Stats> = () => <Stats />;

export const Base = Template.bind({});
