const CryptoJS = require('crypto-js');

export class EncryptUserPassword{

    constructor() {
      this.secret_key = "756d7952d7085b069aec2bf58dafe6be994b5361409cbeb48129ae2a797b";
    }
  
    encryptData(data) {
      const dadosCriptografados = CryptoJS.AES.encrypt(data, this.secret_key).toString();
      return dadosCriptografados;
    }
    
    // Função para descriptografar dados
    DecryptData(data) {
      const bytes = CryptoJS.AES.decrypt(data, this.secret_key);
      const dadosDescriptografados = bytes.toString(CryptoJS.enc.Utf8);
      return dadosDescriptografados;
    }
  }