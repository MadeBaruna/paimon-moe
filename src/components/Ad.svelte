<script>
  export let type;
  export let variant;
  export let id;
  export let style;

  let _class = '';
  export { _class as class };
</script>

<div {style} class={_class} id="nn_{type === 'mobile' ? 'mobile_' : ''}{variant}{id}" />
