const helper=require("./healper.js")
function main(cmdArgs){
const [,,operator,...item]=cmdArgs
const itamparse=helper.parse2(item)
switch (operator) {
    case "add":
        helper.add(itamparse)
        break;

    case "edit":
        helper.edit(itamparse)
        break;

    case "remove":
        helper.remove(itamparse)
        break;

    case "check":
    case "uncheck":
        // console.log(operator)
            operator=='check' ?helper.checked(itamparse,true) : helper.checked(itamparse,false)
        break;

    case "list":
        // console.log(operator)
            // operator=='check' ?helper.checked(itamparse,true) : helper.checked(itamparse,false)
        // helper.checked(itamparse) 
        helper.show(Object.keys( itamparse)[0])
        break;


    default:
        break;
}
}



main(process.argv)
