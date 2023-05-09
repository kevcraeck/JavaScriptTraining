const course = {
  title: "ES2015 and 2016",
  description: "New features of ES2015 and 2016",
  editions: [
    {
      trainer: "Matt Smith",
      dates: {
        start: "01/01/2016",
        end: "05/01/2016",
      },
      location: {
        address1: "One Way Street",
        city: "New York",
      },
    },
    {
      dates: {
        start: "03/05/2016",
        end: "08/05/2016",
      },
      location: {
        address1: "Two Blocks Road",
        address2: "1234 AB",
        city: "Las Vegas",
      },
    },
    {
      trainer: "John Doe",
      dates: {
        start: "10/10/2016",
        end: "15/10/2016",
      },
      location: {
        address1: "One Way Street",
        city: "New York",
      },
    },
  ],
};

/*
1. Write a function firstEdition() that uses destructuring to extract the data of the
first edition
Return an object with the following structure: {title, trainer, startDate,
city}.

Insert the value "TBD" into the trainer property, should that not be present.

Invoke the function and save the trainer and city properties of the returned
object into two variables t and c, using destructuring.
Print the values to the console.
*/

// let {
//   title,
//   editions: [
//     {
//       trainer = "TBD",
//       dates: { start: startDate },
//       location: { city },
//     },
//   ],
// } = course;

const firstEdition = () => {
  const {
    title,
    editions: [
      {
        trainer = "TBD",
        dates: { start: startDate },
        location: { city },
      },
    ],
  } = course;
  return { title, trainer, startDate, city };
};

console.log(firstEdition());

let { title, trainer: t, startDate, city: c } = firstEdition();
console.log(title, t, startDate, c);
/*
2. Write another function addEdition() that accepts 5 parameters: title, trainer,
    startDate, duration and city.
    The title argument must always be the first
    The other four arguments may or may not be passed, in any possible order.
    All have a default value, unless otherwise specified by the caller: trainer and
    city - 'TBD'
    startDate - the current Date
    duration - 5
    The function should log the values of the 5 parameters to the console.

Invoke the function:
    - without any arguments
    - with the following arguments:
      title: "Course 1"
      trainer: "John"
      startDate: 1st of April 2019
      duration: 3
      city: "New York"
    - with the following arguments:
      title: "Course 2"
      startDate: 1st of April 2019
    - with the following argument:
      title: "Course 3"
*/

const addEdition = (
  title,
  {
    trainer = "TBD",
    startDate = new Date().toISOString().split("T")[0],
    duration = 5,
    city = "TBD",
  } = {}
) => {
  console.log(title, trainer, startDate, duration, city);
};

addEdition();
addEdition("Course1", {
  trainer: "John",
  startDate: new Date("04/01/2019").toISOString().split("T")[0],
  duration: 3,
  city: "New York",
});
addEdition("Course2", {
  startDate: new Date(2019, 4, 1).toISOString().split("T")[0],
});
addEdition("Course3");
