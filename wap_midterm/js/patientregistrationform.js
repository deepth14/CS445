/**
 * app.js
 * 
 * @author Henok.Kifleyesus
 * @since 2020-04-05
 */

$(function() {
    "use strict";

    setInterval(myTimer1, 10);

    function myTimer1(){
        let date = new Date();
            let dateString = date.toString().split(date.getFullYear())[0].concat(date.getFullYear());
            const time = date.getHours() < 12 ? "AM" : "PM";
            let dateTimeString = dateString + " " + (
            date.getHours() > 12 ? date.getHours() % 12 : date.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})+ ":" + 
            date.getMinutes().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + ":" + 
            date.getSeconds().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) + " " + time;
            document.getElementById("span").innerHTML = dateTimeString;
    }

    $("#patient_registration_form").submit(
        function(evt) {
            evt.preventDefault();
            const patientID = $("#patient_id").val();
            const firstName = $("#first_name").val();
            const middleInitials = $("#middle_initials").val();
            const lastName = $("#last_name").val();
            const dateOfBirth = $("#date_of_birth").val();
            const department = $("#department").val();           
            const outPatient = $("input[name='outPatient']:checked").val();
            let newInput = `<tr><td>${patientID}</td><td>${firstName}</td><td>${middleInitials}</td><td>${lastName}</td><td>${dateOfBirth}</td><td>${department}</td><td class='.isOutpatient'>${outPatient}</td></tr>`;
            $("#data_display").append(newInput);
            $("#reset_button").click();
        }
    );
    $("#outpatient_checkbox").click(
        function(evt) {
            if($(this).prop("checked") == true){
                $("tbody").find("tr").each(
                    function() {
                        let isOutpatient = $(this).find(".isOutpatient").html() === "Yes";
                        if(!isOutpatient) {
                            $(this).hide();
                        }
                    }
                );
            }
            else if($(this).prop("checked") == false){
                $("tbody").find("tr").each(
                    function() {
                        let isOutpatient = $(this).find(".isOutpatient").html() === "Yes";
                        if(!isOutpatient) {
                            $(this).show();
                        }
                    }
                );
            }
        }
    );
    
}
);