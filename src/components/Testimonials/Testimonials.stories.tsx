import { ComponentMeta, ComponentStory } from "@storybook/react";
import Testimonials from "./Testimonials";

export default {
  title: "Testimonials",
  component: Testimonials,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Testimonials>;

const Template: ComponentStory<typeof Testimonials> = () => <Testimonials />;

export const Base = Template.bind({});
