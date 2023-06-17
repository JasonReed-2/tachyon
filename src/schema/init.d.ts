import { DefineServiceSchema } from "../helpers";

export type InitService = DefineServiceSchema<{
    init: {
        response: {
            success: {
                tachyonVersion: string;
            };
        };
    };
}>;