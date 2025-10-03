import * as fs from "fs";
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