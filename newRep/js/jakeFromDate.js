var jakeCounterFrom = 0;
var jakeCounterFrom = 0;
var tylerCounterFrom = 0;
var adamCounterFrom = 0;
var bryanCounterFrom = 0;
var resultCounterFrom = 0;
var devResultCounterFrom = 0;
var totalCounterFrom = 0;
var pageCounterFrom = 1;
var resultLength = 0;
var devResultLength = 0;
var hdUnassignedCounterFrom = 0;
var devUnassignedCounterFrom = 0;
var jakeApplicationResolvedLength = 0;
var jakeApplicationTotal = 0;
var jakeAntivirusResolvedLength = 0;
var jakeAntivirusTotal = 0;
var jakeCitrixTotal = 0;
var jakeCitrixResolvedLength = 0;
var jakeOtherTotal = 0;
var jakeOtherResolvedLength = 0;
var jakePasswordsTotal = 0;
var jakePasswordsResolvedLength = 0;
var jakeImageTotal = 0;
var jakeImageResolvedLength = 0;
var jakeNetworkingTotal = 0;
var jakeNetworkingResolvedLength = 0;
var jakeNewUserTotal = 0;
var jakeNewUserResolvedLength = 0;
var jakePcTotal = 0;
var jakePcResolvedLength = 0;
var jakePrinterTotal = 0;
var jakePrinterResolvedLength = 0;
var jakeProfileTotal = 0;
var jakeProfileResolvedLength = 0;
var jakeWebsitesTotal = 0;
var jakeWebsitesResolvedLength = 0;
var jakeBlankTotal = 0;
var jakeBlankResolvedLength = 0;
var jakeTotal = 0;


$(document).ready(function () {
    $("#fromDateBackButton").click(function () {
        $("#jakeFromInfo").show();
        $("#tylerFromInfo").show();
        $("#adamFromInfo").show();
        $("#bryanFromInfo").show();
        $("#jakeFromInfo").show();
        $("#fromDateBackButton").hide();
    });
    $("#jakeFromList").click(function () {
        $("#tylerFromInfo").hide();
        $("#brendaFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#jakeFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#jakeFromDateLabel").click(function () {
        $("#brendaFromInfo").hide();
        $("#tylerFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#jakeFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#numbersFromDate").click(function () {
        var theDate = $("#dateValue").val();
        $("#jumpBackForDate").hide();
        $("#fromDateMainWindow").hide();
        $("#fromDateRightWindow").hide();
        $("#forDateList").hide();
        $("#jakeFromDateLabel").empty();
        $("#fromDateRightWindow").hide();
        $("#forDateRightWindow").hide();
        $("#firstWindowResults").hide();
        $("#forDateLeftWindow").hide();
        $("#forDateMainWindow").hide();
        $("#fromDateLeftWindow").show();
        $("#fromDateMainWindow").show();
        $("#firstWindow").hide();
        $("#errorsDiv").empty();
        $("#jakeFromDateTable").hide();
        $("#jakeAvFromDateTable").hide();
        $("#jakeCitrixFromDateTable").hide();
        $("#jakeOtherFromDateTable").hide();
        $("#jakePasswordsFromDateTable").hide();
        $("#jakeImageFromDateTable").hide();
        $("#jakeNetworkingFromDateTable").hide();
        $("#jakeNewUserFromDateTable").hide();
        $("#jakePcFromDateTable").hide();
        $("#jakePrinterFromDateTable").hide();
        $("#jakeProfileFromDateTable").hide();
        $("#jakeWebsitesFromDateTable").hide();
        $("#jakeBlankFromDateTable").hide();
        $("#fromDateRightWindow").empty();
        $("#jakeFromTableResults").html("<tr></tr>");
        $("#jakeAvFromTableResults").html("<tr></tr>");
        $("#jakeCitrixFromTableResults").html("<tr></tr>");
        $("#jakeOtherFromTableResults").html("<tr></tr>");
        $("#jakePasswordsFromTableResults").html("<tr></tr>");
        $("#jakeImageFromTableResults").html("<tr></tr>");
        $("#jakeNetworkingFromTableResults").html("<tr></tr>");
        $("#jakeNewUserFromTableResults").html("<tr></tr>");
        $("#jakePcFromTableResults").html("<tr></tr>");
        $("#jakePrinterFromTableResults").html("<tr></tr>");
        $("#jakeProfileFromTableResults").html("<tr></tr>");
        $("#jakeWebsitesFromTableResults").html("<tr></tr>");
        $("#jakeBlankFromTableResults").html("<tr></tr>");

        $("#jakeFromDate").css('color', 'black').empty();
        $("#jakeAvFromDate").css('color', 'black').empty();
        $("#jakeCitrixFromDate").css('color', 'black').empty();
        $("#jakeOtherFromDate").css('color', 'black').empty();
        $("#jakePasswordsFromDate").css('color', 'black').empty();
        $("#jakeImageFromDate").css('color', 'black').empty();
        $("#jakeNetworkingFromDate").css('color', 'black').empty();
        $("#jakeNewUserFromDate").css('color', 'black').empty();
        $("#jakePcFromDate").css('color', 'black').empty();
        $("#jakePrinterFromDate").css('color', 'black').empty();
        $("#jakeProfileFromDate").css('color', 'black').empty();
        $("#jakeWebsitesFromDate").css('color', 'black').empty();
        $("#jakeBlankFromDate").css('color', 'black').empty();
        $("#processDiv").html("Thinking...");

        getJakeFrom(theDate);
        getJakeAntivirus(theDate);
        getJakeCitrix(theDate);
        getJakeOther(theDate);
        getJakePasswords(theDate);
        getJakeImage(theDate);
        getJakeNetworking(theDate);
        getJakeNewUser(theDate);
        getJakePc(theDate);
        getJakePrinter(theDate);
        getJakeProfile(theDate);
        getJakeWebsites(theDate);
        getJakeBlank(theDate);
        $("#jakeFromDate").show();
        $("#overViewList").hide();
        $("#helpdeskList").hide();
        $("#devTeamList").hide();
        $("#jumpBackFromDate").show();
    });
    $("#jumpBackFromDate").click(function () {
        //jumpBackfrom();
    });
});

function checkJakeNumbers(data) {
    jakeApplicationResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeApplicationResolvedLength < data.results.length) {
                $("#jakeFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeApplicationResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeApplicationResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeApplicationResolvedLength].id + ")" + ">" + data.results[jakeApplicationResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeApplicationResolvedLength++;
            }
        });
    jakeApplicationTotal = jakeApplicationTotal + data.results.length;
}

function checkJakeAntivirusNumbers(data) {
    jakeAntivirusResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeAntivirusResolvedLength < data.results.length) {
                $("#jakeAvFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeAntivirusResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeAntivirusResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeAntivirusResolvedLength].id + ")" + ">" + data.results[jakeAntivirusResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeAntivirusResolvedLength++;
            }
        });
    jakeAntivirusTotal = jakeAntivirusTotal + data.results.length;
}

function checkJakeCitrixNumbers(data) {
    jakeCitrixResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeCitrixResolvedLength < data.results.length) {
                $("#jakeCitrixFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeCitrixResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeCitrixResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeCitrixResolvedLength].id + ")" + ">" + data.results[jakeCitrixResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeCitrixResolvedLength++;
            }
        });
    jakeCitrixTotal = jakeCitrixTotal + data.results.length;
}

function checkJakeOtherNumbers(data) {
    jakeOtherResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeOtherResolvedLength < data.results.length) {
                $("#jakeOtherFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeOtherResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeOtherResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeOtherResolvedLength].id + ")" + ">" + data.results[jakeOtherResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeOtherResolvedLength++;
            }
        });
    jakeOtherTotal = jakeOtherTotal + data.results.length;
}

function checkJakePasswordsNumbers(data) {
    jakePasswordsResolvedLength = 0;
    $.each(data,
        function () {
            while (jakePasswordsResolvedLength < data.results.length) {
                $("#jakePasswordsFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakePasswordsResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakePasswordsResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakePasswordsResolvedLength].id + ")" + ">" + data.results[jakePasswordsResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakePasswordsResolvedLength++;
            }
        });
    jakePasswordsTotal = jakePasswordsTotal + data.results.length;
}

function checkJakeImageNumbers(data) {
    jakeImageResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeImageResolvedLength < data.results.length) {
                $("#jakeImageFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeImageResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeImageResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeImageResolvedLength].id + ")" + ">" + data.results[jakeImageResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeImageResolvedLength++;
            }
        });
    jakeImageTotal = jakeImageTotal + data.results.length;
}

function checkJakeNetworkingNumbers(data) {
    jakeNetworkingResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeNetworkingResolvedLength < data.results.length) {
                $("#jakeNetworkingFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeNetworkingResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeNetworkingResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeNetworkingResolvedLength].id + ")" + ">" + data.results[jakeNetworkingResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeNetworkingResolvedLength++;
            }
        });
    jakeNetworkingTotal = jakeNetworkingTotal + data.results.length;
}

function checkJakeNewUserNumbers(data) {
    jakeNewUserResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeNewUserResolvedLength < data.results.length) {
                $("#jakeNewUserFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeNewUserResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeNewUserResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeNewUserResolvedLength].id + ")" + ">" + data.results[jakeNewUserResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeNewUserResolvedLength++;
            }
        });
    jakeNewUserTotal = jakeNewUserTotal + data.results.length;
}

function checkJakePcNumbers(data) {
    jakePcResolvedLength = 0;
    $.each(data,
        function () {
            while (jakePcResolvedLength < data.results.length) {
                $("#jakePcFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakePcResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakePcResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakePcResolvedLength].id + ")" + ">" + data.results[jakePcResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakePcResolvedLength++;
            }
        });
    jakePcTotal = jakePcTotal + data.results.length;
}

function checkJakePrinterNumbers(data) {
    jakePrinterResolvedLength = 0;
    $.each(data,
        function () {
            while (jakePrinterResolvedLength < data.results.length) {
                $("#jakePrinterFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakePrinterResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakePrinterResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakePrinterResolvedLength].id + ")" + ">" + data.results[jakePrinterResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakePrinterResolvedLength++;
            }
        });
    jakePrinterTotal = jakePrinterTotal + data.results.length;
}

function checkJakeProfileNumbers(data) {
    jakeProfileResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeProfileResolvedLength < data.results.length) {
                $("#jakeProfileFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeProfileResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeProfileResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeProfileResolvedLength].id + ")" + ">" + data.results[jakeProfileResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeProfileResolvedLength++;
            }
        });
    jakeProfileTotal = jakeProfileTotal + data.results.length;
}

function checkJakeWebsitesNumbers(data) {
    jakeWebsitesResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeWebsitesResolvedLength < data.results.length) {
                $("#jakeWebsitesFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeWebsitesResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeWebsitesResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeWebsitesResolvedLength].id + ")" + ">" + data.results[jakeWebsitesResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeWebsitesResolvedLength++;
            }
        });
    jakeWebsitesTotal = jakeWebsitesTotal + data.results.length;
}

function checkJakeBlankNumbers(data) {
    jakeBlankResolvedLength = 0;
    $.each(data,
        function () {
            while (jakeBlankResolvedLength < data.results.length) {
                $("#jakeBlankFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[jakeBlankResolvedLength].id + " target=" + "_blank" + ">" + data.results[jakeBlankResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showJakeFromInfo(" + data.results[jakeBlankResolvedLength].id + ")" + ">" + data.results[jakeBlankResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                jakeBlankResolvedLength++;
            }
        });
    jakeBlankTotal = jakeBlankTotal + data.results.length;
}

function getJakeFrom(theDate) {
    jakeApplicationTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP2(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP3(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP4(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP5(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP6(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP7(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP8(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP9(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNumbers(data);
                getJakeP10(theDate);
            } else {
                getJakeP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }
                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeNumbers(data);
                $("#jakeFromDate").html('<br><div  onclick=showJakeApps(); style="cursor:pointer">Applications : ' + jakeApplicationTotal + '</div>');
                if (jakeApplicationTotal === 300) {
                    $("#jakeFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                if (jakeApplicationTotal > 0) {
                    jakeTotal = jakeCitrixTotal +
                        jakeOtherTotal +
                        jakePasswordsTotal +
                        jakeImageTotal +
                        jakeNetworkingTotal +
                        jakeNewUserTotal +
                        jakePcTotal +
                        jakePrinterTotal +
                        jakeProfileTotal +
                        jakeWebsitesTotal +
                        jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                    if (jakeTotal > 0) {
                        $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                    }

                    $("#jakeFromDate").html('<br><div  onclick=showJakeApps(); style="cursor:pointer">Applications : ' + jakeApplicationTotal + '</div>');
                }
                if (jakeApplicationTotal === 300) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                }
            }
            $("#processDiv").empty();
            //getJakeAntivirus(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeAntivirus(theDate) {
    jakeAntivirusTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP2(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' +
            "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP3(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP4(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP5(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP6(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP7(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP8(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP9(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeAntivirusNumbers(data);
                getJakeAvP10(theDate);
            } else {
                getJakeAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeAvP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }
                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeAntivirusNumbers(data);
                if (jakeAntivirusTotal === 300) {
                    $("#jakeAvFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    if (jakeAntivirusTotal > 0) {
                        $("#jakeAvFromDate").append('<div onclick=showJakeAv(); style="cursor:pointer">Antivirus : ' + jakeAntivirusTotal + '</div>').show();
                    }
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }
                if (jakeAntivirusTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeAvFromDate").append('<div onclick=showJakeAv(); style="cursor:pointer">Antivirus : ' + jakeAntivirusTotal + '</div>').show();
                }
            }
            //getJakeCitrix(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeCitrix(theDate) {
    jakeCitrixTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP2(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP3(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP4(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP5(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP6(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP7(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP8(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP9(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeCitrixNumbers(data);
                getJakeCitrixP10(theDate);
            } else {
                getJakeCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeCitrixP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeCitrixNumbers(data);
                if (jakeCitrixTotal === 300) {
                    $("#jakeCitrixFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeCitrixFromDate").append('<div onclick=showJakeCitrix(); style="cursor:pointer">Citrix : ' + jakeCitrixTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeCitrixTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeCitrixFromDate").append('<div onclick=showJakeCitrix(); style="cursor:pointer">Citrix : ' + jakeCitrixTotal + '</div>');
                }
            }
            //getJakeOther(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeOther(theDate) {
    jakeOtherTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP2(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP3(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP4(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP5(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP6(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP7(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP8(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP9(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeOtherNumbers(data);
                getJakeOtherP10(theDate);
            } else {
                getJakeOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeOtherP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;

                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeOtherNumbers(data);
                if (jakeOtherTotal === 300) {
                    $("#jakeOtherFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeOtherFromDate").append('<div onclick=showJakeOther(); style="cursor:pointer">Other : ' + jakeOtherTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeOtherTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeOtherFromDate").append('<div onclick=showJakeOther(); style="cursor:pointer">Other : ' + jakeOtherTotal + '</div>');
                }
            }
            //getJakePasswords(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakePasswords(theDate) {
    jakePasswordsTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP2(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP3(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP4(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP5(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP6(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP7(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP8(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP9(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePasswordsNumbers(data);
                getJakePasswordsP10(theDate);
            } else {
                getJakePasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePasswordsP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakePasswordsNumbers(data);
                if (jakePasswordsTotal === 300) {
                    $("#jakePasswordsFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    jakeTotal = jakeCitrixTotal +
                        jakeOtherTotal +
                        jakePasswordsTotal +
                        jakeImageTotal +
                        jakeNetworkingTotal +
                        jakeNewUserTotal +
                        jakePcTotal +
                        jakePrinterTotal +
                        jakeProfileTotal +
                        jakeWebsitesTotal +
                        jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                    if (jakeTotal > 0) {
                        $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                    }

                    $("#jakePasswordsFromDate").append('<div onclick=showJakePasswords(); style="cursor:pointer">Passwords : ' + jakePasswordsTotal + '</div>');
                }
            } else {
                if (jakePasswordsTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakePasswordsFromDate").append('<div onclick=showJakePasswords(); style="cursor:pointer">Passwords : ' + jakePasswordsTotal + '</div>');
                }
            }
            //getJakeImage(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeImage(theDate) {
    jakeImageTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP2(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP3(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP4(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP5(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP6(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP7(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP8(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP9(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeImageNumbers(data);
                getJakeImageP10(theDate);
            } else {
                getJakeImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeImageP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeImageNumbers(data);
                if (jakeImageTotal === 300) {
                    $("#jakeImageFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeImageFromDate").append('<div onclick=showJakeImage(); style="cursor:pointer">Image : ' + jakeImageTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeImageTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeImageFromDate").append('<div onclick=showJakeImage(); style="cursor:pointer">Image : ' + jakeImageTotal + '</div>');
                }
            }
            //getJakeNetworking(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeNetworking(theDate) {
    jakeNetworkingTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP2(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP3(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP4(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP5(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP6(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP7(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP8(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP9(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNetworkingNumbers(data);
                getJakeNetworkingP10(theDate);
            } else {
                getJakeNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNetworkingP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeNetworkingNumbers(data);
                if (jakeNetworkingTotal === 300) {
                    $("#jakeNetworkingFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeNetworkingFromDate").append('<div onclick=showJakeNetworking(); style="cursor:pointer">Networking : ' + jakeNetworkingTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeNetworkingTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeNetworkingFromDate").append('<div onclick=showJakeNetworking(); style="cursor:pointer">Networking : ' + jakeNetworkingTotal + '</div>');
                }
            }
            //getJakeNewUser(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeNewUser(theDate) {
    jakeNewUserTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP2(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP3(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP4(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP5(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP6(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP7(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP8(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP9(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeNewUserNumbers(data);
                getJakeNewUserP10(theDate);
            } else {
                getJakeNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeNewUserP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeNewUserNumbers(data);
                if (jakeNewUserTotal === 300) {
                    $("#jakeNewUserFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeNewUserFromDate").append('<div onclick=showJakeNewUser(); style="cursor:pointer">New User : ' + jakeNewUserTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeNewUserTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeNewUserFromDate").append('<div onclick=showJakeNewUser(); style="cursor:pointer">New User : ' + jakeNewUserTotal + '</div>');
                }
            }
            //getJakePc(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakePc(theDate) {
    jakePcTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP2(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP3(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP4(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP5(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP6(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP7(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP8(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP9(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePcNumbers(data);
                getJakePcP10(theDate);
            } else {
                getJakePcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePcP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakePcNumbers(data);
                if (jakePcTotal === 300) {
                    $("#jakePcFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakePcFromDate").append('<div onclick=showJakePc(); style="cursor:pointer">PC/Phone/Tablet : ' + jakePcTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakePcTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakePcFromDate").append('<div onclick=showJakePc(); style="cursor:pointer">PC/Phone/Tablet : ' + jakePcTotal + '</div>');
                }
            }
            //getJakePrinter(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakePrinter(theDate) {
    jakePrinterTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP2(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP3(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP4(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP5(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP6(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP7(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP8(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP9(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakePrinterNumbers(data);
                getJakePrinterP10(theDate);
            } else {
                getJakePrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakePrinterP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakePrinterNumbers(data);
                if (jakePrinterTotal === 300) {
                    $("#jakePrinterFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakePrinterFromDate").append('<div onclick=showJakePrinter(); style="cursor:pointer">Printer/Scanner : ' + jakePrinterTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakePrinterTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakePrinterFromDate").append('<div onclick=showJakePrinter(); style="cursor:pointer">Printer/Scanner : ' + jakePrinterTotal + '</div>');
                }
            }
            //getJakeProfile(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeProfile(theDate) {
    jakeProfileTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP2(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP3(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP4(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP5(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP6(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP7(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP8(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP9(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeProfileNumbers(data);
                getJakeProfileP10(theDate);
            } else {
                getJakeProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeProfileP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeProfileNumbers(data);
                if (jakeProfileTotal === 300) {
                    $("#jakeProfileFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeProfileFromDate").append('<div onclick=showJakeProfile(); style="cursor:pointer">Profile : ' + jakeProfileTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeProfileTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeProfileFromDate").append('<div onclick=showJakeProfile(); style="cursor:pointer">Profile : ' + jakeProfileTotal + '</div>');
                }
            }
            //getJakeWebsites(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeWebsites(theDate) {
    jakeWebsitesTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP2(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP3(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP4(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP5(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP6(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP7(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP8(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP9(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeWebsitesNumbers(data);
                getJakeWebsitesP10(theDate);
            } else {
                getJakeWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeWebsitesP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeWebsitesNumbers(data);
                if (jakeWebsitesTotal === 300) {
                    $("#jakeWebsitesFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#jakeWebsitesFromDate").append('<div onclick=showJakeWebsites(); style="cursor:pointer">Websites : ' + jakeWebsitesTotal + '</div>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeWebsitesTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeWebsitesFromDate").append('<div onclick=showJakeWebsites(); style="cursor:pointer">Websites : ' + jakeWebsitesTotal + '</div>');
                }
            }
            //getJakeBlank(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getJakeBlank(theDate) {
    jakeBlankTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP2(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP3(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP4(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP5(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP6(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP7(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP8(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP9(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkJakeBlankNumbers(data);
                getJakeBlankP10(theDate);
            } else {
                getJakeBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getJakeBlankP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            jakeTotal = jakeCitrixTotal +
                jakeOtherTotal +
                jakePasswordsTotal +
                jakeImageTotal +
                jakeNetworkingTotal +
                jakeNewUserTotal +
                jakePcTotal +
                jakePrinterTotal +
                jakeProfileTotal +
                jakeWebsitesTotal +
                jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
            if (jakeTotal > 0) {
                $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
            }

            if (data.results.length !== 0) {
                $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                checkJakeBlankNumbers(data);
                $("#jakeBlankFromDate").html('<div  onclick=showJakeBlank(); style="cursor:pointer">Blank : ' + jakeBlankTotal + '</div>');
                if (jakeBlankTotal === 300) {
                    $("#jakeBlankFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                jakeTotal = jakeCitrixTotal +
                    jakeOtherTotal +
                    jakePasswordsTotal +
                    jakeImageTotal +
                    jakeNetworkingTotal +
                    jakeNewUserTotal +
                    jakePcTotal +
                    jakePrinterTotal +
                    jakeProfileTotal +
                    jakeWebsitesTotal +
                    jakeBlankTotal + jakeApplicationTotal + jakeAntivirusTotal;
                if (jakeTotal > 0) {
                    $("#jakeFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Jake : ' + jakeTotal + '</a></li>');
                }

                if (jakeBlankTotal > 0) {
                    $("#jakeFromDateLabel").html('<br><div style="font-size:20px">Jake</div>');
                    $("#jakeBlankFromDate").html('<div  onclick=showJakeBlank(); style="cursor:pointer">Blank : ' + jakeBlankTotal + '</div>');
                }
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}


function showJakeApps() {
    $("#fromDateRightWindow").hide();
    $("#jakeFromDateTable").toggle();
    $("#jakeFromTableResults").show();
}
function showJakeAv() {
    $("#fromDateRightWindow").hide();
    $("#jakeAvFromDateTable").toggle();
    $("#jakeAvFromTableResults").show();
}
function showJakeCitrix() {
    $("#fromDateRightWindow").hide();
    $("#jakeCitrixFromDateTable").toggle();
    $("#jakeCitrixFromTableResults").show();
}
function showJakeOther() {
    $("#fromDateRightWindow").hide();
    $("#jakeOtherFromDateTable").toggle();
    $("#jakeOtherFromTableResults").show();
}
function showJakePasswords() {
    $("#fromDateRightWindow").hide();
    $("#jakePasswordsFromDateTable").toggle();
    $("#jakePasswordsFromTableResults").show();
}
function showJakeImage() {
    $("#fromDateRightWindow").hide();
    $("#jakeImageFromDateTable").toggle();
    $("#jakeImageFromTableResults").show();
}
function showJakeNetworking() {
    $("#fromDateRightWindow").hide();
    $("#jakeNetworkingFromDateTable").toggle();
    $("#jakeNetworkingFromTableResults").show();
}
function showJakeNewUser() {
    $("#fromDateRightWindow").hide();
    $("#jakeNewUserFromDateTable").toggle();
    $("#jakeNewUserFromTableResults").show();
}
function showJakePc() {
    $("#fromDateRightWindow").hide();
    $("#jakePcFromDateTable").toggle();
    $("#jakePcFromTableResults").show();
}
function showJakePrinter() {
    $("#fromDateRightWindow").hide();
    $("#jakePrinterFromDateTable").toggle();
    $("#jakePrinterFromTableResults").show();
}
function showJakeProfile() {
    $("#fromDateRightWindow").hide();
    $("#jakeProfileFromDateTable").toggle();
    $("#jakeProfileFromTableResults").show();
}
function showJakeWebsites() {
    $("#fromDateRightWindow").hide();
    $("#jakeWebsitesFromDateTable").toggle();
    $("#jakeWebsitesFromTableResults").show();
}
function showJakeBlank() {
    $("#fromDateRightWindow").hide();
    $("#jakeBlankFromDateTable").toggle();
    $("#jakeBlankFromTableResults").show();
}


function showJakeFromInfo(id) {
    $("#devfirstWindowResults").empty();
    $("#devFirstWindowResults").empty();
    $("#helpdeskFirstWindowResults").empty();
    $("#fromDateRightWindow").empty();
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
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Bryan</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'rgb(113, 88, 44)').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }
            if (data.responder_id === 19000195685) {
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Adam</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'rgb(18, 143, 22)').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }
            if (data.responder_id === 19000197788) {
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'blue').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }
            if (data.responder_id === 19001766755) {
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'orange').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }
            if (data.responder_id === 19008173125) {
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'red').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }
            if (data.responder_id !== 19008173125 &&
                data.responder_id !== 19001766755 &&
                data.responder_id !== 19008173125 &&
                data.responder_id !== 19000195685 &&
                data.responder_id !== 19000346026) {
                $("#fromDateRightWindow").append("<div style=" + "font-size:20px" + ">Unassigned</div><hr/><p>");
                $("#fromDateRightWindow").css('color', 'purple').css('font-weight', 'bold');
                $("#fromDateRightWindow").show();
            }

            if (data.to_emails !== null) {
                $("#fromDateRightWindow").append("To: ");
                data.to_emails.forEach(function (data) {
                    $("#fromDateRightWindow").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            if (data.cc_emails !== null) {
                $("#fromDateRightWindow").append("CC:");
                data.cc_emails.forEach(function (data) {
                    $("#fromDateRightWindow").append("<div style=" + "font-size:18px; " + ">" + data + "</div><p>");
                });
            }
            $("#fromDateRightWindow").append("<hr/><a target=" + "_blank" + " style=" + "color:black;" + " href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + "><div style=" + "font-size:18px;font-weight:bold" + ">Subject:</div><br/>" + data.subject + "</a><hr/><p>" + data.description);
            $("#fromDateRightWindow").show();


        },
        error: function () {

        }
    });
}