// server.js

// Import required modules
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import dotenv from "dotenv";
import { z } from "zod";
import { getRandomTip } from "./tips.js"; // Import our tool function

// Load environment variables from .env file
dotenv.config();

// Create a new MCP server instance
const server = new McpServer({
    name: process.env.MCP_BOT_NAME || "MindAssist", // Default name if not in .env
    version: process.env.MCP_VERSION || "1.0.0",    // Default version if not in .env
});

/**
 * Register the `getDailyTip` tool with the MCP server.
 * This tool returns a randomly selected productivity or motivational tip.
 */
server.tool(
    "getDailyTip",
    {}, // No inputs required
    async () => {
        const tip = getRandomTip(); // Get a random tip from the tips module
        return {
            content: [
                {
                    type: "text",
                    text: `Tip of the day: ${tip}`, // Return tip in response
                },
            ],
        };
    }
);

/**
 * Initialize the MCP server and connect via standard input/output.
 */
async function init() {
    const transport = new StdioServerTransport(); // Use stdio transport for MCP
    await server.connect(transport);              // Establish connection
    console.log("✅ MindAssist MCP server is running and listening on stdio...");
}

// Start the server
init();
