# Artur Voloshin

## Contacts

* Telegram: @nozei1
* E-mail: nozeilwrk@gmail.com
* Discord: Artur(@Nozeil)

## About me

I'm a beginner front-end developer. 
The main goal at this stage is to obtain the necessary theoretical knowledge and practical skills for further employment. 
I consider my strengths as the ability to solve assigned tasks, responsibility, persistence.
I strive to obtain new necessary knowledge and skills in front-end development.

## Skills 

* HTML5
* CSS3
* JS
* Git/GitHub
* VSCode

## Code example 

[The Supermarket Queue](https://www.codewars.com/kata/57b06f90e298a7b53d000a86)

Task: There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

Solution:

```
function queueTime(customers, n) {
  let tills = new Array(n).fill(0);
  customers.forEach(time => {
    let minQueue = tills.indexOf(Math.min(...tills));
    tills[minQueue] += time;
  });
  return Math.max(...tills);
}
```

## Experiance

[Portfolio](https://nozeil.github.io/stage-0/portfolio)
[Custom video player](https://nozeil.github.io/stage-0/portfolio#video)
[Movie app](https://nozeil.github.io/stage-0/movie-app)
[Memory game](https://nozeil.github.io/stage-0/memory-game)

## Education

* University:
Belarusian National Technical University, power engineer. Graduation year: 2019
* Courses:  
SoloLearn ([HTML](https://www.sololearn.com/Certificate/1014-13545260/jpg/), [CSS](https://www.sololearn.com/Certificate/1023-13545260/jpg/), [JS](https://www.sololearn.com/certificates/course/en/13545260/1024/landscape/png))


## Languages
* Russian — native speaker
* English — B1 ([Efset certificate](https://www.efset.org/cert/i8yTzB)) 

