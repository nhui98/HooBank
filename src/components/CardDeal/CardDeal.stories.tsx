import { ComponentMeta, ComponentStory } from "@storybook/react";
import CardDeal from "./CardDeal";

export default {
  title: "CardDeal",
  component: CardDeal,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof CardDeal>;

const Template: ComponentStory<typeof CardDeal> = () => <CardDeal />;

export const Base = Template.bind({});
