var bryanCounterFrom = 0;
var bryanCounterFrom = 0;
var bryanCounterFrom = 0;
var bryanCounterFrom = 0;
var bryanCounterFrom = 0;
var resultCounterFrom = 0;
var devResultCounterFrom = 0;
var totalCounterFrom = 0;
var pageCounterFrom = 1;
var resultLength = 0;
var devResultLength = 0;
var hdUnassignedCounterFrom = 0;
var devUnassignedCounterFrom = 0;
var bryanApplicationResolvedLength = 0;
var bryanApplicationTotal = 0;
var bryanAntivirusResolvedLength = 0;
var bryanAntivirusTotal = 0;
var bryanCitrixTotal = 0;
var bryanCitrixResolvedLength = 0;
var bryanOtherTotal = 0;
var bryanOtherResolvedLength = 0;
var bryanPasswordsTotal = 0;
var bryanPasswordsResolvedLength = 0;
var bryanImageTotal = 0;
var bryanImageResolvedLength = 0;
var bryanNetworkingTotal = 0;
var bryanNetworkingResolvedLength = 0;
var bryanNewUserTotal = 0;
var bryanNewUserResolvedLength = 0;
var bryanPcTotal = 0;
var bryanPcResolvedLength = 0;
var bryanPrinterTotal = 0;
var bryanPrinterResolvedLength = 0;
var bryanProfileTotal = 0;
var bryanProfileResolvedLength = 0;
var bryanWebsitesTotal = 0;
var bryanWebsitesResolvedLength = 0;
var bryanBlankTotal = 0;
var bryanBlankResolvedLength = 0;
var bryanTotal = 0;


$(document).ready(function () {
    $("#bryanFromList").click(function () {
        $("#tylerFromInfo").hide();
        $("#jakeFromInfo").hide();
        $("#brendaFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#bryanFromInfo").show();
        $("#fromDateBackButton").show();
    });


    $("#bryanFromDateLabel").click(function () {
        $("#brendaFromInfo").hide();
        $("#tylerFromInfo").hide();
        $("#adamFromInfo").hide();
        $("#jakeFromInfo").hide();
        $("#bryanFromInfo").show();
        $("#fromDateBackButton").show();
    });
    $("#numbersFromDate").click(function () {
        var theDate = $("#dateValue").val();
        $("#bryanFromDateLabel").empty();
        $("#fromDateRightWindow").hide();
        $("#forDateRightWindow").hide();
        $("#firstWindowResults").hide();
        $("#forDateLeftWindow").hide();
        $("#forDateMainWindow").hide();
        $("#fromDateLeftWindow").show();
        $("#fromDateMainWindow").show();
        $("#firstWindow").hide();
        $("#errorsDiv").empty();
        $("#bryanFromDateTable").hide();
        $("#bryanAvFromDateTable").hide();
        $("#bryanCitrixFromDateTable").hide();
        $("#bryanOtherFromDateTable").hide();
        $("#bryanPasswordsFromDateTable").hide();
        $("#bryanImageFromDateTable").hide();
        $("#bryanNetworkingFromDateTable").hide();
        $("#bryanNewUserFromDateTable").hide();
        $("#bryanPcFromDateTable").hide();
        $("#bryanPrinterFromDateTable").hide();
        $("#bryanProfileFromDateTable").hide();
        $("#bryanWebsitesFromDateTable").hide();
        $("#bryanBlankFromDateTable").hide();
        $("#fromDateRightWindow").empty();
        $("#bryanFromTableResults").html("<tr></tr>");
        $("#bryanAvFromTableResults").html("<tr></tr>");
        $("#bryanCitrixFromTableResults").html("<tr></tr>");
        $("#bryanOtherFromTableResults").html("<tr></tr>");
        $("#bryanPasswordsFromTableResults").html("<tr></tr>");
        $("#bryanImageFromTableResults").html("<tr></tr>");
        $("#bryanNetworkingFromTableResults").html("<tr></tr>");
        $("#bryanNewUserFromTableResults").html("<tr></tr>");
        $("#bryanPcFromTableResults").html("<tr></tr>");
        $("#bryanPrinterFromTableResults").html("<tr></tr>");
        $("#bryanProfileFromTableResults").html("<tr></tr>");
        $("#bryanWebsitesFromTableResults").html("<tr></tr>");
        $("#bryanBlankFromTableResults").html("<tr></tr>");

        $("#bryanFromDate").css('color', 'black').empty();
        $("#bryanAvFromDate").css('color', 'black').empty();
        $("#bryanCitrixFromDate").css('color', 'black').empty();
        $("#bryanOtherFromDate").css('color', 'black').empty();
        $("#bryanPasswordsFromDate").css('color', 'black').empty();
        $("#bryanImageFromDate").css('color', 'black').empty();
        $("#bryanNetworkingFromDate").css('color', 'black').empty();
        $("#bryanNewUserFromDate").css('color', 'black').empty();
        $("#bryanPcFromDate").css('color', 'black').empty();
        $("#bryanPrinterFromDate").css('color', 'black').empty();
        $("#bryanProfileFromDate").css('color', 'black').empty();
        $("#bryanWebsitesFromDate").css('color', 'black').empty();
        $("#bryanBlankFromDate").css('color', 'black').empty();


        getBryanFrom(theDate);
        $("#bryanFromDate").show();
        //getBryanAntivirus(theDate);
        //getBryanCitrix(theDate);
        //getBryanOther(theDate);
        //getBryanPasswords(theDate);
        //getBryanImage(theDate);
        //getBryanNetworking(theDate);
        //getBryanNewUser(theDate);
        //getBryanPc(theDate);
        //getBryanPrinter(theDate);
        //getBryanProfile(theDate);
        //getBryanWebsites(theDate);
        //getBryanBlank(theDate);
    });
    $("#jumpBackFromDate").click(function () {
        //jumpBackfrom();
    });
});

function checkBryanNumbers(data) {
    bryanApplicationResolvedLength = 0;
    $.each(data,
        function () {
            while (bryanApplicationResolvedLength < data.results.length) {
                $("#bryanFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanApplicationResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanApplicationResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanApplicationResolvedLength].id + ")" + ">" + data.results[bryanApplicationResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                bryanApplicationResolvedLength++;
            }
        });
    bryanApplicationTotal = bryanApplicationTotal + data.results.length;
}

//function checkBryanAntivirusNumbers(data) {
//    bryanAntivirusResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanAntivirusResolvedLength < data.results.length) {
//                $("#bryanAvFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanAntivirusResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanAntivirusResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanAntivirusResolvedLength].id + ")" + ">" + data.results[bryanAntivirusResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanAntivirusResolvedLength++;
//            }
//        });
//    bryanAntivirusTotal = bryanAntivirusTotal + data.results.length;
//}

//function checkBryanCitrixNumbers(data) {
//    bryanCitrixResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanCitrixResolvedLength < data.results.length) {
//                $("#bryanCitrixFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanCitrixResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanCitrixResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanCitrixResolvedLength].id + ")" + ">" + data.results[bryanCitrixResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanCitrixResolvedLength++;
//            }
//        });
//    bryanCitrixTotal = bryanCitrixTotal + data.results.length;
//}

//function checkBryanOtherNumbers(data) {
//    bryanOtherResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanOtherResolvedLength < data.results.length) {
//                $("#bryanOtherFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanOtherResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanOtherResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanOtherResolvedLength].id + ")" + ">" + data.results[bryanOtherResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanOtherResolvedLength++;
//            }
//        });
//    bryanOtherTotal = bryanOtherTotal + data.results.length;
//}

//function checkBryanPasswordsNumbers(data) {
//    bryanPasswordsResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanPasswordsResolvedLength < data.results.length) {
//                $("#bryanPasswordsFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanPasswordsResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanPasswordsResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanPasswordsResolvedLength].id + ")" + ">" + data.results[bryanPasswordsResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanPasswordsResolvedLength++;
//            }
//        });
//    bryanPasswordsTotal = bryanPasswordsTotal + data.results.length;
//}

//function checkBryanImageNumbers(data) {
//    bryanImageResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanImageResolvedLength < data.results.length) {
//                $("#bryanImageFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanImageResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanImageResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanImageResolvedLength].id + ")" + ">" + data.results[bryanImageResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanImageResolvedLength++;
//            }
//        });
//    bryanImageTotal = bryanImageTotal + data.results.length;
//}

//function checkBryanNetworkingNumbers(data) {
//    bryanNetworkingResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanNetworkingResolvedLength < data.results.length) {
//                $("#bryanNetworkingFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanNetworkingResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanNetworkingResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanNetworkingResolvedLength].id + ")" + ">" + data.results[bryanNetworkingResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanNetworkingResolvedLength++;
//            }
//        });
//    bryanNetworkingTotal = bryanNetworkingTotal + data.results.length;
//}

//function checkBryanNewUserNumbers(data) {
//    bryanNewUserResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanNewUserResolvedLength < data.results.length) {
//                $("#bryanNewUserFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanNewUserResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanNewUserResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanNewUserResolvedLength].id + ")" + ">" + data.results[bryanNewUserResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanNewUserResolvedLength++;
//            }
//        });
//    bryanNewUserTotal = bryanNewUserTotal + data.results.length;
//}

//function checkBryanPcNumbers(data) {
//    bryanPcResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanPcResolvedLength < data.results.length) {
//                $("#bryanPcFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanPcResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanPcResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanPcResolvedLength].id + ")" + ">" + data.results[bryanPcResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanPcResolvedLength++;
//            }
//        });
//    bryanPcTotal = bryanPcTotal + data.results.length;
//}

//function checkBryanPrinterNumbers(data) {
//    bryanPrinterResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanPrinterResolvedLength < data.results.length) {
//                $("#bryanPrinterFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanPrinterResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanPrinterResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanPrinterResolvedLength].id + ")" + ">" + data.results[bryanPrinterResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanPrinterResolvedLength++;
//            }
//        });
//    bryanPrinterTotal = bryanPrinterTotal + data.results.length;
//}

//function checkBryanProfileNumbers(data) {
//    bryanProfileResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanProfileResolvedLength < data.results.length) {
//                $("#bryanProfileFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanProfileResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanProfileResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanProfileResolvedLength].id + ")" + ">" + data.results[bryanProfileResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanProfileResolvedLength++;
//            }
//        });
//    bryanProfileTotal = bryanProfileTotal + data.results.length;
//}

//function checkBryanWebsitesNumbers(data) {
//    bryanWebsitesResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanWebsitesResolvedLength < data.results.length) {
//                $("#bryanWebsitesFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanWebsitesResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanWebsitesResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanWebsitesResolvedLength].id + ")" + ">" + data.results[bryanWebsitesResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanWebsitesResolvedLength++;
//            }
//        });
//    bryanWebsitesTotal = bryanWebsitesTotal + data.results.length;
//}

//function checkBryanBlankNumbers(data) {
//    bryanBlankResolvedLength = 0;
//    $.each(data,
//        function () {
//            while (bryanBlankResolvedLength < data.results.length) {
//                $("#bryanBlankFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[bryanBlankResolvedLength].id + " target=" + "_blank" + ">" + data.results[bryanBlankResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showBryanFromInfo(" + data.results[bryanBlankResolvedLength].id + ")" + ">" + data.results[bryanBlankResolvedLength].subject + "</td></tr>");
//                $("#fromDateRightWindow").show();
//                bryanBlankResolvedLength++;
//            }
//        });
//    bryanBlankTotal = bryanBlankTotal + data.results.length;
//}

function getBryanFrom(theDate) {
    bryanApplicationTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP2(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP3(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP4(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP5(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP6(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP7(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP8(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP9(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBryanNumbers(data);
                getBryanP10(theDate);
            } else {
                getBryanP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBryanP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $("#bryanFromDateLabel").html('<br><div style="font-size:20px">Bryan</div>');
                checkBryanNumbers(data);
                $("#bryanFromDate").html('<br><div  onclick=showBryanApps(); style="cursor:pointer">Total Resolved : ' + bryanApplicationTotal + '</div>');
                if (bryanApplicationTotal === 300) {
                    $("#bryanFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#bryanFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Bryan : ' + bryanApplicationTotal + '</a></li>');
                    $("#jumpBackFromDate").show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                if (bryanApplicationTotal > 0) {
                    $("#bryanFromDateLabel").html('<br><div style="font-size:20px">Bryan</div>');
                    $("#bryanFromList").html('<li style="cursor: pointer; padding-left:20px" class="last_link"><a>Bryan : ' + bryanApplicationTotal + '</a></li>');
                    $("#jumpBackFromDate").show();
                    $("#bryanFromDate").html('<br><div  onclick=showBryanApps(); style="cursor:pointer">Total Resolved : ' + bryanApplicationTotal + '</div>');
                }
                if (bryanApplicationTotal === 300) {
                    $("#bryanFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                }
            }
            //getBryanAntivirus(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

//function getBryanAntivirus(theDate) {
//    bryanAntivirusTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP2(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP3(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP4(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP5(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP6(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP7(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP8(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP9(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                getBryanAvP10(theDate);
//            } else {
//                getBryanAvP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanAvP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanAntivirusNumbers(data);
//                if (bryanAntivirusTotal === 300) {
//                    $("#bryanAvFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    if (bryanAntivirusTotal > 0) {
//                        $("#bryanAvFromDate").append('<div onclick=showBryanAv(); style="cursor:pointer">Antivirus : ' + bryanAntivirusTotal + '</div>').show();
//                    }
//                }
//            } else {
//                if (bryanAntivirusTotal > 0) {
//                    $("#bryanAvFromDate").append('<div onclick=showBryanAv(); style="cursor:pointer">Antivirus : ' + bryanAntivirusTotal + '</div>').show();
//                }
//            }
//            //getBryanCitrix(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanCitrix(theDate) {
//    bryanCitrixTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP2(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP3(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP4(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP5(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP6(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP7(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP8(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP9(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                getBryanCitrixP10(theDate);
//            } else {
//                getBryanCitrixP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanCitrixP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanCitrixNumbers(data);
//                if (bryanCitrixTotal === 300) {
//                    $("#bryanCitrixFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanCitrixFromDate").append('<div onclick=showBryanCitrix(); style="cursor:pointer">Citrix : ' + bryanCitrixTotal + '</div>');
//                }
//            } else {
//                if (bryanCitrixTotal > 0) {
//                    $("#bryanCitrixFromDate").append('<div onclick=showBryanCitrix(); style="cursor:pointer">Citrix : ' + bryanCitrixTotal + '</div>');
//                }
//            }
//            //getBryanOther(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanOther(theDate) {
//    bryanOtherTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP2(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP3(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP4(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP5(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP6(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP7(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP8(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP9(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                getBryanOtherP10(theDate);
//            } else {
//                getBryanOtherP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanOtherP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanOtherNumbers(data);
//                if (bryanOtherTotal === 300) {
//                    $("#bryanOtherFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanOtherFromDate").append('<div onclick=showBryanOther(); style="cursor:pointer">Other : ' + bryanOtherTotal + '</div>');
//                }
//            } else {
//                if (bryanOtherTotal > 0) {
//                    $("#bryanOtherFromDate").append('<div onclick=showBryanOther(); style="cursor:pointer">Other : ' + bryanOtherTotal + '</div>');
//                }
//            }
//            //getBryanPasswords(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanPasswords(theDate) {
//    bryanPasswordsTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP2(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP3(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP4(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP5(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP6(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP7(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP8(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP9(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                getBryanPasswordsP10(theDate);
//            } else {
//                getBryanPasswordsP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPasswordsP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPasswordsNumbers(data);
//                if (bryanPasswordsTotal === 300) {
//                    $("#bryanPasswordsFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanPasswordsFromDate").append('<div onclick=showBryanPasswords(); style="cursor:pointer">Passwords : ' + bryanPasswordsTotal + '</div>');
//                }
//            } else {
//                if (bryanPasswordsTotal > 0) {
//                    $("#bryanPasswordsFromDate").append('<div onclick=showBryanPasswords(); style="cursor:pointer">Passwords : ' + bryanPasswordsTotal + '</div>');
//                }
//            }
//            //getBryanImage(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanImage(theDate) {
//    bryanImageTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP2(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP3(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP4(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP5(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP6(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP7(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP8(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP9(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                getBryanImageP10(theDate);
//            } else {
//                getBryanImageP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanImageP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanImageNumbers(data);
//                if (bryanImageTotal === 300) {
//                    $("#bryanImageFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanImageFromDate").append('<div onclick=showBryanImage(); style="cursor:pointer">Image : ' + bryanImageTotal + '</div>');
//                }
//            } else {
//                if (bryanImageTotal > 0) {
//                    $("#bryanImageFromDate").append('<div onclick=showBryanImage(); style="cursor:pointer">Image : ' + bryanImageTotal + '</div>');
//                }
//            }
//            //getBryanNetworking(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanNetworking(theDate) {
//    bryanNetworkingTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP2(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP3(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP4(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP5(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP6(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP7(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP8(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP9(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                getBryanNetworkingP10(theDate);
//            } else {
//                getBryanNetworkingP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNetworkingP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNetworkingNumbers(data);
//                if (bryanNetworkingTotal === 300) {
//                    $("#bryanNetworkingFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanNetworkingFromDate").append('<div onclick=showBryanNetworking(); style="cursor:pointer">Networking : ' + bryanNetworkingTotal + '</div>');
//                }
//            } else {
//                if (bryanNetworkingTotal > 0) {
//                    $("#bryanNetworkingFromDate").append('<div onclick=showBryanNetworking(); style="cursor:pointer">Networking : ' + bryanNetworkingTotal + '</div>');
//                }
//            }
//            //getBryanNewUser(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanNewUser(theDate) {
//    bryanNewUserTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP2(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP3(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP4(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP5(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP6(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP7(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP8(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP9(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                getBryanNewUserP10(theDate);
//            } else {
//                getBryanNewUserP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanNewUserP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanNewUserNumbers(data);
//                if (bryanNewUserTotal === 300) {
//                    $("#bryanNewUserFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv")
//                        .html(
//                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanNewUserFromDate").append('<div onclick=showBryanNewUser(); style="cursor:pointer">New User : ' + bryanNewUserTotal + '</div>');
//                }
//            } else {
//                if (bryanNewUserTotal > 0) {
//                    $("#bryanNewUserFromDate").append('<div onclick=showBryanNewUser(); style="cursor:pointer">New User : ' + bryanNewUserTotal + '</div>');
//                }
//            }
//            //getBryanPc(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanPc(theDate) {
//    bryanPcTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP2(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP3(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP4(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP5(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP6(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP7(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP8(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP9(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                getBryanPcP10(theDate);
//            } else {
//                getBryanPcP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPcP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPcNumbers(data);
//                if (bryanPcTotal === 300) {
//                    $("#bryanPcFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanPcFromDate").append('<div onclick=showBryanPc(); style="cursor:pointer">PC/Phone/Tablet : ' + bryanPcTotal + '</div>');
//                }
//            } else {
//                if (bryanPcTotal > 0) {
//                    $("#bryanPcFromDate").append('<div onclick=showBryanPc(); style="cursor:pointer">PC/Phone/Tablet : ' + bryanPcTotal + '</div>');
//                }
//            }
//            //getBryanPrinter(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanPrinter(theDate) {
//    bryanPrinterTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP2(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP3(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP4(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP5(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP6(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP7(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP8(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP9(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                getBryanPrinterP10(theDate);
//            } else {
//                getBryanPrinterP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanPrinterP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanPrinterNumbers(data);
//                if (bryanPrinterTotal === 300) {
//                    $("#bryanPrinterFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanPrinterFromDate").append('<div onclick=showBryanPrinter(); style="cursor:pointer">Printer/Scanner : ' + bryanPrinterTotal + '</div>');
//                }
//            } else {
//                if (bryanPrinterTotal > 0) {
//                    $("#bryanPrinterFromDate").append('<div onclick=showBryanPrinter(); style="cursor:pointer">Printer/Scanner : ' + bryanPrinterTotal + '</div>');
//                }
//            }
//            //getBryanProfile(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanProfile(theDate) {
//    bryanProfileTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP2(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP3(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP4(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP5(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP6(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP7(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP8(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP9(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                getBryanProfileP10(theDate);
//            } else {
//                getBryanProfileP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanProfileP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanProfileNumbers(data);
//                if (bryanProfileTotal === 300) {
//                    $("#bryanProfileFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanProfileFromDate").append('<div onclick=showBryanProfile(); style="cursor:pointer">Profile : ' + bryanProfileTotal + '</div>');
//                }
//            } else {
//                if (bryanProfileTotal > 0) {
//                    $("#bryanProfileFromDate").append('<div onclick=showBryanProfile(); style="cursor:pointer">Profile : ' + bryanProfileTotal + '</div>');
//                }
//            }
//            //getBryanWebsites(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanWebsites(theDate) {
//    bryanWebsitesTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP2(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP3(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP4(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP5(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP6(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP7(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP8(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP9(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                getBryanWebsitesP10(theDate);
//            } else {
//                getBryanWebsitesP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanWebsitesP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanWebsitesNumbers(data);
//                if (bryanWebsitesTotal === 300) {
//                    $("#bryanWebsitesFromDate").append(" ** You've hit the max! pick a date closer to today **")
//                        .css('color', 'red').show();
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                } else {
//                    $("#bryanWebsitesFromDate").append('<div onclick=showBryanWebsites(); style="cursor:pointer">Websites : ' + bryanWebsitesTotal + '</div>');
//                }
//            } else {
//                if (bryanWebsitesTotal > 0) {
//                    $("#bryanWebsitesFromDate").append('<div onclick=showBryanWebsites(); style="cursor:pointer">Websites : ' + bryanWebsitesTotal + '</div>');
//                }
//            }
//            //getBryanBlank(theDate);
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}

//function getBryanBlank(theDate) {
//    bryanBlankTotal = 0;
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP2(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP2(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP3(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP3(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP4(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP4(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP5(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP5(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP6(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP6(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP7(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP7(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP8(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP8(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP9(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP9(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                getBryanBlankP10(theDate);
//            } else {
//                getBryanBlankP10(theDate);
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}
//function getBryanBlankP10(theDate) {
//    $.ajax({
//        type: 'GET',
//        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + null + "\%20AND%20agent_id:19000346026\%20AND%20status:4\%20AND%20group_id:19000152827\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
//        dataType: 'json',
//        contentType: 'application/json',
//        beforeSend: function (xhr) {
//            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
//        },
//        success: function (data) {
//            if (data.results.length !== 0) {
//                checkBryanBlankNumbers(data);
//                $("#bryanBlankFromDate").html('<div  onclick=showBryanBlank(); style="cursor:pointer">Blank : ' + bryanBlankTotal + '</div>');
//                if (bryanBlankTotal === 300) {
//                    $("#bryanBlankFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
//                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
//                }
//            } else {
//                if (bryanBlankTotal > 0) {
//                    $("#bryanBlankFromDate").html('<div  onclick=showBryanBlank(); style="cursor:pointer">Blank : ' + bryanBlankTotal + '</div>');
//                }
//            }
//        },
//        error: function () {
//            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
//        }
//    });
//}


function showBryanApps() {
    $("#fromDateRightWindow").hide();
    $("#bryanFromDateTable").toggle();
    $("#bryanFromTableResults").show();
}
//function showBryanAv() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanAvFromDateTable").toggle();
//    $("#bryanAvFromTableResults").show();
//}
//function showBryanCitrix() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanCitrixFromDateTable").toggle();
//    $("#bryanCitrixFromTableResults").show();
//}
//function showBryanOther() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanOtherFromDateTable").toggle();
//    $("#bryanOtherFromTableResults").show();
//}
//function showBryanPasswords() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanPasswordsFromDateTable").toggle();
//    $("#bryanPasswordsFromTableResults").show();
//}
//function showBryanImage() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanImageFromDateTable").toggle();
//    $("#bryanImageFromTableResults").show();
//}
//function showBryanNetworking() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanNetworkingFromDateTable").toggle();
//    $("#bryanNetworkingFromTableResults").show();
//}
//function showBryanNewUser() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanNewUserFromDateTable").toggle();
//    $("#bryanNewUserFromTableResults").show();
//}
//function showBryanPc() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanPcFromDateTable").toggle();
//    $("#bryanPcFromTableResults").show();
//}
//function showBryanPrinter() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanPrinterFromDateTable").toggle();
//    $("#bryanPrinterFromTableResults").show();
//}
//function showBryanProfile() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanProfileFromDateTable").toggle();
//    $("#bryanProfileFromTableResults").show();
//}
//function showBryanWebsites() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanWebsitesFromDateTable").toggle();
//    $("#bryanWebsitesFromTableResults").show();
//}
//function showBryanBlank() {
//    $("#fromDateRightWindow").hide();
//    $("#bryanBlankFromDateTable").toggle();
//    $("#bryanBlankFromTableResults").show();
//}


function showBryanFromInfo(id) {
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
            if (data.responder_id !== 19000346026 &&
                data.responder_id !== 19000346026 &&
                data.responder_id !== 19000346026 &&
                data.responder_id !== 19000346026 &&
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