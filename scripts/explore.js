"use strict";
window.onload = function() {
    let dropdownMenuMountain = document.getElementById("mountains");
    mountainsArray.forEach(function (mountain) {
        let option = document.createElement("option");
        option.text = mountain.name;
        dropdownMenuMountain.add(option);
    });

    document.getElementById("selectMountainsBtn").addEventListener("click", selectMountainsBtn);



}
function selectMountainsBtn(){
    document.getElementById("resultSection").style.display = "block";
// lets
    let mountName =  document.getElementById("mountName");
    let mountDescription =  document.getElementById("mountDescription");
    let mountElevation =  document.getElementById("mountElevation");
    let otherInformantion =  document.getElementById("otherInformantion");
    let mountainsDropdown = document.getElementById('mountains');
    let selectedValue = mountainsDropdown.value;
    let resultTextName = "";
    let resultTextDescription = "";
    let resultTextElevation = "";
    let resultTextOthers = "";


    mountainsArray.forEach(function (mountain) {
        if (mountain.name === selectedValue) {
            resultTextName += `<b>Name: </b>${mountain.name}`;
            resultTextDescription += `<b>Description: </b>${mountain.desc};`
            resultTextElevation += `<b>Elevation: </b>${mountain.elevation}`;
            resultTextOthers += `<b>Others: </b>${mountain.effort}`;
           
            mountainsDropdown.selectedIndex = 0;
        }
    
    });

    mountName.innerHTML = resultTextName;
    mountDescription.innerHTML = resultTextDescription;
    mountElevation.innerHTML = resultTextElevation;
    otherInformantion.innerHTML = resultTextOthers;
}

