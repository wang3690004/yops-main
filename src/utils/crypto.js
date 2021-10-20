'use strict'

import cryptoJs from 'crypto-js'
import { PUBLIC_KEY } from "@/utils/constants/constconstants";

export default {
  // 加密函數
  encrypt (word) {
    let key = cryptoJs.enc.Hex.parse(PUBLIC_KEY)
    let enc = ''
    if (typeof word === 'string') {
      enc = cryptoJs.AES.encrypt(word, key, {
        // iv: iv
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7
      })
    } else if (typeof word === 'object') {
      let data = JSON.stringify(word)
      enc = cryptoJs.AES.encrypt(data, key, {
        // iv: iv
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7
      })
    }
    let encResult = enc.ciphertext.toString()
    return encResult
  },
  // 解密函數
  decrypt (word) {
    if (!word) {
      return  ""
    }
    let key = cryptoJs.enc.Hex.parse(PUBLIC_KEY)
    let dec = cryptoJs.AES.decrypt(cryptoJs.format.Hex.parse(word), key, {
      // vi: vi
      mode: cryptoJs.mode.ECB,
      padding: cryptoJs.pad.Pkcs7
    })
    let decData = cryptoJs.enc.Utf8.stringify(dec)
    return decData
  }
}
