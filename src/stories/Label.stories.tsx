import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Label } from '../components/Label/Label'

export default {
	title: 'Example/Label',
	component: Label,
	argTypes: {
		backgroundColor: { control: 'color' },
	},
} as ComponentMeta<typeof Label>

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />

export const Primary = Template.bind({})
Primary.args = {
	label: 'My Label',
	backgroundColor: 'pink',
	primary: true,
}

export const Secondary = Template.bind({})
Secondary.args = {
	label: 'My Label',
	backgroundColor: 'pink',
	primary: false,
}

export const LongLabel = Template.bind({})
LongLabel.args = {
	label: "My Label is super long it's really boring to read",
	backgroundColor: 'pink',
	primary: false,
}

export const Blue = Template.bind({})
Blue.args = {
	label: 'My Label',
	backgroundColor: 'blue',
	primary: false,
}
