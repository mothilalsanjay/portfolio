const words = [ "React Developer", "Full Stack Developer", "Front End Developer"];
const textElement = document.getElementById("text");
let wordIndex = 0;
let charIndex = 0;

function typeWord() {
  if (charIndex < words[wordIndex].length) {
    textElement.textContent += words[wordIndex][charIndex];
    charIndex++;
    setTimeout(typeWord, 200); // Typing speed
  } else {
    setTimeout(deleteWord, 800); // Pause before deleting
  }
}

function deleteWord() {
  if (charIndex > 0) {
    textElement.textContent = textElement.textContent.slice(0, -1);
    charIndex--;
    setTimeout(deleteWord, 100); // Deleting speed
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeWord, 800); // Pause before typing the next word
  }
}

// Start the typing effect
typeWord();