const url="https://dog.ceo/api/breeds/list/all";
let apilist={};

fetch(url).then(res=>res.json()).then(res=>{
    console.log(res)


// apilist.push(res)
apilist=res.message;
printData();
})
const div=document.createElement("h1")
div.innerHTML="SEARCH DOGS"
document.body.append(div)
const inp= document.createElement("input");
inp.type="text";
const body = document.getElementsByTagName("body")[0]
body.append(inp)
console.log(body)
const table=document.createElement("table");
body.append(table)

function printData(searchText){

    console.log(apilist)
    table.innerHTML="";
    let data =Object.keys(apilist)
    if (searchText)
    data=data.filter(v=> v.startsWith(searchText.toLowerCase()))

    
for( let i of  data){

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const td1 = document.createElement("td");


tr.append(td,td1)
table.appendChild(tr)

    td.innerHTML = i.toUpperCase()
    td1.innerHTML = apilist[i].join().toUpperCase();
    console.log(i)
}

}


inp.addEventListener("keyup",(e)=>{
    console.log(e.target.value)
printData(e.target.value)
})

