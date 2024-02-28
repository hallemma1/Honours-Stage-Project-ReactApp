// fileUtils.js

async function fetchLabels() {
    try {
      const response = await fetch('../../ButtonLabels.txt');
      const text = await response.text();
      return text.split('\n');
    } catch (error) {
      console.error('Error reading the file:', error);
      return [];
    }
  }
  
  export { fetchLabels };
  