const TimeText = document.getElementById("time")

const UpdateTime = function () {
    const currentDate = new Date();
    TimeText.textContent = currentDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true, timeZone: "America/Chicago"})
}

UpdateTime()

setInterval(() => {
    UpdateTime()
}, 1000);