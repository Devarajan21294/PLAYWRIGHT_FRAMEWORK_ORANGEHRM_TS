import { log } from "node:console";
import CommonUtils from "./CommonUtils";

let commonUtils = require("crypto-js");
let fs = require("fs");
let path = require("path");

const SECRET_KEY = process.env.SECRET_KEY || "defaultSecretKey"; 
const currentDir =  __dirname;
// go one level above
const srcDir =path.resolve(currentDir,"..")

const envDir = path.resolve(srcDir,"env-files");
const envFilePath = `${envDir}\\.env.demo`;
if(process.env.ENV_NAME){
    const envFilePath = `${envDir}\\.env.${process.env.ENV_NAME}`;

}
console.log(envFilePath);

export function encryptEnvFile(){
    //read the .env file
    const envFileContent =fs.readFileSync(envFilePath,"utf8");
    const envLines= envFileContent.split("\n");

    //encrypt the values and update the array
    const encryptedLines = envLines.map((line)=>{
    const [key,value] = line.split("=");

    if(value){
        const encryptedValue= commonUtils.AES.encrypt(value,SECRET_KEY).toString();
        return `${key}=${encryptedValue}`;
    }
       return line;

    });

    // join the lines and write back to the .env file
    const updatedEnvContent = encryptedLines.join("\n");
    fs.writeFileSync(envFilePath,updatedEnvContent, "utf8");
    console.log("Encryption complete, Updated .env Files");
   
}
export function decryptEnvFile(){
    //read the .env file
    const envFileContent =fs.readFileSync(envFilePath,"utf8");
    const envLines= envFileContent.split("\n");

    //decrypt the values and update the array
    const decryptedLines = envLines.map((line)=>{
    const [key,value] = line.split("=");

    if(value){
        const decryptedValue= commonUtils.AES.decrypt(value,SECRET_KEY).toString(commonUtils.enc.utf8);
        return `${key}=${decryptedValue}`;
    }
       return line;

    });

    // join the lines and write back to the .env file
    const updatedEnvContent = decryptedLines.join("\n");
    fs.writeFileSync(envFilePath,updatedEnvContent, "utf8");
    console.log("Decryption complete, Updated .env Files");
   
}