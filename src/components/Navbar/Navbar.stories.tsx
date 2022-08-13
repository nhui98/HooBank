import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Base = Template.bind({});
