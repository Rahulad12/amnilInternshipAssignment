const container = document.getElementById("container");

const exampleallPromise = async () => {
  try {
    const [product, user, comments] = await Promise.all([
      fetch("https://dummyjson.com/products/1").then((res) => res.json()),
      fetch("https://dummyjson.com/users/1").then((res) => res.json()),
      fetch("https://dummyjson.com/comments/1").then((res) => res.json()),
    ]);
    if (!product || !user || !comments) {
      throw new Error("Data not found");
    }

    const data = {
      product,
      user,
      comments,
    };
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const displayData = async () => {
  try {
    const data = await exampleallPromise();
    console.log(data);

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
            <h2>${data.product.title}</h2>
            <p>${data.product.description}</p>
            <p>${data.user.firstName + " " + data.user.lastName}</p>
            <p>${data.comments.body}</p>
        `;
    container.appendChild(card);
  } catch (error) {
    console.log(error);
  }
};

displayData();
