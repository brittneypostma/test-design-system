/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
  stories: [
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '../src/stories/**/*.stories.svelte',
    '../src/stories/**/*.stories.svx',
    '../src/stories/**/*.stories.md',
  ],
  addons: [
    '@storybook/addon-svelte-csf',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    '@storybook/theming',
  ],
  refs: {
    'package-name': { disable: true }
  },
  framework: {
    name: '@storybook/sveltekit',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  staticDirs: ['../static']
};
export default config;
