import * as fs from "fs";
import promptSync from "prompt-sync";

export function ReadLine(){
    let prompt = promptSync();
    let res = prompt("Usuario:")
    return res
}

export function Write(path:string,content:string){
    try {
            fs.writeFileSync(path, content);
            console.log(`File '${path}' created successfully.`);
        } catch (error) {
            console.error(`Error creating file: ${error}`);
        }
}

export function Read(path:string){
    return fs.readFileSync(path,'utf-8')
}