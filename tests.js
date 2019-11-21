"use strict"

describe("calculator", function () {

    describe("read", function () {
        it("Читает и записывает первое число", function () {
            let expected = 10;
            assert.equal(calculator.firstNumber, expected);
        });
        it("Читает и записывает второе число", function () {
            let expected = 10;
            assert.equal(calculator.secondNumber, expected);
        });
    });

    describe("sum", function () {

       it("складывает два числа", function () {
            let expected = 10 + 10;
            assert.equal(calculator.sum(), expected);
       });
        
    });

    describe("mul", function () {


        it("умножает два числа", function () {
            let expected = 10*10;
            assert.equal(calculator.mul(), expected);
        });
    });

});