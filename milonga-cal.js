/* Global Variables */
const dayNames = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"]
const monthNames = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
const milongaCalendar = document.getElementById("cal")
const defaultAmount = 2 // Set this dynamically with regard to the screen width. Mobile 2, Desktop 5
let milongas = []
let lastMilongaInCurrentCal = -1 // index of milongas
let currentMonth = -1 // Will be a Date object once first milongas has been displayed

async function initMilongaCal(){
    console.log("Fetching milonga data from JSON.")
    milongas = await getMilongas()
    milongas = processMilongas(milongas)
    console.log("Fetched and processed milonga data from JSON.")
    displayNextMilongas(defaultAmount)
}


async function getMilongas(){
  const url = "milongas.json";
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

function displayNextMilongas(k){
/**
 * Displays the next k milongas in the calendar. If less than k milongas are yet to be displayed, will display all remaining ones instead.
 * Checks if new month divider is needed and calls {@link createMonthDivider(date)}} function to create it.
 * 
 * 
 * @param {number} k – The number of milongas to display
 * */
    // Sanity check
    if (k > milongas.length){
        k = milongas.length;
    }

    // For the next k milongas check 
    const goalIndex = lastMilongaInCurrentCal + k
    let html_buffer = ''

    while (lastMilongaInCurrentCal < goalIndex) {
        const nextMilonga = lastMilongaInCurrentCal + 1
        const nextDate = milongas[nextMilonga].date
        const nextMonth = nextDate.getMonth()
        // Check if the current milonga is in a new month. Will also work in the Dec -> Jan case.
        if(nextMonth != currentMonth){
            html_buffer += createMonthDividerHTML(nextDate)
            currentMonth = nextMonth
        }
        html_buffer += createMilongaHTML(milongas[nextMilonga])
        lastMilongaInCurrentCal +=1
    }

    milongaCalendar.insertAdjacentHTML('beforeend', html_buffer)
}


function collapseMilongas(){
    /**
     * Deletes all milongas and month-divider leaving only the default amount.
     */
    while(lastMilongaInCurrentCal > defaultAmount -1){
        let lastEntry = milongaCalendar.lastChild
        // Check if last entry is a month divider
        if (lastEntry.className === "month-divider")
            {lastEntry.remove()
            lastEntry = milongaCalendar.lastChild
            }
        lastEntry.remove()
        lastMilongaInCurrentCal -= 1;
    }

    // Edge case where one last month-divier is not removed because while-loop ended when defaultAmount was reached. 
    if (milongaCalendar.lastChild.className === "month-divider")
        {milongaCalendar.lastChild.remove()}
    
    // Reset current month so calling displayNextMilongas will work
    currentMonth = milongas[lastMilongaInCurrentCal].date.getMonth()
}


function createMonthDividerHTML(date){
    /**
 * Creates a month divider HTML for a given date.
 * 
 * @param {Date} – A Date Object.
 * */
    const divider = monthNames[date.getMonth()] + " " + date.getFullYear()
    html = `<div class = "month-divider">${divider}</div>`;
    
    return html
}


function processMilongas(milongas){
/**
 * Converts date string to date object, then sorts by date and filters for all milongas now and in the future
 * 
 * @param {json} milonga – One list element in JSON format containing information about the milonga
 * @returns {Array[JSON]} – An array whose elements are milongas in JSON format 
 * */
    // Convert date string to Date object
    milongas.forEach(element => element.date = new Date(element.date))
    // Sort by date
    milongas.sort((a,b) => {return a.date - b.date});
    // Return milongas that are today or later
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    return milongas.filter(element => element.date >= today)
}


function createMilongaHTML(milonga){
/**
 * Displays a given milonga at the end of the current calendar.
 * 
 * @param {json} milonga – One list element in JSON format containing information about the milonga
 * @returns – None 
 * */

    // Get all data and format if necessary
    const weekday = dayNames[milonga.date.getDay()]
    const date = milonga.date.getDate()
    const time = milonga.start_time + " bis " + milonga.end_time + " Uhr";
    const title = milonga.title;
    const venue = milonga.venue + ", ";
    const street = milonga.street + ", ";
    const city = milonga.city;
    const dj = milonga.dj;
    const dj_style = milonga.style;
    console.log(milonga.date.getDay())

    // Write everything as one large HTML block
    html = 
        `<article class = "milonga"> 
            <div class = "milonga-date" style = "grid-area: day">
                <div class = "weekday" style = "grid-area: day">${weekday}</div>
                <div class = "date">${date}</div> 
            </div>
            <div class = "milonga-time"style = "grid-area: time">${time}</div> 
            <div class = "milonga-title" style = "grid-area: title">${title}</div>
         <div class = "milonga-location" style = "grid-area: location">
                <span class = "venue">${venue}</span>
                <span class = "street">${street}</span>
                <span class = "city">${city}</span> 
            </div>
            <div class = "milonga-dj"style = "grid-area: dj">
                <div class = "dj-name">${dj}</div>
                <div class = "dj-style" style = "grid-area: style">${dj_style}</div> 
        </article>`;
    
    return html;
}

// Buttons
const moreBtn = document.getElementById("show-more")
const lessBtn =  document.getElementById("show-less")
moreBtn.onclick = () => {
    displayNextMilongas(defaultAmount);
    lessBtn.style.display = "flex"; 
}
lessBtn.onclick = () => {
    collapseMilongas()
    {lessBtn.style.display = "none";}
    lessBtn.style.display = "none";
}   