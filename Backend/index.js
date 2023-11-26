const app = require("./app");
require("dotenv").config();

const port = process.env.RUNNING_PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
