<script>
  export let variant = null
</script>

<button
  class="button"
  class:primary="{variant === 'primary'}"
  class:secondary="{variant === 'secondary'}"
  class:success="{variant === 'success'}"
>
  <slot />
</button>

<style>
  .button {
    padding: var(--size-font-small);
    border: none;
  }
  .primary {
    background: var(--color-base-white);
    color: var(--color-base-black);
  }
  .secondary {
    background: var(--color-base-black);
    color: var(--color-base-white);
  }
  .success {
    background: var(--color-base-green);
    color: var(--color-base-black);
  }
</style>
