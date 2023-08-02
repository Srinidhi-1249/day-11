function missingNum(arr) {
    // Calculate the sum of numbers from 1 to n using the formula (n * (n + 1)) / 2
    const n = arr.length + 1;
    const sumOfN = (n * (n + 1)) / 2;
    const sumOfArr = arr.reduce((acc, num) => acc + num, 0);
    return sumOfN - sumOfArr;
  }
  console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])); 
  console.log(missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])); 
  console.log(missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9])); 
  
  