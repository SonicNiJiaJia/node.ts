"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Rational_1 = require("./class/Rational");
const main = () => {
    const R1 = new Rational_1.Rational(6, 4);
    const R2 = new Rational_1.Rational(6, 4).normalize();
    const R3 = new Rational_1.Rational(12, 4);
    const R4 = Rational_1.Rational._parseRational(["1", "3"], ["4", "1"]);
    const R5 = Rational_1.Rational.parseRational("43/23");
    // 打印物件
    console.log(`R1 : ${R1.toString()}`);
    console.log(`R2 : ${R2.toString()}`);
    console.log(`R3 : ${R3.toString()}`);
    console.log();
    // 檢測相等
    console.log(`R1.equals(R2) : ${R1.equals(R2)}`);
    // 檢測整數
    console.log(`R1.isWhole() : ${R1.isWhole()}`);
    // 檢測有無小數
    console.log(`R1.isDecimal() : ${R1.isDecimal()}`);
    console.log();
    // 檢測相等
    console.log(`R1.equals(R3) : ${R1.equals(R3)}`);
    // 檢測整數
    console.log(`R3.isWhole() : ${R3.isWhole()}`);
    // 檢測有無小數
    console.log(`R3.isDecimal() : ${R3.isDecimal()}`);
    console.log();
    // 打印物件
    console.log(`R4 : ${R4.toString()}`);
    console.log(`R5 : ${R5.toString()}`);
};
main();
/*
result:

R1 : 6/4
R2 : 3/2
R3 : 12/4

R1.equals(R2) : true
R1.isWhole() : false
R1.isDecimal() : true

R1.equals(R3) : false
R3.isWhole() : true
R3.isDecimal() : false

R4 : 13/41
R5 : 43/23
*/ 
