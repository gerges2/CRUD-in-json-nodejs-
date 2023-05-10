const { Console } = require('console');
const fs = require('fs')
process.env.path_file = './data.json';
path_file=process.env.path_file||'data.json';
function parse2(data){
    const newArr = data.reduce((prev, elm, index, array) => {
    const [key , value]=elm.split("=")
    prev[key] = value //{0:"test"}
    return prev
    }, {})
    return newArr
}// parse data from string to array


function cheackFile(path){
if (fs.existsSync(path)){}
else {
    fs.writeFileSync(path,JSON.stringify([]))
    console.log("done")
}
}


function createid(arr){//arr is array of object
    let dataId = arr.length 
    return (arr [dataId-1].id)+1
}

cheackFile(path_file)
let read_data= JSON.parse( fs.readFileSync(path_file,"utf8"))

function add(item){
    const todo={
        id:createid(read_data),
        title:item.title,
        body :item.body,
        cheacked: false
    }
    read_data.push(todo)
    console.log(read_data)
    fs.writeFileSync('data.json', JSON.stringify(read_data), err => {
        if (err) { console.error(err);}
      });
}

function edit(item){
    read_data= update(item,read_data)
    fs.writeFileSync('data.json', JSON.stringify(read_data), err => {
        if (err) { console.error(err);}
      });
}

function remove(item){
    const newArr = read_data.filter(elm => elm.id != item.id)
    console.log(newArr)
    fs.writeFileSync('data.json', JSON.stringify(newArr), err => {
        if (err) { console.error(err);}
      });
}


function checked(item, check_bol){
    read_data= update2(item,read_data,check_bol)
    fs.writeFileSync('data.json', JSON.stringify(read_data), err => {
        if (err) { console.error(err);}
      });

}



function show (type){
    let data= JSON.parse( fs.readFileSync(path_file,"utf8"))

    switch (type) {
        case 'check':
            data.filter(elm => { if(elm.cheacked== true) console.log(elm); })
            break;


        case 'uncheck':
        data.filter(elm => { if(elm.cheacked== false) console.log(elm); })
            break;
    

        case 'all':
        data.filter(elm => console.log(elm))
            break;
    
        default: 
        console.log("plz select true option")
            break;
    }

}



function update(item,read_data){
let i=item
const newArr = read_data.map((elm, index, array)=>{
    if(elm.id==i.id){
        elm.title=i.title
        elm.body=i.body
    }
    console.log(elm)
    return elm

})



return newArr
}


function update2(item,read_data,bol){
    let i=item
    const newArr = read_data.map((elm, index, array)=>{
        if(elm.id==i.id){elm.cheacked=bol}
        console.log(elm)
        return elm
    
    })

    return newArr
}



module.exports={
add,edit,remove,parse2 ,checked,show
}