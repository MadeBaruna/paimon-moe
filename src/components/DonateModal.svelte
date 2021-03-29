<script>
  import Button from './Button.svelte';
</script>

<div class="text-white ">
  <h1 class="font-semibold">Thank you! Hope you find it useful.</h1>
  <p class="mt-2">
    I made this website for fun when I have some spare time. Obviously will add more feature and update the data every
    update, because I like to explore the game and kind of min-maxing it.
  </p>
  <p class="mt-1">
    If you want to donate, your donation will definitely help on improving the site and motivating me to add more stuff
    to Paimon.moe! Thank you very much and have fun, hope you like it!
  </p>
  <p class="mt-1">
    You can also contributing to the project on <a
      target="_blank"
      class="text-primary hover:underline"
      href="https://github.com/MadeBaruna/paimon-moe"
      alt="github">Github</a
    >
  </p>
  <div class="flex flex-col md:flex-row mt-2">
    <a class="flex-1 mb-1 md:mb-0 md:mr-1" href="https://ko-fi.com/baruna" target="_blank">
      <Button className="w-full flex-1 flex flex-col items-center">
        <div class="flex h-8 mb-1 items-center">
          <img class="h-6 mr-1" src="/images/donation/ko-fi.png" alt="Ko-fi" />
          <img class="h-6" src="/images/donation/paypal.png" alt="PayPal" />
        </div>
        <span class="font-semibold">Support me on Ko-fi</span>
      </Button>
    </a>
    <a class="flex-1 md:ml-1" href="https://trakteer.id/baruna" target="_blank">
      <Button className="w-full flex flex-col items-center">
        <div class="flex mb-1 items-center">
          <img class="h-8 mr-1" src="/images/donation/trakteer.png" alt="Trakteer" />
          <img class="h-4 mr-1" src="/images/donation/gopay.png" alt="gopay" />
          <img class="h-4 mr-1" src="/images/donation/ovo.png" alt="gopay" />
          <img class="h-4" src="/images/donation/dana.png" alt="gopay" />
        </div>
        <span class="font-semibold">Support me on Trakteer</span>
      </Button>
    </a>
  </div>
</div>
