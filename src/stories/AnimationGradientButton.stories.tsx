import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { AnimationGradientButton } from '../components/Buttons/AnimationGradientButton/AnimationGradientButton'

export default {
	title: 'Buttons/AnimationGradientButton',
	component: AnimationGradientButton,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof AnimationGradientButton>

const Template: ComponentStory<typeof AnimationGradientButton> = (args) => (
	<AnimationGradientButton {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
	text: 'My Button',
	type: 'btn-1',
	size: 'medium',
	boxShadow: false,
}
export const Button1 = Template.bind({})
Button1.args = {
	text: 'My Button',
	type: 'btn-1',
	size: 'medium',
	boxShadow: false,
}

export const Button2 = Template.bind({})
Button2.args = {
	text: 'My Button',
	type: 'btn-2',
	size: 'medium',
	boxShadow: false,
}

export const Button3 = Template.bind({})
Button3.args = {
	text: 'My Button',
	type: 'btn-3',
	size: 'medium',
	boxShadow: false,
}

export const Button4 = Template.bind({})
Button4.args = {
	text: 'My Button',
	type: 'btn-4',
	size: 'medium',
	boxShadow: false,
}

export const Button5 = Template.bind({})
Button5.args = {
	text: 'My Button',
	type: 'btn-5',
	size: 'medium',
	boxShadow: false,
}

export const Button6 = Template.bind({})
Button6.args = {
	text: 'My Button',
	type: 'btn-6',
	size: 'medium',
	boxShadow: false,
}

export const Button7 = Template.bind({})
Button7.args = {
	text: 'My Button',
	type: 'btn-7',
	size: 'medium',
	boxShadow: false,
}

export const Button8 = Template.bind({})
Button8.args = {
	text: 'My Button',
	type: 'btn-8',
	size: 'medium',
	boxShadow: false,
}

export const Button9 = Template.bind({})
Button9.args = {
	text: 'My Button',
	type: 'btn-9',
	size: 'medium',
	boxShadow: false,
}

export const Button10 = Template.bind({})
Button10.args = {
	text: 'My Button',
	type: 'btn-10',
	size: 'medium',
	boxShadow: false,
}

export const Button11 = Template.bind({})
Button11.args = {
	text: 'My Button',
	type: 'btn-11',
	size: 'medium',
	boxShadow: false,
}

export const Button12 = Template.bind({})
Button12.args = {
	text: 'My Button',
	type: 'btn-12',
	size: 'medium',
	boxShadow: false,
}
