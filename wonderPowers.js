const flight = document.querySelector("#flight")
const mindreading = document.querySelector("#mindreading")
const xray = document.querySelector("#xray")
const section = document.getElementsByTagName("section")

console.log(section)
const flightHandlerFunction = (event) => {
    flight.classList.remove("disabled")
    flight.classList.add("enabled")
    console.log(flight)
}
const mindreadingFunction = (event) => {
    mindreading.classList.remove("disabled")
    mindreading.classList.add("enabled")
    console.log(mindreading)
}
const xrayFunction = (event) => {
    xray.classList.remove("disabled")
    xray.classList.add("enabled")
    console.log(xray)
}
const activateFunction = (event) => {
    for (let s of section) {
        s.classList.remove("disabled")
        s.classList.add("enabled")
        console.log(section)
    }

}


const deactivateFunction = (event) => {
    for (let s of section) {
        s.classList.remove("enabled")
        s.classList.add("disabled")
        console.log(section)
    }
}
    document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)
    document.querySelector("#activate-mindreading").addEventListener("click", mindreadingFunction)
    document.querySelector("#activate-xray").addEventListener("click", xrayFunction)
    document.querySelector("#activate-all").addEventListener("click", activateFunction)
    document.querySelector("#deactivate-all").addEventListener("click", deactivateFunction)

