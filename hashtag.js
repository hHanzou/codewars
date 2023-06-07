function generateHashtag (str) {
    str = str.match(/\b\w+\b/g)
    console.log(str)
    if(str == null || str.toString().length >= 140){
        console.log("false")
        return false
    }else{
        for(i = 0;i < str.length; i++){
            if(str[i] != "")
                str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
        }
        str = str.join("")
        str = "#" + str
        console.log(str)
        return str
        }
}

generateHashtag("")