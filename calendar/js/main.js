function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}


function displayCalendar(year, month) {
    let calendar = generateCalendarHtml(year, month);

    document.getElementById('calendar').innerHTML = calendar;
    console.log(calendar);
}


function generateCalendarHtml(year, month) {
    let days = daysInMonth(year, month);
    let calHtml = '';

    for (let i = 1; i <= days; i++) {
        calHtml += '<div class="daybox">' + i + '</div>';
    }

    return calHtml;
}



