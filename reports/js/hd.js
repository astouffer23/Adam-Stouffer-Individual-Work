//skn 1UcHqZ55eqKRqAUuNTY
//afs zgUkAWW3h7nBcrAiNWR
var brendaCounter = 0;
var jakeCounter = 0;
var tylerCounter = 0;
var unassignedCounter = 0;
var totalResolvedLength = 0;
var newCounter = 0;
var openCounter = 0;
var pendingCounter = 0;
var sentCustomerCounter = 0;
var resolvedCounter = 0;
var resolvedLength = 0;
var jakeNewCounter = 0;
var brendaNewCounter = 0;
var tylerNewCounter = 0;
var unassignedNewCounter = 0;
var brendaOpenCounter = 0;
var jakeOpenCounter = 0;
var tylerOpenCounter = 0;
var unassignedOpenCounter = 0;
var brendaPendingCounter = 0;
var jakePendingCounter = 0;
var tylerPendingCounter = 0;
var unassignedPendingCounter = 0;
var jakeSentCounter = 0;
var brendaSentCounter = 0;
var tylerSentCounter = 0;
var unassignedSentCounter = 0;


$(document).ready(function () {
    getAllNumbers();

    $("#refreshButton").click(function() {
        location.reload();
    });

    $("#hideButton").click(function () {
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").hide();
    });

    $("#newView").click(function () {
        $("#allTickets").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").show();
        $("#resolvedTickets").hide();
    });

    $("#openView").click(function () {
        $("#allTickets").hide();
        $("#pendingTickets").hide();
        $("#openTickets").show();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
    });
    $("#pendingView").click(function () {
        $("#allTickets").hide();
        $("#openTickets").hide();
        $("#pendingTickets").show();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
    });
    $("#sentView").click(function () {
        $("#allTickets").hide();
        $("#openTickets").hide();
        $("#pendingTickets").hide();
        $("#sentToTickets").show();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
    });
    $("#resolvedView").click(function () {
        $("#allTickets").hide();
        $("#openTickets").hide();
        $("#pendingTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").show();
    });

});

function getAllNumbers() {

    getNewNumbers();
    getOpenNumbers();
    getPendingNumbers();
    getSentToNumbers();
    getResolvedNumbers();
};

function showRefresh() {
    $("#refreshDiv").hide();
    $("#refreshedDiv").show();
    $("#refreshedDiv").delay(1000).slideUp();
};

function getNewNumbers() {
    newCounter = 0;
    jakeNewCounter = 0;
    brendaNewCounter = 0;
    tylerNewCounter = 0;
    unassignedNewCounter = 0;
    $("#refreshDiv").fadeIn("slow");
    newP1();
};

function newP1() {

    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:19\%20AND%20group_id:19000050000\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + "  onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        newCounter++;
                    };
                });
            newP2();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function newP2() {

    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:19\%20AND%20group_id:19000050000\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + "  onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        newCounter++;
                    }
                });
            newP3();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function newP3() {

    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:19\%20AND%20group_id:19000050000\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + "  onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        newCounter++;
                    }
                });
            newP4();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function newP4() {

    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:19\%20AND%20group_id:19000050000\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + "  onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        newCounter++;
                    }
                });
            newP5();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function newP5() {

    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:19\%20AND%20group_id:19000050000\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + "  onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedNewCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedNewDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedNewDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showNewInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsNew").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        newCounter++;
                    }
                });
            $("#newView").html("New: " + newCounter);
            $("#newNumber").html("New: " + newCounter);
            $("#newNumberView").html("New: " + newCounter);
            $("#jakeNewCounter").html("Jake: " + jakeNewCounter);
            $("#tylerNewCounter").html("Tyler: " + tylerNewCounter);
            $("#brendaNewCounter").html("Brenda: " + brendaNewCounter);
            $("#unassignedNewCounter").html("Unassigned: " + unassignedNewCounter);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getOpenNumbers() {
    openCounter = 0;
    jakeOpenCounter = 0;
    brendaOpenCounter = 0;
    tylerOpenCounter = 0;
    unassignedOpenCounter = 0;
    openP1();
};

function openP1() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:2\%20AND%20group_id:19000050000\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            $("#allTicketsOpen").prepend("<hr>");
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        openCounter++;
                    }
                });
            openP2();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function openP2() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:2\%20AND%20group_id:19000050000\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        openCounter++;
                    }
                });
            openP3();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function openP3() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:2\%20AND%20group_id:19000050000\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        openCounter++;
                    }
                });
            openP4();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function openP4() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:2\%20AND%20group_id:19000050000\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        openCounter++;
                    }
                });
            openP5();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function openP5() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:2\%20AND%20group_id:19000050000\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;

            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#jakeOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#brendaOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#tylerOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedOpenCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedOpenDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedOpenDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showOpenInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        openCounter++;
                    }
                });
            $("#openView").html("Open: " + openCounter);
            $("#openNumber").html("Open: " + openCounter);
            $("#openSummary").html("Open: " + openCounter);
            $("#brendaOpenCounter").html("Brenda: " + brendaOpenCounter);
            $("#jakeOpenCounter").html("Jake: " + jakeOpenCounter);
            $("#tylerOpenCounter").html("Tyler: " + tylerOpenCounter);
            $("#unassignedOpenCounter").html("Unassigned: " + unassignedOpenCounter);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function getPendingNumbers() {
    pendingCounter = 0;
    jakePendingCounter = 0;
    brendaPendingCounter = 0;
    tylerPendingCounter = 0;
    unassignedPendingCounter = 0;
    pendingP1();
};

function pendingP1() {
    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:3\%20AND%20group_id:19000050000\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            $("#allTicketsPending").prepend("<hr/>");
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {
                        while (arrayLength < data.results.length) {

                            if (data.results[arrayLength].responder_id === 19008173125) {
                                jakePendingCounter++;
                                if (data.results[arrayLength].subject === "") {
                                    $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#jakePendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                } else {
                                    $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#jakePendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                }
                            }
                            if (data.results[arrayLength].responder_id === 19000197788) {
                                brendaPendingCounter++;
                                if (data.results[arrayLength].subject === "") {
                                    $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#brendaPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                } else {
                                    $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#brendaPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                }
                            }
                            if (data.results[arrayLength].responder_id === 19001766755) {
                                tylerPendingCounter++;
                                if (data.results[arrayLength].subject === "") {
                                    $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#tylerPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                } else {
                                    $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#tylerPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                }
                            }
                            if (data.results[arrayLength].responder_id !== 19001766755 &&
                                data.results[arrayLength].responder_id !== 19000197788 &&
                                data.results[arrayLength].responder_id !== 19008173125) {
                                unassignedPendingCounter++;
                                if (data.results[arrayLength].subject === "") {
                                    $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#unassignedPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                } else {
                                    $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#unassignedPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                    $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                    $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                                }
                            }
                            arrayLength++;
                            pendingCounter++;
                        }
                    }
                });
            pendingP2();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function pendingP2() {
    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:3\%20AND%20group_id:19000050000\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakePendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        pendingCounter++;
                    }
                });
            pendingP3();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function pendingP3() {
    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:3\%20AND%20group_id:19000050000\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakePendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        pendingCounter++;
                    }
                });
            pendingP4();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function pendingP4() {
    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:3\%20AND%20group_id:19000050000\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakePendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        pendingCounter++;
                    }
                });
            pendingP5();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function pendingP5() {
    $.ajax({
        type: 'GET',
        //status 19 = new
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:3\%20AND%20group_id:19000050000\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakePendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakePendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakePendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedPendingCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedPendingDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedPendingDiv").append("<h7  onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showPendingInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsPending").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        pendingCounter++;
                    }
                });
            $("#pendingView").html("Pending: " + pendingCounter);
            $("#jakePendingCounter").html("Jake: " + jakePendingCounter);
            $("#tylerPendingCounter").html("Tyler: " + tylerPendingCounter);
            $("#brendaPendingCounter").html("Brenda: " + brendaPendingCounter);
            $("#unassignedPendingCounter").html("Unassigned: " + unassignedPendingCounter);
            $("#pendingNumber").html("Pending: " + pendingCounter);
            $("#pendingCounter").html("Pending: " + pendingCounter);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function getSentToNumbers() {
    sentCustomerCounter = 0;
    brendaSentCounter = 0;
    tylerSentCounter = 0;
    jakeSentCounter = 0;
    unassignedSentCounter = 0;
    sentP1();
};

function sentP1() {
    $.ajax({
        type: 'GET',
        //status 6 = sent to customer
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:6\%20AND%20group_id:19000050000\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            $("#allTicketsSentTo").prepend("<hr/>");
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        sentCustomerCounter++;
                    }
                });
            sentP2();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function sentP2() {
    $.ajax({
        type: 'GET',
        //status 6 = sent to customer
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:6\%20AND%20group_id:19000050000\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        sentCustomerCounter++;
                    }
                });
            sentP3();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function sentP3() {
    $.ajax({
        type: 'GET',
        //status 6 = sent to customer
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:6\%20AND%20group_id:19000050000\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        sentCustomerCounter++;
                    }
                });
            sentP4();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function sentP4() {
    $.ajax({
        type: 'GET',
        //status 6 = sent to customer
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:6\%20AND%20group_id:19000050000\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        sentCustomerCounter++;
                    }
                });
            sentP5();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function sentP5() {
    $.ajax({
        type: 'GET',
        //status 6 = sent to customer
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"status:6\%20AND%20group_id:19000050000\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var arrayLength = 0;
            $.each(data,
                function () {
                    while (arrayLength < data.results.length) {

                        if (data.results[arrayLength].responder_id === 19008173125) {
                            jakeSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#jakeSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#jakeSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19000197788) {
                            brendaSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#brendaSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#brendaSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id === 19001766755) {
                            tylerSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#tylerSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#tylerSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        if (data.results[arrayLength].responder_id !== 19001766755 &&
                            data.results[arrayLength].responder_id !== 19000197788 &&
                            data.results[arrayLength].responder_id !== 19008173125) {
                            unassignedSentCounter++;
                            if (data.results[arrayLength].subject === "") {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                            } else {
                                $("#unassignedSentToDiv").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#unassignedSentToDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showSentToInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[arrayLength].subject + "</h7><br>");
                                $("#allTicketsSentTo").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[arrayLength].id + " target=" + "_blank" + ">" + data.results[arrayLength].id + "</a> ");
                                $("#allTicketsSentTo").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[arrayLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[arrayLength].subject + "</h7><br>");
                            }
                        }
                        arrayLength++;
                        sentCustomerCounter++;
                    }
                });
            $("#sentView").html("Sent to Customer: " + sentCustomerCounter);
            $("#sentToCustomerNumber").html("Sent to Customer: " + sentCustomerCounter);
            $("#sentCounter").html("Sent to Customer: " + sentCustomerCounter);
            $("#jakeSentCounter").html("Jake: " + jakeSentCounter);
            $("#brendaSentCounter").html("Brenda: " + brendaSentCounter);
            $("#tylerSentCounter").html("Tyler: " + tylerSentCounter);
            $("#unassignedSentCounter").html("Unassigned: " + unassignedSentCounter);
            showRefresh();
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
};

function getResolvedNumbers() {
    var todayDate = new Date();
    var d = todayDate.getDate();
    if (d === 1 || d === 2 || d === 3 || d === 4 || d === 5 || d === 6 || d === 7 || d === 8 || d === 9) {
        d = "0" + d;
    }
    var m = todayDate.getMonth() + 1;
    if (m !== 10 || m !== 11 || m !== 12) {
        m = "0" + m;
    }
    var y = todayDate.getFullYear();


    $("#resolvedList").append("<br>");
    resolvedCounter = 0;
    resolvedP1(d, m, y);
};

function resolvedP1(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            brendaCounter = 0;
            jakeCounter = 0;
            tylerCounter = 0;
            unassignedCounter = 0;
            var resolvedLength = 0;
            totalResolvedLength = 0;
            totalResolvedLength = data.results.length;


            $.each(data,
                function () {

                    while (resolvedLength < data.results.length) {
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            jakeCounter++;
                            $("#jakeResolvedDiv").append("<button id="+data.results[resolvedLength].id +" onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id+" href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#jakeResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#jakeResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#jakeResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");

                        }
                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            brendaCounter++;
                            $("#brendaResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#brendaResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#brendaResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#brendaResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            tylerCounter++;
                            $("#tylerResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#tylerResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#tylerResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#tylerResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#unassignedResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#unassignedResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#unassignedResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            unassignedCounter++;
                        }
                        resolvedCounter++;
                        resolvedLength++;
                    }

                });
            resolvedP2(d,m,y);


        },
        error: function () {
            alert("Try again or call Adam. Couldn't get resolved tickets");
        }
    });
}

function resolvedP2(d,m,y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            var resolvedLength = 0;
            totalResolvedLength = totalResolvedLength + data.results.length;


            $.each(data,
                function () {

                    while (resolvedLength < data.results.length) {
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            jakeCounter++;
                            $("#jakeResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#jakeResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#jakeResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#jakeResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");

                        }
                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            brendaCounter++;
                            $("#brendaResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#brendaResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#brendaResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#brendaResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            tylerCounter++;
                            $("#tylerResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#tylerResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#tylerResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#tylerResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#unassignedResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#unassignedResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#unassignedResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            unassignedCounter++;
                        }
                        resolvedCounter++;
                        resolvedLength++;
                    }

                });
            resolvedP3(d,m,y);


        },
        error: function () {
            alert("Try again or call Adam. Couldn't get resolved tickets");
        }
    });

};

function resolvedP3(d,m,y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            totalResolvedLength = totalResolvedLength + data.results.length;
            var resolvedLength = data.results.length;

            $.each(data,
                function () {

                    while (resolvedLength < data.results.length) {
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            jakeCounter++;
                            $("#jakeResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#jakeResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#jakeResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#jakeResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");

                        }
                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            brendaCounter++;
                            $("#brendaResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#brendaResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#brendaResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#brendaResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            tylerCounter++;
                            $("#tylerResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#tylerResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#tylerResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#tylerResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#unassignedResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#unassignedResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#unassignedResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            unassignedCounter++;
                        }
                        resolvedCounter++;
                        resolvedLength++;
                    }

                });
            resolvedP4(d,m,y);


        },
        error: function () {
            alert("Try again or call Adam. Couldn't get resolved tickets");
        }
    });

};

function resolvedP4(d,m,y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            totalResolvedLength = totalResolvedLength + data.results.length;

            var resolvedLength = data.results.length;

            $.each(data,
                function () {

                    while (resolvedLength < data.results.length) {
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            jakeCounter++;
                            $("#jakeResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#jakeResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#jakeResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#jakeResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");

                        }
                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            brendaCounter++;
                            $("#brendaResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#brendaResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#brendaResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#brendaResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            tylerCounter++;
                            $("#tylerResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#tylerResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#tylerResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#tylerResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#unassignedResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#unassignedResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#unassignedResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            unassignedCounter++;
                        }
                        resolvedCounter++;
                        resolvedLength++;
                    }

                });
            resolvedP5(d,m,y);


        },
        error: function () {
            alert("Try again or call Adam. Couldn't get resolved tickets");
        }
    });

};

function resolvedP5(d,m,y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            totalResolvedLength = totalResolvedLength + data.results.length;

            var resolvedLength = data.results.length;

            $.each(data,
                function () {

                    while (resolvedLength < data.results.length) {
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            jakeCounter++;
                            $("#jakeResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#jakeResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#jakeResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#jakeResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");

                        }
                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            brendaCounter++;
                            $("#brendaResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#brendaResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#brendaResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#brendaResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            tylerCounter++;
                            $("#tylerResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#tylerResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#tylerResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#tylerResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedDiv").append("<button id=" + data.results[resolvedLength].id + " onclick=" + "runDelete(" + data.results[resolvedLength].id + ")" + " class=" + "deleteBtn" + "> Delete </button><a class=" + data.results[resolvedLength].id + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#" + data.results[resolvedLength].id + "").addClass(data.results[resolvedLength].id);
                            $("#unassignedResolvedDiv").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showResolvedInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            $(".deleteBtn").addClass('btn btn-danger btn-xs');
                            $(".deleteBtn").css('margin', '5px');
                            $(".deleteBtn").css('margin-left', '20px');
                            $(".deleteBtn").css('margin-right', '20px');
                            $("#unassignedResolvedHome").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                            $("#unassignedResolvedHome").append("<h7 onmouseout=" + "this.style.backgroundColor='aliceblue'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer; " + ">" + data.results[resolvedLength].subject + "</h7><br>");
                            unassignedCounter++;
                        }
                        resolvedCounter++;
                        resolvedLength++;
                    }

                });

            $("#resolvedView").html("Resolved: " + resolvedCounter);
            $("#totalResolved").append(totalResolvedLength);
            $("#resSummary").append(" "+totalResolvedLength);
            $("#brendaResolvedTodayHome").append(brendaCounter);
            $("#jakeResolvedToday").append(jakeCounter);
            $("#tylerResolvedToday").append(tylerCounter);
            $("#unassignedResolved").append(unassignedCounter);
            $("#brendaResolvedDiv").prepend("<div id =" + "brendaResName" + "> Brenda: " + brendaCounter + "</div><br>");
            $("#brendaResName").css('color','blue');
            $("#brendaResolvedDiv").append("<hr/>");
            $("#jakeResolvedDiv").prepend("<div id =" + "jakeResName" + "> Jake: " + jakeCounter + "</div><br>");
            $("#jakeResName").css('color', 'red');
            $("#jakeResolvedDiv").append("<hr/>");
            $("#tylerResolvedDiv").prepend("<div id =" + "tylerResName" + "> Tyler: " + tylerCounter + "</div><br>");
            $("#tylerResName").css('color', 'orange');
            $("#tylerResolvedDiv").append("<hr/>");
            $("#unassignedResolvedDiv").prepend("<div id =" + "unassignedResName" + "> Unassigned: " + unassignedCounter + "</div><br>");
            $("#unassignedResName").css('color', 'purple');
            $("#unassignedResolvedDiv").append("<hr/>");
            $("#refreshDiv").hide();
            $("#refreshedDiv").show();
            $("#refreshedDiv").delay(1000).slideUp();
        },
        error: function () {
            alert("Try again or call Adam. Couldn't get resolved tickets");
        }
    });

};

function showInfo(id) {
    $("#allTicketsRightCol").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#allTicketsRightCol").append("<div id=" + "jakeDiv" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeDiv").css('color', 'red').css('font-weight','bold');
            }
            if (data.responder_id === 19000197788) {
                $("#allTicketsRightCol").append("<div id=" + "brendaDiv" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaDiv").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#allTicketsRightCol").append("<div id=" + "tylerDiv" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerDiv").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#allTicketsRightCol").append("<div style=" + "color:purple; " + ">Unassigned</div><hr/><p>");
            }

            $("#allTicketsRightCol").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function showNewInfo(id) {
    $("#newTicketsViewRight").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#newTicketsViewRight").append("<div id=" + "jakeNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeNewDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#newTicketsViewRight").append("<div id=" + "brendaNewivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaNewDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#newTicketsViewRight").append("<div id=" + "tylerNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerNewDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#newTicketsViewRight").append("<div id=" + "unassignedNewDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedNewDivRight").css('color', 'purple').css('font-weight', 'bold');
            }

            $("#newTicketsViewRight").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function showOpenInfo(id) {
    $("#openTicketsViewRight").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#openTicketsViewRight").append("<div id=" + "jakeOpenDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeOpenDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#openTicketsViewRight").append("<div id=" + "jakeOpenDivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#jakeOpenDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#openTicketsViewRight").append("<div id=" + "jakeOpenDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#jakeOpenDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#openTicketsViewRight").append("<div id=" + "unassignedOpenDiv2" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedOpenDiv2").css('color', 'purple').css('font-weight', 'bold');
            }

            $("#openTicketsViewRight").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function showPendingInfo(id) {
    $("#pendingTicketsViewRight").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#pendingTicketsViewRight").append("<div id=" + "jakePendingDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakePendingDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#pendingTicketsViewRight").append("<div id=" + "brendaPendingDivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaPendingDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#pendingTicketsViewRight").append("<div id=" + "tylerPendingDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerPendingDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#pendingTicketsViewRight").append("<div id=" + "unassignedPendingDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedPendingDivRight").css('color', 'purple').css('font-weight', 'bold');
            }

            $("#pendingTicketsViewRight").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function showSentToInfo(id) {
    $("#sentTicketsViewRight").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#sentTicketsViewRight").append("<div id=" + "jakeSentToDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeSentToDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#sentTicketsViewRight").append("<div id=" + "brendaSentToDivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaSentToDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#sentTicketsViewRight").append("<div id=" + "tylerSentToDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerSentToDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#sentTicketsViewRight").append("<div id=" + "unassignedSentToDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedSentToDivRight").css('color', 'purple').css('font-weight', 'bold');
            }

            $("#sentTicketsViewRight").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function showResolvedInfo(id) {
    $("#resolvedTicketsViewRight").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.responder_id === 19008173125) {
                $("#resolvedTicketsViewRight").append("<div id=" + "jakeResolvedDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeResolvedDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#resolvedTicketsViewRight").append("<div id=" + "brendaResolvedDivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaResolvedDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#resolvedTicketsViewRight").append("<div id=" + "tylerResolvedDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerResolvedDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#resolvedTicketsViewRight").append("<div id=" + "unassignedResolvedDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedResolvedDivRight").css('color', 'purple').css('font-weight', 'bold');
            }

            $("#resolvedTicketsViewRight").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
        },
        error: function () {

        }
    });
};

function runDelete(id) {
    $("#confirmDiv").html("OK to delete ticket " + id + "?").show();
    $("#confirmDiv").click(function () {
        $("#confirmDiv").hide();
        $.ajax({
            type: 'DELETE',
            url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id,
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("zgUkAWW3h7nBcrAiNWR"));
            },
            success: function () {
                $("." + id + "").hide();
                $("#" + id + "").hide();
            },
            error: function () {
                alert("Unable to delete your ticket");
            }
        });

    });
    $("#confirmDiv").delay(5000).fadeOut("slow");
};