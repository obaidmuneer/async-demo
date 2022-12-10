const notifyCustomer = async () => {
  try {
    const customer = await getCustomer(1);
    console.log(customer);
    if (customer.isGold) {
      const movies = await getTopMovies();
      console.log("Top movies", movies);
      const email = await sendEmail(customer.email, movies);
      console.log(email);
    }
  } catch (err) {
    console.log(err.message);
  }
};
notifyCustomer();

function getCustomer(id) {
  return new Promise((resolve, resject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Obaid Muneer",
        isGold: true,
        email: "obaidmuneer55@gmail.com",
      });
    }, 2000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["movie1", "movie2"]);
    }, 2000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Top movies sent to... " + email);
    }, 2000);
  });
}
