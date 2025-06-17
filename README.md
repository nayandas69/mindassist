# MindAssist

MindAssist is a minimal and extensible MCP (Model Context Protocol) tool designed to deliver daily motivational advice and productivity tips. It is a stateless, lightweight utility that integrates seamlessly into any MCP-compatible system using standard input/output.

> [!Note]
> This project is not actively maintained and is provided as-is. It serves as a simple example of how to implement a tool server using the MCP protocol.

## Features

- [x] Lightweight and fast MCP tool server
- [x] Randomized daily productivity tips
- [x] Clean file structure and modular design
- [x] Environment variable support using `.env`
- [x] Written in modern JavaScript with ESM modules

## - [ ] Planned Features

- [ ] Tip categories (e.g. focus, wellness, planning)
- [ ] Localization support
- [ ] Support for quotes or affirmations from APIs
- [ ] Logging and analytics support

> [!TIP]
> This project is a great starting point if you're exploring MCP tools or want to build your own assistant-like features over the protocol.

## Getting Started

To get started, clone the repository and install the dependencies.

```bash
git clone https://github.com/nayandas69/mindassist.git
cd mindassist
npm install
npm install @modelcontextprotocol/sdk dotenv zod
```

## Configuration

Create a `.env` file in the project root and define the following values:

```env
MCP_BOT_NAME=MindAssist
MCP_VERSION=1.0.0
```

> \[!NOTE]
> These are optional. Default values will be used if not specified.

## Usage

Run the server using:

```bash
npm start
```

Once started, the MCP server will expose the `getDailyTip` tool via the standard I/O transport.

<details>
<summary><strong>Tool Schema: getDailyTip</strong></summary>

**Tool Name:** `getDailyTip`

**Input:** *None*

**Output Schema:**

```json
{
  "content": [
    {
      "type": "text",
      "text": "Tip of the day: Stay focused by working in short sprints."
    }
  ]
}
```

</details>

> \[!IMPORTANT]
> This project is designed to be stateless and requires no databases, user tokens, or API keys. It is entirely local and safe for sandboxed or offline use.


> \[!WARNING]
> This is not a chatbot or web server. It only communicates over the MCP protocol using standard input/output transport. Integration with other platforms (like Discord, Slack, or HTTP APIs) will require an adapter layer.

## License

This is free and unencumbered software released into the **public domain**.

You may use, modify, and distribute it without restriction. See the [UNLICENSE](https://unlicense.org/) for full legal text.


## Contributing

> \[!NOTE]
> At this time, contributions are not being accepted formally. However, feel free to fork the project and customize it for your needs.


## Author

Developed by [nayandas69](https://github.com/nayandas69) with clarity, simplicity, and open software principles in mind.


## > \[!TIP]

> Want to add your own set of tips? Simply edit the `tips.js` file and replace or extend the array of strings.
