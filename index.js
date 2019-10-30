function printString(str) {
  console.log(str[0])

  if (str.length > 1) {
    printString(str.slice(1))
  }
}

function reverseString(str) {
  if (str.length > 1) {
    return reverseString(str.slice(1)) + str[0]
  } else {
    return str
  }
}

function isPalindrome(str) {
  const first = str[0]
  const last = str[str.length - 1]

  if (str.length <= 1) {
    return true
  } else if (first === last) {
    return isPalindrome(str.substr(1, str.length - 2))
  } else {
    return false
  }
}

function addUpTo(arr, idx) {
  if (idx === 0) {
    return arr[0]
  } else {
    return arr[0] + addUpTo(arr.slice(1), idx - 1)
  }
}

function maxOf(arr) {
  if (arr.length === 2) {
    return Math.max(arr[0], arr[1])
  } else {
    return Math.max(arr[0], maxOf(arr.slice(1)))
  }
}

function includesNumber(arr, num) {
  if (arr.length === 1) {
    return arr[0] === num
  } else if (arr[0] === num){
    return true
  } else {
    return includesNumber(arr.slice(1), num)
  }
}
