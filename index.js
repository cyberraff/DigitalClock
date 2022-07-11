function currentTime() {
    const date = new Date()

    const day = document.getElementById('day')
    const period = document.getElementById('period')
    const time = document.getElementById('time')
    const sec = document.getElementById('sec')
    const monthDate = document.getElementById('month-date')
    const year = document.getElementById('year')

    const weekOptions = { weekday: 'long' }

    // console.log(new Intl.DateTimeFormat('en-US', weekOptions).format(date))
    day.innerHTML = new Intl.DateTimeFormat('en-US', weekOptions).format(date)

    hr = date.getHours()
    if (hr < 10) {
        hr = '0' + hr
    }
    min = date.getMinutes()

    if (min < 10) {
        min = '0' + min
    }
    time.innerHTML = `${hr}:${min}`

    if (hr < 12) {
        period.innerHTML = 'AM'
    } else {
        period.innerHTML = 'PM'
    }
    sec.innerHTML = date.getSeconds()

    const monthOptions = { month: 'long' }

    // console.log(new Intl.DateTimeFormat('en-US', monthOptions).format(date))
    month = new Intl.DateTimeFormat('en-US', monthOptions).format(date)
    dateOfMonth = date.getDate()

    monthDate.innerHTML = `${month}  ${dateOfMonth}`
    year.innerHTML = date.getFullYear()

    document.getElementById('clock')
    let t = setTimeout(function () {
        currentTime()
    }, 1000)
}
currentTime()
