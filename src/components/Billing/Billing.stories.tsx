import { ComponentMeta, ComponentStory } from "@storybook/react";
import Billing from "./Billing";

export default {
  title: "Billing",
  component: Billing,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Billing>;

const Template: ComponentStory<typeof Billing> = () => <Billing />;

export const Base = Template.bind({});
