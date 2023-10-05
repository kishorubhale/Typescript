console.log("--------Remove duplicate  from the array");
function removeDuplicates(array) {
    return array.filter(function (item, index, self) { return self.indexOf(item) === index; });
}
var originalArray = [1, 2, 2, 3, 4, 4, 5];
var uniqueArray = removeDuplicates(originalArray);
console.log(uniqueArray);
