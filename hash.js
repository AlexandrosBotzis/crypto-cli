/*
* Hash is an 'one-way' cryptographic function and it's a fixed length for any size of the source text
* */


let sha256 = require('sha256'),
    sha512 = require('sha512')


function returnHash256(str) {
    return sha256(str)
}

function returnHash512( str ) {
    let hash = sha512(str);
    return hash.toString('hex')
}

module.exports = {
    exSha256: returnHash256,
    exSha512: returnHash512
} ;
