const arr = [];

let c = 1;
let temp = [];
for (let i = 1; i <= 100; i++) {
    if (c === 10) {
        temp.push(i);
        arr.push(temp);
        temp = [];
        c = 1;
    } else {
        temp.push(i);
        c++;
    }
}

let res = [];

for (let i = 0; i < arr.length; i++) {
    if (i % 2) {
        res = [...res, ...arr[i].reverse()];
    } else {
        res = [...res, ...arr[i]];
    }
}

console.log(res);
