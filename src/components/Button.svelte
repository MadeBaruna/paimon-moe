<script>
  export let className = '';
  export let disabled = false;
  export let size = 'md';
  export let color = 'blue';
  export let rounded = true;

  let px = 4;
  let py = 2;
  let textColor = 'white';
  let borderColor = 'white';

  $: switch (color) {
    case 'blue':
      textColor = 'white';
      borderColor = 'primary';
      break;
    case 'red':
      textColor = 'red-400';
      borderColor = 'red-400';
      break;
  }

  $: switch (size) {
    case 'md':
      px = 4;
      py = 2;
      break;
    case 'sm':
      px = 1;
      py = 1;
      break;
  }
</script>

<button
  {disabled}
  class={`text-${textColor} border-2 border-white border-opacity-25 ${rounded ? 'rounded-xl' : 'rounded-none'} px-${px} py-${py} transition duration-100
     hover:border-${borderColor} focus:outline-none focus:border-${borderColor} disabled:opacity-50 disabled:border-gray-600 ${className}`}
  on:click><slot /></button>
