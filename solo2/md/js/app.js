"use strict"
$(document).ready(function(){
    const time= new Date();

    $("#time").text(new Date());

    $("#consusForm").on("submit",function (event) {
        event.preventDefault();
        const name=$('#personalName').val();
        const citizenId=$("#citizenId").val();
        const ssn=$("#ssn").val();
        const state=$("#state").val();
        const isCitizen=$("input[name='radioCitizen']:checked").val();
        const table=$("#tableCansus");
        const newRecord= $("#tableCansus").find('tbody')
            .append(`<tr><td>${citizenId}</td><td>${ssn}</td><td>${name}</td><td>${state}</td><td>${isCitizen}</td></tr>`);
        table.show().append(newRecord);

    })
})