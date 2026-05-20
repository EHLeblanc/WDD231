const courses = [
  {
    code: "WDD 130",
    name: "Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD 131",
    name: "Dynamic Web Fundamentals",
    credits: 2,
    subject: "WDD",
    completed: true
  },
  {
    code: "WDD 231",
    name: "Web Frontend Development I",
    credits: 2,
    subject: "WDD",
    completed: false
  },
  {
    code: "CSE 110",
    name: "Introduction to Programming",
    credits: 2,
    subject: "CSE",
    completed: true
  },
  {
    code: "CSE 111",
    name: "Programming with Functions",
    credits: 2,
    subject: "CSE",
    completed: true
  },
  {
    code: "CSE 210",
    name: "Programming with Classes",
    credits: 2,
    subject: "CSE",
    completed: true
  }
];

const courseContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

const allBtn = document.querySelector("#all");
const wddBtn = document.querySelector("#wdd");
const cseBtn = document.querySelector("#cse");

function displayCourses(courseList) {
  courseContainer.innerHTML = "";

  courseList.forEach(course => {
    const card = document.createElement("div");

    card.classList.add("course-card");

    if (course.completed) {
      card.classList.add("completed");
    }

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>${course.credits} Credits</p>
    `;

    courseContainer.appendChild(card);
  });

  // Calculate total credits dynamically
  const credits = courseList.reduce((total, course) => {
    return total + course.credits;
  }, 0);

  totalCredits.textContent = credits;
}

// Button Events
allBtn.addEventListener("click", () => {
  displayCourses(courses);
});

wddBtn.addEventListener("click", () => {
  const wddCourses = courses.filter(course => course.subject === "WDD");
  displayCourses(wddCourses);
});

cseBtn.addEventListener("click", () => {
  const cseCourses = courses.filter(course => course.subject === "CSE");
  displayCourses(cseCourses);
});

// Initial Display
displayCourses(courses);