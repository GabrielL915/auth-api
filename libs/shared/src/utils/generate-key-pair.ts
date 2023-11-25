import { generateKeyPairSync } from "crypto";
import { writeFileSync } from "fs";

export const generaKeyPair = () => {

    const { publicKey, privateKey } = generateKeyPairSync("rsa", {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "spki",
            format: "pem"
        },
        privateKeyEncoding: {
            type: "pkcs8",
            format: "pem"
        }
    });

    writeFileSync("public.key", publicKey);
    writeFileSync("private.key", privateKey);
};

