const passel = document.getElementById('pass')
const copyel = document.getElementById('copy')
const lenel = document.getElementById('len')
const upperel = document.getElementById('upper')
const lowerel = document.getElementById('lower')
const numberel = document.getElementById('number')
const symbolel = document.getElementById('symbol')
const generateel = document.getElementById('generate')

const upperletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerletters = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const symbols = "!@#$%[]*()_+{}|/*-+~,><."

function getlowercase() {
    return lowerletters[Math.floor(Math.random() * lowerletters.length)]
}

function getuppercase() {
    return upperletters[Math.floor(Math.random() * upperletters.length)]
}

function getnumber() {
    return numbers[Math.floor(Math.random() * numbers.length)]
}

function getsymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatepassword() {
    const len = lenel.value

    let password = ""

    if (upperel.checked) {
        password += getuppercase()
    }

    if (lowerel.checked) {
        password += getlowercase()
    }

    if (numberel.checked) {
        password += getnumber()
    }

    if (symbolel.checked) {
        password += getsymbol()
    }

    for (let i = password.length; i < len; i++) {
        const x = generateX()
        password += x
    }
    passel.innerText = password;
}

function generateX() {
    const xs = []

    if(upperel.checked) {
        xs.push(getuppercase())
    }

    if(lowerel.checked) {
        xs.push(getlowercase())
    }

    if(numberel.checked) {
        xs.push(getnumber())
    }

    if(symbolel.checked) {
        xs.push(getsymbol())
    }

    if (xs.length === 0) return ""

    return xs[Math.floor(Math.random() * xs.length)]
}

generateel.addEventListener("click", generatepassword)

copyel.addEventListener("click", () => {

    const textarea = document.createElement("textarea")
    const password = passel.innerText

    if (!password) {
        return
    }

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    alert("texto copiado")
})