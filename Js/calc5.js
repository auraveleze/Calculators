function effectiveOrNominal() {
    let i =parseFloat(((document.getElementById("effective-five").value).replace(/[%]/g, ''))/100); 
    let j =parseFloat(((document.getElementById("nominal-five").value).replace(/[%]/g, ''))/100); 
    let period =String(document.getElementById("period-five").value); 
    // let select =document.getElementById("period-six"); 
    let time =Number(document.getElementById("time-five").value); 

    let m;
    let n = 1;
    document.getElementById("time-six").value = time;
    document.getElementById("years-six").value = (time / 12).toFixed(2);

    // for (var l = 0; l < select.options.length; l++) {
    //     if (select.options[l].value === period) {
    //         select.value = period;
    //         break; 
    //     }
    // }

    if (i) { 
        if (period === "Mensual") {
            m = 12 / 1;
        } else if (period === "Bimestral") {
            m = 12 / 2;
        } else if (period === "Trimestral") {
            m = 12 / 3;
        } else if (period === "Semestral") {
            m = 12 / 6;
        } else if (period === "Anual") {
            m = 12 / 12;
        }

        let nomi = (m * (Math.pow((1 + i), (1 / (n * m))) - 1))*100;
        document.getElementById("nominal-five").value = nomi.toFixed(2);
        document.getElementById("interest-six").value = nomi.toFixed(2);
        document.getElementById("nominal-six").checked = true;   
        
    } else if (j) { 
        let n = 1;
        let m;
        if (period === "Mensual") {
            m = 12 / 1;
        } else if (period === "Bimestral") {
            m = 12 / 2;
        } else if (period === "Trimestral") {
            m = 12 / 3;
        } else if (period === "Semestral") {
            m = 12 / 6;
        } else if (period === "Anual") {
            m = 12 / 12;
        }

        let efec = (Math.pow( (1 + (j/m)), (n * m) ) - 1)*100;
        document.getElementById("effective-five").value = efec.toFixed(2);
        document.getElementById("interest-six").value = efec.toFixed(2);
        document.getElementById("effective-six").checked = true;   
        
    } else {
        alert("Falta elegir una opción");
    }
}