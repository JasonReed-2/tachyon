import { Type } from "@sinclair/typebox";

import { defineEndpoint } from "@/helpers";

export default defineEndpoint({
    description: "Sent when a client in a found match readies up.",
    response: [
        {
            status: "success",
            data: Type.Object({
                readyMax: Type.Integer(),
                readyCurrent: Type.Integer(),
            }),
        },
    ],
});
