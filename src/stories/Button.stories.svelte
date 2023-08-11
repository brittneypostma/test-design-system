<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/Button.svelte';
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		color: {
			description: 'The variant of the button. Defaults to `primary` when null',
			options: ['brand', 'accent', 'neutral', 'success', 'warning', 'critical', 'info'],
			control: { type: 'select' },
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'brand' }
			}
		},
		size: {
			control: {
				type: 'select'
			},
			options: ['xs', 'sm', 'md', 'lg', 'xl'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'null' }
			}
		},
		border: {
			control: {
				type: 'select'
			},
			options: ['solid', 'outline', 'ghost'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'null' }
			}
		},
		type: {
			control: {
				type: 'select'
			},
			options: ['button', 'submit', 'reset', 'undefined'],
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'null' }
			}
		},
		disabled: {
			control: 'boolean',
			table: { defaultValue: { summary: 'null' } }
		},
		class: {
			description: 'Any extra classes that need to be added to the icon',
			control: 'text'
		}
	}}
/>

<Template let:args>
	<Button {...args}>
		{args.label}
	</Button>
</Template>

<Story
	name="Default"
	args={{
		label: 'Button'
	}}
/>
