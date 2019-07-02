//skn 1UcHqZ55eqKRqAUuNTY
//afs zgUkAWW3h7nBcrAiNWR
var adamNewCounter = 0;
var bryanNewCounter = 0;
var brendaCounter = 0;
var jakeCounter = 0;
var tylerCounter = 0;
var unassignedCounter = 0;
var totalResolvedLength = 0;
var adamCounter = 0;
var bryanCounter = 0;
var newCounter = 0;
var openCounter = 0;
var openLength = 0;
var pendingCounter = 0;
var sentCounter = 0;
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
var adamSentCounter = 0;
var bryanSentCounter = 0;
var brendaSentCounter = 0;
var tylerSentCounter = 0;
var unassignedSentCounter = 0;
var sentLength = 0;
var adamOpenCounter = 0;
var bryanOpenCounter = 0;
var adamPendingCounter = 0;
var bryanPendingCounter = 0;
var newLength = 0;
var pendingLength = 0;
var adamWorkingCounter = 0;
var bryanWorkingCounter = 0;
var brendaWorkingCounter = 0;
var jakeWorkingCounter = 0;
var tylerWorkingCounter = 0;
var unassignedWorkingCounter = 0;
var workingCounter = 0;
var workingLength = 0;
var devAdamNew = 0;
var devAdamPending = 0;
var devAdamWorking = 0;
var devAdamOpen = 0;
var devAdamResolved = 0;
var devAdamSent = 0;
var devBryanNew = 0;
var devBryanPending = 0;
var devBryanWorking = 0;
var devBryanOpen = 0;
var devBryanResolved = 0;
var devBryanSent = 0;
var devUnassignedNew = 0;
var devUnassignedPending = 0;
var devUnassignedWorking = 0;
var devUnassignedOpen = 0;
var devUnassignedResolved = 0;
var devUnassignedSent = 0;
var HdUnassignedSent = 0;
var HDBrendaNew = 0;
var HdBrendaPending = 0;
var HdBrendaWorking = 0;
var HdBrendaOpen = 0;
var HdBrendaResolved = 0;
var HdBrendaSent = 0;
var HDTylerNew = 0;
var HdTylerPending = 0;
var HdTylerWorking = 0;
var HdTylerOpen = 0;
var HdTylerResolved = 0;
var HdTylerSent = 0;
var HDJakeNew = 0;
var HdJakePending = 0;
var HdJakeWorking = 0;
var HdJakeOpen = 0;
var HdJakeResolved = 0;
var HdJakeSent = 0;
var HDUnassignedNew = 0;
var HdUnassignedPending = 0;
var HdUnassignedWorking = 0;
var HdUnassignedOpen = 0;
var HdUnassignedResolved = 0;
var HdUnassignedSent = 0;
var devResolvedCounter = 0;
var hdResolvedCounter = 0;

$(document).ready(function() {


    $("#helpDeskDiv").click(function() {

        $("#helpdeskFirstWindowResults").hide();

        $("#firstWindow").hide();
        $("#devFirstWindow").hide();

        $("#helpdeskNewNumbers").show();
        $("#helpdeskWorkingNumbers").show();
        $("#helpdeskResolvedNumbers").show();
        $("#helpdeskPendingNumbers").show();
        $("#helpdeskSentNumbers").show();

        $("#helpdeskFirstWindow").show();
        $("#helpdeskWindow").show();
        $("#helpdeskFirstWindowNumbers").show();
        $("#helpdeskOpenNumbers").show();
    });
    $("#devTeamDiv").click(function() {
        $("#devFirstWindowResults").hide();

        $("#firstWindow").hide();
        $("#helpdeskFirstWindow").hide();

        $("#devNewNumbers").show();
        $("#devPendingNumbers").show();
        $("#devResolvedNumbers").show();
        $("#devWorkingNumbers").show();
        $("#devSentNumbers").show();

        $("#devFirstWindow").show();
        $("#devWindow").show();
        $("#devFirstWindowNumbers").show();
        $("#devOpenNumbers").show();
    });
    $("#overViewDiv").click(function() {
        $("#devFirstWindowResults").hide();
        $("#helpdeskFirstWindowResults").hide();
        $("#devFirstWindow").hide();
        $("#helpdeskFirstWindow").hide();
        $("#newNumbers").show();
        $("#openNumbers").show();
        $("#resolvedNumbers").show();
        $("#pendingNumbers").show();
        $("#workingNumbers").show();
        $("#sentNumbers").show();
        $("#firstWindowResults").hide();
        $("#firstWindow").show();

    });

    getAllNumbers();

    $("#menu-refresh").click(function() {
        location.reload();
    });

});

function getAllNumbers() {

    getNewNumbers();
    getOpenNumbers();
    getPendingNumbers();
    getSentNumbers();
    getWorkingNumbers();
    getResolvedNumbers();
};

//function showRefresh() {
//    $("#refreshDiv").hide();
//    $("#refreshedDiv").show();
//    $("#refreshedDiv").delay(1000).slideUp();
//};

function getNewNumbers() {
    newCounter = 0;
    jakeNewCounter = 0;
    brendaNewCounter = 0;
    tylerNewCounter = 0;
    adamNewCounter = 0;
    bryanNewCounter = 0;
    unassignedNewCounter = 0;
    newLength = 0;
    //$("#refreshDiv").fadeIn("slow");
    newP1();
};

function checkNewNumbers(data) {
    while (newLength < data.results.length) {

        if (data.results[newLength].responder_id === 19008173125) {
            jakeNewCounter++;
            if (data.results[newLength].subject === "") {
                $("#jakeNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#jakeNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskJakeNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskJakeNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#jakeNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#jakeNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                $("#helpdeskJakeNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskJakeNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
            }
        }
        if (data.results[newLength].responder_id === 19000197788) {
            brendaNewCounter++;
            if (data.results[newLength].subject === "") {
                $("#brendaNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#brendaNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskBrendaNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskBrendaNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#brendaNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#brendaNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                $("#helpdeskBrendaNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskBrendaNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
            }
        }
        if (data.results[newLength].responder_id === 19001766755) {
            tylerNewCounter++;
            if (data.results[newLength].subject === "") {
                $("#tylerNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#tylerNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskTylerNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskTylerNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#tylerNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#tylerNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                $("#helpdeskTylerNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#helpdeskTylerNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
            }
        }
        if (data.results[newLength].responder_id === 19000195685) {
            adamNewCounter++;
            if (data.results[newLength].subject === "") {
                $("#adamNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#adamNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#devAdamNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#adamNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#adamNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                $("#devAdamNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#devAdamNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");

            }
        }
        if (data.results[newLength].responder_id === 19000346026) {
            bryanNewCounter++;
            if (data.results[newLength].subject === "") {
                $("#bryanNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#bryanNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devBryanNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#devBryanNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#bryanNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#bryanNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                $("#devBryanNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#devBryanNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + "  onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
            }
        }
        if (data.results[newLength].responder_id !== 19001766755 &&
            data.results[newLength].responder_id !== 19000197788 &&
            data.results[newLength].responder_id !== 19000346026 &&
            data.results[newLength].responder_id !== 19000195685 &&
            data.results[newLength].responder_id !== 19008173125) {
            unassignedNewCounter++;
            if (data.results[newLength].group_id === 19000152827) {
                devUnassignedNew++;
                if (data.results[newLength].subject === "") {
                    $("#devUnassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                    $("#devUnassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='darkgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#devUnassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                    $("#devUnassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                }
            }
            if (data.results[newLength].group_id === 19000050000) {
                HDUnassignedNew++;
                if (data.results[newLength].subject === "") {
                    $("#helpdeskUnassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                    $("#helpdeskUnassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                    $("#helpdeskUnassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
                }
            }
            if (data.results[newLength].subject === "") {
                $("#unassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#unassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#unassignedNew").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[newLength].id + " target=" + "_blank" + ">" + data.results[newLength].id + "</a> ");
                $("#unassignedNew").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[newLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[newLength].subject + "</h7><br>");
            }
        }
        newLength++;
        newCounter++;
    };

}

function newP1() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP2();
            } else {
                newP10();
            }
        },
        error: function() {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP2() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP3();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP3() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP4();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP4() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP5();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP6() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP7();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP7() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP8();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP8() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP9();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP9() {

    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length > 0) {
                $.each(data,
                    function() {
                        checkNewNumbers(data);
                    });
                newP10();
            } else {
                newP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function newP10() {

    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:19\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            $.each(data,
                function() {
                    checkNewNumbers(data);
                });
            if (jakeNewCounter !== 0) {
                $("#jakeNewCounter").append("Jake :" + jakeNewCounter);
                $("#jakeNew").show();
                $("#jakeNewCounter").show();
                $("#helpdeskJakeNewCounter").append("<br>Jake :" + jakeNewCounter);
                $("#helpdeskJakeNewCounter").show();
                $("#helpdeskJakeNew").show();
            }
            if (adamNewCounter !== 0) {
                $("#adamNewCounter").append("Adam :" + adamNewCounter);
                $("#adamNew").show();
                $("#adamNewCounter").show();
                $("#devAdamNew").show();
                $("#devAdamNewCounter").append("Adam :" + adamNewCounter);
                $("#devAdamNewCounter").show();
            }
            if (brendaNewCounter !== 0) {
                $("#brendaNewCounter").append("Brenda :" + brendaNewCounter);
                $("#brendaNew").show();
                $("#brendaNewCounter").show();
                $("#helpdeskBrendaNewCounter").append("<br>Brenda :" + brendaNewCounter);
                $("#helpdeskBrendaNewCounter").show();
                $("#helpdeskBrendaNew").show();
            }
            if (tylerNewCounter !== 0) {
                $("#tylerNewCounter").append("Tyler :" + tylerNewCounter);
                $("#tylerNew").show();
                $("#tylerNewCounter").show();
                $("#helpdeskTylerNewCounter").append("<br>Tyler :" + tylerNewCounter);
                $("#helpdeskTylerNewCounter").show();
                $("#helpdeskTylerNew").show();
            }
            if (bryanNewCounter !== 0) {
                $("#bryanNewCounter").append(" :" + bryanNewCounter);
                $("#bryanNew").show();
                $("#bryanNewCounter").show();
                $("#devBryanNew").show();
                $("#devBryanNewCounter").append(" :" + bryanNewCounter);
                $("#devBryanNewCounter").show();
            }
            if (devUnassignedNew !== 0) {
                $("#devUnassignedNewCounter").append("Unassigned :" + devUnassignedNew);
                $("#devUnassignedNew").show();
                $("#devUnassignedNewCounter").show();
            }
            if (HDUnassignedNew !== 0) {
                $("#helpdeskUnassignedNewCounter").append("<br>Unassigned :" + HDUnassignedNew);
                $("#helpdeskUnassignedNew").show();
                $("#helpdeskUnassignedNewCounter").show();
            }
            if (unassignedNewCounter !== 0) {
                $("#unassignedNewCounter").append("Unassigned :" + unassignedNewCounter);
                $("#unassignedNew").show();
                $("#unassignedNewCounter").show();
            }
            if (newCounter > 0) {
                $("#newCounterDisplay").append("New: " + newCounter);
                var devCounter = adamNewCounter + bryanNewCounter + devUnassignedNew;
                var hdCounter = brendaNewCounter + tylerNewCounter + jakeNewCounter + HDUnassignedNew;
                if (devCounter > 0) {
                    $("#devNewCounterDisplay").append("Dev New : " + devCounter);
                    $("#devTeamList").append('<li onclick=showDevNew() style="cursor:pointer; padding-left:20px" class="last_link"><a>New : ' + devCounter + '</a></li>');
                    $("#devNewNumbers").show();
                    $("#devNewCounterDisplay").show();
                }
                if (hdCounter > 0) {
                    $("#helpdeskList").append('<li onclick=showHelpdeskNew() style="cursor:pointer; padding-left:20px" class="last_link"><a>New : ' + hdCounter + '</a></li>');
                    $("#helpdeskNewCounterDisplay").append("Helpdesk New : " + hdCounter);
                    $("#helpdeskNewCounterDisplay").show();
                    $("#helpdeskNewNumbers").show();
                }
                $("#overViewList").append('<li onclick=showNew() style="cursor:pointer; padding-left:20px" class="last_link"><a>New : ' + newCounter + '</a></li>');
            }


        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get new tickets. Try again or update url in hd.js");
        }
    });
}

function showNew() {
    $("#firstWindow").show();
    $("#firstWindowResults").hide();
    $("#firstWindowNumbers").show();
    $("#resolvedNumbers").hide();
    $("#openNumbers").hide();
    $("#pendingNumbers").hide();
    $("#sentNumbers").hide();
    $("#workingNumbers").hide();
    $("#devWindow").hide();
    $("#helpdeskFirstWindowResults").hide();
    $("#devFirstWindowResults").hide();
    $("#devFirstWindow").hide();
    $("#devNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#helpdeskResolvedNumbers").hide();
    $("#newNumbers").show();
}

function showDevNew() {
    $("#devFirstWindowResults").hide();


    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devOpenNumbers").hide();
    $("#devPendingNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#devWorkingNumbers").hide();
    $("#devSentNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devNewNumbers").show();
}

function showDevOpen() {
    $("#devFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devNewNumbers").hide();
    $("#devPendingNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#devWorkingNumbers").hide();
    $("#devSentNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devOpenNumbers").show();

}

function showDevResolved() {
    $("#devFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devNewNumbers").hide();
    $("#devOpenNumbers").hide();
    $("#devPendingNumbers").hide();
    $("#devWorkingNumbers").hide();
    $("#devSentNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devResolvedNumbers").show();

}

function showDevWorking() {
    $("#devFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devNewNumbers").hide();
    $("#devOpenNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#devPendingNumbers").hide();
    $("#devSentNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devWorkingNumbers").show();
}

function showDevPending() {

    $("#devFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devNewNumbers").hide();
    $("#devOpenNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#devWorkingNumbers").hide();
    $("#devSentNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devPendingNumbers").show();

}

function showDevSent() {
    $("#devFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#helpdeskFirstWindow").hide();

    $("#devNewNumbers").hide();
    $("#devOpenNumbers").hide();
    $("#devResolvedNumbers").hide();
    $("#devWorkingNumbers").hide();
    $("#devPendingNumbers").hide();

    $("#devFirstWindow").show();
    $("#devWindow").show();
    $("#devFirstWindowNumbers").show();
    $("#devSentNumbers").show();


}

function showHelpdeskWorking() {
    $("#helpdeskFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#devFirstWindow").hide();

    $("#helpdeskOpenNumbers").hide();
    $("#helpdeskPendingNumbers").hide();
    $("#helpdeskResolvedNumbers").hide();
    $("#helpdeskNewNumbers").hide();
    $("#helpdeskSentNumbers").hide();

    $("#helpdeskFirstWindow").show();
    $("#helpdeskWindow").show();
    $("#helpdeskFirstWindowNumbers").show();
    $("#helpdeskWorkingNumbers").show();
}

function showHelpdeskPending() {
    $("#helpdeskFirstWindowResults").hide();
    $("#firstWindow").hide();
    $("#devFirstWindow").hide();

    $("#helpdeskOpenNumbers").hide();
    $("#helpdeskWorkingNumbers").hide();
    $("#helpdeskResolvedNumbers").hide();
    $("#helpdeskNewNumbers").hide();
    $("#helpdeskSentNumbers").hide();

    $("#helpdeskFirstWindow").show();
    $("#helpdeskWindow").show();
    $("#helpdeskFirstWindowNumbers").show();
    $("#helpdeskPendingNumbers").show();
}

function showHelpdeskNew() {
    $("#helpdeskFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#devFirstWindow").hide();

    $("#helpdeskOpenNumbers").hide();
    $("#helpdeskWorkingNumbers").hide();
    $("#helpdeskResolvedNumbers").hide();
    $("#helpdeskPendingNumbers").hide();
    $("#helpdeskSentNumbers").hide();

    $("#helpdeskFirstWindow").show();
    $("#helpdeskWindow").show();
    $("#helpdeskFirstWindowNumbers").show();
    $("#helpdeskNewNumbers").show();
}

function showHelpdeskOpen() {
    $("#helpdeskFirstWindowResults").hide();

    $("#firstWindow").hide();
    $("#devFirstWindow").hide();

    $("#helpdeskNewNumbers").hide();
    $("#helpdeskWorkingNumbers").hide();
    $("#helpdeskResolvedNumbers").hide();
    $("#helpdeskPendingNumbers").hide();
    $("#helpdeskSentNumbers").hide();

    $("#helpdeskFirstWindow").show();
    $("#helpdeskWindow").show();
    $("#helpdeskFirstWindowNumbers").show();
    $("#helpdeskOpenNumbers").show();

}

function showHelpdeskResolved() {
    $("#helpdeskFirstWindowResults").hide();
    $("#firstWindow").hide();
    $("#devFirstWindow").hide();

    $("#helpdeskNewNumbers").hide();
    $("#helpdeskWorkingNumbers").hide();
    $("#helpdeskOpenNumbers").hide();
    $("#helpdeskPendingNumbers").hide();
    $("#helpdeskSentNumbers").hide();

    $("#helpdeskFirstWindow").show();
    $("#helpdeskWindow").show();
    $("#helpdeskFirstWindowNumbers").show();
    $("#helpdeskResolvedNumbers").show();
}

function getOpenNumbers() {
    openCounter = 0;
    jakeOpenCounter = 0;
    brendaOpenCounter = 0;
    tylerOpenCounter = 0;
    unassignedOpenCounter = 0;
    adamOpenCounter = 0;
    bryanOpenCounter = 0;
    openP1();
}

function checkOpenNumbers(data) {
    while (openLength < data.results.length) {
        if (data.results[openLength].responder_id === 19008173125) {
            jakeOpenCounter++;
            if (data.results[openLength].subject === "") {
                $("#jakeOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#jakeOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskJakeOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskJakeOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#jakeOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#jakeOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                $("#helpdeskJakeOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskJakeOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        if (data.results[openLength].responder_id === 19000197788) {
            brendaOpenCounter++;
            if (data.results[openLength].subject === "") {
                $("#brendaOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#brendaOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskBrendaOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskBrendaOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#brendaOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#brendaOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                $("#helpdeskBrendaOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskBrendaOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        if (data.results[openLength].responder_id === 19001766755) {
            tylerOpenCounter++;
            if (data.results[openLength].subject === "") {
                $("#tylerOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#tylerOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskTylerOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskTylerOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#tylerOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#tylerOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                $("#helpdeskTylerOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#helpdeskTylerOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        if (data.results[openLength].responder_id === 19000346026) {
            bryanOpenCounter++;
            if (data.results[openLength].subject === "") {
                $("#bryanOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#bryanOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devBryanOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#devBryanOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#bryanOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#bryanOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                $("#devBryanOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#devBryanOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        if (data.results[openLength].responder_id === 19000195685) {
            adamOpenCounter++;
            if (data.results[openLength].subject === "") {
                $("#adamOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#adamOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#devAdamOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#adamOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#adamOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                $("#devAdamOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#devAdamOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        if (data.results[openLength].responder_id !== 19001766755 &&
            data.results[openLength].responder_id !== 19000197788 &&
            data.results[openLength].responder_id !== 19000346026 &&
            data.results[openLength].responder_id !== 19000195685 &&
            data.results[openLength].responder_id !== 19008173125) {
            unassignedOpenCounter++;
            if (data.results[openLength].group_id === 19000152827) {
                devUnassignedOpen++;
                if (data.results[openLength].subject === "") {
                    $("#devUnassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                    $("#devUnassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#devUnassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                    $("#devUnassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                }
                $("#devUnassignedOpen").show();
            }
            if (data.results[openLength].group_id === 19000050000) {
                HdUnassignedOpen++;
                if (data.results[openLength].subject === "") {
                    $("#helpdeskUnassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                    $("#helpdeskUnassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                    $("#helpdeskUnassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
                }
                $("#helpdeskUnassignedOpen").show();
            }
            if (data.results[openLength].subject === "") {
                $("#unassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#unassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#unassignedOpen").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[openLength].id + " target=" + "_blank" + ">" + data.results[openLength].id + "</a> ");
                $("#unassignedOpen").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[openLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[openLength].subject + "</h7><br>");
            }
        }
        openLength++;
        openCounter++;
    }

}

function openP1() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP2();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP2() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP3();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP4();
            }
        },
        error: function() {

            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP4() {
    $.ajax({
        type: 'GET',
        //status 2 = open
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP5();
            }
        },
        error: function() {

            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP6();
            }
        },
        error: function() {

            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP6() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP7();
            }
        },
        error: function() {

            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP7() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP8();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP8() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP9();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP9() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                openP10();
            } else {
                $.each(data,
                    function() {
                        checkOpenNumbers(data);
                    });
                openP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function openP10() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:2\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            $.each(data,
                function() {
                    checkOpenNumbers(data);
                });
            if (jakeOpenCounter !== 0) {
                $("#jakeOpenCounter").append("Jake :" + jakeOpenCounter);
                $("#helpdeskJakeOpenCounter").append("<br>Jake :" + jakeOpenCounter);
                $("#jakeOpen").show();
                $("#jakeOpenCounter").show();
                $("#helpdeskJakeOpenCounter").show();
                $("#helpdeskJakeOpen").show();
            }
            if (adamOpenCounter !== 0) {
                $("#adamOpenCounter").append("Adam :" + adamOpenCounter);
                $("#devAdamOpenCounter").append("Adam :" + adamOpenCounter);
                $("#adamOpen").show();
                $("#adamOpenCounter").show();
                $("#devAdamOpenCounter").show();
                $("#devAdamOpen").show();
            }
            if (brendaOpenCounter !== 0) {
                $("#brendaOpenCounter").append("Brenda :" + brendaOpenCounter);
                $("#helpdeskBrendaOpenCounter").append("<br>Brenda :" + brendaOpenCounter);
                $("#brendaOpen").show();
                $("#brendaOpenCounter").show();
                $("#helpdeskBrendaOpenCounter").show();
                $("#helpdeskBrendaOpen").show();
            }
            if (tylerOpenCounter !== 0) {
                $("#tylerOpenCounter").append("Tyler :" + tylerOpenCounter);
                $("#helpdeskTylerOpenCounter").append("<br>Tyler :" + tylerOpenCounter);
                $("#tylerOpen").show();
                $("#tylerOpenCounter").show();
                $("#helpdeskTylerOpenCounter").show();
                $("#helpdeskTylerOpen").show();
            }
            if (bryanOpenCounter !== 0) {
                $("#devBryanOpenCounter").append("Bryan :" + bryanOpenCounter);
                $("#bryanOpenCounter").append("Bryan :" + bryanOpenCounter);
                $("#bryanOpen").show();
                $("#bryanOpenCounter").show();
                $("#devBryanOpenCounter").show();
                $("#devBryanOpen").show();
            }
            if (unassignedOpenCounter !== 0) {
                $("#unassignedOpenCounter").append("Unassigned :" + unassignedOpenCounter);
                $("#unassignedOpen").show();
                $("#unassignedOpenCounter").show();
            }
            if (devUnassignedOpen > 0) {
                $("#devUnassignedOpenCounter").append("Unassigned :" + devUnassignedOpen + "<br/>");
                $("#devUnassignedOpenCounter").show();
            }
            if (HdUnassignedOpen > 0) {
                $("#helpdeskUnassignedOpenCounter").append("<br>Unassigned :" + HdUnassignedOpen + "<br/>");
                $("#helpdeskUnassignedOpenCounter").show();
            }
            if (openCounter > 0) {
                $("#openCounterDisplay").append("Open : " + openCounter);
                $("#openCounterDisplay").show();
                var devOpenCounter = adamOpenCounter + bryanOpenCounter + devUnassignedOpen;
                var hdOpenCounter = brendaOpenCounter + tylerOpenCounter + jakeOpenCounter + HdUnassignedOpen;
                if (devOpenCounter > 0) {
                    $("#devTeamList").append('<li onclick=showDevOpen() style="cursor:pointer; padding-left:20px" class="last_link"><a>Open : ' + devOpenCounter + '</a></li>');
                    $("#devOpenCounterDisplay").append("Dev Open : " + devOpenCounter);
                    $("#devOpenCounterDisplay").show();
                }
                if (hdOpenCounter > 0) {
                    $("#helpdeskList").append('<li onclick=showHelpdeskOpen() style="cursor:pointer; padding-left:20px" class="last_link"><a>Open : ' + hdOpenCounter + '</a></li>');
                    $("#helpdeskOpenCounterDisplay").append("Helpdesk Open : " + hdOpenCounter);
                    $("#helpdeskOpenCounterDisplay").show();
                }
                $("#overViewList").append('<li onclick=showOpen() style="cursor:pointer; padding-left:20px" class="last_link"><a>Open : ' + openCounter + '</a></li>');
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get open tickets. Try again or update url in hd.js");
        }
    });
};

function showOpen() {
    $("#firstWindow").show();
    $("#firstWindowResults").hide();
    $("#resolvedNumbers").hide();
    $("#newNumbers").hide();
    $("#pendingNumbers").hide();
    $("#sentNumbers").hide();
    $("#workingNumbers").hide();
    $("#devWindow").hide();
    $("#devFirstWindow").hide();
    $("#devNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#openNumbers").show();
    $("#firstWindowNumbers").show();
}

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
    adamCounter = 0;
    bryanCounter = 0;
    brendaCounter = 0;
    tylerCounter = 0;
    unassignedCounter = 0;
    jakeCounter = 0;
    resolvedP1(d, m, y);
};

function checkResolved(data) {
    while (resolvedLength < data.results.length) {
        if (data.results[resolvedLength].responder_id === 19008173125) {
            jakeCounter++;
            if (data.results[resolvedLength].subject === "") {
                $("#jakeResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#jakeResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskJakeResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskJakeResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#jakeResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#jakeResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                $("#helpdeskJakeResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskJakeResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");

            }
        }
        if (data.results[resolvedLength].responder_id === 19000197788) {
            brendaCounter++;
            if (data.results[resolvedLength].subject === "") {
                $("#brendaResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#brendaResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskBrendaResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskBrendaResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#brendaResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#brendaResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                $("#helpdeskBrendaResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskBrendaResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
            }
        }
        if (data.results[resolvedLength].responder_id === 19001766755) {
            tylerCounter++;
            if (data.results[resolvedLength].subject === "") {
                $("#tylerResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#tylerResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskTylerResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskTylerResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#tylerResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#tylerResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                $("#helpdeskTylerResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#helpdeskTylerResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
            }
        }
        if (data.results[resolvedLength].responder_id === 19000195685) {
            adamCounter++;
            if (data.results[resolvedLength].subject === "") {
                $("#adamResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#adamResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#devAdamResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#adamResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#adamResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                $("#devAdamResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#devAdamResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
            }
        }
        if (data.results[resolvedLength].responder_id === 19000346026) {
            bryanCounter++;
            if (data.results[resolvedLength].subject === "") {
                $("#bryanResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#bryanResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devBryanResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#devBryanResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#bryanResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#bryanResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                $("#devBryanResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#devBryanResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
            }
        }
        if (data.results[resolvedLength].responder_id !== 19001766755 && data.results[resolvedLength].responder_id !== 19000197788 && data.results[resolvedLength].responder_id !== 19008173125 && data.results[resolvedLength].responder_id !== 19000346026 && data.results[resolvedLength].responder_id !== 19000195685) {
            unassignedCounter++;
            if (data.results[resolvedLength].group_id === 19000152827) {
                devUnassignedResolved++;
                if (data.results[resolvedLength].subject === "") {
                    $("#devUnassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                    $("#devUnassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#devUnassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                    $("#devUnassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                }
                $("#devUnassignedResolvedCounter").show();
                $("#devUnassignedResolved").show();
            }
            if (data.results[resolvedLength].group_id === 19000050000) {
                HdUnassignedResolved++;
                if (data.results[resolvedLength].subject === "") {
                    $("#helpdeskUnassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                    $("#helpdeskUnassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                    $("#helpdeskUnassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
                }
                $("#helpdeskUnassignedResolved").show();
            }
            if (data.results[resolvedLength].subject === "") {
                $("#unassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#unassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#unassignedResolved").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[resolvedLength].id + " target=" + "_blank" + ">" + data.results[resolvedLength].id + "</a> ");
                $("#unassignedResolved").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[resolvedLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[resolvedLength].subject + "</h7><br>");
            }
        }
        resolvedCounter++;
        resolvedLength++;
    }
};

function resolvedP1(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                unassignedCounter = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP2(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP2(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP3(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP3(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP4(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP4(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP5(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP5(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP6(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP6(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP7(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP7(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP8(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP8(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP9(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP9(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.results.length === 0) {
                resolvedP10(d, m, y);
            } else {
                resolvedLength = 0;
                totalResolvedLength = 0;
                totalResolvedLength = data.results.length;

                $.each(data,
                    function() {
                        checkResolved(data);
                    });
                resolvedP10(d, m, y);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function resolvedP10(d, m, y) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4%20AND%20group_id:19000050000\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\%20OR%20(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + y + "-" + m + "-" + d + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            resolvedLength = 0;
            totalResolvedLength = 0;
            totalResolvedLength = data.results.length;

            $.each(data,
                function() {
                    checkResolved(data);

                });
            if (jakeCounter !== 0) {
                $("#jakeResolvedCounter").append("Jake :" + jakeCounter);
                $("#jakeResolved").show();
                $("#jakeResolvedCounter").show();
                $("#helpdeskJakeResolvedCounter").append("<br>Jake :" + jakeCounter);
                $("#helpdeskJakeResolvedCounter").show();
                $("#helpdeskJakeResolved").show();
            }
            if (adamCounter !== 0) {
                $("#adamResolvedCounter").append("Adam :" + adamCounter);
                $("#adamResolved").show();
                $("#adamResolvedCounter").show();
                $("#devAdamResolvedCounter").append("Adam :" + adamCounter);
                $("#devAdamResolvedCounter").show();
                $("#devAdamResolved").show();
            }
            if (brendaCounter !== 0) {
                $("#brendaResolvedCounter").append("Brenda :" + brendaCounter);
                $("#brendaResolved").show();
                $("#brendaResolvedCounter").show();
                $("#helpdeskBrendaResolvedCounter").append("<br>Brenda :" + brendaCounter);
                $("#helpdeskBrendaResolvedCounter").show();
                $("#helpdeskBrendaResolved").show();
            }
            if (tylerCounter !== 0) {
                $("#tylerResolvedCounter").append("Tyler :" + tylerCounter);
                $("#tylerResolved").show();
                $("#tylerResolvedCounter").show();
                $("#helpdeskTylerResolvedCounter").append("<br>Tyler :" + tylerCounter);
                $("#helpdeskTylerResolvedCounter").show();
                $("#helpdeskTylerResolved").show();
            }
            if (bryanCounter !== 0) {
                $("#bryanResolvedCounter").append("Bryan :" + bryanCounter);
                $("#bryanResolved").show();
                $("#bryanResolvedCounter").show();
                $("#devBryanResolvedCounter").append("Bryan :" + bryanCounter);
                $("#devBryanResolvedCounter").show();
                $("#devBryanResolved").show();
            }
            if (unassignedCounter !== 0) {
                $("#unassignedResolvedCounter").append("Unassigned :" + unassignedCounter);
                $("#unassignedResolved").show();
                $("#unassignedResolvedCounter").show();
            }
            if (devUnassignedResolved > 0) {
                $("#devUnassignedResolvedCounter").append("Unassigned :" + devUnassignedResolved + "<br/>");
                $("#devUnassignedResolvedCounter").show();
            }
            if (HdUnassignedResolved > 0) {
                $("#helpdeskUnassignedResolvedCounter").append("<br>Unassigned :" + HdUnassignedResolved + "<br/>");
                $("#helpdeskUnassignedResolvedCounter").show();
            }
            if (resolvedCounter > 0) {
                devResolvedCounter = adamCounter + bryanCounter + devUnassignedResolved;
                hdResolvedCounter = brendaCounter + tylerCounter + jakeCounter + HdUnassignedResolved;
                $("#resolvedCounterDisplay").append("Resolved Today: " + resolvedCounter);
                $("#resolvedCounterDisplay").show();
                $("#overViewList").append('<li onclick=showResolved(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Resolved : ' + resolvedCounter + '</a></li>');
                if (devResolvedCounter > 0) {
                    $("#devResolvedCounterDisplay").append("Dev Resolved : " + devResolvedCounter);
                    $("#devResolvedCounterDisplay").show();
                    $("#devTeamList").append('<li onclick=showDevResolved() style="cursor:pointer; padding-left:20px" class="last_link"><a>Resolved : ' + devResolvedCounter + '</a></li>');
                }
                if (hdResolvedCounter > 0) {
                    $("#helpdeskResolvedCounterDisplay").append("Helpdesk Resolved : " + hdResolvedCounter);
                    $("#helpdeskResolvedCounterDisplay").show();
                    $("#helpdeskList").append('<li onclick=showHelpdeskResolved() style="cursor:pointer; padding-left:20px" class="last_link"><a>Resolved : ' + hdResolvedCounter + '</a></li>');
                }
            }



        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get resolved tickets. Try again or update url in hd.js");
        }
    });
};

function showResolved() {
    $("#firstWindow").show();
    $("#firstWindowResults").hide();
    $("#openNumbers").hide();
    $("#newNumbers").hide();
    $("#pendingNumbers").hide();
    $("#devFirstWindowResults").hide();
    $("#helpdeskFirstWindowResults").hide();
    $("#sentNumbers").hide();
    $("#workingNumbers").hide();
    $("#devWindow").hide();
    $("#devFirstWindow").hide();
    $("#devNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#resolvedNumbers").show();
    $("#firstWindowNumbers").show();
}

function showInfo(id) {
    $("#firstWindowResults").empty();
    $("#devFirstWindowResults").empty();
    $("#helpdeskFirstWindowResults").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            if (data.responder_id === 19008173125) {
                $("#helpdeskFirstWindowResults").append("<div id=" + "helpdeskJakeNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "jakeNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeNewDivRight").css('color', 'red').css('font-weight', 'bold');
                $("#helpdeskJakeNewDivRight").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#helpdeskFirstWindowResults").append("<div id=" + "helpdeskBrendaNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "brendaNewivRight" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaNewDivRight").css('color', 'blue').css('font-weight', 'bold');
                $("#helpdeskBrendaNewDivRight").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#helpdeskFirstWindowResults").append("<div id=" + "helpdeskTylerNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "tylerNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerNewDivRight").css('color', 'orange').css('font-weight', 'bold');
                $("#helpdeskTylerNewDivRight").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000195685) {
                $("#devFirstWindowResults").append("<div id=" + "devAdamNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Adam</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "adamNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Adam</div><hr/><p>");
                $("#adamNewDivRight").css('color', 'rgb(18, 143, 22)').css('font-weight', 'bold');
                $("#devAdamNewDivRight").css('color', 'rgb(18, 143, 22)').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000346026) {
                $("#devFirstWindowResults").append("<div id=" + "devBryanNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Bryan</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "bryanNewDivRight" + " style=" + "font-size:20px" + ">Assigned To: Bryan</div><hr/><p>");
                $("#bryanNewDivRight").css('color', 'rgb(113, 88, 44)').css('font-weight', 'bold');
                $("#devBryanNewDivRight").css('color', 'rgb(113, 88, 44)').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#devFirstWindowResults").append("<div id=" + "devUnassignedNewDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#helpdeskFirstWindowResults").append("<div id=" + "helpdeskUnassignedNewDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#firstWindowResults").append("<div id=" + "unassignedNewDivRight" + " style=" + "font-size:20px; " + ">Unassigned</div><hr/><p>");
                $("#unassignedNewDivRight").css('color', 'purple').css('font-weight', 'bold');
                $("#devUnassignedNewDivRight").css('color', 'purple').css('font-weight', 'bold');
                $("#helpdeskUnassignedNewDivRight").css('color', 'purple').css('font-weight', 'bold');
            }

            if (data.group_id === 19000050000) {
                if (data.to_emails !== null) {
                    $("#helpdeskFirstWindowResults").append("To: ");
                    data.to_emails.forEach(function(data) {
                        $("#helpdeskFirstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                    });
                }
                if (data.cc_emails !== null) {
                    $("#helpdeskFirstWindowResults").append("CC:");
                    data.cc_emails.forEach(function(data) {
                        $("#helpdeskFirstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                    });
                }
                $("#helpdeskFirstWindowResults").append("<hr/><a target=" + "_blank" +"style=" + "color:white;" + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + "><div style=" + "font-size:18px;font-weight:bold" + ">Subject:</div><br/>" + data.subject + "</a><hr/><p>" + data.description);
                $("#helpdeskFirstWindowResults").show();
            }
            if (data.group_id === 19000152827) {

                if (data.to_emails !== null) {
                    $("#devFirstWindowResults").append("To: ");
                    data.to_emails.forEach(function(data) {
                        $("#devFirstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                    });
                }
                if (data.cc_emails !== null) {
                    $("#devFirstWindowResults").append("CC:");
                    data.cc_emails.forEach(function(data) {
                        $("#devFirstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                        $("#helpdeskFirstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                    });
                }
                $("#devFirstWindowResults").append("<hr/><a target=" + "_blank" +"style=" + "color:white;" + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + "><div style=" + "font-size:18px;font-weight:bold" + ">Subject:</div><br/>" + data.subject + "</a><hr/><p>" + data.description);
                $("#devFirstWindowResults").show();
            }
            if (data.to_emails !== null) {
                $("#firstWindowResults").append("To: ");
                data.to_emails.forEach(function(data) {
                    $("#firstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            if (data.cc_emails !== null) {
                $("#firstWindowResults").append("CC:");
                data.cc_emails.forEach(function(data) {
                    $("#firstWindowResults").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            $("#firstWindowResults").append("<hr/><a target=" + "_blank" +"style=" + "color:black;" + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + "><div style=" + "font-size:18px;font-weight:bold" + ">Subject:</div><br/>" + data.subject + "</a><hr/><p>" + data.description);
            $("#firstWindowResults").show();


        },
        error: function() {

        }
    });
};

function getPendingNumbers() {
    pendingCounter = 0;
    jakePendingCounter = 0;
    brendaPendingCounter = 0;
    tylerPendingCounter = 0;
    unassignedPendingCounter = 0;
    adamPendingCounter = 0;
    bryanPendingCounter = 0;
    pendingP1();
};

function checkPending(data) {
    while (pendingLength < data.results.length) {

        if (data.results[pendingLength].responder_id === 19008173125) {
            jakePendingCounter++;
            if (data.results[pendingLength].subject === "") {
                $("#jakePending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#jakePending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskJakePending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskJakePending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#jakePending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#jakePending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingArrayLength].subject + "</h7><br>");
                $("#helpdeskJakePending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskJakePending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingArrayLength].subject + "</h7><br>");

            }
        }
        if (data.results[pendingLength].responder_id === 19000197788) {
            brendaPendingCounter++;
            if (data.results[pendingLength].subject === "") {
                $("#brendaPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#brendaPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskBrendaPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskBrendaPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#brendaPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#brendaPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingArrayLength].subject + "</h7><br>");
                $("#helpdeskBrendaPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskBrendaPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingArrayLength].subject + "</h7><br>");

            }
        }
        if (data.results[pendingLength].responder_id === 19001766755) {
            tylerPendingCounter++;
            if (data.results[pendingLength].subject === "") {
                $("#tylerPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#tylerPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskTylerPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskTylerPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#tylerPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#tylerPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
                $("#helpdeskTylerPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#helpdeskTylerPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
            }
        }
        if (data.results[pendingLength].responder_id === 19000195685) {
            adamPendingCounter++;
            if (data.results[pendingLength].subject === "") {
                $("#adamPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#adamPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#devAdamPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#adamPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#adamPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
                $("#devAdamPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#devAdamPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
            }
        }
        if (data.results[pendingLength].responder_id === 19000346026) {
            bryanPendingCounter++;
            if (data.results[pendingLength].subject === "") {
                $("#bryanPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#bryanPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devBryanPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#devBryanPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#bryanPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#bryanPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
                $("#devBryanPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#devBryanPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
            }
        }
        if (data.results[pendingLength].responder_id !== 19001766755 &&
            data.results[pendingLength].responder_id !== 19000197788 &&
            data.results[pendingLength].responder_id !== 19000195685 &&
            data.results[pendingLength].responder_id !== 19000346026 &&
            data.results[pendingLength].responder_id !== 19008173125) {
            unassignedPendingCounter++;

            if (data.results[pendingLength].group_id === 19000152827) {
                devUnassignedPending++;
                if (data.results[pendingLength].subject === "") {
                    $("#devUnassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                    $("#devUnassignedPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                    $("#devUnassignedPendingCounter").show();
                    $("#devUnassignedPending").show();
                } else {
                    $("#devUnassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                    $("#devUnassignedPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
                    $("#devUnassignedPending").show();
                    $("#devUnassignedPendingCounter").show();
                }
            }
            if (data.results[pendingLength].group_id === 19000050000) {
                HdUnassignedPending++;
                if (data.results[pendingLength].subject === "") {
                    $("#helpdeskUnassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                    $("#helpdeskUnassignedPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                    $("#helpdeskUnassignedPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
                }
                $("#helpdeskUnassignedPending").show();
                $("#helpdeskUnassignedPendingCounter").show();
            }
            if (data.results[pendingLength].subject === "") {
                $("#unassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#unassignedPending").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#unassignedPending").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[pendingLength].id + " target=" + "_blank" + ">" + data.results[pendingLength].id + "</a> ");
                $("#unassignedPending").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[pendingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[pendingLength].subject + "</h7><br>");
            }
        }
        pendingLength++;
        pendingCounter++;
    }

};

function pendingP1() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,
                    function() {
                        checkPending(data);
                    });
                pendingP2();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP2() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP3();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP3() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP4();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP4() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP5();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP5() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP6();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP6() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP7();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP7() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP8();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP8() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP9();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP9() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                pendingP10();
            } else {
                $.each(data,

                    function() {
                        checkPending(data);
                    });
                pendingP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function pendingP10() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:3\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            $.each(data,
                function() {
                    checkPending(data);
                });
            if (jakePendingCounter !== 0) {
                $("#jakePendingCounter").append("Jake :" + jakePendingCounter);
                $("#helpdeskJakePendingCounter").append("<br>Jake :" + jakePendingCounter);
                $("#jakePending").show();
                $("#jakePendingCounter").show();
                $("#helpdeskJakePending").show();
                $("#helpdeskJakePendingCounter").show();
            }
            if (adamPendingCounter !== 0) {
                $("#adamPendingCounter").append("Adam :" + adamPendingCounter);
                $("#devAdamPendingCounter").append("Adam :" + adamPendingCounter);
                $("#adamPending").show();
                $("#adamPendingCounter").show();
                $("#devAdamPending").show();
                $("#devAdamPendingCounter").show();
            }
            if (brendaPendingCounter !== 0) {
                $("#brendaPendingCounter").append("Brenda :" + brendaPendingCounter);
                $("#helpdeskBrendaPendingCounter").append("<br>Brenda :" + brendaPendingCounter);
                $("#brendaPending").show();
                $("#brendaPendingCounter").show();
                $("#helpdeskBrendaPending").show();
                $("#helpdeskBrendaPendingCounter").show();
            }
            if (tylerPendingCounter !== 0) {
                $("#tylerPendingCounter").append("Tyler :" + tylerPendingCounter);
                $("#helpdeskTylerPendingCounter").append("<br>Tyler :" + tylerPendingCounter);
                $("#tylerPending").show();
                $("#tylerPendingCounter").show();
                $("#helpdeskTylerPending").show();
                $("#helpdeskTylerPendingCounter").show();
            }
            if (bryanPendingCounter !== 0) {
                $("#bryanPendingCounter").append("Bryan :" + bryanPendingCounter);
                $("#devBryanPendingCounter").append("Bryan :" + bryanPendingCounter);
                $("#bryanPending").show();
                $("#bryanPendingCounter").show();
                $("#devBryanPending").show();
                $("#devBryanPendingCounter").show();
            }
            if (unassignedPendingCounter !== 0) {
                $("#unassignedPendingCounter").append("Unassigned :" + unassignedPendingCounter);
                $("#helpdeskUnassignedPendingCounter").append("Unassigned :" + HdUnassignedPending);
                $("#unassignedPending").show();
                $("#unassignedPendingCounter").show();
                $("#helpdeskUnassignedPendingCounter").show();
            }

            if (pendingCounter > 0) {
                var devPendingCounter = adamPendingCounter + bryanPendingCounter + devUnassignedPending;
                var hdPendingCounter = tylerPendingCounter + jakePendingCounter + brendaPendingCounter + HdUnassignedPending;
                $("#pendingCounterDisplay").append("Pending : " + pendingCounter);
                $("#pendingCounterDisplay").show();
                $("#overViewList").append('<li onclick=showPending(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Pending : ' + pendingCounter + '</a></li>');
                if (devPendingCounter > 0) {
                    $("#devPendingCounterDisplay").append("Dev Pending : " + devPendingCounter);
                    $("#devTeamList").append('<li onclick=showDevPending(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Pending : ' + devPendingCounter + '</a></li>');
                    $("#devUnassignedPendingCounter").append("Unassigned : " + devUnassignedPending);
                    $("#devUnassignedPendingCounter").show();
                    $("#devUnassignedPending").show();
                }
                if (hdPendingCounter > 0) {
                    $("#helpdeskPendingCounterDisplay").append("Helpdesk Pending : " + hdPendingCounter);
                    $("#helpdeskList").append('<li onclick=showHelpdeskPending(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Pending : ' + hdPendingCounter + '</a></li>');
                }
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get pending tickets. Try again or update url in hd.js");
        }
    });
};

function showPending() {
    $("#firstWindow").show();
    $("#firstWindowResults").hide();
    $("#openNumbers").hide();
    $("#devFirstWindowResults").hide();
    $("#helpdeskFirstWindowResults").hide();
    $("#newNumbers").hide();
    $("#resolvedNumbers").hide();
    $("#sentNumbers").hide();
    $("#workingNumbers").hide();
    $("#devWindow").hide();
    $("#devFirstWindow").hide();
    $("#devNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#pendingNumbers").show();
    $("#firstWindowNumbers").show();
}

function getSentNumbers() {
    sentCounter = 0;
    jakeSentCounter = 0;
    brendaSentCounter = 0;
    tylerSentCounter = 0;
    unassignedSentCounter = 0;
    adamSentCounter = 0;
    bryanSentCounter = 0;
    sentP1();
};

function checkSent(data) {
    while (sentLength < data.results.length) {

        if (data.results[sentLength].responder_id === 19008173125) {
            jakeSentCounter++;
            if (data.results[sentLength].subject === "") {
                $("#jakeSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#jakeSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#jakeSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#jakeSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentArrayLength].subject + "</h7><br>");
            }
        }
        if (data.results[sentLength].responder_id === 19000197788) {
            brendaSentCounter++;
            if (data.results[sentLength].subject === "") {
                $("#brendaSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#brendaSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#brendaSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#brendaSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentArrayLength].subject + "</h7><br>");
            }
        }
        if (data.results[sentLength].responder_id === 19001766755) {
            tylerSentCounter++;
            if (data.results[sentLength].subject === "") {
                $("#tylerSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#tylerSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#tylerSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#tylerSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
            }
        }
        if (data.results[sentLength].responder_id === 19000195685) {
            adamSentCounter++;
            if (data.results[sentLength].subject === "") {
                $("#adamSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#adamSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#devAdamSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#adamSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#adamSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
                $("#devAdamSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#devAdamSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");

            }
        }
        if (data.results[sentLength].responder_id === 19000346026) {
            bryanSentCounter++;
            if (data.results[sentLength].subject === "") {
                $("#bryanSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#bryanSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#bryanSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#bryanSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
            }
        }
        if (data.results[sentLength].responder_id !== 19001766755 &&
            data.results[sentLength].responder_id !== 19000197788 &&
            data.results[sentLength].responder_id !== 19000195685 &&
            data.results[sentLength].responder_id !== 19000346026 &&
            data.results[sentLength].responder_id !== 19008173125) {
            unassignedSentCounter++;

            if (data.results[sentLength].group_id === 19000050000) {
                if (data.results[sentLength].subject === "") {
                    $("#helpdeskUnassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                    $("#helpdeskUnassignedSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                    $("#helpdeskUnassignedSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
                }
                $("#helpdeskUnassignedSent").show();
            }
            if (data.results[sentLength].group_id === 19000152827) {
                if (data.results[sentLength].subject === "") {
                    $("#devUnassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                    $("#devUnassignedSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                    
                } else {
                    $("#devUnassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                    $("#devUnassignedSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
                }
                $("#devUnassignedSent").show();
            }
            if (data.results[sentLength].subject === "") {
                $("#unassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#unassignedSent").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
            } else {
                $("#unassignedSent").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[sentLength].id + " target=" + "_blank" + ">" + data.results[sentLength].id + "</a> ");
                $("#unassignedSent").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[sentLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[sentLength].subject + "</h7><br>");
            }
        }
        sentLength++;
        sentCounter++;
    }

};

function sentP1() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,
                    function() {
                        checkSent(data);
                    });
                sentP2();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP2() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP3();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP3() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP4();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP4() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP5();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP5() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP6();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP6() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP7();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP7() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP8();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP8() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP9();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP9() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                sentP10();
            } else {
                $.each(data,

                    function() {
                        checkSent(data);
                    });
                sentP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function sentP10() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:6\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            $.each(data,
                function() {
                    checkSent(data);
                });
            if (jakeSentCounter !== 0) {
                $("#jakeSentCounter").append("Jake :" + jakeSentCounter);
                $("#jakeSent").show();
                $("#jakeSentCounter").show();
                $("#helpdeskJakeSentCounter").append("Jake :" + jakeSentCounter);
                $("#helpdeskJakeSentCounter").show();
                $("#helpdeskJakeSent").show();
            }
            if (adamSentCounter !== 0) {
                $("#adamSentCounter").append("Adam :" + adamSentCounter);
                $("#adamSent").show();
                $("#adamSentCounter").show();
                $("#devAdamSentCounter").append("Adam :" + adamSentCounter);
                $("#devAdamSentCounter").show();
                $("#devAdamSent").show();
            }
            if (brendaSentCounter !== 0) {
                $("#brendaSentCounter").append("Brenda :" + brendaSentCounter);
                $("#brendaSent").show();
                $("#brendaSentCounter").show();
                $("#helpdeskBrendaSentCounter").append("Brenda :" + brendaSentCounter);
                $("#helpdeskBrendaSentCounter").show();
                $("#helpdeskBrendaSent").show();
            }
            if (tylerSentCounter !== 0) {
                $("#tylerSentCounter").append("Tyler :" + tylerSentCounter);
                $("#tylerSent").show();
                $("#tylerSentCounter").show();
                $("#helpdeskTylerSentCounter").append("Tyler :" + tylerSentCounter);
                $("#helpdeskTylerSentCounter").show();
                $("#helpdeskTylerSent").show();
            }
            if (bryanSentCounter !== 0) {
                $("#bryanSentCounter").append("Bryan :" + bryanSentCounter);
                $("#bryanSent").show();
                $("#bryanSentCounter").show();
                $("#devBryanSentCounter").append("Bryan :" + bryanSentCounter);
                $("#devBryanSentCounter").show();
                $("#devBryanSent").show();
            }
            if (unassignedSentCounter !== 0) {
                $("#unassignedSentCounter").append("Unassigned :" + unassignedSentCounter);
                $("#unassignedSent").show();
                $("#unassignedSentCounter").show();

            }
            if (sentCounter > 0) {
                $("#sentCounterDisplay").append("Sent to Customer : " + sentCounter);
                $("#sentCounterDisplay").show();
                $("#overViewList").append('<li onclick=showSent(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Sent : ' + sentCounter + '</a></li>');
            }
            var helpdeskSentCounter = brendaSentCounter + tylerSentCounter + jakeSentCounter + HdUnassignedSent;
            var devSentCounter = adamSentCounter + bryanSentCounter + devUnassignedSent;
            if (helpdeskSentCounter > 0) {
                $("#helpdeskSentCounterDisplay").append("Sent to Customer : " + helpdeskSentCounter);
                $("#helpdeskList").append('<li onclick=showDevSent(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Sent : ' + helpdeskSentCounter + '</a></li>');
                $("#helpdeskSentCounterDisplay").show();
            }
            if (devSentCounter > 0) {
                $("#devSentCounterDisplay").append("Sent to Customer : " + devSentCounter);
                $("#devTeamList").append('<li onclick=showDevSent(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Sent : ' + devSentCounter + '</a></li>');
                $("#devSentCounterDisplay").show();

            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get sent tickets. Try again or update url in hd.js");
        }
    });
};

function showSent() {
    $("#firstWindow").show();
    $("#openNumbers").hide();
    $("#newNumbers").hide();
    $("#devFirstWindowResults").hide();
    $("#helpdeskFirstWindowResults").hide();
    $("#firstWindowResults").hide();
    $("#resolvedNumbers").hide();
    $("#pendingNumbers").hide();
    $("#workingNumbers").hide();
    $("#devWindow").hide();
    $("#devFirstWindow").hide();
    $("#devNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#sentNumbers").show();
    $("#firstWindowNumbers").show();
}

function getWorkingNumbers() {
    workingCounter = 0;
    jakeWorkingCounter = 0;
    brendaWorkingCounter = 0;
    tylerWorkingCounter = 0;
    unassignedWorkingCounter = 0;
    adamWorkingCounter = 0;
    bryanWorkingCounter = 0;
    workingP1();
};

function checkWorking(data) {
    while (workingLength < data.results.length) {

        if (data.results[workingLength].responder_id === 19008173125) {
            jakeWorkingCounter++;
            if (data.results[workingLength].subject === "") {
                $("#jakeWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#jakeWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskJakeWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskJakeWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#jakeWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#jakeWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingArrayLength].subject + "</h7><br>");
                $("#helpdeskJakeWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskJakeWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingArrayLength].subject + "</h7><br>");

            }
        }
        if (data.results[workingLength].responder_id === 19000197788) {
            brendaWorkingCounter++;
            if (data.results[workingLength].subject === "") {
                $("#brendaWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#brendaWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskBrendaWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskBrendaWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#brendaWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#brendaWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingArrayLength].subject + "</h7><br>");
                $("#helpdeskBrendaWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskBrendaWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingArrayLength].subject + "</h7><br>");

            }
        }
        if (data.results[workingLength].responder_id === 19001766755) {
            tylerWorkingCounter++;
            if (data.results[workingLength].subject === "") {
                $("#tylerWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#tylerWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#helpdeskTylerWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskTylerWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#tylerWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#tylerWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                $("#helpdeskTylerWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#helpdeskTylerWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
            }
        }
        if (data.results[workingLength].responder_id === 19000195685) {
            adamWorkingCounter++;
            if (data.results[workingLength].subject === "") {
                $("#adamWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#adamWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devAdamWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#devAdamWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#adamWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#adamWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                $("#devAdamWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#devAdamWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
            }
        }
        if (data.results[workingLength].responder_id === 19000346026) {
            bryanWorkingCounter++;
            if (data.results[workingLength].subject === "") {
                $("#bryanWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#bryanWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                $("#devBryanWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#devBryanWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");

            } else {
                $("#bryanWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#bryanWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                $("#devBryanWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                $("#devBryanWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");

            }
        }
        if (data.results[workingLength].responder_id !== 19001766755 &&
            data.results[workingLength].responder_id !== 19000197788 &&
            data.results[workingLength].responder_id !== 19000195685 &&
            data.results[workingLength].responder_id !== 19000346026 &&
            data.results[workingLength].responder_id !== 19008173125) {
            unassignedWorkingCounter++;

            if (data.results[workingLength].group_id === 19000152827) {
                devUnassignedWorking++;
                if (data.results[workingLength].subject === "") {
                    $("#devUnassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#devUnassignedWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#devUnassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#devUnassignedWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                }
                $("#devUnassignedWorking").show();
            }
            if (data.results[workingLength].group_id === 19000050000) {
                HdUnassignedWorking++;
                if (data.results[workingLength].subject === "") {
                    $("#helpdeskUnassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#helpdeskUnassignedWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#helpdeskUnassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#helpdeskUnassignedWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                }
                $("#helpdeskUnassignedWorking").show();
            }
                if (data.results[workingLength].subject === "") {
                    $("#unassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#unassignedWorking").append("<h7 onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">No Subject</h7><br>");
                } else {
                    $("#unassignedWorking").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[workingLength].id + " target=" + "_blank" + ">" + data.results[workingLength].id + "</a> ");
                    $("#unassignedWorking").append("<h7  onmouseout=" + "this.style.backgroundColor='white'" + " onmouseover=" + "this.style.backgroundColor='lightgrey'" + " onclick=" + "showInfo(" + data.results[workingLength].id + ")" + " style=" + "cursor:pointer" + ">" + data.results[workingLength].subject + "</h7><br>");
                }
        }
        workingLength++;
        workingCounter++;
    }

};

function workingP1() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,
                    function() {
                        checkWorking(data);
                    });
                workingP2();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP2() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP3();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP3() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP4();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP4() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP5();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP5() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP6();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP6() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP7();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP7() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP8();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP8() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP9();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP9() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {

            if (data.results.length === 0) {
                workingP10();
            } else {
                $.each(data,

                    function() {
                        checkWorking(data);
                    });
                workingP10();
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};

function workingP10() {
    $.ajax({
        type: 'GET',
        
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(group_id:19000050000\%20OR%20group_id:19000152827)\%20AND%20status:20\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function(data) {
            $.each(data,
                function() {
                    checkWorking(data);
                });
            if (jakeWorkingCounter !== 0) {
                $("#jakeWorkingCounter").append("Jake :" + jakeWorkingCounter);
                $("#helpdeskJakeWorkingCounter").append("Jake :" + jakeWorkingCounter);
                $("#jakeWorking").show();
                $("#jakeWorkingCounter").show();
            }
            if (adamWorkingCounter !== 0) {
                $("#adamWorkingCounter").append("Adam :" + adamWorkingCounter);
                $("#devAdamWorkingCounter").append("Adam :" + adamWorkingCounter);
                $("#adamWorking").show();
                $("#adamWorkingCounter").show();
            }
            if (brendaWorkingCounter !== 0) {
                $("#brendaWorkingCounter").append("Brenda :" + brendaWorkingCounter);
                $("#helpdeskBrendaWorkingCounter").append("Brenda :" + brendaWorkingCounter);
                $("#brendaWorking").show();
                $("#brendaWorkingCounter").show();
            }
            if (tylerWorkingCounter !== 0) {
                $("#tylerWorkingCounter").append("Tyler :" + tylerWorkingCounter);
                $("#helpdeskTylerWorkingCounter").append("Tyler :" + tylerWorkingCounter);
                $("#tylerWorking").show();
                $("#tylerWorkingCounter").show();
            }
            if (bryanWorkingCounter !== 0) {
                $("#bryanWorkingCounter").append("Bryan :" + bryanWorkingCounter);
                $("#devBryanWorkingCounter").append("Bryan :" + bryanWorkingCounter);
                $("#devBryanWorkingCounter").show();
                $("#devBryanWorking").show();
                $("#bryanWorking").show();
                $("#bryanWorkingCounter").show();
            }
            if (unassignedWorkingCounter !== 0) {
                $("#unassignedWorkingCounter").append("Unassigned :" + unassignedWorkingCounter);
                $("#unassignedWorking").show();
                $("#unassignedWorkingCounter").show();

            }
            if (HdUnassignedWorking > 0) {
                $("#helpdeskUnassignedWorkingCounter").append("<br>Unassigned :" + HdUnassignedWorking);
                $("#helpdeskUnassignedWorkingCounter").show();
            }
            if (devUnassignedWorking > 0) {
                $("#devUnassignedWorkingCounter").append("Unassigned :" + devUnassignedWorking);
                $("#devUnassignedWorkingCounter").show();
            }

            if (workingCounter > 0) {
                $("#workingCounterDisplay").append("Working : " + workingCounter);
                $("#overViewList").append('<li onclick=showWorking(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Working : ' + workingCounter + '</a></li>');
                $("#workingCounterDisplay").show();
            }

            var helpdeskWorkingCounter = brendaWorkingCounter + tylerWorkingCounter + jakeWorkingCounter + HdUnassignedWorking;
            var devWorkingCounter = adamWorkingCounter + bryanWorkingCounter + devUnassignedWorking;
            if (helpdeskWorkingCounter > 0) {
                $("#helpdeskWorkingCounterDisplay").append("Helpdesk Working : " + helpdeskWorkingCounter);
                $("#helpdeskList").append('<li onclick=showHelpdeskWorking(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Working : ' + helpdeskWorkingCounter + '</a></li>');
                $("#helpdeskWorkingCounterDisplay").show();
            }
            if (devWorkingCounter > 0) {
                $("#devWorkingCounterDisplay").append("Dev Working : " + devWorkingCounter);
                $("#devTeamList").append('<li onclick=showDevWorking(); style="cursor: pointer; padding-left:20px" class="last_link"><a>Working : ' + devWorkingCounter + '</a></li>');
                $("#devWorkingCounterDisplay").show();
            }


        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get working tickets. Try again or update url in hd.js");
        }
    });
};



function showWorking() {
    $("#firstWindow").show();
    $("#firstWindowResults").empty();
    $("#openNumbers").hide();
    $("#newNumbers").hide();
    $("#devFirstWindowResults").hide();
    $("#helpdeskFirstWindowResults").hide();
    $("#resolvedNumbers").hide();
    $("#pendingNumbers").hide();
    $("#devWindow").hide();
    $("#devFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#helpdeskWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#helpdeskNewNumbers").hide();
    $("#sentNumbers").hide();
    $("#workingNumbers").show();
    $("#firstWindowNumbers").show();
}



//function runDelete(id) {
//    $("#confirmDiv").html("OK to delete ticket " + id + "?").show();
//    $("#confirmDiv").click(function () {
//        $("#confirmDiv").hide();
//        $.ajax({
//            type: 'DELETE',
//            url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id,
//            dataType: 'json',
//            contentType: 'application/json',
//            beforeSend: function (xhr) {
//                xhr.setRequestHeader("Authorization", "Basic " + btoa("zgUkAWW3h7nBcrAiNWR"));
//            },
//            success: function () {
//                $("." + id + "").hide();
//                $("#" + id + "").hide();
//            },
//            error: function () {
//                alert("Unable to delete your ticket");
//            }
//        });

//    });
//    $("#confirmDiv").delay(5000).fadeOut("slow");
//};