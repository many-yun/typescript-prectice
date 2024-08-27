import React from 'react';
import './App.css';

type Name = string | number
const name : Name[] = ['a']

function a (x:number) :number {
  return x
}
a(1)


class User {
  name :string;
  constructor (name :string) {
    this.name = name

  }
}

const myInfo :{
  name :string[], 
  age:number, 
  home :string
} = {
  name : ['kim'],
  age : 29,
  home : '서울',
}

const aaa :(number | string)[] = [1,'2',3]

function bbb (x :number|string) { // return이 없을 경우 :void (return한 경우 에러)
  const arr :number[] = []
  if (typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}

type Animal = {name: string, age: number}
let animal :Animal = {name: 'max', age :2}
type myType = {
  color :string, 
  size :number, 
  readonly position: number[]
}

function rsp (x :'가위' | '바위' | '보') :('가위' | '바위' | '보')[]{
 return [x]
}

const ccc = 'kim'

const report = {
  name: 'kim'
} as const
function myFunc (a: 'kim') {

}
myFunc(report.name)

type funcType = (a: string) => number;

const aFunc: funcType = function (a) {
  return 10
}

type Member = {
  name : string,
  plusOne : (x: number) => number,
  changeName : () => void
}

let 회원정보: Member = {
  name : 'kim',
  plusOne (x){
    return x + 1
  },
  changeName : () => {
    console.log('안녕')
  }
}

type CutType = (x: string) => string
type RemoveDash = (x: string) => number

const cutZero :CutType = function (x) {
  const result = x.replace(/^0+/, '')
  return result
}

const removeDash:RemoveDash = function (x) {
  const result = x.replace(/-/g, '')
  return parseFloat(result)
}

function something (a:string, b:CutType, c:RemoveDash) {
  const result = c(b(a))
  console.log(result)
}
something('010-1111-2222', cutZero, removeDash)

const title = document.querySelector("#title")
const link = document.querySelector(".link")
if (link instanceof HTMLAnchorElement) {
  link.innerHTML = '반가워요'
}


function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
