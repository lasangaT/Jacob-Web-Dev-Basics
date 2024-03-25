



document.addEventListener('DOMContentLoaded', function() {
    const customName = document.getElementById('customname');
    const us = document.getElementById('us');
    const uk = document.getElementById('uk');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');
    let storytext = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    let insertx = ["Willy the Goblin", "Big Daddy", "Father Christmas"]
    let inserty = ["the soup kitchen", "Disneyland", "the White House"]
    let insertz = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];
  
    function randomValueFromArray(array) {
      const random = Math.floor(Math.random() * array.length);
      return array[random];
    }
  
    randomize.addEventListener('click', function() {
      let newStory = storytext;
  
      if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('Bob', name);
      }
  
      if (document.getElementById('uk').checked) {
        const weight = Math.round(300 / 14) + ' stone';
        const temperature = Math.round((94 - 32) * (5 / 9)) + ' centigrade';
        newStory = newStory
          .replace('94 fahrenheit', temperature)
          .replace('300 pounds', weight);
      }
  
      const xItem = randomValueFromArray(insertx);
      const yItem = randomValueFromArray(inserty);
      const zItem = randomValueFromArray(insertz);
  
      newStory = newStory
        .replace(':insertx:', xItem)
        .replace(':inserty:', yItem)
        .replace(':insertz:', zItem)
        .replace(':insertx:', xItem);
  
      story.textContent = newStory;
      story.style.visibility = 'visible';
    });
  });
 