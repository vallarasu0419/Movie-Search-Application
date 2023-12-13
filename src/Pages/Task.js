import React from "react";

function Task() {
  function twoNumberSum(arr, targetSum) {
    const numMap = {};

    for (let i = 0; i < arr.length; i++) {
      const currentNum = arr[i];
      const potentialMatch = targetSum - currentNum;

      if (numMap[potentialMatch] !== undefined) {
        console.log([currentNum, potentialMatch]);
      }

      numMap[currentNum] = i;
    }
  }

  const inputArray = [3, 5, 8, 11, 1, -1, 7];
  const targetSum = 10;

  twoNumberSum(inputArray, targetSum);

  function areAnagrams(str1, str2) {
    const cleanStr1 = str1.replace(/[^\w]/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/[^\w]/g, "").toLowerCase();

    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");

    return sortedStr1 === sortedStr2;
  }

  console.log(areAnagrams("listen", "silent"));
  console.log(areAnagrams("race", "care"));
  console.log(areAnagrams("hello", "world"));

  return <div>Task</div>;
}

export default Task;
