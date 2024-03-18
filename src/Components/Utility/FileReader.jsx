// fileUtils.js

async function fetchAboutText() {
    try {
      const response = await fetch('../../AboutText.txt');
      const text = await response.text();
      return text;
    } catch (error) {
      console.error('Error reading the file:', error);
      return [];
    }
  }
  
  export { fetchAboutText };
  