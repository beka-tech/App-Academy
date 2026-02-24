const fs = require("fs").promises;
(async () => {
  try {
    // await fs.mkdir("new_folder");
    await fs.mkdir("new_folder2");
    console.log("new_folder Created");
    await fs.rmdir("new_folder");
  } catch (error) {
    console.error(error);
  }
})();
