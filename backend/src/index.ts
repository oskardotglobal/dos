import * as path from "path";
import { WsServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto"

// Create the Server
export const server = new WsServer(serviceProto, {
    port: 3000,
    json: true
});

// Initialize before server start
async function init() {
    await server.autoImplementApi(path.resolve(__dirname, 'api'));
}

// Entry function
async function main() {
    await init();
    await server.start();
}

main();