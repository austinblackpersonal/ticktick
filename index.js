import axios from "axios";
import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 1336;

const redirectUri = `http://localhost:${port}/callback`;

app.get("/test", (req, res) => {
    console.log("TEST");
})

app.get("/auth", (req, res) => {
    const authUrl = `https://ticktick.com/oauth/authorize?scope=tasks:write%20tasks:read&client_id=${process.env.CLIENT_ID}&state=state&redirect_uri=${redirectUri}&response_type=code`;
    res.redirect(authUrl);
})

app.get("/callback", async (req, res) => {
    res.send("<h1>This is my callback!</h1>");
    console.log("Hello!");
})

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})
