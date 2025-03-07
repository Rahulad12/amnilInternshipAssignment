/**
 * The Promise.race() static method takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that
 *
 * it wiil return a value that resolve fast
 */
const exampleRacePromise = async () => {
  try {
    const result = await Promise.any([
      fetch("https://dummyjson.com/products/1").then((res) => res.json()),
      fetch("https://dummyjson.com/users/1").then((res) => res.json()),
      fetch("https://dummyjson.com/comments/1").then((res) => res.json()),
    ]);

    return result;
  } catch (error) {
    console.log("All promises failed:", error);
    throw new Error("No successful request");
  }
};

const displayData = async () => {
  try {
    const data = await exampleRacePromise();
    console.log("Received Data:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
};

displayData();
