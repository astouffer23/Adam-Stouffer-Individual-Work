var tylerCounterFrom = 0;
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
var tylerApplicationResolvedLength = 0;
var tylerApplicationTotal = 0;
var tylerAntivirusResolvedLength = 0;
var tylerAntivirusTotal = 0;
var tylerCitrixTotal = 0;
var tylerCitrixResolvedLength = 0;
var tylerOtherTotal = 0;
var tylerOtherResolvedLength = 0;
var tylerPasswordsTotal = 0;
var tylerPasswordsResolvedLength = 0;
var tylerImageTotal = 0;
var tylerImageResolvedLength = 0;
var tylerNetworkingTotal = 0;
var tylerNetworkingResolvedLength = 0;
var tylerNewUserTotal = 0;
var tylerNewUserResolvedLength = 0;
var tylerPcTotal = 0;
var tylerPcResolvedLength = 0;
var tylerPrinterTotal = 0;
var tylerPrinterResolvedLength = 0;
var tylerProfileTotal = 0;
var tylerProfileResolvedLength = 0;
var tylerWebsitesTotal = 0;
var tylerWebsitesResolvedLength = 0;
var tylerBlankTotal = 0;
var tylerBlankResolvedLength = 0;
var tylerTotal = 0;


$(document).ready(function () {
    $("#fromDateBackButton").click(function () {
        $("#jakeFromInfo").show();
        $("#tylerFromInfo").show();
        $("#adamFromInfo").show();
        $("#bryanFromInfo").show();
        $("#tylerFromInfo").show();
        $("#fromDateBackButton").hide();
    });
    $("#tylerFromDateLabel").click(function () {
        $("#jakeFromInfo").hide();
        $("#brendaFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#tylerFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#tylerFromList").click(function () {
        $("#jakeFromInfo").hide();
        $("#brendaFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#tylerFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#numbersFromDate").click(function () {
        var theDate = $("#dateValue").val();
        $("#forDateList").hide();
        $("#jumpBackForDate").hide();
        $("#fromDateMainWindow").hide();
        $("#fromDateRightWindow").hide();

        $("#tylerFromDateLabel").empty();
        $("#fromDateRightWindow").hide();
        $("#forDateRightWindow").hide();
        $("#firstWindowResults").hide();
        $("#forDateLeftWindow").hide();
        $("#forDateMainWindow").hide();
        $("#fromDateLeftWindow").show();
        $("#fromDateMainWindow").show();
        $("#firstWindow").hide();
        $("#errorsDiv").empty();
        $("#tylerFromDateTable").hide();
        $("#tylerAvFromDateTable").hide();
        $("#tylerCitrixFromDateTable").hide();
        $("#tylerOtherFromDateTable").hide();
        $("#tylerPasswordsFromDateTable").hide();
        $("#tylerImageFromDateTable").hide();
        $("#tylerNetworkingFromDateTable").hide();
        $("#tylerNewUserFromDateTable").hide();
        $("#tylerPcFromDateTable").hide();
        $("#tylerPrinterFromDateTable").hide();
        $("#tylerProfileFromDateTable").hide();
        $("#tylerWebsitesFromDateTable").hide();
        $("#tylerBlankFromDateTable").hide();
        $("#fromDateRightWindow").empty();
        $("#tylerFromTableResults").html("<tr></tr>");
        $("#tylerAvFromTableResults").html("<tr></tr>");
        $("#tylerCitrixFromTableResults").html("<tr></tr>");
        $("#tylerOtherFromTableResults").html("<tr></tr>");
        $("#tylerPasswordsFromTableResults").html("<tr></tr>");
        $("#tylerImageFromTableResults").html("<tr></tr>");
        $("#tylerNetworkingFromTableResults").html("<tr></tr>");
        $("#tylerNewUserFromTableResults").html("<tr></tr>");
        $("#tylerPcFromTableResults").html("<tr></tr>");
        $("#tylerPrinterFromTableResults").html("<tr></tr>");
        $("#tylerProfileFromTableResults").html("<tr></tr>");
        $("#tylerWebsitesFromTableResults").html("<tr></tr>");
        $("#tylerBlankFromTableResults").html("<tr></tr>");

        $("#tylerFromDate").css('color', 'black').empty();
        $("#tylerAvFromDate").css('color', 'black').empty();
        $("#tylerCitrixFromDate").css('color', 'black').empty();
        $("#tylerOtherFromDate").css('color', 'black').empty();
        $("#tylerPasswordsFromDate").css('color', 'black').empty();
        $("#tylerImageFromDate").css('color', 'black').empty();
        $("#tylerNetworkingFromDate").css('color', 'black').empty();
        $("#tylerNewUserFromDate").css('color', 'black').empty();
        $("#tylerPcFromDate").css('color', 'black').empty();
        $("#tylerPrinterFromDate").css('color', 'black').empty();
        $("#tylerProfileFromDate").css('color', 'black').empty();
        $("#tylerWebsitesFromDate").css('color', 'black').empty();
        $("#tylerBlankFromDate").css('color', 'black').empty();
        $("#processDiv").html("Thinking...");

        getTylerFrom(theDate);
        getTylerAntivirus(theDate);
        getTylerCitrix(theDate);
        getTylerOther(theDate);
        getTylerPasswords(theDate);
        getTylerImage(theDate);
        getTylerNetworking(theDate);
        getTylerNewUser(theDate);
        getTylerPc(theDate);
        getTylerPrinter(theDate);
        getTylerProfile(theDate);
        getTylerWebsites(theDate);
        getTylerBlank(theDate);
        $("#tylerFromDate").show();
        $("#overViewList").hide();
        $("#helpdeskList").hide();
        $("#devTeamList").hide();
        $("#jumpBackFromDate").show();
    });
    $("#jumpBackFromDate").click(function () {
        //jumpBackfrom();
    });
});

function checkTylerNumbers(data) {
    tylerApplicationResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerApplicationResolvedLength < data.results.length) {
                $("#tylerFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerApplicationResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerApplicationResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerApplicationResolvedLength].id + ")" + ">" + data.results[tylerApplicationResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerApplicationResolvedLength++;
            }
        });
    tylerApplicationTotal = tylerApplicationTotal + data.results.length;
}

function checkTylerAntivirusNumbers(data) {
    tylerAntivirusResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerAntivirusResolvedLength < data.results.length) {
                $("#tylerAvFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerAntivirusResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerAntivirusResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerAntivirusResolvedLength].id + ")" + ">" + data.results[tylerAntivirusResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerAntivirusResolvedLength++;
            }
        });
    tylerAntivirusTotal = tylerAntivirusTotal + data.results.length;
}

function checkTylerCitrixNumbers(data) {
    tylerCitrixResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerCitrixResolvedLength < data.results.length) {
                $("#tylerCitrixFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerCitrixResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerCitrixResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerCitrixResolvedLength].id + ")" + ">" + data.results[tylerCitrixResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerCitrixResolvedLength++;
            }
        });
    tylerCitrixTotal = tylerCitrixTotal + data.results.length;
}

function checkTylerOtherNumbers(data) {
    tylerOtherResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerOtherResolvedLength < data.results.length) {
                $("#tylerOtherFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerOtherResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerOtherResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerOtherResolvedLength].id + ")" + ">" + data.results[tylerOtherResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerOtherResolvedLength++;
            }
        });
    tylerOtherTotal = tylerOtherTotal + data.results.length;
}

function checkTylerPasswordsNumbers(data) {
    tylerPasswordsResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerPasswordsResolvedLength < data.results.length) {
                $("#tylerPasswordsFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerPasswordsResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerPasswordsResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerPasswordsResolvedLength].id + ")" + ">" + data.results[tylerPasswordsResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerPasswordsResolvedLength++;
            }
        });
    tylerPasswordsTotal = tylerPasswordsTotal + data.results.length;
}

function checkTylerImageNumbers(data) {
    tylerImageResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerImageResolvedLength < data.results.length) {
                $("#tylerImageFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerImageResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerImageResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerImageResolvedLength].id + ")" + ">" + data.results[tylerImageResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerImageResolvedLength++;
            }
        });
    tylerImageTotal = tylerImageTotal + data.results.length;
}

function checkTylerNetworkingNumbers(data) {
    tylerNetworkingResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerNetworkingResolvedLength < data.results.length) {
                $("#tylerNetworkingFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerNetworkingResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerNetworkingResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerNetworkingResolvedLength].id + ")" + ">" + data.results[tylerNetworkingResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerNetworkingResolvedLength++;
            }
        });
    tylerNetworkingTotal = tylerNetworkingTotal + data.results.length;
}

function checkTylerNewUserNumbers(data) {
    tylerNewUserResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerNewUserResolvedLength < data.results.length) {
                $("#tylerNewUserFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerNewUserResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerNewUserResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerNewUserResolvedLength].id + ")" + ">" + data.results[tylerNewUserResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerNewUserResolvedLength++;
            }
        });
    tylerNewUserTotal = tylerNewUserTotal + data.results.length;
}

function checkTylerPcNumbers(data) {
    tylerPcResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerPcResolvedLength < data.results.length) {
                $("#tylerPcFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerPcResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerPcResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerPcResolvedLength].id + ")" + ">" + data.results[tylerPcResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerPcResolvedLength++;
            }
        });
    tylerPcTotal = tylerPcTotal + data.results.length;
}

function checkTylerPrinterNumbers(data) {
    tylerPrinterResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerPrinterResolvedLength < data.results.length) {
                $("#tylerPrinterFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerPrinterResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerPrinterResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerPrinterResolvedLength].id + ")" + ">" + data.results[tylerPrinterResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerPrinterResolvedLength++;
            }
        });
    tylerPrinterTotal = tylerPrinterTotal + data.results.length;
}

function checkTylerProfileNumbers(data) {
    tylerProfileResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerProfileResolvedLength < data.results.length) {
                $("#tylerProfileFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerProfileResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerProfileResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerProfileResolvedLength].id + ")" + ">" + data.results[tylerProfileResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerProfileResolvedLength++;
            }
        });
    tylerProfileTotal = tylerProfileTotal + data.results.length;
}

function checkTylerWebsitesNumbers(data) {
    tylerWebsitesResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerWebsitesResolvedLength < data.results.length) {
                $("#tylerWebsitesFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerWebsitesResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerWebsitesResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerWebsitesResolvedLength].id + ")" + ">" + data.results[tylerWebsitesResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerWebsitesResolvedLength++;
            }
        });
    tylerWebsitesTotal = tylerWebsitesTotal + data.results.length;
}

function checkTylerBlankNumbers(data) {
    tylerBlankResolvedLength = 0;
    $.each(data,
        function () {
            while (tylerBlankResolvedLength < data.results.length) {
                $("#tylerBlankFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[tylerBlankResolvedLength].id + " target=" + "_blank" + ">" + data.results[tylerBlankResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showTylerFromInfo(" + data.results[tylerBlankResolvedLength].id + ")" + ">" + data.results[tylerBlankResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                tylerBlankResolvedLength++;
            }
        });
    tylerBlankTotal = tylerBlankTotal + data.results.length;
}

function getTylerFrom(theDate) {
    tylerApplicationTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP2(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP3(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP4(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP5(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP6(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP7(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP8(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP9(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNumbers(data);
                getTylerP10(theDate);
            } else {
                getTylerP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }
                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerNumbers(data);
                $("#tylerFromDate").html('<br><div  onclick=showTylerApps(); style="cursor:pointer">Applications : ' + tylerApplicationTotal + '</div>');
                if (tylerApplicationTotal === 300) {
                    $("#tylerFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                if (tylerApplicationTotal > 0) {
                    tylerTotal = tylerCitrixTotal +
                        tylerOtherTotal +
                        tylerPasswordsTotal +
                        tylerImageTotal +
                        tylerNetworkingTotal +
                        tylerNewUserTotal +
                        tylerPcTotal +
                        tylerPrinterTotal +
                        tylerProfileTotal +
                        tylerWebsitesTotal +
                        tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                    if (tylerTotal > 0) {
                        $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                    }

                    $("#tylerFromDate").html('<br><div  onclick=showTylerApps(); style="cursor:pointer">Applications : ' + tylerApplicationTotal + '</div>');
                }
                if (tylerApplicationTotal === 300) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                }
            }
            $("#processDiv").empty();
            //getTylerAntivirus(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerAntivirus(theDate) {
    tylerAntivirusTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP2(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' +
            "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP3(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP4(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP5(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP6(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP7(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP8(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP9(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerAntivirusNumbers(data);
                getTylerAvP10(theDate);
            } else {
                getTylerAvP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerAvP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }
                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerAntivirusNumbers(data);
                if (tylerAntivirusTotal === 300) {
                    $("#tylerAvFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    if (tylerAntivirusTotal > 0) {
                        $("#tylerAvFromDate").append('<div onclick=showTylerAv(); style="cursor:pointer">Antivirus : ' + tylerAntivirusTotal + '</div>').show();
                    }
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }
                if (tylerAntivirusTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerAvFromDate").append('<div onclick=showTylerAv(); style="cursor:pointer">Antivirus : ' + tylerAntivirusTotal + '</div>').show();
                }
            }
            //getTylerCitrix(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerCitrix(theDate) {
    tylerCitrixTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP2(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP3(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP4(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP5(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP6(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP7(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP8(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP9(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerCitrixNumbers(data);
                getTylerCitrixP10(theDate);
            } else {
                getTylerCitrixP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerCitrixP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerCitrixNumbers(data);
                if (tylerCitrixTotal === 300) {
                    $("#tylerCitrixFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerCitrixFromDate").append('<div onclick=showTylerCitrix(); style="cursor:pointer">Citrix : ' + tylerCitrixTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerCitrixTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerCitrixFromDate").append('<div onclick=showTylerCitrix(); style="cursor:pointer">Citrix : ' + tylerCitrixTotal + '</div>');
                }
            }
            //getTylerOther(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerOther(theDate) {
    tylerOtherTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP2(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP3(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP4(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP5(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP6(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP7(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP8(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP9(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerOtherNumbers(data);
                getTylerOtherP10(theDate);
            } else {
                getTylerOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerOtherP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;

                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerOtherNumbers(data);
                if (tylerOtherTotal === 300) {
                    $("#tylerOtherFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerOtherFromDate").append('<div onclick=showTylerOther(); style="cursor:pointer">Other : ' + tylerOtherTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerOtherTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerOtherFromDate").append('<div onclick=showTylerOther(); style="cursor:pointer">Other : ' + tylerOtherTotal + '</div>');
                }
            }
            //getTylerPasswords(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerPasswords(theDate) {
    tylerPasswordsTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP2(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP3(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP4(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP5(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP6(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP7(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP8(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP9(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPasswordsNumbers(data);
                getTylerPasswordsP10(theDate);
            } else {
                getTylerPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPasswordsP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerPasswordsNumbers(data);
                if (tylerPasswordsTotal === 300) {
                    $("#tylerPasswordsFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    tylerTotal = tylerCitrixTotal +
                        tylerOtherTotal +
                        tylerPasswordsTotal +
                        tylerImageTotal +
                        tylerNetworkingTotal +
                        tylerNewUserTotal +
                        tylerPcTotal +
                        tylerPrinterTotal +
                        tylerProfileTotal +
                        tylerWebsitesTotal +
                        tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                    if (tylerTotal > 0) {
                        $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                    }

                    $("#tylerPasswordsFromDate").append('<div onclick=showTylerPasswords(); style="cursor:pointer">Passwords : ' + tylerPasswordsTotal + '</div>');
                }
            } else {
                if (tylerPasswordsTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerPasswordsFromDate").append('<div onclick=showTylerPasswords(); style="cursor:pointer">Passwords : ' + tylerPasswordsTotal + '</div>');
                }
            }
            //getTylerImage(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerImage(theDate) {
    tylerImageTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP2(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP3(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP4(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP5(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP6(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP7(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP8(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP9(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerImageNumbers(data);
                getTylerImageP10(theDate);
            } else {
                getTylerImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerImageP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');

                checkTylerImageNumbers(data);
                if (tylerImageTotal === 300) {
                    $("#tylerImageFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerImageFromDate").append('<div onclick=showTylerImage(); style="cursor:pointer">Image : ' + tylerImageTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerImageTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerImageFromDate").append('<div onclick=showTylerImage(); style="cursor:pointer">Image : ' + tylerImageTotal + '</div>');
                }
            }
            //getTylerNetworking(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerNetworking(theDate) {
    tylerNetworkingTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP2(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP3(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP4(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP5(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP6(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP7(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP8(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP9(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNetworkingNumbers(data);
                getTylerNetworkingP10(theDate);
            } else {
                getTylerNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNetworkingP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerNetworkingNumbers(data);
                if (tylerNetworkingTotal === 300) {
                    $("#tylerNetworkingFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerNetworkingFromDate").append('<div onclick=showTylerNetworking(); style="cursor:pointer">Networking : ' + tylerNetworkingTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerNetworkingTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerNetworkingFromDate").append('<div onclick=showTylerNetworking(); style="cursor:pointer">Networking : ' + tylerNetworkingTotal + '</div>');
                }
            }
            //getTylerNewUser(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerNewUser(theDate) {
    tylerNewUserTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP2(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP3(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP4(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP5(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP6(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP7(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP8(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP9(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerNewUserNumbers(data);
                getTylerNewUserP10(theDate);
            } else {
                getTylerNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerNewUserP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerNewUserNumbers(data);
                if (tylerNewUserTotal === 300) {
                    $("#tylerNewUserFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerNewUserFromDate").append('<div onclick=showTylerNewUser(); style="cursor:pointer">New User : ' + tylerNewUserTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerNewUserTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerNewUserFromDate").append('<div onclick=showTylerNewUser(); style="cursor:pointer">New User : ' + tylerNewUserTotal + '</div>');
                }
            }
            //getTylerPc(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerPc(theDate) {
    tylerPcTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP2(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP3(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP4(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP5(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP6(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP7(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP8(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP9(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPcNumbers(data);
                getTylerPcP10(theDate);
            } else {
                getTylerPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPcP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerPcNumbers(data);
                if (tylerPcTotal === 300) {
                    $("#tylerPcFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerPcFromDate").append('<div onclick=showTylerPc(); style="cursor:pointer">PC/Phone/Tablet : ' + tylerPcTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerPcTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerPcFromDate").append('<div onclick=showTylerPc(); style="cursor:pointer">PC/Phone/Tablet : ' + tylerPcTotal + '</div>');
                }
            }
            //getTylerPrinter(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerPrinter(theDate) {
    tylerPrinterTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP2(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP3(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP4(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP5(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP6(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP7(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP8(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP9(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerPrinterNumbers(data);
                getTylerPrinterP10(theDate);
            } else {
                getTylerPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerPrinterP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerPrinterNumbers(data);
                if (tylerPrinterTotal === 300) {
                    $("#tylerPrinterFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerPrinterFromDate").append('<div onclick=showTylerPrinter(); style="cursor:pointer">Printer/Scanner : ' + tylerPrinterTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerPrinterTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerPrinterFromDate").append('<div onclick=showTylerPrinter(); style="cursor:pointer">Printer/Scanner : ' + tylerPrinterTotal + '</div>');
                }
            }
            //getTylerProfile(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerProfile(theDate) {
    tylerProfileTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP2(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP3(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP4(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP5(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP6(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP7(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP8(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP9(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerProfileNumbers(data);
                getTylerProfileP10(theDate);
            } else {
                getTylerProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerProfileP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerProfileNumbers(data);
                if (tylerProfileTotal === 300) {
                    $("#tylerProfileFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerProfileFromDate").append('<div onclick=showTylerProfile(); style="cursor:pointer">Profile : ' + tylerProfileTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerProfileTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerProfileFromDate").append('<div onclick=showTylerProfile(); style="cursor:pointer">Profile : ' + tylerProfileTotal + '</div>');
                }
            }
            //getTylerWebsites(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerWebsites(theDate) {
    tylerWebsitesTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP2(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP3(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP4(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP5(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP6(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP7(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP8(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP9(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerWebsitesNumbers(data);
                getTylerWebsitesP10(theDate);
            } else {
                getTylerWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerWebsitesP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerWebsitesNumbers(data);
                if (tylerWebsitesTotal === 300) {
                    $("#tylerWebsitesFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#tylerWebsitesFromDate").append('<div onclick=showTylerWebsites(); style="cursor:pointer">Websites : ' + tylerWebsitesTotal + '</div>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerWebsitesTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerWebsitesFromDate").append('<div onclick=showTylerWebsites(); style="cursor:pointer">Websites : ' + tylerWebsitesTotal + '</div>');
                }
            }
            //getTylerBlank(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getTylerBlank(theDate) {
    tylerBlankTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP2(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP3(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP4(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP5(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP6(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP7(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP8(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP9(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkTylerBlankNumbers(data);
                getTylerBlankP10(theDate);
            } else {
                getTylerBlankP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getTylerBlankP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            tylerTotal = tylerCitrixTotal +
                tylerOtherTotal +
                tylerPasswordsTotal +
                tylerImageTotal +
                tylerNetworkingTotal +
                tylerNewUserTotal +
                tylerPcTotal +
                tylerPrinterTotal +
                tylerProfileTotal +
                tylerWebsitesTotal +
                tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
            if (tylerTotal > 0) {
                $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
            }

            if (data.results.length !== 0) {
                $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                checkTylerBlankNumbers(data);
                $("#tylerBlankFromDate").html('<div  onclick=showTylerBlank(); style="cursor:pointer">Blank : ' + tylerBlankTotal + '</div>');
                if (tylerBlankTotal === 300) {
                    $("#tylerBlankFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                tylerTotal = tylerCitrixTotal +
                    tylerOtherTotal +
                    tylerPasswordsTotal +
                    tylerImageTotal +
                    tylerNetworkingTotal +
                    tylerNewUserTotal +
                    tylerPcTotal +
                    tylerPrinterTotal +
                    tylerProfileTotal +
                    tylerWebsitesTotal +
                    tylerBlankTotal + tylerApplicationTotal + tylerAntivirusTotal;
                if (tylerTotal > 0) {
                    $("#tylerFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Tyler : ' + tylerTotal + '</a></li>');
                }

                if (tylerBlankTotal > 0) {
                    $("#tylerFromDateLabel").html('<br><div style="font-size:20px">Tyler</div>');
                    $("#tylerBlankFromDate").html('<div  onclick=showTylerBlank(); style="cursor:pointer">Blank : ' + tylerBlankTotal + '</div>');
                }
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}


function showTylerApps() {
    $("#fromDateRightWindow").hide();
    $("#tylerFromDateTable").toggle();
    $("#tylerFromTableResults").show();
}
function showTylerAv() {
    $("#fromDateRightWindow").hide();
    $("#tylerAvFromDateTable").toggle();
    $("#tylerAvFromTableResults").show();
}
function showTylerCitrix() {
    $("#fromDateRightWindow").hide();
    $("#tylerCitrixFromDateTable").toggle();
    $("#tylerCitrixFromTableResults").show();
}
function showTylerOther() {
    $("#fromDateRightWindow").hide();
    $("#tylerOtherFromDateTable").toggle();
    $("#tylerOtherFromTableResults").show();
}
function showTylerPasswords() {
    $("#fromDateRightWindow").hide();
    $("#tylerPasswordsFromDateTable").toggle();
    $("#tylerPasswordsFromTableResults").show();
}
function showTylerImage() {
    $("#fromDateRightWindow").hide();
    $("#tylerImageFromDateTable").toggle();
    $("#tylerImageFromTableResults").show();
}
function showTylerNetworking() {
    $("#fromDateRightWindow").hide();
    $("#tylerNetworkingFromDateTable").toggle();
    $("#tylerNetworkingFromTableResults").show();
}
function showTylerNewUser() {
    $("#fromDateRightWindow").hide();
    $("#tylerNewUserFromDateTable").toggle();
    $("#tylerNewUserFromTableResults").show();
}
function showTylerPc() {
    $("#fromDateRightWindow").hide();
    $("#tylerPcFromDateTable").toggle();
    $("#tylerPcFromTableResults").show();
}
function showTylerPrinter() {
    $("#fromDateRightWindow").hide();
    $("#tylerPrinterFromDateTable").toggle();
    $("#tylerPrinterFromTableResults").show();
}
function showTylerProfile() {
    $("#fromDateRightWindow").hide();
    $("#tylerProfileFromDateTable").toggle();
    $("#tylerProfileFromTableResults").show();
}
function showTylerWebsites() {
    $("#fromDateRightWindow").hide();
    $("#tylerWebsitesFromDateTable").toggle();
    $("#tylerWebsitesFromTableResults").show();
}
function showTylerBlank() {
    $("#fromDateRightWindow").hide();
    $("#tylerBlankFromDateTable").toggle();
    $("#tylerBlankFromTableResults").show();
}


function showTylerFromInfo(id) {
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
                data.responder_id !== 19001766755 &&
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