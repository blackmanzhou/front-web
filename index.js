var DeletionExtraDataJson = {
    TargetSyncIdList : ['0b5a64a6-524c-4fc0-b372-aa13d608f948', '0b5a64a6-524c-4fc0-b372-aa13d608f949']
}

var jsonString = JSON.stringify(DeletionExtraDataJson)
console.log(jsonString)

let str = [...new Set('ababc')].join('')
console.log(str)

// Set 实现并集、交集、差集
let a = [1, 2, 3]
let b = [1, 3, 5, 6]
let union = new Set([...a, ...b])
let intersect = new Set([...a].filter(x => b.includes(x)))
let difference = new Set([...a].filter(x => !b.includes(x)))

console.log(union)
console.log(intersect)
console.log(difference)

// Map
const map = new Map([['T', 'Yes'],['F', 'No']])
console.log(map.size)
for (let k of map.keys()){
    console.log(k)
}

for (let v of map.values()) {
    console.log(v)
}

const resultMap = new Map([[2, {Name: 'Jack', Age: 18}]])
// resultMap.set(1, { Name: 'Tom', Age: 20})
//          .set(2, { Name: 'Jack', Age: 18 })
let result = resultMap.get(2)
console.log(result)

// Array
let array = [1, 2, 3, 4, 5]
let sum = array.reduce((a, b) => a + b)
console.log(sum)

// Compose
const compose = (f, g) => x => f(g(x))
const head = arr => arr[0]
const reverse = arr => arr.reverse()
const last = compose(head, reverse)
const ele = last(['tom', 'jack', 'allen', 'lily'])
console.log(ele)