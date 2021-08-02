<script>
  import { fade } from 'svelte/transition';
  import { mdiCheck, mdiClose } from '@mdi/js';
  import { t } from 'svelte-i18n';
  import Button from '../../components/Button.svelte';
  import Check from '../../components/Check.svelte';
  import Icon from '../../components/Icon.svelte';
  import Input from '../../components/Input.svelte';
  import Select from '../../components/Select.svelte';

  const numberFormat = Intl.NumberFormat('en', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
  });

  const values = [
    { amount: 60, bonus: 0, firstTime: true },
    { amount: 300, bonus: 30, firstTime: true },
    { amount: 980, bonus: 110, firstTime: true },
    { amount: 1980, bonus: 260, firstTime: true },
    { amount: 3280, bonus: 600, firstTime: true },
    { amount: 6480, bonus: 1600, firstTime: true },
  ];

  const prices = {
    USD: {
      currency: '$',
      values: [0.99, 4.99, 14.99, 29.99, 49.99, 99.99],
    },
    IDR: {
      currency: 'Rp',
      values: [16000, 79000, 249000, 479000, 799000, 1599000],
    },
    EUR: {
      currency: '€',
      values: [1.19, 5.49, 16.99, 32.99, 54.99, 109.99],
    },
    BRL: {
      currency: 'R$',
      values: [4.9, 27.9, 84.9, 169.9, 279.9, 549.9],
    },
    MYR: {
      currency: 'RM',
      values: [3.9, 19.9, 59.9, 129.9, 199.9, 399.9],
    },
    GBP: {
      currency: '£',
      values: [0.99, 4.99, 14.99, 29.99, 49.99, 99.99],
    },
    CNY: {
      currency: '¥',
      values: [6.0, 30.0, 98.0, 198.0, 328.0, 648.0],
    },
    Custom: {
      currency: 'Custom',
      values: [0.99, 4.99, 14.99, 29.99, 49.99, 99.99],
    },
  };

  let usable = [];

  let currencyLabel = '';
  let usedPrices = [];

  const currencies = [
    { label: 'USD ($)', value: 'USD' },
    { label: 'IDR (Rp)', value: 'IDR' },
    { label: 'EUR (€)', value: 'EUR' },
    { label: 'BRL (R$)', value: 'BRL' },
    { label: 'MYR (RM)', value: 'MYR' },
    { label: 'GBP (£)', value: 'GBP' },
    { label: 'CNY (¥)', value: 'CNY' },
    { label: 'Custom', value: 'Custom' },
  ];

  let selected = null;
  let money = 200;
  let fate = 80;
  let result = null;
  let resultTotal = null;
  let resultTotalPrice = null;

  function onCurrencyChange() {
    usedPrices = prices[selected.value].values.slice();
    currencyLabel = prices[selected.value].currency;
    onChange();
  }

  function onChange() {
    result = null;
  }

  function calculateUsable() {
    usable = usable
      .slice()
      .map((e) => {
        const total = e.amount + (e.firstTime ? e.amount : e.bonus);
        return { ...e, total, perItem: e.price / total };
      })
      .sort((a, b) => a.perItem - b.perItem);
  }

  async function calculate() {
    onChange();

    usable = values.slice().map((e, i) => ({ ...e, price: usedPrices[i] }));
    calculateUsable();

    let currentMoney = money;
    const used = [];
    let total = 0;
    let totalPrice = 0;

    while (usable.length > 0) {
      const currentUsable = usable[0];
      if (currentMoney - currentUsable.price >= 0) {
        currentMoney -= currentUsable.price;
        total += currentUsable.amount + (currentUsable.firstTime ? currentUsable.amount : currentUsable.bonus);
        totalPrice += currentUsable.price;

        const usedItem = used.find((e) => e.amount === currentUsable.amount && e.firstTime === currentUsable.firstTime);
        if (usedItem) {
          usedItem.qty++;
        } else {
          used.push({ ...currentUsable, qty: 1 });
        }

        if (currentUsable.firstTime) {
          currentUsable.firstTime = false;
          calculateUsable();
        }
      } else {
        usable.shift();
      }
    }

    result = used;
    resultTotal = total;
    resultTotalPrice = totalPrice;
  }

  async function calculateFate() {
    onChange();

    usable = values.slice().map((e, i) => ({ ...e, price: usedPrices[i] }));
    calculateUsable();
    const usableTemp = usable.slice();

    let currentGenesis = fate * 160;
    const used = [];
    let total = 0;
    let totalPrice = 0;

    while (currentGenesis > 0 && usable.length > 0) {
      const currentUsable = usable[0];
      const totalGenesis =
        currentUsable.amount + (currentUsable.firstTime ? currentUsable.amount : currentUsable.bonus);
      if (currentGenesis - totalGenesis >= 0) {
        currentGenesis -= totalGenesis;
        total += totalGenesis;
        totalPrice += currentUsable.price;

        const usedItem = used.find((e) => e.amount === currentUsable.amount && e.firstTime === currentUsable.firstTime);
        if (usedItem) {
          usedItem.qty++;
        } else {
          used.push({ ...currentUsable, qty: 1 });
        }

        if (currentUsable.firstTime) {
          currentUsable.firstTime = false;
          usableTemp.find((e) => e.amount === currentUsable.amount).firstTime = false;
          calculateUsable();
        }
      } else {
        usable.shift();
      }
    }

    let min = Number.MAX_SAFE_INTEGER;
    let current = null;
    for (const u of usableTemp) {
      const usageAmount = u.amount + (u.firstTime ? u.amount : u.bonus);
      if (Math.abs(currentGenesis - usageAmount) < min) {
        current = u;
        min = Math.abs(currentGenesis - usageAmount);
      }
    }
    total += current.amount + (current.firstTime ? current.amount : current.bonus);
    totalPrice += current.price;
    const usedItem = used.find((e) => e.amount === current.amount && e.firstTime === current.firstTime);
    if (usedItem) {
      usedItem.qty++;
    } else {
      used.push({ ...current, qty: 1 });
    }

    result = used;
    resultTotal = total;
    resultTotalPrice = totalPrice;
  }
</script>

<div class="bg-item rounded-xl p-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4">
    <div>
      <Select
        options={currencies}
        on:change={onCurrencyChange}
        bind:selected
        placeholder={$t('calculator.fate.currency')}
      />
      {#if selected !== null}
        <div class="mt-2">
          {#each values as value, i}
            <div class="mb-1 rounded-xl border-background border p-2">
              <div class="flex flex-row items-center mb-1">
                <img src="/images/genesis_crystal.png" alt="Genesis Crystal" class="w-6 mr-2" />
                <p class="text-white">
                  {numberFormat.format(value.amount)} + {numberFormat.format(
                    value.firstTime ? value.amount : value.bonus,
                  )} = {numberFormat.format(value.amount + (value.firstTime ? value.amount : value.bonus))}
                </p>
              </div>
              <div class="flex flex-row items-center">
                <div class="w-32">
                  <Input className="text-center" bind:value={usedPrices[i]} type="number" />
                </div>
                <div class="flex flex-row items-center">
                  <Check inverted bind:checked={value.firstTime} on:change={onChange} />
                  <p class="text-white">{$t('calculator.fate.firstTime')}</p>
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    {#if selected !== null}
      <div>
        <Input placeholder="Total Money" bind:value={money} type="number" on:change={onChange} />
        <div class="mb-1" />
        <Button className="w-full" on:click={calculate}>
          {$t('calculator.fate.calculate', { values: { currency: currencyLabel, value: numberFormat.format(money) } })}
        </Button>
        <p class="text-white my-6 text-center">OR</p>
        <Input placeholder="Total Fate" bind:value={fate} type="number" on:change={onChange} />
        <div class="mb-1" />
        <Button className="w-full" on:click={calculateFate}>
          {$t('calculator.fate.calculateFate', { values: { value: fate } })}
          <img class="ml-1 w-6 inline" src="/images/intertwined_fate.png" alt="Fate" />
        </Button>
      </div>
    {/if}
    {#if result !== null}
      <div
        transition:fade={{ duration: 100 }}
        class="rounded-xl bg-background p-4 block md:inline-block"
        style="height: fit-content; width: fit-content;"
      >
        <table>
          <tr>
            <th class="text-white pr-2 text-right">{$t('calculator.fate.amount')}</th>
            <th class="text-white pr-2 text-right">{$t('calculator.fate.genesis')}</th>
            <th class="text-white pr-2 text-center">{$t('calculator.fate.first')}</th>
            <th class="text-white pr-2 text-right">{$t('calculator.fate.total')}</th>
            <th class="text-white text-right">{$t('calculator.fate.price')}</th>
          </tr>
          {#each result as res}
            <tr>
              <td class="border-t border-gray-700 text-white pr-2 text-right">
                {res.qty}
                <Icon size={0.5} path={mdiClose} />
              </td>
              <td class="border-t border-gray-700 text-white pr-2 text-right">{res.amount}</td>
              <td class="border-t border-gray-700 text-white pr-2 text-center">
                <Icon size={0.8} path={res.firstTime ? mdiCheck : mdiClose} />
              </td>
              <td class="border-t border-gray-700 text-white pr-2 text-right">
                {numberFormat.format((res.amount + (res.firstTime ? res.amount : res.bonus)) * res.qty)}
              </td>
              <td class="border-t border-gray-700 text-white text-right">
                {numberFormat.format(res.price * res.qty)}
              </td>
            </tr>
          {/each}
          <tr>
            <td class="border-t border-gray-700 text-white text-right whitespace-no-wrap" colspan={5}>
              {$t('calculator.fate.totalGenesis')}
              {numberFormat.format(resultTotal)}
              <img class="mr-1 w-6 inline" src="/images/genesis_crystal.png" alt="Genesis" />
              ({Math.floor(resultTotal / 160)}
              <img class="w-6 inline" src="/images/intertwined_fate.png" alt="Fate" />)
            </td>
          </tr>
          <tr>
            <td class="border-t border-gray-700 text-white text-right whitespace-no-wrap" colspan={5}>
              {$t('calculator.fate.totalPrice')}
              {currencyLabel}{numberFormat.format(resultTotalPrice)}
            </td>
          </tr>
        </table>
      </div>
    {/if}
  </div>
</div>
