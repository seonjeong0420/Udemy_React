# Typescript 기본 개념 및 유형 탐색

```bash
npm init -y
npm install typescript
npx tsc with-typescript.ts
```

## 기본 타입

### any

- 의미 : "변수에 저장할 값의 타입에 대해 알려줄 것이 없다."
- 예비적으로 사용되는 타입으로 사용하지 않는 것을 권장

### primitives: number, string, boolean

```bash
let age: number = 24;
age = 12;

let userName: string;
userName = "Max";

let isInstructor: boolean;
isInstructor = true;
```

### More complex types: arrays, objects

```bash
let hobbies: string[]; // string 배열 선언
hobbies = ["camping", "coding", "music"];

let person: {
  // object 객체 타입 선언
  name: string;
  age: number;
};
person = {
  name: "max",
  age: 32,
};

let people: {
  // hobbies와 person을 합치기
  // 객체 배열을 저장하겠다고 선언
  name: string;
  age: number;
}[];

```

## 타입 추론 (Type inference)

- 타입을 지정하지 않아도, 타입스크립트는 유형 추론을 통해 변수 타입을 할당할 수가 있다.
- 타입 추론하는 방법을 쓰는 것을 권장

```bash
let course = "React - The Complete Guide";
course = 12345; // error
```

## Union Type

- 한 개 이상의 타입을 지정할 수 있게 해주는 기능
- 타입스크립트의 핵심 기능 중 하나로써, 값과 타입을 유연하게 정의할 수 있음

```bash
// 유니온 타입을 지정한 곳 어디든 사용 가능
let unionType: string | number | boolean = "react";
unionType = 12345;
```

## Type Aliases

- 반복해서 타입을 정의하는 대신에 우리가 직접 기본(base) 타입을 만들어 복잡한 타입을 정의해두고, 그 타입 Aliases를 사용하는 것
- 타입스크립트에만 있는 기능으로, 컴파일 하면 자바스크립트 코드에서는 사라진다.
- 관리도 수월하고, 중복 코드를 방지할 수가 있다.

```bash
type Person = {
  name: string;
  age: number;
};
let personAliases: Person;
let personAliasesArray: Person[];
```

## Function Type

- 함수에 타입을 지정할 때, 문자형, 숫자형, Union Type 지정 가능
- 타입 추론이 가능하다면, 굳이 타입을 지정하지 않는게 좋다.

```bash
// return 을 통해 타입 추론이 가능
function add(a: number, b: number): number | string {
  return a + b;
}
```

```bash
// return 값이 없는 함수
// 이럴 때 함수에 지정하는 타입은 void = 반환 값이 없다.는 의미
// void는 null, undefined와 비슷하지만 항상 함수와 결합해서 사용한다는 특징이 있다.
function print(value: any): void {
  // Error 발생 : 자바스크립트에는 print 내장함수가 있기 때문에, 컴파일 해보면 오류 발생
  console.log(value);
}
```

## Generic Type

### Why Use Generic Type?

```bash
function insertAtBeginning(array: any[], value: any) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [1,2,3,-1]

/**
 * split 은 문자열에서 사용하는 함수이지만 오류 표시가 발생하지 않음 (다만, 컴파일 하면 오류 발생함)
 * 타입스크립트는 updatedArray의 0번째 값이 숫자라는 것을 알 수가 없음 (insertAtBeginning - array 값을 any 타입으로 선언되었기 때문에)
 * 이러한 문제를 해결하기 위해 제네릭을 사용하는 것임
 */
updatedArray[0].split("");
```

### How Use?

제네릭 타입 : 보통 Type의 T를 사용

```bash
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [1,2,3,-1]
const stringArray = insertAtBeginning(["a", "b", "c"], "d");

```
