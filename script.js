function abgdata() {
    // getting form UI
    var PH = document.getElementById("phAbgId").value;
    var PCO2 = document.getElementById("pco2AbgId").value;

    // backend Calculation for Bicarbonate(HCO3-)
    var LOGPCO2 = Math.log10(PCO2 * 0.030505);
    var CALLOGHCO3 = (PH - 6.1 + LOGPCO2);
    var HCO3 = Math.pow(10, CALLOGHCO3).toFixed(1);

    return [PH, PCO2, HCO3];
}

var btn = document.getElementById("u-abg-btn");
btn.addEventListener("click", function check() {
    removeBtn();
    // removeinputs();
    var ABGDATA = abgdata();
    PH = ABGDATA[0];
    PCO2 = ABGDATA[1];
    HCO3 = ABGDATA[2];
    console.log(PH, PCO2, HCO3);

    // validation of ABG for blank input
    if (PH == "" || PCO2 == '') {
        document.getElementById("primaryINP").innerHTML = `<p style="" > ****Please Enter pH & pCO2 (mmHg)</p>`;
    }


    // validation of ABG for invalid Range
    else if ((PH < 5 || PH > 8) || (PCO2 < 0.5 || PCO2 > 200)) {
        document.getElementById("primaryINP").innerHTML = `<p style="" >*** Invalid Range Please Enter pH & pCO2 (mmHg) from real ABG</p>`;
    }
    // Primary Metabolic Alkalosis
    else if (PH > 7.4 && HCO3 > 24) {
        document.getElementById("primaryINP").innerHTML = `<p>Primary Metabolic Alkalosis</p>`;
    }

    // Primary Metabolic Acidosis
    else if (PH < 7.4 && HCO3 < 24) {
        document.getElementById("primaryINP").innerHTML = `<p>Primary Metabolic Acidosis</p>`;
    }

    // Primary Respiratory Acidosis
    else if (PH < 7.35 && PCO2 > 45) {
        document.getElementById("primaryINP").innerHTML = `<p>Primary Respiratory Acidosis</p>`;
    }

    // Primary Respiratory Alkalosis
    else if (PH > 7.45 && PCO2 < 35) {
        document.getElementById("primaryINP").innerHTML = `<p>Primary Respiratory Alkalosis</p>`;
    }



    else {
        document.getElementById("primaryINP").innerHTML = `<p>No Primary Acid-Base Disorder found</p>`;
    }

   
})

btn.addEventListener("click", function check() {
    var ABGDATA = abgdata();
    PH = ABGDATA[0];
    PCO2 = ABGDATA[1];
    HCO3 = ABGDATA[2];

    // validation of ABG for blank input
    if (PH == "" || PCO2 == '') {
        document.getElementById("basicIN").innerHTML = "";
    }
    // validation of ABG for invalid Range
    else if ((PH < 5 || PH > 8) || (PCO2 < 0.5 || PCO2 > 200)) {
        document.getElementById("basicIN").innerHTML = "";
    }
    // Uncompensated Respiratory Acidosis
    else if (PH < 7.35 && PCO2 > 45 && HCO3 > 21.9 && HCO3 < 28.1) {
        document.getElementById("basicIN").innerHTML = `<p>Uncompensated Respiratory Acidosis</p>`;
    }

    // Partially Compensated Respiratory Acidosis
    else if (PH < 7.35 && PCO2 > 45 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Partially Compensated Respiratory Acidosis</p>`;
    }

    // Fully Compensated Respiratory Acidosis
    else if (PH > 7.349 && PH < 7.405 && PCO2 > 45 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Fully Compensated Respiratory Acidosis</p>`;
    }

    // Uncompensated Respiratory Alkalosis
    else if (PH > 7.45 && PCO2 < 35 && HCO3 > 21.9 && HCO3 < 28.1) {
        document.getElementById("basicIN").innerHTML = `<p>Uncompensated Respiratory Alkalosis </p>`;
    }

    // Partially Compensated Respiratory Alkalosis
    else if (PH > 7.45 && PCO2 < 35 && HCO3 < 22) {
        document.getElementById("basicIN").innerHTML = `<p>Partially Compensated Respiratory Alkalosis</p>`;
    }

    // Fully Compensated Respiratory Alkalosis
    else if (PH > 7.405 && PH < 7.46 && PCO2 < 35 && HCO3 < 22) {
        document.getElementById("basicIN").innerHTML = `<p>Fully Compensated Respiratory Alkalosis</p>`;
    }

    // Uncompensated Metabolic Acidosis
    else if (PH < 7.35 && PCO2 > 34.9 && PCO2 < 45.1 && HCO3 < 22) {
        document.getElementById("basicIN").innerHTML = `<p>Uncompensated Metabolic Acidosis</p>`;
    }

    // Partially Compensated Metabolic Acidosis
    else if (PH < 7.35 && PCO2 < 35 && HCO3 < 22) {
        document.getElementById("basicIN").innerHTML = `<p>Partially Compensated Metabolic Acidosis</p>`;
    }

    // Fully Compensated Metabolic Acidosis
    else if (PH > 7.349 && PH < 7.405 && PCO2 < 35 && HCO3 < 22) {
        document.getElementById("basicIN").innerHTML = `<p>Fully Compensated Metabolic Acidosis</p>`;
    }

    // Uncompensated Metabolic Alkalosis
    else if (PH > 7.45 && PCO2 > 34.9 && PCO2 < 45.1 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Uncompensated Metabolic Alkalosis</p>`;
    }

    // Partially Compensated Metabolic Alkalosis
    else if (PH > 7.45 && PCO2 > 45 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Partially Compensated Metabolic Alkalosis</p>`;
    }

    // Partially Compensated Metabolic Alkalosis
    else if (PH > 7.45 && PCO2 > 45 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Partially Compensated Metabolic Alkalosis</p>`;
    }

    // Fully Compensated Metabolic Alkalosis
    else if (PH > 7.405 && PH < 7.46 && PCO2 > 45 && HCO3 > 28) {
        document.getElementById("basicIN").innerHTML = `<p>Fully Compensated Metabolic Alkalosis</p>`;
    }

    // checks for normal (No Acid-Base Disorder)
    else if (PH > 7.349 && PH < 7.451 && PCO2 > 34.9 && PCO2 < 45.1 && HCO3 < 28.1 && HCO3 > 21.9) {
        document.getElementById("basicIN").innerHTML = `<p style="">No Acid-Base Disorder found.... Check AG ( Anion Gap [8 mmol/l - 12 mmol/l] )</p>`;
    }

    else { document.getElementById("basicIN").innerHTML = `<p style="">** Please enter real ABG Values or enter pCO2 near to Normal Range (35 mmHg - 45 mmHg)</p>`; }

    removeinputs();
})

// Adding functionability to button submit to reset && reset to reload page

// remove submit button 
function removeBtn(){
btn.remove();
reloadPage();
}

// add newbutton called reset buttion & able to reload the page

function reloadPage(){
    var div = document.getElementById("abgSubmitContainer");
    var resetbtn =document.createElement("button");
    resetbtn.setAttribute('id','reset');
    resetbtn.setAttribute('type','submit');
    resetbtn.appendChild(document.createTextNode("Reset"));
    div.appendChild(resetbtn);

    // reload the page
    var reset = document.getElementById("reset");
    reset.addEventListener('click',function(){
        location.reload();
    })
}

function removeinputs(){
    // remove pH & pCO2 inputs
    var removeLabelInput = document.getElementById("abgFormContainer");
    removeLabelInput.remove();
}

   