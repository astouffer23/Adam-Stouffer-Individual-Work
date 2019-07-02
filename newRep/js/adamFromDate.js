var adamCounterFrom = 0;
var adamCounterFrom = 0;
var adamCounterFrom = 0;
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
var adamApplicationResolvedLength = 0;
var adamApplicationTotal = 0;
var adamAntivirusResolvedLength = 0;
var adamAntivirusTotal = 0;
var adamCitrixTotal = 0;
var adamCitrixResolvedLength = 0;
var adamOtherTotal = 0;
var adamOtherResolvedLength = 0;
var adamPasswordsTotal = 0;
var adamPasswordsResolvedLength = 0;
var adamImageTotal = 0;
var adamImageResolvedLength = 0;
var adamNetworkingTotal = 0;
var adamNetworkingResolvedLength = 0;
var adamNewUserTotal = 0;
var adamNewUserResolvedLength = 0;
var adamPcTotal = 0;
var adamPcResolvedLength = 0;
var adamPrinterTotal = 0;
var adamPrinterResolvedLength = 0;
var adamProfileTotal = 0;
var adamProfileResolvedLength = 0;
var adamWebsitesTotal = 0;
var adamWebsitesResolvedLength = 0;
var adamBlankTotal = 0;
var adamBlankResolvedLength = 0;
var adamTotal = 0;


$(document).ready(function () {
    $("#adamFromList").click(function () {
        $("#tylerFromInfo").hide();
        $("#jakeFromInfo").hide();
        $("#brendaFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#adamFromInfo").show();
        $("#fromDateBackButton").show();
    });


    $("#adamFromDateLabel").click(function () {
        $("#brendaFromInfo").hide();
        $("#tylerFromInfo").hide();
        $("#jakeFromInfo").hide();
        $("#bryanFromInfo").hide();
        $("#adamFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#numbersFromDate").click(function () {
        var theDate = $("#dateValue").val();
        $("#adamFromDateLabel").empty();
        $("#fromDateRightWindow").hide();
        $("#forDateRightWindow").hide();
        $("#firstWindowResults").hide();
        $("#forDateLeftWindow").hide();
        $("#forDateMainWindow").hide();
        $("#fromDateLeftWindow").show();
        $("#fromDateMainWindow").show();
        $("#firstWindow").hide();
        $("#errorsDiv").empty();
        $("#adamFromDateTable").hide();
        $("#adamAvFromDateTable").hide();
        $("#adamCitrixFromDateTable").hide();
        $("#adamOtherFromDateTable").hide();
        $("#adamPasswordsFromDateTable").hide();
        $("#adamImageFromDateTable").hide();
        $("#adamNetworkingFromDateTable").hide();
        $("#adamNewUserFromDateTable").hide();
        $("#adamPcFromDateTable").hide();
        $("#adamPrinterFromDateTable").hide();
        $("#adamProfileFromDateTable").hide();
        $("#adamWebsitesFromDateTable").hide();
        $("#adamBlankFromDateTable").hide();
        $("#fromDateRightWindow").empty();
        $("#adamFromTableResults").html("<tr></tr>");
        $("#adamAvFromTableResults").html("<tr></tr>");
        $("#adamCitrixFromTableResults").html("<tr></tr>");
        $("#adamOtherFromTableResults").html("<tr></tr>");
        $("#adamPasswordsFromTableResults").html("<tr></tr>");
        $("#adamImageFromTableResults").html("<tr></tr>");
        $("#adamNetworkingFromTableResults").html("<tr></tr>");
        $("#adamNewUserFromTableResults").html("<tr></tr>");
        $("#adamPcFromTableResults").html("<tr></tr>");
        $("#adamPrinterFromTableResults").html("<tr></tr>");
        $("#adamProfileFromTableResults").html("<tr></tr>");
        $("#adamWebsitesFromTableResults").html("<tr></tr>");
        $("#adamBlankFromTableResults").html("<tr></tr>");

        $("#adamFromDate").css('color', 'black').empty();
        $("#adamAvFromDate").css('color', 'black').empty();
        $("#adamCitrixFromDate").css('color', 'black').empty();
        $("#adamOtherFromDate").css('color', 'black').empty();
        $("#adamPasswordsFromDate").css('color', 'black').empty();
        $("#adamImageFromDate").css('color', 'black').empty();
        $("#adamNetworkingFromDate").css('color', 'black').empty();
        $("#adamNewUserFromDate").css('color', 'black').empty();
        $("#adamPcFromDate").css('color', 'black').empty();
        $("#adamPrinterFromDate").css('color', 'black').empty();
        $("#adamProfileFromDate").css('color', 'black').empty();
        $("#adamWebsitesFromDate").css('color', 'black').empty();
        $("#adamBlankFromDate").css('color', 'black').empty();


        getAdamFrom(theDate);
        $("#adamFromDate").show();
        //getAdamAntivirus(theDate);
        //getAdamCitrix(theDate);
        //getAdamOther(theDate);
        //getAdamPasswords(theDate);
        //getAdamImage(theDate);
        //getAdamNetworking(theDate);
        //getAdamNewUser(theDate);
        //getAdamPc(theDate);
        //getAdamPrinter(theDate);
        //getAdamProfile(theDate);
        //getAdamWebsites(theDate);
        //getAdamBlank(theDate);
    });
    $("#jumpBackFromDate").click(function () {
        //jumpBackfrom();
    });
});

function checkAdamNumbers(data) {
    adamApplicationResolvedLength = 0;
    $.each(data,
        function () {
            while (adamApplicationResolvedLength < data.results.length) {
                $("#adamFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamApplicationResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamApplicationResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamApplicationResolvedLength].id + ")" + ">" + data.results[adamApplicationResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                adamApplicationResolvedLength++;
            }
        });
    adamApplicationTotal = adamApplicationTotal + data.results.length;
}

//function checkAdamAntivirusNumbers(data) {
//    adamAntivirusResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamAntivirusResolvedLength < data.results.length) {
//                $("#adamAvFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamAntivirusResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamAntivirusResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamAntivirusResolvedLength].id + ")" + ">" + data.results[adamAntivirusResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamAntivirusResolvedLength++;
//            }
//        });
//    adamAntivirusTotal = adamAntivirusTotal + data.results.length;
//}

//function checkAdamCitrixNumbers(data) {
//    adamCitrixResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamCitrixResolvedLength < data.results.length) {
//                $("#adamCitrixFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamCitrixResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamCitrixResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamCitrixResolvedLength].id + ")" + ">" + data.results[adamCitrixResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamCitrixResolvedLength++;
//            }
//        });
//    adamCitrixTotal = adamCitrixTotal + data.results.length;
//}

//function checkAdamOtherNumbers(data) {
//    adamOtherResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamOtherResolvedLength < data.results.length) {
//                $("#adamOtherFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamOtherResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamOtherResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamOtherResolvedLength].id + ")" + ">" + data.results[adamOtherResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamOtherResolvedLength++;
//            }
//        });
//    adamOtherTotal = adamOtherTotal + data.results.length;
//}

//function checkAdamPasswordsNumbers(data) {
//    adamPasswordsResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamPasswordsResolvedLength < data.results.length) {
//                $("#adamPasswordsFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamPasswordsResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamPasswordsResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamPasswordsResolvedLength].id + ")" + ">" + data.results[adamPasswordsResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamPasswordsResolvedLength++;
//            }
//        });
//    adamPasswordsTotal = adamPasswordsTotal + data.results.length;
//}

//function checkAdamImageNumbers(data) {
//    adamImageResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamImageResolvedLength < data.results.length) {
//                $("#adamImageFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamImageResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamImageResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamImageResolvedLength].id + ")" + ">" + data.results[adamImageResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamImageResolvedLength++;
//            }
//        });
//    adamImageTotal = adamImageTotal + data.results.length;
//}

//function checkAdamNetworkingNumbers(data) {
//    adamNetworkingResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamNetworkingResolvedLength < data.results.length) {
//                $("#adamNetworkingFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamNetworkingResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamNetworkingResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamNetworkingResolvedLength].id + ")" + ">" + data.results[adamNetworkingResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamNetworkingResolvedLength++;
//            }
//        });
//    adamNetworkingTotal = adamNetworkingTotal + data.results.length;
//}

//function checkAdamNewUserNumbers(data) {
//    adamNewUserResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamNewUserResolvedLength < data.results.length) {
//                $("#adamNewUserFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamNewUserResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamNewUserResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamNewUserResolvedLength].id + ")" + ">" + data.results[adamNewUserResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamNewUserResolvedLength++;
//            }
//        });
//    adamNewUserTotal = adamNewUserTotal + data.results.length;
//}

//function checkAdamPcNumbers(data) {
//    adamPcResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamPcResolvedLength < data.results.length) {
//                $("#adamPcFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamPcResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamPcResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamPcResolvedLength].id + ")" + ">" + data.results[adamPcResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamPcResolvedLength++;
//            }
//        });
//    adamPcTotal = adamPcTotal + data.results.length;
//}

//function checkAdamPrinterNumbers(data) {
//    adamPrinterResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamPrinterResolvedLength < data.results.length) {
//                $("#adamPrinterFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamPrinterResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamPrinterResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamPrinterResolvedLength].id + ")" + ">" + data.results[adamPrinterResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamPrinterResolvedLength++;
//            }
//        });
//    adamPrinterTotal = adamPrinterTotal + data.results.length;
//}

//function checkAdamProfileNumbers(data) {
//    adamProfileResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamProfileResolvedLength < data.results.length) {
//                $("#adamProfileFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamProfileResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamProfileResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamProfileResolvedLength].id + ")" + ">" + data.results[adamProfileResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamProfileResolvedLength++;
//            }
//        });
//    adamProfileTotal = adamProfileTotal + data.results.length;
//}

//function checkAdamWebsitesNumbers(data) {
//    adamWebsitesResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamWebsitesResolvedLength < data.results.length) {
//                $("#adamWebsitesFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamWebsitesResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamWebsitesResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamWebsitesResolvedLength].id + ")" + ">" + data.results[adamWebsitesResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamWebsitesResolvedLength++;
//            }
//        });
//    adamWebsitesTotal = adamWebsitesTotal + data.results.length;
//}

//function checkAdamBlankNumbers(data) {
//    adamBlankResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (adamBlankResolvedLength < data.results.length) {
//                $("#adamBlankFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[adamBlankResolvedLength].id + " target=" + "_blank" + ">" + data.results[adamBlankResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showAdamFromInfo(" + data.results[adamBlankResolvedLength].id + ")" + ">" + data.results[adamBlankResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                adamBlankResolvedLength++;
//            }
//        });
//    adamBlankTotal = adamBlankTotal + data.results.length;
//}

function getAdamFrom(theDate) {
    adamApplicationTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP2(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP3(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP4(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP5(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP6(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP7(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP8(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP9(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkAdamNumbers(data);
                getAdamP10(theDate);
            } else {
                getAdamP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getAdamP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $("#adamFromDateLabel").html('<br><div style="font-size:20px">Adam</div>');
                checkAdamNumbers(data);
                $("#adamFromDate").html('<br><div  onclick=showAdamApps(); style="cursor:pointer">Total Resolved : ' + adamApplicationTotal + '</div>');
                if (adamApplicationTotal === 300) {
                    $("#adamFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#adamFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Adam : ' + adamApplicationTotal + '</a></li>');
                    $("#jumpBackFromDate").show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                if (adamApplicationTotal > 0) {
                    $("#adamFromDateLabel").html('<br><div style="font-size:20px">Adam</div>');
                    $("#adamFromDate").html('<br><div  onclick=showAdamApps(); style="cursor:pointer">Total Resolved : ' + adamApplicationTotal + '</div>');
                    $("#adamFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Adam : ' + adamApplicationTotal + '</a></li>');
                    $("#jumpBackFromDate").show();
                }
                if (adamApplicationTotal === 300) {
                    $("#adamFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                }
            }
            //getAdamAntivirus(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

//function getAdamAntivirus(theDate) {
//    adamAntivirusTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP2(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP3(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP4(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP5(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP6(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP7(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP8(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP9(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                getAdamAvP10(theDate);
//            } else {
//                getAdamAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamAvP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamAntivirusNumbers(data);
//                if (adamAntivirusTotal === 300) {
//                    $("#adamAvFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    if (adamAntivirusTotal > 0) {
//                        $("#adamAvFromDate").append('<div onclick=showAdamAv(); style="cursor:pointer">Antivirus : ' + adamAntivirusTotal + '</div>').show();
//                    }
//                }
//            } else {
//                if (adamAntivirusTotal > 0) {
//                    $("#adamAvFromDate").append('<div onclick=showAdamAv(); style="cursor:pointer">Antivirus : ' + adamAntivirusTotal + '</div>').show();
//                }
//            }
//            //getAdamCitrix(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamCitrix(theDate) {
//    adamCitrixTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP2(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP3(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP4(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP5(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP6(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP7(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP8(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP9(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                getAdamCitrixP10(theDate);
//            } else {
//                getAdamCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamCitrixP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamCitrixNumbers(data);
//                if (adamCitrixTotal === 300) {
//                    $("#adamCitrixFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamCitrixFromDate").append('<div onclick=showAdamCitrix(); style="cursor:pointer">Citrix : ' + adamCitrixTotal + '</div>');
//                }
//            } else {
//                if (adamCitrixTotal > 0) {
//                    $("#adamCitrixFromDate").append('<div onclick=showAdamCitrix(); style="cursor:pointer">Citrix : ' + adamCitrixTotal + '</div>');
//                }
//            }
//            //getAdamOther(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamOther(theDate) {
//    adamOtherTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP2(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP3(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP4(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP5(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP6(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP7(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP8(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP9(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                getAdamOtherP10(theDate);
//            } else {
//                getAdamOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamOtherP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamOtherNumbers(data);
//                if (adamOtherTotal === 300) {
//                    $("#adamOtherFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamOtherFromDate").append('<div onclick=showAdamOther(); style="cursor:pointer">Other : ' + adamOtherTotal + '</div>');
//                }
//            } else {
//                if (adamOtherTotal > 0) {
//                    $("#adamOtherFromDate").append('<div onclick=showAdamOther(); style="cursor:pointer">Other : ' + adamOtherTotal + '</div>');
//                }
//            }
//            //getAdamPasswords(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamPasswords(theDate) {
//    adamPasswordsTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP2(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP3(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP4(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP5(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP6(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP7(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP8(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP9(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                getAdamPasswordsP10(theDate);
//            } else {
//                getAdamPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPasswordsP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPasswordsNumbers(data);
//                if (adamPasswordsTotal === 300) {
//                    $("#adamPasswordsFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamPasswordsFromDate").append('<div onclick=showAdamPasswords(); style="cursor:pointer">Passwords : ' + adamPasswordsTotal + '</div>');
//                }
//            } else {
//                if (adamPasswordsTotal > 0) {
//                    $("#adamPasswordsFromDate").append('<div onclick=showAdamPasswords(); style="cursor:pointer">Passwords : ' + adamPasswordsTotal + '</div>');
//                }
//            }
//            //getAdamImage(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamImage(theDate) {
//    adamImageTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP2(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP3(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP4(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP5(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP6(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP7(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP8(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP9(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                getAdamImageP10(theDate);
//            } else {
//                getAdamImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamImageP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamImageNumbers(data);
//                if (adamImageTotal === 300) {
//                    $("#adamImageFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamImageFromDate").append('<div onclick=showAdamImage(); style="cursor:pointer">Image : ' + adamImageTotal + '</div>');
//                }
//            } else {
//                if (adamImageTotal > 0) {
//                    $("#adamImageFromDate").append('<div onclick=showAdamImage(); style="cursor:pointer">Image : ' + adamImageTotal + '</div>');
//                }
//            }
//            //getAdamNetworking(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamNetworking(theDate) {
//    adamNetworkingTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP2(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP3(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP4(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP5(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP6(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP7(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP8(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP9(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                getAdamNetworkingP10(theDate);
//            } else {
//                getAdamNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNetworkingP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNetworkingNumbers(data);
//                if (adamNetworkingTotal === 300) {
//                    $("#adamNetworkingFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamNetworkingFromDate").append('<div onclick=showAdamNetworking(); style="cursor:pointer">Networking : ' + adamNetworkingTotal + '</div>');
//                }
//            } else {
//                if (adamNetworkingTotal > 0) {
//                    $("#adamNetworkingFromDate").append('<div onclick=showAdamNetworking(); style="cursor:pointer">Networking : ' + adamNetworkingTotal + '</div>');
//                }
//            }
//            //getAdamNewUser(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamNewUser(theDate) {
//    adamNewUserTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP2(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP3(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP4(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP5(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP6(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP7(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP8(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP9(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                getAdamNewUserP10(theDate);
//            } else {
//                getAdamNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamNewUserP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamNewUserNumbers(data);
//                if (adamNewUserTotal === 300) {
//                    $("#adamNewUserFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamNewUserFromDate").append('<div onclick=showAdamNewUser(); style="cursor:pointer">New User : ' + adamNewUserTotal + '</div>');
//                }
//            } else {
//                if (adamNewUserTotal > 0) {
//                    $("#adamNewUserFromDate").append('<div onclick=showAdamNewUser(); style="cursor:pointer">New User : ' + adamNewUserTotal + '</div>');
//                }
//            }
//            //getAdamPc(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamPc(theDate) {
//    adamPcTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP2(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP3(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP4(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP5(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP6(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP7(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP8(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP9(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                getAdamPcP10(theDate);
//            } else {
//                getAdamPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPcP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPcNumbers(data);
//                if (adamPcTotal === 300) {
//                    $("#adamPcFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamPcFromDate").append('<div onclick=showAdamPc(); style="cursor:pointer">PC/Phone/Tablet : ' + adamPcTotal + '</div>');
//                }
//            } else {
//                if (adamPcTotal > 0) {
//                    $("#adamPcFromDate").append('<div onclick=showAdamPc(); style="cursor:pointer">PC/Phone/Tablet : ' + adamPcTotal + '</div>');
//                }
//            }
//            //getAdamPrinter(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamPrinter(theDate) {
//    adamPrinterTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP2(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP3(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP4(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP5(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP6(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP7(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP8(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP9(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                getAdamPrinterP10(theDate);
//            } else {
//                getAdamPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamPrinterP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamPrinterNumbers(data);
//                if (adamPrinterTotal === 300) {
//                    $("#adamPrinterFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamPrinterFromDate").append('<div onclick=showAdamPrinter(); style="cursor:pointer">Printer/Scanner : ' + adamPrinterTotal + '</div>');
//                }
//            } else {
//                if (adamPrinterTotal > 0) {
//                    $("#adamPrinterFromDate").append('<div onclick=showAdamPrinter(); style="cursor:pointer">Printer/Scanner : ' + adamPrinterTotal + '</div>');
//                }
//            }
//            //getAdamProfile(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamProfile(theDate) {
//    adamProfileTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP2(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP3(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP4(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP5(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP6(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP7(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP8(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP9(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                getAdamProfileP10(theDate);
//            } else {
//                getAdamProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamProfileP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamProfileNumbers(data);
//                if (adamProfileTotal === 300) {
//                    $("#adamProfileFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamProfileFromDate").append('<div onclick=showAdamProfile(); style="cursor:pointer">Profile : ' + adamProfileTotal + '</div>');
//                }
//            } else {
//                if (adamProfileTotal > 0) {
//                    $("#adamProfileFromDate").append('<div onclick=showAdamProfile(); style="cursor:pointer">Profile : ' + adamProfileTotal + '</div>');
//                }
//            }
//            //getAdamWebsites(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamWebsites(theDate) {
//    adamWebsitesTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP2(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP3(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP4(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP5(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP6(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP7(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP8(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP9(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                getAdamWebsitesP10(theDate);
//            } else {
//                getAdamWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamWebsitesP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamWebsitesNumbers(data);
//                if (adamWebsitesTotal === 300) {
//                    $("#adamWebsitesFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#adamWebsitesFromDate").append('<div onclick=showAdamWebsites(); style="cursor:pointer">Websites : ' + adamWebsitesTotal + '</div>');
//                }
//            } else {
//                if (adamWebsitesTotal > 0) {
//                    $("#adamWebsitesFromDate").append('<div onclick=showAdamWebsites(); style="cursor:pointer">Websites : ' + adamWebsitesTotal + '</div>');
//                }
//            }
//            //getAdamBlank(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getAdamBlank(theDate) {
//    adamBlankTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP2(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP3(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP4(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP5(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP6(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP7(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP8(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP9(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                getAdamBlankP10(theDate);
//            } else {
//                getAdamBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getAdamBlankP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000195685\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkAdamBlankNumbers(data);
//                $("#adamBlankFromDate").html('<div  onclick=showAdamBlank(); style="cursor:pointer">Blank : ' + adamBlankTotal + '</div>');
//                if (adamBlankTotal === 300) {
//                    $("#adamBlankFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                }
//            } else {
//                if (adamBlankTotal > 0) {
//                    $("#adamBlankFromDate").html('<div  onclick=showAdamBlank(); style="cursor:pointer">Blank : ' + adamBlankTotal + '</div>');
//                }
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}


function showAdamApps() {
    $("#fromDateRightWindow").hide();
    $("#adamFromDateTable").toggle();
    $("#adamFromTableResults").show();
}
//function showAdamAv() {
//    $("#fromDateRightWindow").hide();
//    $("#adamAvFromDateTable").toggle();
//    $("#adamAvFromTableResults").show();
//}
//function showAdamCitrix() {
//    $("#fromDateRightWindow").hide();
//    $("#adamCitrixFromDateTable").toggle();
//    $("#adamCitrixFromTableResults").show();
//}
//function showAdamOther() {
//    $("#fromDateRightWindow").hide();
//    $("#adamOtherFromDateTable").toggle();
//    $("#adamOtherFromTableResults").show();
//}
//function showAdamPasswords() {
//    $("#fromDateRightWindow").hide();
//    $("#adamPasswordsFromDateTable").toggle();
//    $("#adamPasswordsFromTableResults").show();
//}
//function showAdamImage() {
//    $("#fromDateRightWindow").hide();
//    $("#adamImageFromDateTable").toggle();
//    $("#adamImageFromTableResults").show();
//}
//function showAdamNetworking() {
//    $("#fromDateRightWindow").hide();
//    $("#adamNetworkingFromDateTable").toggle();
//    $("#adamNetworkingFromTableResults").show();
//}
//function showAdamNewUser() {
//    $("#fromDateRightWindow").hide();
//    $("#adamNewUserFromDateTable").toggle();
//    $("#adamNewUserFromTableResults").show();
//}
//function showAdamPc() {
//    $("#fromDateRightWindow").hide();
//    $("#adamPcFromDateTable").toggle();
//    $("#adamPcFromTableResults").show();
//}
//function showAdamPrinter() {
//    $("#fromDateRightWindow").hide();
//    $("#adamPrinterFromDateTable").toggle();
//    $("#adamPrinterFromTableResults").show();
//}
//function showAdamProfile() {
//    $("#fromDateRightWindow").hide();
//    $("#adamProfileFromDateTable").toggle();
//    $("#adamProfileFromTableResults").show();
//}
//function showAdamWebsites() {
//    $("#fromDateRightWindow").hide();
//    $("#adamWebsitesFromDateTable").toggle();
//    $("#adamWebsitesFromTableResults").show();
//}
//function showAdamBlank() {
//    $("#fromDateRightWindow").hide();
//    $("#adamBlankFromDateTable").toggle();
//    $("#adamBlankFromTableResults").show();
//}


function showAdamFromInfo(id) {
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
            if (data.responder_id !== 19000195685 &&
                data.responder_id !== 19000195685 &&
                data.responder_id !== 19000195685 &&
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