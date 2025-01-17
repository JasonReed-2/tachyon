import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Queue up for matchmaking. Should cancel the previous queue if already in one.",
    request: {
        data: Type.Object({
            queues: Type.Array(Type.String(), { minItems: 1 }),
        }),
    },
    response: [
        { status: "success" },
        { status: "failed", reason: "invalid_queue_specified" },
        { status: "failed", reason: "already_ingame" },
    ],
});
