const form = document.querySelector('#generator-form');
const countInput = document.querySelector('#count');
const maximumInput = document.querySelector('#maximum');
const message = document.querySelector('#message');
const result = document.querySelector('#result');

function readPositiveInteger(input) {
  const value = input.value.trim();

  if (!/^[1-9]\d*$/.test(value)) {
    return null;
  }

  const number = Number(value);
  return Number.isSafeInteger(number) && number > 0 ? number : null;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = '';
  result.textContent = '';

  const count = readPositiveInteger(countInput);
  const maximum = readPositiveInteger(maximumInput);

  if (count === null || maximum === null) {
    message.textContent = 'N 和 X 必须是正整数。';
    return;
  }

  const numbers = Array.from(
    { length: count },
    () => Math.floor(Math.random() * maximum) + 1,
  );

  result.textContent = numbers.join(' ');
});
