let teachers = []
const teacherContainer = document.getElementsByClassName('teacher-container')[0]

async function init(){
    teachers = await getTeachers()
    teachers = randomizeTeachers(teachers)
    displayTeachers()
}

async function getTeachers(){
  const url = "./data/teachers.json";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
  return result
}

function displayTeachers(){
    let html_buffer = ''
    for (const teacher of teachers) {
        const teacherName = teacher.name
        const teacherLoc = teacher.location
        const teacherLink = teacher.link
        html =
        `
        <li class = "teacher">
        <div class = teacher-info>
            <h2 class = "teacher-name"><a href=${teacherLink} target="_blank">${teacherName} </a></h2>
            <p class = "teacher-location">${teacherLoc}</p>
        </div>
        </li>
        `
        html_buffer += html
    }
    teacherContainer.insertAdjacentHTML('beforeend', html_buffer)
}


function randomizeTeachers(teachers){
// https://pitayan.com/posts/javascript-shuffle-array/
    var currentIndex = teachers.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = teachers[currentIndex];
    teachers[currentIndex] = teachers[randomIndex];
    teachers[randomIndex] = temporaryValue;
  }

  return teachers;
}

