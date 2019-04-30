function leftPad(string, length){
    //string = 문자열 삽입
    // length = 문자열 길이 설정
    var str = string.length
    while (str < length){
        string = ' ' + string
        str = string.length
    }
    
    if (str >= length){
        return string
    }
}
console.log(leftPad('hello',10))