async function getUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    if (!response.ok) {
      throw new Error("Network Erro");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch Failed", error.message);
    throw error;
  }
}

getUser()
  .then((data) => console.log("resolved", data))
  .catch((error) => console.log(error.message));

// const user1 = getUser();
// console.log(user1);
