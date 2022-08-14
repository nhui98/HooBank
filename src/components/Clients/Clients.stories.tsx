import { ComponentMeta, ComponentStory } from "@storybook/react";
import Clients from "./Clients";

export default {
  title: "Clients",
  component: Clients,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Clients>;

const Template: ComponentStory<typeof Clients> = () => <Clients />;

export const Base = Template.bind({});
