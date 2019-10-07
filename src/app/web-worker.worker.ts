/// <reference lib="webworker" />

function fibonacci(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}
addEventListener('message', (evt) => {
  const num = evt.data;
  postMessage(fibonacci(num));
});
