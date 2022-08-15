import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

export default {
  title: "Footer",
  component: Footer,
  argTypes: {},
  decorators: [(story) => story()],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Base = Template.bind({});
