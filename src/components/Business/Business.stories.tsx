import { ComponentMeta, ComponentStory } from "@storybook/react";
import Business from "./Business";

export default {
  title: "Business",
  component: Business,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Business>;

const Template: ComponentStory<typeof Business> = () => <Business />;

export const Base = Template.bind({});
