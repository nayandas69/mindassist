// test-client.js

import { spawn } from "child_process";

// Spawn the MCP server as a child process
const server = spawn("node", ["server.js"], {
    stdio: ["pipe", "pipe", "pipe"],
});

// Log server output to the terminal
server.stdout.on("data", (data) => {
    console.log("🟢 Server said:", data.toString());
});

// Log errors
server.stderr.on("data", (data) => {
    console.error("🔴 Server error:", data.toString());
});

// Send a tool request to the server's stdin (simulate MCP call)
const request = {
    type: "tool-call",
    tool_name: "getDailyTip",
    input: {},
};
server.stdin.write(JSON.stringify(request) + "\n");
