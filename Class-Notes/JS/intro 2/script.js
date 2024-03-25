// // function sum(a, b) {
// //     debugger;
// //     console.log(a + b);
// //     let sum = a + b;
// //     return sum;
// // }

// // let sumOfFourAndTwo = sum(4, 2);

// // console.log(sumOfFourAndTwo);



// function sumDec(a, b) {
//     return a + b;
// }

// const sumEx = function (a, b) {
//     return a + b;
// };

// const sumArr = (a, b) => a + b;

// console.log(sumDec(2, 4));
// console.log(sumEx(3, 4));
// console.log(sumArr(10, 4));

// // let nums =  [1,2,3,4,5,6,7,8,9]

// // let evenNumbers = nums.filter((num) => num % 2 == 0);

// function newScope() {
//     let num = 10;
// }


// console.log(num);

function vendingMachine(){
    let inventory = {
        S1: { item: 'Coca-Cola', count: 5 },
        C1: { item: 'Ruffles', count: 3 },
        S2: { item: 'Pepsi', count: 4 },
        C2: { item: 'Doritos', count: 25 },
    };

    function dispenseItem(code, callbackFn) {
        if (inventory[code] && inventory[code].count > 0) {
            inventory[code].count--;

        callbackFn();
    } else {
        callbackFn();
    }
}

    return {
        selectItem: function (code, callback) {
            dispenseItem(code, callback);
        },
        inventoryStatus: function () {
            return inventory;
        },
    };
}

function handleResponse(err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
}

const machine = vendingMachine('S1', handleResponse);
console.log(machine);