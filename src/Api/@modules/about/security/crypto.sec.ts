import { createCipheriv, createDecipheriv, randomBytes } from 'crypto'

const key = randomBytes(32);
const algorithm = 'aes-256-cbc';
const iv = randomBytes(16);

export const encrypt = (text: any | any[]) => {
    let cipher = createCipheriv(algorithm, Buffer.from(key), iv);
    let encrypted = cipher.update(JSON.stringify(text));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return {
        iv: iv.toString('hex'),
        encryptedData: encrypted.toString('hex')
    };
}

export const decrypt = (text: any | any[]) => {
    let iv = Buffer.from(text.iv, 'hex');
    let encryptedText = Buffer.from(text.encryptedData, 'hex');

    let decipher = createDecipheriv(algorithm, Buffer.from(key), iv);

    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return JSON.parse(decrypted.toString());
}
