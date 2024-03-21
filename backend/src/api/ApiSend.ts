import { ApiCall } from "tsrpc";
import { server } from "..";
import { ReqSend, ResSend } from "../shared/protocols/PtlSend";

// This is a demo code file
// Feel free to delete it

export default async function (call: ApiCall<ReqSend, ResSend>) {
    // Error
    if (call.req.content.length === 0) {
        await call.error('Content is empty')
        return;
    }

    // Success
    let time = new Date();
    await call.succ({
        time: time
    });

    // Broadcast
    await server.broadcastMsg('Chat', {
        content: call.req.content,
        time: time
    })
}