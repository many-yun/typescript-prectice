import React from 'react';
import './App.css';

type Name = string | number
const name : Name[] = ['a']
console.log(name)

function a (x:number) :number {
  return x
}
a(1)

type Member = [number, boolean]
const john :Member = [123, true]

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
console.log(myInfo)

const aaa :(number | string)[] = [1,'2',3]

function bbb (x :number|string) { // return이 없을 경우 :void (return한 경우 에러)
  const arr :number[] = []
  if (typeof x === 'string') {
    return x + '1'
  } else {
    return x + 1
  }
}



function App() {
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
