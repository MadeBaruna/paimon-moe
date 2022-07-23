<script>
  export let path;
  export let size = 1;
  export let color = null;
  export let flip = null;
  export let rotate = 0;
  export let marginBottom = 0;
  export let spin = false;
  export let title = '';
  export let className = '';

  $: inverse = typeof spin !== 'boolean' && spin < 0 ? true : false;
  $: spintime = Math.abs(spin === true ? 2 : 0);
  $: spinfunc = inverse ? 'spin-inverse' : 'spin';
  if (Number(size)) size = Number(size);

  const getStyles = () => {
    const transform = [];
    const styles = [];
    if (size !== null) {
      const width = typeof size === 'string' ? size : `${size * 1.5}rem`;
      styles.push(['width', width]);
      styles.push(['height', width]);
    }
    styles.push(['fill', color !== null ? color : 'currentColor']);
    if (flip === true || flip === 'h') {
      transform.push('scaleX(-1)');
    }
    if (flip === true || flip === 'v') {
      transform.push('scaleY(-1)');
    }
    if (rotate != 0) {
      transform.push(`rotate(${rotate}deg)`);
    }
    if (transform.length > 0) {
      styles.push(['transform', transform.join(' ')]);
      styles.push(['transform-origin', 'center']);
    }
    if (marginBottom > 0) {
      styles.push(['margin-bottom', `${marginBottom}px`]);
    }
    return styles.reduce((cur, item) => {
      return `${cur} ${item[0]}:${item[1]};`;
    }, '');
  };
  $: style = getStyles();
</script>

<svg viewBox="0 0 24 24" {style} class={className}>
  {#if title}
    <title>{title}</title>
  {/if}
  {#if spin !== false}
    {#if inverse}
      <style lang="postcss">
        @keyframes spin-inverse {
          to {
            transform: rotate(-360deg);
          }
        }
      </style>
    {:else}
      <style lang="postcss">
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      </style>
    {/if}
    <g style={`animation: ${spinfunc} linear ${spintime}s infinite; transform-origin: center`}>
      <path d={path} />
    </g>
  {:else}
    <path d={path} />
  {/if}
</svg>

<style lang="postcss">
  svg {
    vertical-align: middle;
    display: inline-block;
  }
</style>
