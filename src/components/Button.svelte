<script>
  export let className = '';
  export let disabled = false;
  export let size = 'md';
  export let color = 'blue';
  export let rounded = true;

  let px = 'px-4';
  let py = 'py-2';
  let textColor = 'white';
  let borderColor = 'white';

  $: switch (color) {
    case 'blue':
      textColor = 'text-white';
      borderColor = 'border-primary';
      break;
    case 'red':
      textColor = 'text-red-400';
      borderColor = 'border-red-400';
      break;
    case 'green':
      textColor = 'text-green-400';
      borderColor = 'border-green-400';
      break;
  }

  $: switch (size) {
    case 'md':
      px = 'px-4';
      py = 'py-2';
      break;
    case 'sm':
      px = 'px-1';
      py = 'py-1';
      break;
  }
</script>

<button
  {disabled}
  class={`${textColor} border-2 border-white border-opacity-25 ${
    rounded ? 'rounded-xl' : 'rounded-none'
  } ${px} ${py} transition duration-100
     hover:${borderColor} focus:outline-none focus:${borderColor} disabled:opacity-50 disabled:border-gray-600 ${className}`}
  on:click><slot /></button
>
