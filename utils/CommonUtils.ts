import cryptoJs from 'crypto-js'
import { error } from 'node:console';

export default class CommonUtils{

    private secretKey: string;
/**
 * Initializing secret key  q
 */
    constructor(){
       // this.secretKey=process.env.SECRET_KEY ? process.env.SECRET_KEY:" ";
        
        if(process.env.SECRET_KEY){
        this.secretKey= process.env.SECRET_KEY;
        }
        else{
            throw new Error("Please enter the secretkey while starting execution");
        }
    }
/**
 * Provide Encryted data from string
 * @param data 
 * @returns 
 */
    public encryptData(data: string){
         const encryptedData= cryptoJs.AES.encrypt(data, this.secretKey).toString();
         console.log(encryptedData);
         return encryptedData;
    }
/**
 * Provide Decrypted data in string format
 * @param encData 
 * @returns 
 */
    public decryptData(encData: string){
        const decryptedData= cryptoJs.AES.decrypt(encData,this.secretKey).toString(cryptoJs.enc.Utf8);
        console.log(decryptedData);
        return decryptedData;

    }

}