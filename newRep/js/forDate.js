var brendaCounter = 0;
var jakeCounter = 0;
var tylerCounter = 0;
var adamCounter = 0;
var bryanCounter = 0;
var resultCounter = 0;
var devResultCounter = 0;
var totalCounter = 0;
var pageCounter = 1;
var resultLength = 0;
var devResultLength = 0;
var hdUnassignedCounter = 0;
var devUnassignedCounter = 0;
var forDateAlertCounter = 0;


$(document).ready(function () {
    $("#numbersForDate").click(function () {
        forDateAlertCounter = 0;
        $("#forDateAlerts").empty('');
        $("#jumpBackFromDate").hide();
        $("#forDateRightWindow").empty().hide();
        $("#forDateMainWindow").show();
        $("#forDateLeftWindow").show();
        $("#fromDateMainWindow").hide();
        $("#fromDateRightWindow").hide();
        getResolved();
        forDateSwap();
    });
    $("#jumpBackForDate").click(function () {
        jumpBack();
    });
});
function forDateSwap() {
    $("#overViewList").hide();
    $("#helpdeskList").hide();
    $("#devTeamList").hide();
    $("#forDateList").show();
    $("#jumpBackForDate").show();
    $("#firstWindow").hide();
    $("#devFirstWindow").hide();
    $("#helpdeskFirstWindow").hide();
    $("#forDateMainWindow").show();
}

function jumpBack() {
    $("#forDateList").hide();
    $("#jumpBackForDate").hide();
    $("#forDateMainWindow").hide();
    $("#firstWindow").show();
    $("#devFirstWindow").show();
    $("#helpdeskFirstWindow").show();
    $("#overViewList").show();
    $("#helpdeskList").show();
    $("#devTeamList").show();
}

function getResolved() {
    var theDate = $("#dateValue").val();
    $("#brendaTableResults").empty();
    $("#jakeTableResults").empty();
    $("#tylerTableResults").empty();
    $("#hdUnassignedTableResults").empty();
    $("#devUnassignedTableResults").empty();
    $("#adamTableResults").empty();
    $("#bryanTableResults").empty();
    $("#errorsDiv").empty().hide();
    $("#adamForDateTable").hide();
    $("#bryanForDateTable").hide();
    $("#brendaForDateTable").hide();
    $("#tylerForDateTable").hide();
    $("#jakeForDateTable").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDateTable").hide();
    $("#brendaForDate").empty();
    $("#jakeForDate").empty();
    $("#hdUnassignedForDate").empty();
    $("#devUnassignedForDate").empty();
    $("#tylerForDate").empty();
    $("#adamForDate").empty();
    $("#bryanForDate").empty();
    brendaCounter = 0;
    jakeCounter = 0;
    tylerCounter = 0;
    hdUnassignedCounter = 0;
    devUnassignedCounter = 0;
    pageCounter = 1;
    adamCounter = 0;
    bryanCounter = 0;
    getHdResolved(theDate);
    getDevResolved(theDate);
}

function checkHdNumbers(data) {
    resultLength = 0;
    while (resultLength < data.results.length) {

        if (data.results[resultLength].custom_fields.cf_category !== "Alerts") {
            if (data.results[resultLength].responder_id === 19000197788) {
                brendaCounter++;
                resultCounter++;
                $("#brendaTableResults").append("<tr><td><a href=" +
                    "https://weathershield.freshdesk.com/a/tickets/" +
                    data.results[resultLength].id +
                    " target=" +
                    "_blank" +
                    ">" +
                    data.results[resultLength].id +
                    "</td><td style=" +
                    "cursor:pointer" +
                    " onclick=" +
                    "showDevInfo(" +
                    data.results[resultLength].id +
                    ")" +
                    ">" +
                    data.results[resultLength].subject +
                    "</td></tr>");
                $("#brendaForDate").html("Brenda : " + brendaCounter);
                $("#brendaForDateTable").show();
                $("#brendaForDate").show();
            }
            if (data.results[resultLength].responder_id === 19008173125) {
                jakeCounter++;
                resultCounter++;
                $("#jakeTableResults").append("<tr><td><a href=" +
                    "https://weathershield.freshdesk.com/a/tickets/" +
                    data.results[resultLength].id +
                    " target=" +
                    "_blank" +
                    ">" +
                    data.results[resultLength].id +
                    "</td><td style=" +
                    "cursor:pointer" +
                    " onclick=" +
                    "showDevInfo(" +
                    data.results[resultLength].id +
                    ")" +
                    ">" +
                    data.results[resultLength].subject +
                    "</td></tr>");
                $("#jakeForDate").html("Jake : " + jakeCounter);
                $("#jakeForDateTable").show();
                $("#jakeForDate").show();
            }
            if (data.results[resultLength].responder_id === 19001766755) {
                tylerCounter++;
                resultCounter++;
                $("#tylerTableResults").append("<tr><td><a href=" +
                    "https://weathershield.freshdesk.com/a/tickets/" +
                    data.results[resultLength].id +
                    " target=" +
                    "_blank" +
                    ">" +
                    data.results[resultLength].id +
                    "</td><td style=" +
                    "cursor:pointer" +
                    " onclick=" +
                    "showDevInfo(" +
                    data.results[resultLength].id +
                    ")" +
                    ">" +
                    data.results[resultLength].subject +
                    "</td></tr>");
                $("#tylerForDate").html("Tyler : " + tylerCounter);
                $("#tylerForDateTable").show();
                $("#tylerForDate").show();
            }
            if (data.results[resultLength].responder_id !== 19001766755 &&
                data.results[resultLength].responder_id !== 19000197788 &&
                data.results[resultLength].responder_id !== 19008173125) {
                hdUnassignedCounter++;
                resultCounter++;
                $("#hdUnassignedTableResults").append("<tr><td><a href=" +
                    "https://weathershield.freshdesk.com/a/tickets/" +
                    data.results[resultLength].id +
                    " target=" +
                    "_blank" +
                    ">" +
                    data.results[resultLength].id +
                    "</td><td style=" +
                    "cursor:pointer" +
                    " onclick=" +
                    "showDevInfo(" +
                    data.results[resultLength].id +
                    ")" +
                    ">" +
                    data.results[resultLength].subject +
                    "</td></tr>");
                $("#hdUnassignedForDate").html("Unassigned : " + hdUnassignedCounter);
                $("#hdUnassignedForDateTable").show();
                $("#hdUnassignedForDate").show();
            }
        } else {
            $("#forDateAlerts").append(data.results[resultLength].subject + '<br>');
            forDateAlertCounter++;
        }
        resultLength++;

    }
}

function checkDevNumbers(data) {
    while (devResultLength < data.results.length) {
        if (data.results[devResultLength].responder_id === 19000346026) {
            bryanCounter++;
            devResultCounter++;
            $("#bryanTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[devResultLength].id + " target=" + "_blank" + ">" + data.results[devResultLength].id + "</td><td style="+"cursor:pointer"+" onclick=" + "showDevInfo(" + data.results[devResultLength].id + ")"+">" + data.results[devResultLength].subject + "</td></tr>");
            $("#bryanForDate").html("Bryan : " + bryanCounter);
            $("#bryanForDateTable").show();
            $("#bryanForDate").show();
        }
        if (data.results[devResultLength].responder_id === 19000195685) {
            adamCounter++;
            devResultCounter++;
            $("#adamTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[devResultLength].id + " target=" + "_blank" + ">" + data.results[devResultLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[devResultLength].id + ")" +">" + data.results[devResultLength].subject + "</td></tr>");
            $("#adamForDate").html("Adam : " + adamCounter);
            $("#adamForDateTable").show();
            $("#adamForDate").show();
        }
        if (data.results[devResultLength].responder_id !== 19000195685 && data.results[devResultLength].responder_id !== 19000346026) {
            devUnassignedCounter++;
            devResultCounter++;
            $("#devUnassignedTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[devResultLength].id + " target=" + "_blank" + ">" + data.results[devResultLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[devResultLength].id + ")" + ">" + data.results[devResultLength].subject + "</td></tr>");
            $("#devUnassignedForDate").html("Unassigned : " + devUnassignedCounter);
            $("#devUnassignedForDateTable").show();
            $("#devUnassignedForDate").show();
        }
        devResultLength++;
    }
}

function getHdResolved(theDate) {
    resultCounter = 0;
    resultLength = 0;
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length !== 0) {
                    checkHdNumbers(data);
                    getHdP2(theDate);
                } else {
                    getHdP10(theDate);
                }

            },
            error: function () {
                $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
            }
        });
}

function getHdP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP3(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP4(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP5(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP6(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP7(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP8(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP9(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
                getHdP10(theDate);
            } else {
                getHdP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getHdP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkHdNumbers(data);
            } 
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
    if (resultCounter > 0) {
        $("#forDateList").append('<li style="cursor:pointer" onclick=showDevHdResolved(); class="last_link"><a>For Date ' + theDate + '</a></li><li style="cursor:pointer" onclick=showHdAll(); class="last_link"><a>Helpdesk</a></li><li onclick=showAlerts(); style="cursor:pointer; padding-left:20px" class="last_link"><a>Alerts : ' + forDateAlertCounter + '</a></li><li onclick=showHdAll(); style="cursor:pointer; padding-left:20px" class="last_link"><a>Total Resolved : ' + resultCounter + '</a></li>');
        if (brendaCounter > 0) {
            $("#forDateList").append('<li onclick=showBrenda(); style="cursor:pointer; padding-left:40px" class="last_link"><a>Brenda : ' + brendaCounter + '</a></li>');
        }
        if (tylerCounter > 0) {
            $("#forDateList").append('<li onclick=showTyler(); style="cursor:pointer; padding-left:40px" class="last_link"><a>Tyler : ' + tylerCounter + '</a></li>');
        }
        if (jakeCounter > 0) {
            $("#forDateList").append('<li onclick=showJake(); style="cursor:pointer; padding-left:40px" class="last_link"><a>Jake : ' + jakeCounter + '</a></li>');
        }
        if (hdUnassignedCounter > 0) {
            $("#forDateList").append('<li onclick=showHdUnassigned(); style="cursor:pointer; padding-left:40px" class="last_link"><a>Unassigned : ' + hdUnassignedCounter + '</a></li>');
        }
    }


}

function getDevResolved(theDate) {

    devResultCounter = 0;
    devResultLength = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP2(theDate);
            } else {
                getDevP10(theDate);
            }

        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}

function getDevP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP3(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP4(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP5(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP6(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP7(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP8(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP9(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                getDevP10(theDate);
            } else {
                getDevP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });
}
function getDevP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkDevNumbers(data);
                if (devResultCounter > 0) {
                    $("#forDateList").append('<li onclick=showDevAll(); class="last_link" style="cursor:pointer"><a>Dev Team</a></li><li onclick=showDevAll();  style="cursor:pointer; padding-left:20px" class="last_link"><a>Total Resolved : ' + devResultCounter + '</a></li>');
                    if (adamCounter > 0) {
                        $("#forDateList").append('<li style="cursor:pointer; padding-left:40px" class="last_link"><a>Adam : ' +adamCounter +'</a></li>');
                    }
                    if (bryanCounter > 0) {
                        $("#forDateList").append('<li style="cursor:pointer; padding-left:40px" class="last_link"><a>Bryan : ' +bryanCounter +'</a></li>');
                    }
                    if (devUnassignedCounter > 0) {
                        $("#forDateList").append('<li style="cursor:pointer; padding-left:40px" class="last_link"><a>Unassigned : ' + devUnassignedCounter + '</a></li>');
                    }
                }
            } else {
                if (devResultCounter > 0) {
                    $("#forDateList").append('<li onclick=showDevAll(); class="last_link" style="cursor:pointer"><a>Dev Team</a></li><li onclick=showDevAll(); style="cursor:pointer; padding-left:20px" class="last_link"><a>Total Resolved : ' + devResultCounter + '</a></li>');
                    if (adamCounter > 0) {
                        $("#forDateList").append('<li onclick=showAdam();  style="cursor:pointer; padding-left:40px" class="last_link"><a>Adam : ' + adamCounter + '</a></li>');
                    }
                    if (bryanCounter > 0) {
                        $("#forDateList").append('<li onclick=showBryan();  style="cursor:pointer; padding-left:40px" class="last_link"><a>Bryan : ' + bryanCounter + '</a></li>');
                    }
                    if (devUnassignedCounter > 0) {
                        $("#forDateList").append('<li onclick=showDevUnassigned();  style="cursor:pointer; padding-left:40px" class="last_link"><a>Unassigned : ' + devUnassignedCounter + '</a></li>');
                    }

                }
                if (devResultCounter === 0 && resultCounter === 0 && forDateAlertCounter === 0) {
                    $("#errorsDiv").html("No tickets were resolved on that date").show();
                }
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js");
        }
    });

}


function showDevInfo(id) {
    $("#devfirstWindowResults").empty();
    $("#devFirstWindowResults").empty();
    $("#helpdeskFirstWindowResults").empty();
    $("#forDateRightWindow").empty();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + id + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {

            if (data.responder_id === 19000346026) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Bryan</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'rgb(113, 88, 44)').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }
            if (data.responder_id === 19000195685) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Adam</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'rgb(18, 143, 22)').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }
            if (data.responder_id === 19000197788) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'blue').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }
            if (data.responder_id === 19001766755) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'orange').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }
            if (data.responder_id === 19008173125) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'red').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }
            if (data.responder_id !== 19008173125 &&
                data.responder_id !== 19001766755 &&
                data.responder_id !== 19000197788 &&
                data.responder_id !== 19000195685 &&
                data.responder_id !== 19000346026) {
                $("#forDateRightWindow").append("<div style=" + "font-size:20px" + ">Unassigned</div><hr/><p>");
                $("#forDateRightWindow").css('color', 'purple').css('font-weight', 'bold');
                $("#forDateRightWindow").show();
            }

            if (data.to_emails !== null) {
                $("#forDateRightWindow").append("To: ");
                data.to_emails.forEach(function (data) {
                    $("#forDateRightWindow").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            if (data.cc_emails !== null) {
                $("#forDateRightWindow").append("CC:");
                data.cc_emails.forEach(function (data) {
                    $("#forDateRightWindow").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            $("#forDateRightWindow").append("<hr/><a target=" + "_blank" +" style=" + "color:black;" + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + "><div style=" + "font-size:18px;font-weight:bold" + ">Subject:</div><br/>" + data.subject + "</a><hr/><p>" + data.description);
            $("#forDateRightWindow").show();


        },
        error: function () {

        }
    });
}

function showAdam() {
    $("#forDateRightWindow").empty().hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#adamForDate").show();
    $("#adamForDateTable").show();
}

function showBryan() {
    $("#forDateRightWindow").empty().hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#bryanForDate").show();
    $("#bryanForDateTable").show();
}

function showBrenda() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#brendaForDate").show();
    $("#brendaForDateTable").show();
}

function showTyler() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#tylerForDate").show();
    $("#tylerForDateTable").show();
}

function showJake() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#jakeForDate").show();
    $("#jakeForDateTable").show();
}
function showDevUnassigned() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#devUnassignedForDate").show();
    $("#devUnassignedForDateTable").show();
}
function showHdUnassigned() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#hdUnassignedForDate").show();
    $("#hdUnassignedForDateTable").show();
}
function showHdAll() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    if (brendaCounter > 0) {
        $("#brendaForDate").show();
        $("#brendaForDateTable").show();
    }
    if (jakeCounter > 0) {
        $("#jakeForDate").show();
        $("#jakeForDateTable").show();
    }
    if (tylerCounter > 0) {
        $("#tylerForDate").show();
        $("#tylerForDateTable").show();
    }
    if (hdUnassignedCounter > 0) {
        $("#hdUnassignedForDate").show();
        $("#hdUnassignedForDateTable").show();
    }
}
function showDevAll() {
    $("#forDateRightWindow").empty().hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
    $("#jakeForDate").hide();
    $("#hdUnassignedForDate").hide();
    $("#hdUnassignedForDateTable").hide();
    $("#jakeForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#forDateRightWindow").hide();
    if (adamCounter > 0) {
        $("#adamForDate").show();
        $("#adamForDateTable").show();
    }
    if (bryanCounter > 0) {
        $("#bryanForDate").show();
        $("#bryanForDateTable").show();
    }
    if (devUnassignedCounter > 0) {
        $("#devUnassignedForDate").show();
        $("#devUnassignedForDateTable").show();
    }

}

function showDevHdResolved() {
    $("#forDateRightWindow").empty().hide();
    if (adamCounter > 0) {
        $("#adamForDate").show();
        $("#adamForDateTable").show();
    }
    if (bryanCounter > 0) {
        $("#bryanForDate").show();
        $("#bryanForDateTable").show();
    }
    if (devUnassignedCounter > 0) {
        $("#devUnassignedForDate").show();
        $("#devUnassignedForDateTable").show();
    }
    if (brendaCounter > 0) {
        $("#brendaForDate").show();
        $("#brendaForDateTable").show();
    }
    if (jakeCounter > 0) {
        $("#jakeForDate").show();
        $("#jakeForDateTable").show();
    }
    if (tylerCounter > 0) {
        $("#tylerForDate").show();
        $("#tylerForDateTable").show();
    }
    if (hdUnassignedCounter > 0) {
        $("#hdUnassignedForDate").show();
        $("#hdUnassignedForDateTable").show();
    }
}

function showAlerts() {
    $("#forDateRightWindow").empty().hide();
    $("#adamForDate").hide();
    $("#adamForDateTable").hide();
    $("#bryanForDate").hide();
    $("#bryanForDateTable").hide();
    $("#devUnassignedForDate").hide();
    $("#devUnassignedForDateTable").hide();
    $("#forDateRightWindow").hide();
    $("#forDateAlerts").show();
    $("#jakeForDate").hide();
    $("#jakeForDateTable").hide();
    $("#tylerForDate").hide();
    $("#tylerForDateTable").hide();
    $("#brendaForDate").hide();
    $("#brendaForDateTable").hide();
}