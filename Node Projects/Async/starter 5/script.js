fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })

  .then((user) => {
    console.log("User Name", user.name);
    console.log("User Address", user.address.street);
  })
  .catch((ee) => {
    console.log(ee);
  })
  .finally(() => {
    console.log("Done");
  });
