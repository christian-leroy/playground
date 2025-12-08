let teachers = []
const teacherContainer = document.getElementsByClassName('teacher-container')

async function init(){
    teachers = await getTeachers()
    teachers = randomizeTeachers()
    displayTeachers()
}

async function getTeachers(){
  const url = "teachers.json";
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
        <article class = "teacher"> 
        <div class = teacher-info>
            <h1 class = "teacher-name">${teacherName}</h1>
            <p class = "teacher-location">${teacherLoc}</p>
            <a class = "teacher-link" href =${teacherLink} target="_blank">Mehr Infos</a>
        </div>
        </article>
        `
        html_buffer += html
    }
    teacherContainer.insertAdjacentHTML('beforeend', html_buffer)
}


function randomizeTeachers(teachers){
    // Randomize the order of the array
    return teachers
}

