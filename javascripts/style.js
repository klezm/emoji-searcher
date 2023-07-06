// https://stackoverflow.com/a/566445/9058671

const emojiSizeInput = document.getElementById('emoji-size');
const emojiContainer = document.querySelector('.emojis-container');

emojiSizeInput.addEventListener('input', () => {
  const emojiSize = emojiSizeInput.value;
  emojiContainer.style.fontSize = `${emojiSize}px`; // !important`;
  // emojiContainer.style.lineHeight = `${emojiSize * 0.8}px`;

  // Use the following lines if you want to change the font-size of each emoji in its div individually.
  // If you want to set the font-size style inline you have to add the event listener where the emoji divs are added to the html.
  // var rules = document.styleSheets[0].cssRules;
  // for (var i = 0; i < rules.length; i++) {
  //     if (rules[i].selectorText === '.native-emoji' && rules[i].style.fontSize !== '') {
  //         var rule = rules[i];
  //         rule.style.fontSize = `${emojiSize}px`;
  //         // document.styleSheets[0].cssRules[i].style.fontSize = `${emojiSize}px`;
  //         break;
  //     }
  // }
});
