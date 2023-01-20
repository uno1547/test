// 입력받아 단위변환해서 출력하는프로그램
// let inputCM = prompt('몇cm인가요?', 'ex)3cm')
// console.log(typeof(inputCM))
// let convCM = Number(inputCM)
// console.log(typeof(convCM))
// let resultInch = convCM * 0.393
// alert(`${convCM}cm는${resultInch}inch입니다`
/*const x = 10;
const date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth())
console.log(date.getDate())
console.log(date.getHours())*/
// 사용자에게 숫자를 입력받아 양수,0,음수를 구분하는 프로그램을만들어보세요
/*const a = Number(prompt('input number',''))
console.log(a)
if(a > 0){
    alert('입력받은수는 양수입니다')
}else if(a == 0){
    alert('입력받은수는 0입니다')
}else{
    alert('입력받은수는 음수입니다')
}*/
/*let a = -1
console.log(-10 <= a <= -1)
console.log((-10 <= a)&&(a <= -1))*/
/*const result = (100>200)
?prompt('값을입력해주세요',',')
:confirm('버튼을 클릭해주세요')
alert(result)*/
/*
const rawInput = prompt('태어난해를입력하세요','')
const year = Number(rawInput)
const e = year % 12
let result
switch (e) {
    case 0:
        result = '원숭이'
        break;
    case 1:
        result = '닭'
        break;
    case 2:
        result = '개'
        break;            
    case 3:
        result = '돼지'
        break;    
    case 4:
        result = '쥐'
        break;
    case 5:
        result = '소'
        break;
    case 6:
        result = '호랑이'
        break;  
    case 7:
        result = '토끼'
        break;           
    default:
        break;
}
alert(`${year}년생은${result}띠입니다`)*/
// if(alert('출력')){
//     console.log('출력')
// }else{
//     console.log('출력아님')
// }
// true && alert('출력A')
// true && console.log('콘솔은참')
// // true || alert('출력A')
/*const fruitsA = ['사과', '배', '바나나']
console.log(fruitsA)
fruitsA.splice(2,2)
console.log(fruitsA)*/
/*기본for문
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
forin문
for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}*/
// const array = [1,2,3,4,5,6,7]
// let output = 0 
// for (const a in array){
//     console.log(array[a])
// }
// for (let i = 0; i <= 100; i++){
//     output += i
// }
// console.log(output)
// output = 1
// for (let i = 1; i <= 100; i++){
//     output *= i
// }
// console.log(output)
// let i = 0
// while (a=3) {//조건이 참임 왜인진모름
//     alert(`${i}번째반복입니다`)
//     i = i + 1
// }
// function(hello)
// function(gj){
//   let a = 3;

// }
// hello world
//     space
// 		tab

/*태어난 연도를 입력받아 띠 출력하기 60갑자계산기
원숭이 닭 개 돼지 쥐 소 호랑이 토끼 용 뱀 말 양
0  1    2  3  4  5  6    7  8 9 10 11
신   유  술  해 자 축  인    묘 진 사 오  미
갑을병정무기경신임계
4 56 789 0 1 2 3*/
// const rawInput = prompt('태어난 해를 입력하세요', '')
// const year = Number(rawInput)
// let 띠
// let animals = "신,유,술,해,자,축,인,묘,진,사,오,미".split(",")
// 띠 = animals[year % 12]
// console.log(띠)
// let 간
// let gans = "경,신,임,계,갑,을,병,정,무,기".split(",")
// 간 = gans[year % 10]
// console.log(간)
// console.log(`태어난${year}년은 ${간}${띠}년입니다`)


// let numbers = ["1","2","3"]
// let sliced = numbers.splice(2,2) //2,2나 2,3이나 동일 오른쪽방향으로 제거하는듯 
// console.log(numbers)
// console.log(sliced)

// let i = 0 
// while(confirm('계속할거야?')) {
//     alert(`${i}번째반복입니다`)
//     i += 1
// }
// for(let i = 0; i < 5; i++){ //01234
//     console.log(i)
// }

// for(let i = 0; i < 5; ++i){ //01234
//     console.log(i)
// }
//별뱉는함수(중첩for문)
// let output = ""
// for(let i = 0; i <= 5; i++) {
//     let res = ""
//     for(let j = 0; j <= i; j++) {
//         res += "*"
//     }
//     output += (res + "/n")
//     console.log(output)
// }
/*let output = ""성공이지만 뭔가 어설픔?
for(let i = 0; i <= 3; i++) {
    let res = ""
    for(let j = 0; j <= i; j++){
        res += "*"
    }
    output = output + res + "\n"
}
console.log(output)
*/
/*let output = ""
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        output += "*"
    }
    output += "\n"
}*/
/*  *
   ***
  *****
 *******
*********
*/
/*let output = ""
for(let i = 1; i <= 5; i++) {
    for(let j = 1; j <= 2*i-1; j++){
        output += "*"
    }
    
    output += "\n"
}
console.log(output)

const array = []
for(const i = 0; i < 3; i++) {
    array.push((i+1)*3)
}
console.log(array)*/
/* for in 구문과 for of 구문 차이
const array = [1,12,43,55,67]
for(const i in array) {
    console.log(i)
}
for(const j of array) {
    console.log(j)
}*/
//1부터 100까지의 숫자를 곱한값을 계산하세요
/*let output = 1
for(let i = 1; i <= 100; i++) {
    output *= i
}
console.log(output)*/
/*

*/
/*다이아 별뱉기 상당히 귀찮음 성공
let output = ''
const size = 5
for(let i = 0; i < 10; i++) {
    if(i <= size) {
        for(let k = 1; k <= 5-i; k++) {
            output += ' '
        }
        for(let j = 1; j <= 2*i-1; j++) {
            output += '*'
        }
    }else{
        for(let k = 1; k <= i-5; k++) {
            output += ' '
        }
        for(let j = 1; j <= 2*(10-i)-1; j++) {
            output += '*'
        }
    }
    output += '\n'
}
console.log(output)
*/
// 매개변수로 배열,숫자를 받을수있고 이중 최솟값을 찾아주는함수
/* 
*/
// function min(num,...array) {
//     let output
//     let items
//     if (Array.isArray(num)) { //숫자면 false, 배열이면 true
//         output = 
//     } else {

//     }
// }
//a부터b까지 범위를 지정했을때 범위안의 숫자를 모두 곱하는 함수를 만들어보시오 1,3 >1*2*3 3,5 > 3*4*5 성공
/*function multiplyAll (a, b) {
    let output = 1
    for (i = a; i <= b; i++) {
        output *= i
    }
    return output
}
console.log(multiplyAll(3,5))
console.log(multiplyAll(1,5))
console.log(multiplyAll(1,3))*/
/*function callThreeTimes(callback) { //매개변수로 콜백함수받음
    for (let i = 0; i < 3; i++) {
        callback(i)
    }
}
callThreeTimes(function (i) { //인수로 익명 콜백함수 넣어줌
    console.log(`${i}번째 함수호출`)
})*/
/*const numbers = [21,43,11,55]
numbers.forEach(function(a,b,c) {
    console.log(`${a}는 ${b}번째요소`)
    console.log(`${c}는 forEach 부른배열`)
})
let nums = numbers.map(function(a,b){
    console.log(b)
    return a+1
})
console.log(nums)*/

// console.log(() => console.log('hello'))
// num = [1,2,3]
// num.forEach(() => {
//     console.log('hello')
// });
/*
let a = 'out' // 전역변수 a만 존재할경우
{
    console.log(a) // 'out'
}
{
    let a = 'ina' //블록내부에서 선언한 a는 외부의 a를 가림 > 'ina'출력
    a = 'newina'
    console.log(a)
}

{
    a = 'in' // a를 블록안에없으니 밖의 'out'을 찾고 재할당
    console.log(a)
}
console.log(a) // 밖의 a가출력 안에서 재할당된 'in'
*/
/*
const student = {}
student.name = "peter"
student["age"] = 13 //객체의 속성을 대괄호로 접근하려면 ""(따옴표)필수!
student["special"] = "exercise" //객체의 속성값은 문자열,숫잦,함수,불 등등 가능
console.log(student) 
console.log(JSON.stringify(student,null,2))
const student2 = {
    name : "jack" , 
    age : 14 , 
    special : 'soccer'
}
console.log(student2)
console.log(student2.name) //온점으로 접근시 온점만가능
console.log(student2["name"]) //괄호로 접근시 문자열만가능
console.log(student2["age"])
console.log(student2.special)
*/
/*
const bread = {
    ko : '빵',
    lang : {
        ko : '한국어'
    },
    print : function(lang) {
        console.log(`${this.ko}는${this.lang[lang]}로 ${this[lang]}입니다}`)
                    // '빵'는 한국어로 빵입니다
    }
}
bread.print('ko')
*/
/*
const zuhwi = {
    name : 'zuhwi', //속성의 키는 식별자,문자열 둘다 가능한듯 
    "age" : 25
}
console.log(zuhwi)
console.log(zuhwi.name)
console.log(zuhwi.age)
console.log(zuhwi["name"])
console.log(zuhwi["age"]) // 괄호로 접근시 따옴표필요 
*/
/*
const h = document.querySelector("h1")
let count = 0
document.addEventListener("keyup",() => { //keydown : 입력할때, 꾹누르고있을때 둘다 실행
    h.textContent = `키up : ${++count}`   //keyup: 키가 떨어질때입력할때만가능 꾹느르면 실행 X
} )                                      //keypress: 입력할때 실행, 꾹누르면 실행X
*/
/*
const textarea = document.querySelector('textarea')
const h = document.querySelector('h1')
textarea.addEventListener('keyup', () => {
    const length = textarea.value.length 
    h.textContent = `글자수 : ${length} `
}
)*/
//키보드 리더 ㅋㅋ
/*
const q = document.querySelector('h1.q')
const w = document.querySelector('h1.w')
const e = document.querySelector('h1.e')
const r = document.querySelector('h1.r')
const d = document.querySelector('h1.d')
const f = document.querySelector('h1.f')
let keysArray = ["q", "w", "e", "r", "d", "f"]
                //0    1    2    3    4    5
function keyDownStyle (key, keyEvent) {
    console.log(key) // this window객체
    key.style.backgroundColor = 'red'
    key.textContent = `${keyEvent}`
    // this.textContent = `${}`
}
function keyUpStyle (key) {
    key.textContent = ""
    key.style.backgroundColor = 'none'
}
document.addEventListener('keydown', (evt) => { //event 객체들어가고, 함수실행
    switch(evt.key) { //key 에따라 분기
        case (keysArray[0]):
            // console.log(evt.key) //q
            // console.log('qdown')
            keyDownStyle(q, evt.key)
            break
        case (keysArray[1]):
            keyDownStyle(w, evt.key)
            break
        case (keysArray[2]):
            keyDownStyle(e, evt.key)
            break
        case (keysArray[3]):
            keyDownStyle(r, evt.key)
            break
        case (keysArray[4]):
            keyDownStyle(d, evt.key)
            break
        case (keysArray[5]):
            keyDownStyle(f, evt.key)
            break
    }
    // if(evt.key === "q") {
    //     q.textContent = `${evt.key}` //여기서this는 뭘까
    //     q.style.backgroundColor = 'red'
    //     q.style.transition = '1s'
    // }else if() {

    // }
})
document.addEventListener('keyup', (evt) => {
    switch(evt.key) {
        case(keysArray[0]):
            keyUpStyle(q)
            break
        case(keysArray[1]):
            keyUpStyle(w)
            break
        case(keysArray[2]):
            keyUpStyle(e)
            break
        case(keysArray[3]):
            keyUpStyle(r)
            break
        case(keysArray[4]):
            keyUpStyle(d)
            break
        case(keysArray[5]):
            keyUpStyle(f)
            break
    }
})
*/
// document.addEventListener("keydown", (evt) => {
//     console.log(typeof(evt.code) != 'undefined' ? evt.code: evt.keyCode)
// })
//이벤트리스너가 익명함수일시 this를 이용해서, 호출한객체 접근가능
/*
const listener = function(evt) {
    const owner = this
    console.log(owner)
    console.log(this)
}
const oner = document.querySelector(".owner")
oner.addEventListener('click', listener()) //괄호잇고없고차이가뭐지
//listener()이면 437438에서 this는 window 클릭안했는데 출력됌,코드 읽는과정에서 실행이돼서그런가? click이벤트자체가사라짐 
//listener이면 클릭했을때 owner가 잘출력됌
*/
/*
let selectInput = document.querySelector("select")
console.log(selectInput)
selectInput.addEventListener('change', (evt) => {
    let options = evt.currentTarget.options //각option들과 selectedIndex출력
    let index = options.selectedIndex //true?
    console.log(options)
})
*/
/*if(undefined) { //undeifned는 부울형 false로 취급
    console.log('undefined is true')
} else {
    console.log('undefined is false')
}*/


//cm 를 입력받고, select태그로 단위선택시 출력
/*
let inputTag = document.querySelector("input")
let valueSpan = document.querySelector("span")
let selectTag = document.querySelector("select")
inputTag.addEventListener("change", () => {
    // let inputValue = evt.currentTarget.value 인수로전달을하는게좋은지 calculator자체에서 스스로계산할지?
    // console.log(inputTag.value) //evt.currentTarget ,inputtag둘중뭘쓰는게맞는건지?
    // console.log(inputValue)
    calculator()
})
selectTag.addEventListener('change', () => {
    calculator()
})
    // console.log('hello')
    // console.log(selectTag) //select 태그가뜨긴하지만 이select태그의 value가없다 근데 아랫줄에서 어캐읽음 ㅋㅋ
    // let index = selectTag.selectedIndex
    // console.log(selectTag.selectedOptions)
    // console.log(selectTag[index].value)// change 발생시,현재 select태그에표시된 option의 value출력
    // console.log(selectTag.value) // ?? 왜 되는지 모르겟음
    // let currentOption = evt.currentTarget.value
    // console.log(currentOption)
function calculator() {
    let result 
    let inputValue = Number(inputTag.value) //사용자입력 숫자
    let unit = selectTag.value //사용자선택단위상수
    console.log(typeof(inputValue))
    // isNaN(inputValue) ? console.log('숫자입력하세요') : ''
    if(isNaN(inputValue)) {
        console.log("number is required")
        valueSpan.textContent = '숫자입력하세여'
        return // return키워드 NaN나오면 함수종료 
    }
    console.log(inputValue)
    console.log(unit)
    result = unit * inputValue
    valueSpan.textContent = `${result}`
}
*/
//input,select에서 change가 발생하는데, input의value값을 전역에두고,calculator가밖에잇는거가져다쓰는게좋은건지?
/*
let status = false
let checkBox = document.querySelector("input")
checkBox.addEventListener('change', (evt) => {
    status = evt.currentTarget.checked //bool로 status에저장
    console.log(status)
})
let text = document.querySelector("h1")
text.addEventListener('click', (evt) => {
    if(!status) {
        text.style.color = 'red'
    } else {
        text.style.color = 'blue'
    }
})
*/
//toddo list 
/*
const taskInput = document.querySelector("#todo")
const addButton = document.querySelector("#add-button")
const resetButton = document.querySelector("#reset")
let toDoList = document.querySelector("#todo-list")
let taskNum = 0
// localStorage.clear()
taskInput.addEventListener("change", () => {
    // console.log(taskInput.value)
    // console.log(typeof(taskInput.value))
    // if(taskInput.value != "") { //입력받은내용이있을경우
    //     console.log("undefinde!")
    //     toDoList.innerHTML += `<div>${taskInput.value}</div>`
    //     taskInput.value = ""
    // }
})
document.addEventListener("keydown", (evt) => { //엔터키 클릭이벤트로 인식
    // console.log(evt.key)
    if(evt.key == "Enter") {
        addButton.click()
    }
})
addButton.addEventListener("click", () => {
    if(taskInput.value != "") { //입력받은내용이있을경우 스토리지 저장후 innerhtml? 로html생성 
        taskNum += 1
        console.log(taskNum)
        localStorage.setItem(`${taskNum}`, `${taskInput.value}`)
        console.log(localStorage)
        toDoList.innerHTML += `<div>${localStorage.getItem(`${taskNum}`)}</div>`
        taskInput.value = ""
    }
})
resetButton.addEventListener("click", () => {
    localStorage.clear()
})
*/
/*
let arr = []
arr.push("1",2,3)
let ob = {}
ob.name = "hi"
console.log(ob,arr)
const add = document.querySelector("#add-button")
// add.addEventListener("click", () => {
//     ob[`name${}`] = 
// })
localStorage.setItem("first-task", "homework")
document.querySelector
*/
/*
const input = document.querySelector("#todo")
const toDoList = document.querySelector("#todo-list")
const addButton = document.querySelector("#add-button")
let keyCount = 0
const addTodo = () => {
    if (input.ariaValueMax.trim === '') {
        alert('입력해주세요')
        return
    }

    const item = document.createElement('div') //item이라는이름으로div문서객체생성
    const checkbox = document.createElement('input') //checkbox라는이름으로input태그생성
    const text = document.createElement('span')
    const button = document.createElement('button')

    const key = keyCount //문서객체 식별용 키
    keyCount += 1

    item.setAttribute('data-key', key) // <div data-key = 'key'>형식으로만듬
    item.appendChild(checkbox)
}
try { //try구문내에서 예외발생시 catch(exception),finally는 무조건 실행 
    console.log('try구문입니다')
    const array = ['사과','바나나','귤']
    array.forEach(() => {
        throw '예외강제발생'
    })
} catch(e) {
    console.log('catch구문입니다')
} finally {
    console.log('finally구문입니다')
}
const zuhwi = {name:'zuhwi', 'age':25,
    eat : function(){
    console.log(this,'익명함수메소드')
    },
    eat () {
        console.log('간단메소드')
    } //같은이름이면 선언한메소드가 적용됨
}
console.log(zuhwi.name) //zuhwi
console.log(zuhwi.age) //25
console.log(zuhwi['name']) //zuhwi
console.log(zuhwi['age']) //25
console.log(zuhwi['age']) //25
zuhwi.eat()
//속성추가하기
zuhwi.tall = 153
console.log(zuhwi['tall'])
zuhwi['address'] = '청덕'
console.log(zuhwi.address)
//메소드추가하기
zuhwi.run = function(){
    console.log('추가된메소드',)
    console.log(this)
}
zuhwi.run()
*/

//클래스만들기
//1.객체생성함수
/*
function createStudent(name,tall,address) {
    return {name : name, tall : tall, address : address 
    ,eat : function(){
        console.log(this, this.eat)
        console.log('eating')
    } 
    ,study() {
        console.log(this, this.study)
        console.log('studying')
    }
    }
}

let zuhwi = createStudent('zuhwi',153,'청덕')
let yuno = createStudent('yuno',170, '상현')
console.log(zuhwi,yuno)
*/
//2.클래스 생성
/*
class Student {
    constructor(name, tall, address) {
        this.name = name
        this.tall = tall
        this.address = address
    }
    getName () { //인스턴스생성시 메소드는 안보임 근데 호출은 가능
        console.log(this, this.name)
        console.log('클래스에서 생성된 메소드')
    }
    // getAge : function() { 이렇게는 메소드 생성하면 안되나봄
    //     console.log(this.tall)
    // }
}
let zuhwi = new Student('zuhwi') //지정안한 속성은 undefined로출력
console.log(zuhwi)
zuhwi.getName()
console.log(new Student('zuhwi', 153, '청덕'))
*/
/*
class Student {
    #age
    constructor(age) {
        this.#age = age // #age속성추가
        console.log(this)
    } 
    getAge () {
        console.log(this.#age)
    }
}
let peter = new Student(19) // 19
// this.age = 20
// console.log(this.age) //여기서 this는 window객체기때문에 student의age와는상관없이 20출력
// console.log(peter.#age) //클래스 바깥에서 객체의 age속성확인불가
peter.age = 12345
// peter.#age = 20 //클래스 바깥이라 #age속성 변경불가
peter.getAge()
console.log(peter.age) //이 age는 전혀 별개의 속성
console.log(peter) //여전히 메소드는 출력이 안됌 왜지
console.log(peter.getAge)//여기서는 메소드 볼수있는데 왜 위에 peter에는 안뜸?
*/
class Student {
    #age
    constructor (age) {
        this.ags = 5 // ?  //constructor호출시에 인수로 들어온 age가 ags(age)로 동작하는듯하다
        console.log(this)
        console.log(this.ags)
    }
    set ags (age) { //consturctor내의this.ags 로 호출
        console.log('this is setter')
        console.log (age)
        this.#age = age
    }
}
let peter = new Student(23) //새로운인스턴스생성과동시에
console.log(peter)
console.log(peter.age)



