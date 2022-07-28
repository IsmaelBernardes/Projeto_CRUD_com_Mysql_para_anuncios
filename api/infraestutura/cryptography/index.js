const crypto = require('crypto');

const secret = '46582468259137913782648526497319';

const encrypt = value => {
    
    const valueString = String(value);
    
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv(
        'aes-256-cbc',
        Buffer.from(secret),
        iv
    );
    let encrypted = cipher.update(valueString);
    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return Object(`${iv.toString('hex')}:${encrypted.toString('hex')}`);
}

module.exports = {
    encrypt 
}