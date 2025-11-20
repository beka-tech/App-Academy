function bookMovieTicket(movie, seats, coupon) {
  const movies = {
    avatar: 12,
    dune: 10,
    oppenheimer: 14,
  };

  const price = movies[movie];

  for (let i = 0; i < seats; i++) {
    console.log(`Reserving seat ${i + 1} for ${movie}`);
  }

  let total = seats * price;

  if (coupon) {
    total = total - total * 0.1;
  }

  console.log(`Booked ${seats} seats for $${total}`);
}
