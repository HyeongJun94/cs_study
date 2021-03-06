// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const ans = fruits.join('');
  console.log(ans, typeof(ans));
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const ans = fruits.split(',');
  console.log(ans, typeof(ans));
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse()
  console.log(array)
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const ans = array.slice(2);
  console.log(ans);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const ans = students.find( (value)=> value.score === 90);
  console.log(ans);
}

// Q6. make an array of enrolled students
{
  const ans = students.filter( (value) => value.enrolled === true);
  console.log(ans);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const ans = students.map( (value) => value.score);
  console.log(ans);
}

// Q8. check if there is a student with the score lower than 50
{
  const ans = students.some( (value) => value.score <= 50);
  console.log(ans);

  const ans2 = !students.every( (value) => value.score > 50);
  console.log(ans2);
}

// Q9. compute students' average score
{
  // let total = 0
  // students.forEach((value) => {
  //   total += value.score
  // })
  // const ans = total/students.length;
  // console.log(ans);

  const total = students.reduce((pre,cur) => pre + cur.score,0);

  // const total = students.reduceRight((pre,cur) => pre + cur.score,0);

  const ans = total/students.length;
  console.log(ans);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const ans = students.map( (value) => value.score).join(', ');
  console.log(ans);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const ans = students.map( (value) => value.score).sort().join(', ');
  console.log(ans);
}