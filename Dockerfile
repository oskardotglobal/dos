FROM oven/bun:latest

COPY . .
RUN bun install

ENTRYPOINT bun run serve