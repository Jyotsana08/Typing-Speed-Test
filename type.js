function calculateSpeed() {
  const quote = document.getElementById('quote').innerText.trim();
  const input = document.getElementById('input').value.trim();
  const words = quote.split(' ');
  const inputWords = input.split(' ');

  let correctWords = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i] === inputWords[i]) {
      correctWords++;
    }
  }

  const accuracy = ((correctWords / words.length) * 100).toFixed(2);
  const wordsPerMinute = Math.round((correctWords / 5) / 0.5);

  const result = `Your accuracy: ${accuracy}%\nYour typing speed: ${wordsPerMinute} words per minute.`;

  document.getElementById('result').innerText = result;
}