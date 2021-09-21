import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Component } from 'react'
import { GradientButton } from '../components/Buttons/GradientButton/GradientButton'

export default {
	title: 'Buttons/GradientButton',
	component: GradientButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof GradientButton>

const Template: ComponentStory<typeof GradientButton> = (args) => (
	<GradientButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	text: 'My Button',
}
