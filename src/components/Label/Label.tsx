import React from 'react'
import './label.css'

interface LabelProps {
	label: string
	backgroundColor: string
	primary: boolean
}

export const Label = ({ label, backgroundColor, primary }: LabelProps) => {
	const mode = primary ? 'label_primary' : 'label_secondary'
	return (
		<div className={mode} style={{ backgroundColor: backgroundColor }}>
			{label}
		</div>
	)
}
