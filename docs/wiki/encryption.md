# 加密 对称加密

## AES-js

```js
  const PassPhrase = "this is my private key"
  const Bits = 1024
  // private key
  const MattsRSAkey = cryptico.generateRSAKey(PassPhrase, Bits)
  // public key
  const MattsPublicKeyString = cryptico.publicKeyString(MattsRSAkey)

  const PlainText = "Matt, I need you to help me with my Starcraft strategy."
  // 加密 - publickey
  const EncryptionResult = cryptico.encrypt(PlainText, MattsPublicKeyString)
  // 解密 - privatekey
  const DecryptionResult = cryptico.decrypt(EncryptionResult.cipher, MattsRSAkey)
  window.console.log(EncryptionResult.cipher)
  window.console.log(DecryptionResult.plaintext)
```

* 使用三方 cryptico

### js 版本

### go 版本

## RSA

## DES
