<script>
	import { twMerge } from 'tailwind-merge';
	// import { getContext } from 'svelte';
	// const group = getContext('group');

	/**
	 * @typedef {Object} ButtonProps
	 * @property {string} [variant="primary"] - The variant of the button (e.g., "primary", "secondary").
	 * @property {string} [type="button"] - The type of the button (e.g., "button", "submit", "reset").
	 * @property {string} [href] - The URL the hyperlink points to.
	 * @property {string} [color] - The color of the button (e.g., "brand", "accent", "neutral", "success", "warning", "error").
	 * @property {string} [size="md"] - The size of the button (e.g., "xs", "sm", "md", "lg", "xl").
	 * @property {string} [variant="solid"] - The variant of the button (e.g., "solid", "outline", "ghost").
	 */

	/**
	 * @type {ButtonProps} props - Button properties.
	 */
	export let props = {};
	export let { variant = 'solid', type = 'button', href, color = 'brand', size = 'md' } = props;

	const colorClasses = {
		brand:
			'text-neutral-950 bg-brand-950 text-white hover:bg-brand-900 focus:bg-brand-800 focus:ring-brand-500 active:bg-brand-900',
		accent:
			'text-white bg-accent-500 hover:bg-accent-600 focus:bg-accent-600 active:bg-accent-700 focus:ring-accent-500',
		neutral:
			'text-white bg-neutral-500 hover:bg-neutral-600 focus:bg-neutral-600 active:bg-neutral-700 focus:ring-neutral-500',
		success:
			'text-white bg-success-500 hover:bg-success-600 focus:bg-success-600 active:bg-success-700 focus:ring-success-500',
		warning:
			'text-white bg-warning-500 hover:bg-warning-600 focus:bg-warning-600 active:bg-warning-700 focus:ring-warning-500',
		error:
			'text-white bg-error-500 hover:bg-error-600 focus:bg-error-600 active:bg-error-700 focus:ring-error-500'
	};

	const sizeClasses = {
		xs: 'px-2 py-1 text-xs shadow-sm hover:shadow-xs',
		sm: 'px-3 py-2 text-sm shadow-md hover:shadow-sm',
		md: 'px-4 py-2 text-md shadow-lg hover:shadow-md',
		lg: 'px-5 py-3 text-lg shadow-xl hover:shadow-lg',
		xl: 'px-6 py-4 text-xl shadow-2xl hover:shadow-xl'
	};

	const borderClasses = {
		solid: 'border-2 border-transparent',
		outline: 'border-2 border-current',
		ghost: 'border-2 border-transparent'
	};

	let buttonClass;
	$: buttonClass = twMerge(
		'text-center rounded-lg transition-colors',
		colorClasses[color],
		sizeClasses[size],
		borderClasses[variant],
		$$props.disabled && 'cursor-not-allowed opacity-50',
		$$props.class
	);
</script>

<svelte:element
	this={href ? 'a' : 'button'}
	type={href ? undefined : type}
	{href}
	{...$$restProps}
	class={buttonClass}
	on:click
	on:change
	on:keydown
	on:keyup
	on:touchstart
	on:touchend
	on:touchcancel
	on:mouseenter
	on:mouseleave
>
	<slot />
</svelte:element>
