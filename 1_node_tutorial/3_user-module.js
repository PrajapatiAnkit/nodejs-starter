const user = {
    name: "ankit",
    age: 28
}

const marks = [30, 50, 43];


// 1 way to share or export module
module.exports = {
    user: user
}
// 2 way to export
module.exports.marks = marks;