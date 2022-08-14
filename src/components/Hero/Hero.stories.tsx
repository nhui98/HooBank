import { ComponentMeta, ComponentStory } from "@storybook/react";
import Hero from "./Hero";

export default {
  title: "Hero",
  component: Hero,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Base = Template.bind({});
