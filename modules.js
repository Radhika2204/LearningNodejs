function add(a,b) {
    return a+b;
}
function sub (a,b){
    return a -b;
}

//module.exports =add // if we want to add sub fucntion it will override the nextone

module.exports={
    add, sub
}