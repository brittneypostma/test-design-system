<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/Button.svelte';
</script>

<Meta
	title="Button"
	component={Button}
	argTypes={{
		variant: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'tertiary', 'outline', 'link']
			}
		},
		size: {
			control: {
				type: 'select',
				options: ['xs', 'sm', 'md', 'lg', 'xl']
			}
		},
		border: {
			control: {
				type: 'select',
				options: ['solid', 'outline', 'ghost']
			}
		},
		type: {
			control: {
				type: 'select',
				options: ['button', 'submit', 'reset', 'undefined']
			}
		},
		disabled: {
			control: {
				type: 'boolean'
			}
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
