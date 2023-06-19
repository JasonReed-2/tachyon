import fs from "fs";
import { JSONSchema7 } from "json-schema";
import path from "path";
import { Config, createGenerator } from "ts-json-schema-generator";

const config: Config = {
    path: "src/schema/**/*.d.ts",
    tsconfig: "tsconfig.json",
    skipTypeCheck: true,
    expose: "none",
    encodeRefs: false,
    topRef: false,
    type: "Tachyon",
    additionalProperties: true, // TODO: eventually remove this when majority of protocol is defined
};

const schema = createGenerator(config).createSchema(config.type);

fs.mkdirSync("schema", { recursive: true });

for (const serviceId in schema.properties) {
    const service = schema.properties[serviceId] as JSONSchema7;
    fs.mkdirSync(path.join("schema", serviceId), { recursive: true });
    for (const endpointId in service.properties) {
        const endpoint = service.properties[endpointId] as JSONSchema7;
        fs.mkdirSync(path.join("schema", serviceId, endpointId), { recursive: true });
        for (const reqRes in endpoint.properties) {
            fs.writeFileSync(path.join("schema", serviceId, endpointId, reqRes + ".json"), JSON.stringify(endpoint.properties[reqRes], null, 4));
        }
    }
}

console.log("Schema generated!");

function generateAPIDocs() {
    // TODO
}
