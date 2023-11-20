"use strict";

window.onload = function() {

    let dropdownMenuLocation = document.getElementById("location");
    locationsArray.forEach(function (location) {
        var option = document.createElement("option");
        option.text = location;
        dropdownMenuLocation.add(option);
    });

    let dropdownMenuParkType = document.getElementById("parkType");
    parkTypesArray.forEach(function (parkType) {
        var option = document.createElement("option");
        option.text = parkType;
        dropdownMenuParkType.add(option);
    });

   
    document.getElementById("nextBtn").addEventListener("click", onNextBtnClicked);
    document.getElementById("resetBtn").addEventListener("click", clearForm);
    document.getElementById("selectLocationBtn").addEventListener("click", onSelectLocationBtnClicked);
    document.getElementById("selectParkTypeBtn").addEventListener("click", onSelectParkTypeBtnClicked);
    document.getElementById("allBtn").addEventListener("click", onAllBtnClicked);


}
function onNextBtnClicked() {
if (locationRadio.checked) {
    document.getElementById("locationSection").style.display = "block";
    document.getElementById("parkTypeSection").style.display = "none";
} else if (parkTypeRadio.checked) {
    document.getElementById("parkTypeSection").style.display = "block";
    document.getElementById("locationSection").style.display = "none";

} else {
    
    alert("Please select way of search.");
}
}
// add view all btn
function onAllBtnClicked(){
        document.getElementById("resultForAllSection").style.display = "block";
    
        let resultText = "";
        nationalParksArray.forEach(function (nationalPark) {
            resultText += ` <b> Location Name: </b>${nationalPark.LocationName} <br>
            <b> Location ID: </b>${nationalPark.LocationID} <br>
        
                <b> Address: </b>${nationalPark.Address} ${nationalPark.City} ${nationalPark.State} ${nationalPark.ZipCode} | Phone: ${nationalPark.Phone} Fax: ${nationalPark.Fax} <br>`;

            
            // check its defined
            if (nationalPark.Visit) {
                resultText += `<b> Visit: </b> <a href="${nationalPark.Visit}" target="_blank">${nationalPark.Visit}</a> <br>`;
            }
    
            resultText += `<br>`;
        });
    
        document.getElementById("parkResult2").innerHTML = resultText;
    }






function clearForm() {
    var locationRadio = document.getElementById("locationRadio");
    var parkTypeRadio = document.getElementById("parkTypeRadio");
    document.getElementById("locationSection").style.display = "none";
    document.getElementById("parkTypeSection").style.display = "none";
    document.getElementById("resultSection").style.display = "none";
    document.getElementById("resultForAllSection").style.display = "none";


    // uncheck the radio buttons
    locationRadio.checked = false;
    parkTypeRadio.checked = false;
}

function onSelectLocationBtnClicked(){
    document.getElementById("resultSection").style.display = "block";
    let locationSelected = document.getElementById('location');
    let selectedValue = locationSelected.value;
    let resultText = ""; // string

    nationalParksArray.forEach(function (nationalPark) {
        if (nationalPark.State === selectedValue) {
            resultText +=` <b> Location Name: </b>${nationalPark.LocationName} <br>
            <b> Location ID: </b>${nationalPark.LocationID} <br>
        
                <b> Address: </b>${nationalPark.Address} ${nationalPark.City} ${nationalPark.State} ${nationalPark.ZipCode} | Phone: ${nationalPark.Phone} Fax: ${nationalPark.Fax} <br>`;


        // check if it's defined/not empty
        if (nationalPark.Visit) {
            resultText += `<b> Visit: </b> <a href="${nationalPark.Visit}" target="_blank">${nationalPark.Visit}</a> <br>`;
        }

        resultText += `<br>`;
    }
});

    //  the collected info
    document.getElementById("parkResult").innerHTML = resultText;

    // cleared the dropdown to avoid duplicates
    locationSelected.selectedIndex = 0;
}
    
function onSelectParkTypeBtnClicked() {
    document.getElementById("resultSection").style.display = "block";
    let parkTypeDropdown = document.getElementById('parkType');
    let selectedValue = parkTypeDropdown.value;
    let resultText = ""; // string
    nationalParksArray.forEach(function (nationalPark) {
        if (nationalPark.LocationName.includes(selectedValue)) {
            resultText += ` <b> Location Name: </b>${nationalPark.LocationName} <br>
            <b> Location ID: </b>${nationalPark.LocationID} <br>
        
                <b> Address: </b>${nationalPark.Address} ${nationalPark.City} ${nationalPark.State} ${nationalPark.ZipCode} | Phone: ${nationalPark.Phone} Fax: ${nationalPark.Fax} <br>`;

            // check if it's defined/not empty
            if (nationalPark.Visit) {
                resultText += `<b> Visit: </b> <a href="${nationalPark.Visit}" target="_blank">${nationalPark.Visit}</a> <br>`;
            }

            resultText += `<br>`;
        }
    });

    document.getElementById("parkResult").innerHTML = resultText;

    parkTypeDropdown.selectedIndex = 0;
}
