/**
 * The Promise.any() static method takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfills, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
 */
const exampleAnyPromise = async () => {
  try {
    const result = await Promise.any([
      fetch("https://dummyjson.com/products/1").then((res) => res.json()),
      fetch("https://dummyjson.com/users/1").then((res) => res.json()),
      fetch("https://dummyjson.com/comments/1").then((res) => res.json()),
    ]);

    console.log("First fulfilled promise:", result);
    return result;
  } catch (error) {
    console.log("All promises failed:", error);
    throw new Error("No successful request");
  }
};

const displayData = async () => {
  try {
    const data = await exampleAnyPromise();
    console.log("Received Data:", data);
  } catch (error) {
    console.log("Error:", error.message);
  }
};

displayData();
