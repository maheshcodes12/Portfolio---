// server.js
// const express = require("express");
// const fetch = require("fetch");
// const cors = require("cors");
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors()); // allow all frontend origins

const SERPAPI_KEY =
	"bfbce4c1f80c9bb21fea26e0254d18b1522b47af0c2bde0120e488fc84470040";

app.get("/api/scholar", async (req, res) => {
	const userId = "JT_vMF4AAAAJ";

	const url = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${userId}&api_key=${SERPAPI_KEY}`;

	try {
		const serpRes = await fetch(url);
		const data = await serpRes.json();
		res.json(data);
	} catch (err) {
		console.error("Error:", err);
		res.status(500).json({ error: "Failed to fetch scholar data" });
	}
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
