function btnConvert () {
    var state = document.getElementById("label1").innerHTML;
    console.log(state)

    if ( state == "Celcius (°C) :") {
    var inputNum = document.getElementById("inputField").value;
    var outputNum = inputNum * 9 / 5 + 32;
    var outputNum = outputNum + " (°F)"
    document.getElementById("outputField").value = outputNum;
    // code untuk menemukan hasil konversi dan memunculkan di outputField

    var calcMethod = inputNum + " × 9/5 + 32 = " + outputNum;
    document.getElementById("calculation").value = calcMethod;
    // code untuk munculin cara kalkulasi nya
    
    } else {
    var inputNum = document.getElementById("inputField").value;
    var outputNum = (inputNum - 32) * 5 / 9;
    var outputNum = outputNum + " (°C)"
    document.getElementById("outputField").value = outputNum;
    // code untuk menemukan hasil konversi dan memunculkan di outputField

    var calcMethod = "(" + inputNum + " - 32) × 5 / 9 = " + outputNum;
    document.getElementById("calculation").value = calcMethod;
    // code untuk munculin cara kalkulasi nya
    }
}

function btnReset () {
    document.getElementById("inputField").value = "";
    document.getElementById("outputField").value = "";
    document.getElementById("calculation").value = ""; 
    // untuk mereset ketiga field yang ada
}

function btnReverse () {
    var state = document.getElementById("label1").innerHTML;
    // var state jadi patokan, apakah calculator celcius ke fahrenheit atau sebaliknya

    if ( state == "Celcius (°C) :") {
        document.getElementById("label1").innerHTML = "Fahrenheit (°F) :";
        var state = document.getElementById("label1").innerHTML;
        // mengubah var state menjadi sebaliknya

        document.getElementById("label2").innerHTML = "Celcius (°C) :";
        document.getElementById("formula1").innerHTML = "[A] °F ≘ ( ([A] - 32)  × 5/9) °C";
        document.getElementById("formula2").innerHTML = "[A] °F ≘ ( ([A] - 32)  / 1.8) °C";
        // mengubah text menjadi sesuai state calculator yaitu fahrenheit ke celcius

        console.log("berhasil masuk if")
    } else {
        document.getElementById("label1").innerHTML = "Celcius (°C) :";
        var state = document.getElementById("label1").innerHTML;
        // mengubah var state menjadi sebaliknya

        document.getElementById("label2").innerHTML = "Fahrenheit (°F) :";
        document.getElementById("formula1").innerHTML = "[A] °C ≘ ([A] × 9/5 + 32) °F";
        document.getElementById("formula2").innerHTML = "[A] °C ≘ ([A] × 1.8 + 32) °F";
        // mengubah text menjadi sesuai state calculator yaitu celcius ke fahrenheit

        console.log("masuk ke else")
    }
    document.getElementById("inputField").value = "";
    document.getElementById("outputField").value = "";
    document.getElementById("calculation").value = "";
    // mengosongkan kembali semua field
}
