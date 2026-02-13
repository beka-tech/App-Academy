const gettodo = () => {
  const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );

  fetchPromise
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((products) => {
      // console.log(typeof data);
      // let total = 0;
      let price = products

      // products.forEach((product) => {
      //   total += product.price;
      // });

      // console.log("Total:", total.toFixed(2));
      console.log(price);
    })
    .catch((error) => {
      console.error(error);
    });
};

gettodo();
gettodo();
gettodo();
