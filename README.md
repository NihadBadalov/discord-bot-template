# discord-bot-template

- Supports slash commands
- Supports "message commands" (chat commands with prefix)
- File-based event, slash- and message command handling
- Currently, only `TOKEN` is needed in the `.env` file
- `register_slash` script to register slash commands
- Before usage, configure `package.json` and `configs/config.json`
- Slash commands and message commands support cooldowns

## Running
The project uses [Bun](https://bun.sh). *To use node,* run the following in the project directory:

```
sed -i '' "s/bun/node/g" package.json
```

- Install dependencies:
```bash
bun/npm install
```

- To run:
```bash
bun/npm run dev
```

This project was created using `bun init` in bun v1.0.29. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
