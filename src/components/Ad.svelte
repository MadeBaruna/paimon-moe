<script>
  export let type;
  export let variant;
  export let id;

  let _class = '';
  export { _class as class };
</script>

<div class={_class} id="nn_{type === 'mobile' ? 'mobile_' : ''}{variant}{id}" />
