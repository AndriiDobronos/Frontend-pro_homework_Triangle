const dateOfUser = prompt('Введіть довжину катетів трикутника у фрматі: "number" "number"');
if (dateOfUser) {
    const dateForCalc = dateOfUser.split(' ');
    if (!(dateOfUser.includes(" "))) {
        alert("error-1");
    }
    else if (dateForCalc.length !== 2) {
        alert("error-2");
    }
    else if (Number(dateForCalc[0]) < 0 && !Number.isNaN(Number(dateForCalc[0]))) {
        alert("error-3");
    }
    else if (Number(dateForCalc[1]) < 0 && !Number.isNaN(Number(dateForCalc[1]))) {
        alert("error-4");
    }
    else if (Number.isNaN(Number(dateForCalc[1]))) {
        alert("error-5")
    }
    else if (Number.isNaN(Number(dateForCalc[0]))) {
        alert("error-6")
    }
    else {
        const katetL = Number(dateForCalc[0])
        const katetR = Number(dateForCalc[1])
        const hypotenuse = Math.sqrt(katetL**2 + katetR**2)
       /* const alterHypotenuse = Math.pow(katetL**2 + katetR**2,1/2)*/
        const alterHypotenuse = (katetL**2 + katetR**2)**(1/2)
        alert(`Гіпотенуза равна: ${hypotenuse}\n
        Альтернативний розрахунок: ${alterHypotenuse}`)
    }
}
else  {alert('error: nothing has been entered')
}
