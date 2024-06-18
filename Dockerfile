FROM oven/bun:latest

RUN bun install

ENTRYPOINT bun run serve