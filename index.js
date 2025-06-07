const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 5000;
const defPath = path.join(__dirname, "pro.json");
const DEF_JSON = require(defPath);
app.use(cors());
app.use(express.json());

app.get("/api/:id", (req, res) => {
  const { id } = req.params;

  const filePath = path.join(__dirname, `${id}.json`);

  try {
    const PRO_JSON = require(filePath);

    res.json(PRO_JSON);
  } catch (error) {
    res.json(DEF_JSON);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
