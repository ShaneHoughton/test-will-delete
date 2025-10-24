/**
 * Function that console logs "hello world"
 */
function helloWorld() {
  console.log('hello world');
}

// Export the function for use in other modules
module.exports = helloWorld;

// If running directly (not imported), execute the function
if (require.main === module) {
  helloWorld();
}
