import { ComponentMeta, ComponentStory } from "@storybook/react";
import CallToAction from "./CTA";

export default {
  title: "CallToAction",
  component: CallToAction,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof CallToAction>;

const Template: ComponentStory<typeof CallToAction> = () => <CallToAction />;

export const Base = Template.bind({});
