const hour = document.getElementById('clock-hour'),
    minutes = document.getElementById('clock-minutes'),
    seconds = document.getElementById('clock-seconds')

const clock = () => {
    let date = new Date()

    let hh = date.getHours() * 30,
        mm = date.getMinutes() * 6,
        ss = date.getSeconds() * 6

    // We add a rotation to the elements
    hour.style.transform = `rotateZ(${hh + mm / 12}deg)`
    minutes.style.transform = `rotateZ(${mm}deg)`
    seconds.style.transform = `rotateZ(${ss}deg)`
}
setInterval(clock, 1000)

const textHour = document.getElementById('text-hour'),
    textMinutes = document.getElementById('text-minutes'),
    textSeconds = document.getElementById('text-seconds'),
    textAmPm = document.getElementById('text-ampm'),
    dateWeek = document.getElementById('date-week'),
    dateDay = document.getElementById('date-day'),
    dateMonth = document.getElementById('date-month'),
    dateYear = document.getElementById('date-year')

const clockText = () => {
    let date = new Date()

    let hh = date.getHours(),
        ampm,
        ss = date.getSeconds(),
        mm = date.getMinutes(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear()

    if (hh >= 12) {
        hh -= 12
        ampm = 'PM'
    } else {
        ampm = 'AM'
    }

    if (hh == 0) {
        hh = 12
    }

    if (ampm == 'PM') {
        hh += 12
    }

    if (hh < 10) {
        hh = `0${hh}`
    }

    textHour.innerHTML = `${hh}:`

    if (mm < 10) {
        mm = `0${mm}`
    }

    textMinutes.innerHTML = `${mm}:`

    if (ss < 10) {
        ss = `0${ss}`
    }

    textSeconds.innerHTML = ss

    textAmPm.innerHTML = ampm

    let n = (day + 1 + ((153 * (month + 12 * ((14 - month) / 12) - 3) + 2) / 5) +
        (365 * (year + 4800 - ((14 - month) / 12))) +
        ((year + 4800 - ((14 - month) / 12)) / 4) -
        ((year + 4800 - ((14 - month) / 12)) / 100) +
        ((year + 4800 - ((14 - month) / 12)) / 400) - 32045) % 7

    let weeks = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    dateWeek.innerHTML = `${weeks[parseInt(n)]},`
    dateDay.innerHTML = day
    dateMonth.innerHTML = `${months[month]},`
    dateYear.innerHTML = year
}
setInterval(clockText, 1000)

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bxs-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bxs-moon' : 'bxs-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'bxs-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})