# Chattify

Simple bradcast chat applications

 Basic  commands to set up type script->

npm init -y
npm install typescript
npx tsc --init

in file tsconfig.json
replace 
"rootDir":"./src"
"outDir":"./dist"

Now for installing any dependency use

npm i jwt @types/ws



Chat App####

Schema?????

What the user can send
What the server can connect

Join a room

{
    "type":"join"
    "payload":{
        "roomid":"123"
        "name":"123"
    }
}