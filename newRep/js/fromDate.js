var brendaCounterFrom = 0;
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
var brendaApplicationResolvedLength = 0;
var brendaApplicationTotal = 0;
var brendaAntivirusResolvedLength = 0;
var brendaAntivirusTotal = 0;
var brendaCitrixTotal = 0;
var brendaCitrixResolvedLength = 0;
var brendaOtherTotal = 0;
var brendaOtherResolvedLength = 0;
var brendaPasswordsTotal = 0;
var brendaPasswordsResolvedLength = 0;
var brendaImageTotal = 0;
var brendaImageResolvedLength = 0;
var brendaNetworkingTotal = 0;
var brendaNetworkingResolvedLength = 0;
var brendaNewUserTotal = 0;
var brendaNewUserResolvedLength = 0;
var brendaPcTotal = 0;
var brendaPcResolvedLength = 0;
var brendaPrinterTotal = 0;
var brendaPrinterResolvedLength = 0;
var brendaProfileTotal = 0;
var brendaProfileResolvedLength = 0;
var brendaWebsitesTotal = 0;
var brendaWebsitesResolvedLength = 0;


$(document).ready(function () {
    $("#numbersFromDate").click(function () {
        var theDate = $("#dateValue").val();
        $("#fromDateRightWindow").hide();
        $("#forDateRightWindow").hide();
        $("#firstWindowResults").hide();
        $("#forDateLeftWindow").hide();
        $("#forDateMainWindow").hide();
        $("#fromDateLeftWindow").show();
        $("#fromDateMainWindow").show();
        $("#firstWindow").hide();
        $("#errorsDiv").empty();
        $("#brendaFromDateTable").hide();
        $("#brendaAvFromDateTable").hide();
        $("#brendaCitrixFromDateTable").hide();
        $("#brendaOtherFromDateTable").hide();
        $("#brendaPasswordsFromDateTable").hide();
        $("#brendaImageFromDateTable").hide();
        $("#brendaNetworkingFromDateTable").hide();
        $("#brendaNewUserFromDateTable").hide();
        $("#brendaPcFromDateTable").hide();
        $("#brendaPrinterFromDateTable").hide();
        $("#brendaProfileFromDateTable").hide();
        $("#brendaWebsitesFromDateTable").hide();
        $("#brendaFromTableResults").html("<tr></tr>");
        $("#brendaAvFromTableResults").html("<tr></tr>");
        $("#brendaCitrixFromTableResults").html("<tr></tr>");
        $("#brendaOtherFromTableResults").html("<tr></tr>");
        $("#brendaPasswordsFromTableResults").html("<tr></tr>");
        $("#brendaImageFromTableResults").html("<tr></tr>");
        $("#brendaNetworkingFromTableResults").html("<tr></tr>");
        $("#brendaNewUserFromTableResults").html("<tr></tr>");
        $("#brendaPcFromTableResults").html("<tr></tr>");
        $("#brendaPrinterFromTableResults").html("<tr></tr>");
        $("#brendaProfileFromTableResults").html("<tr></tr>");
        $("#brendaWebsitesFromTableResults").html("<tr></tr>");

        $("#brendaFromDate").css('color', 'black').empty();
        $("#brendaAvFromDate").css('color', 'black').empty();
        $("#brendaCitrixFromDate").css('color', 'black').empty();
        $("#brendaOtherFromDate").css('color', 'black').empty();
        $("#brendaPasswordsFromDate").css('color', 'black').empty();
        $("#brendaImageFromDate").css('color', 'black').empty();
        $("#brendaNetworkingFromDate").css('color', 'black').empty();
        $("#brendaNewUserFromDate").css('color', 'black').empty();
        $("#brendaPcFromDate").css('color', 'black').empty();
        $("#brendaPrinterFromDate").css('color', 'black').empty();
        $("#brendaProfileFromDate").css('color', 'black').empty();
        $("#brendaWebsitesFromDate").css('color', 'black').empty();
        $("#errorsDiv").removeClass('alert-danger');
        $("#errorsDiv").addClass('alert-success');
        $("#errorsDiv").html("Thinking...").css('color','green');

        getBrendaFrom(theDate);
        //getJakeFrom(theDate);
        //getTylerFrom(theDate);
        //getAdamFrom(theDate);
        //getBryanFrom(theDate);
    });
    $("#jumpBackFromDate").click(function () {
        //jumpBackfrom();
    });


});

function checkBrendaNumbers(data) {
    brendaApplicationResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaApplicationResolvedLength < data.results.length) {
                $("#brendaFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaApplicationResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaApplicationResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaApplicationResolvedLength].id + ")" + ">" + data.results[brendaApplicationResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaApplicationResolvedLength++;
            }
        });
    brendaApplicationTotal = brendaApplicationTotal + data.results.length;
}

function checkBrendaAntivirusNumbers(data) {
    brendaAntivirusResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaAntivirusResolvedLength < data.results.length) {
                $("#brendaAvFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaAntivirusResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaAntivirusResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaAntivirusResolvedLength].id + ")" + ">" + data.results[brendaAntivirusResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaAntivirusResolvedLength++;
            }
        });
    brendaAntivirusTotal = brendaAntivirusTotal + data.results.length;
}

function checkBrendaCitrixNumbers(data) {
    brendaCitrixResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaCitrixResolvedLength < data.results.length) {
                $("#brendaCitrixFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaCitrixResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaCitrixResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaCitrixResolvedLength].id + ")" + ">" + data.results[brendaCitrixResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaCitrixResolvedLength++;
            }
        });
    brendaCitrixTotal = brendaCitrixTotal + data.results.length;
}

function checkBrendaOtherNumbers(data) {
    brendaOtherResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaOtherResolvedLength < data.results.length) {
                $("#brendaOtherFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaOtherResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaOtherResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaOtherResolvedLength].id + ")" + ">" + data.results[brendaOtherResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaOtherResolvedLength++;
            }
        });
    brendaOtherTotal = brendaOtherTotal + data.results.length;
}

function checkBrendaPasswordsNumbers(data) {
    brendaPasswordsResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaPasswordsResolvedLength < data.results.length) {
                $("#brendaPasswordsFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaPasswordsResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaPasswordsResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaPasswordsResolvedLength].id + ")" + ">" + data.results[brendaPasswordsResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaPasswordsResolvedLength++;
            }
        });
    brendaPasswordsTotal = brendaPasswordsTotal + data.results.length;
}

function checkBrendaImageNumbers(data) {
    brendaImageResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaImageResolvedLength < data.results.length) {
                $("#brendaImageFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaImageResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaImageResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaImageResolvedLength].id + ")" + ">" + data.results[brendaImageResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaImageResolvedLength++;
            }
        });
    brendaImageTotal = brendaImageTotal + data.results.length;
}

function checkBrendaNetworkingNumbers(data) {
    brendaNetworkingResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaNetworkingResolvedLength < data.results.length) {
                $("#brendaNetworkingFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaNetworkingResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaNetworkingResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaNetworkingResolvedLength].id + ")" + ">" + data.results[brendaNetworkingResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaNetworkingResolvedLength++;
            }
        });
    brendaNetworkingTotal = brendaNetworkingTotal + data.results.length;
}

function checkBrendaNewUserNumbers(data) {
    brendaNewUserResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaNewUserResolvedLength < data.results.length) {
                $("#brendaNewUserFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaNewUserResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaNewUserResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaNewUserResolvedLength].id + ")" + ">" + data.results[brendaNewUserResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaNewUserResolvedLength++;
            }
        });
    brendaNewUserTotal = brendaNewUserTotal + data.results.length;
}

function checkBrendaPcNumbers(data) {
    brendaPcResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaPcResolvedLength < data.results.length) {
                $("#brendaPcFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaPcResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaPcResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaPcResolvedLength].id + ")" + ">" + data.results[brendaPcResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaPcResolvedLength++;
            }
        });
    brendaPcTotal = brendaPcTotal + data.results.length;
}

function checkBrendaPrinterNumbers(data) {
    brendaPrinterResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaPrinterResolvedLength < data.results.length) {
                $("#brendaPrinterFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaPrinterResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaPrinterResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaPrinterResolvedLength].id + ")" + ">" + data.results[brendaPrinterResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaPrinterResolvedLength++;
            }
        });
    brendaPrinterTotal = brendaPrinterTotal + data.results.length;
}

function checkBrendaProfileNumbers(data) {
    brendaProfileResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaProfileResolvedLength < data.results.length) {
                $("#brendaProfileFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaProfileResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaProfileResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaProfileResolvedLength].id + ")" + ">" + data.results[brendaProfileResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaProfileResolvedLength++;
            }
        });
    brendaProfileTotal = brendaProfileTotal + data.results.length;
}

function checkBrendaWebsitesNumbers(data) {
    brendaWebsitesResolvedLength = 0;
    $.each(data,
        function () {
            while (brendaWebsitesResolvedLength < data.results.length) {
                $("#brendaWebsitesFromTableResults").append("<tr><td><a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.results[brendaWebsitesResolvedLength].id + " target=" + "_blank" + ">" + data.results[brendaWebsitesResolvedLength].id + "</td><td style=" + "cursor:pointer" + " onclick=" + "showDevInfo(" + data.results[brendaWebsitesResolvedLength].id + ")" + ">" + data.results[brendaWebsitesResolvedLength].subject + "</td></tr>");
                $("#fromDateRightWindow").show();
                brendaWebsitesResolvedLength++;
            }
        });
    brendaWebsitesTotal = brendaWebsitesTotal + data.results.length;
}

function getBrendaFrom(theDate) {
    brendaApplicationTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP2(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP3(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP4(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP5(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP6(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP7(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP8(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP9(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                getBrendaP10(theDate);
            } else {
                getBrendaP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNumbers(data);
                $("#brendaFromDate").html('<div style="font-size:20px;">Brenda</div><br><div  onclick=showBrendaApps(); style="cursor:pointer">Applications : ' + brendaApplicationTotal + '</div>');
                if (brendaApplicationTotal === 300) {
                    $("#brendaFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                }
            } else {
                $("#brendaFromDate").html('<div style="font-size:20px">Brenda</div><br><div  onclick=showBrendaApps(); style="cursor:pointer">Applications : ' + brendaApplicationTotal + '</div>');
                if (brendaApplicationTotal === 300) {
                    $("#brendaFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red');
                }
            }
            getBrendaAntivirus(theDate);
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaAntivirus(theDate) {
    brendaAntivirusTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP2(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP3(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP4(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP5(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP6(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP7(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP8(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP9(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                getBrendaAvP10(theDate);
            } else {
                getBrendaAvP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaAvP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaAntivirusNumbers(data);
                if (brendaAntivirusTotal === 300) {
                    $("#brendaAvFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    if (brendaAntivirusTotal > 0) {
                        $("#brendaAvFromDate").append('<div onclick=showBrendaAv(); style="cursor:pointer">Antivirus : ' + brendaAntivirusTotal +'</div>').show();
                    }
                }
            } else {
                if (brendaAntivirusTotal > 0) {
                    $("#brendaAvFromDate").append('<div onclick=showBrendaAv(); style="cursor:pointer">Antivirus : ' + brendaAntivirusTotal + '</div>').show();
                }
            }
            getBrendaCitrix(theDate);
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaCitrix(theDate) {
    brendaCitrixTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP2(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP3(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP4(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP5(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP6(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP7(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP8(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP9(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                getBrendaCitrixP10(theDate);
            } else {
                getBrendaCitrixP10(theDate);
            }
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaCitrixP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaCitrixNumbers(data);
                if (brendaCitrixTotal === 300) {
                    $("#brendaCitrixFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaCitrixFromDate").append('<div onclick=showBrendaCitrix(); style="cursor:pointer">Citrix : ' + brendaCitrixTotal + '</div>');
                }
            } else {
                $("#brendaCitrixFromDate").append('<div onclick=showBrendaCitrix(); style="cursor:pointer">Citrix : ' + brendaCitrixTotal + '</div>');
            }
            getBrendaOther(theDate);
        },
        error: function () {
                        $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color','red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaOther(theDate) {
    brendaOtherTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP2(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP3(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP4(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP5(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP6(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP7(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP8(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP9(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                getBrendaOtherP10(theDate);
            } else {
                getBrendaOtherP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaOtherP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaOtherNumbers(data);
                if (brendaOtherTotal === 300) {
                    $("#brendaOtherFromDate").append(" ** You've hit the max! pick a date closer to today **").css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaOtherFromDate").append('<div onclick=showBrendaOther(); style="cursor:pointer">Other : ' + brendaOtherTotal + '</div>');
                }
            } else {
                $("#brendaOtherFromDate").append('<div onclick=showBrendaOther(); style="cursor:pointer">Other : ' + brendaOtherTotal + '</div>');
            }
            getBrendaPasswords(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaPasswords(theDate) {
    brendaPasswordsTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP2(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP3(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP4(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP5(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP6(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP7(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP8(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP9(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                getBrendaPasswordsP10(theDate);
            } else {
                getBrendaPasswordsP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPasswordsP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPasswordsNumbers(data);
                if (brendaPasswordsTotal === 300) {
                    $("#brendaPasswordsFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaPasswordsFromDate").append('<div onclick=showBrendaPasswords(); style="cursor:pointer">Passwords : ' + brendaPasswordsTotal + '</div>');
                }
            } else {
                $("#brendaPasswordsFromDate").append('<div onclick=showBrendaPasswords(); style="cursor:pointer">Passwords : ' + brendaPasswordsTotal + '</div>');
            }
            getBrendaImage(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaImage(theDate) {
    brendaImageTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP2(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP3(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP4(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP5(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP6(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP7(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP8(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP9(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                getBrendaImageP10(theDate);
            } else {
                getBrendaImageP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaImageP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaImageNumbers(data);
                if (brendaImageTotal === 300) {
                    $("#brendaImageFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaImageFromDate").append('<div onclick=showBrendaImage(); style="cursor:pointer">Image : ' + brendaImageTotal + '</div>');
                }
            } else {
                $("#brendaImageFromDate").append('<div onclick=showBrendaImage(); style="cursor:pointer">Image : ' + brendaImageTotal + '</div>');
            }
            getBrendaNetworking(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaNetworking(theDate) {
    brendaNetworkingTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP2(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP3(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP4(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP5(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP6(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP7(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP8(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP9(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                getBrendaNetworkingP10(theDate);
            } else {
                getBrendaNetworkingP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNetworkingP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNetworkingNumbers(data);
                if (brendaNetworkingTotal === 300) {
                    $("#brendaNetworkingFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaNetworkingFromDate").append('<div onclick=showBrendaNetworking(); style="cursor:pointer">Networking : ' + brendaNetworkingTotal + '</div>');
                }
            } else {
                $("#brendaNetworkingFromDate").append('<div onclick=showBrendaNetworking(); style="cursor:pointer">Networking : ' + brendaNetworkingTotal + '</div>');
            }
            getBrendaNewUser(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaNewUser(theDate) {
    brendaNewUserTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP2(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP3(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP4(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP5(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP6(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP7(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP8(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP9(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                getBrendaNewUserP10(theDate);
            } else {
                getBrendaNewUserP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaNewUserP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaNewUserNumbers(data);
                if (brendaNewUserTotal === 300) {
                    $("#brendaNewUserFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv")
                        .html(
                            '<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaNewUserFromDate").append('<div onclick=showBrendaNewUser(); style="cursor:pointer">New User : ' + brendaNewUserTotal + '</div>');
                }
            } else {
                $("#brendaNewUserFromDate").append('<div onclick=showBrendaNewUser(); style="cursor:pointer">New User : ' + brendaNewUserTotal + '</div>');
            }
            getBrendaPc(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaPc(theDate) {
    brendaPcTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP2(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP3(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP4(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP5(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP6(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP7(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP8(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP9(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                getBrendaPcP10(theDate);
            } else {
                getBrendaPcP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPcP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPcNumbers(data);
                if (brendaPcTotal === 300) {
                    $("#brendaPcFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaPcFromDate").append('<div onclick=showBrendaPc(); style="cursor:pointer">PC/Phone/Tablet : ' + brendaPcTotal + '</div>');
                }
            } else {
                $("#brendaPcFromDate").append('<div onclick=showBrendaPc(); style="cursor:pointer">PC/Phone/Tablet : ' + brendaPcTotal + '</div>');
            }
            getBrendaPrinter(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaPrinter(theDate) {
    brendaPrinterTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP2(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP3(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP4(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP5(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP6(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP7(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP8(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP9(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                getBrendaPrinterP10(theDate);
            } else {
                getBrendaPrinterP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaPrinterP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaPrinterNumbers(data);
                if (brendaPrinterTotal === 300) {
                    $("#brendaPrinterFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaPrinterFromDate").append('<div onclick=showBrendaPrinter(); style="cursor:pointer">Printer/Scanner : ' + brendaPrinterTotal + '</div>');
                }
            } else {
                $("#brendaPrinterFromDate").append('<div onclick=showBrendaPrinter(); style="cursor:pointer">Printer/Scanner : ' + brendaPrinterTotal + '</div>');
            }
            getBrendaProfile(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaProfile(theDate) {
    brendaProfileTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP2(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP3(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP4(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP5(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP6(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP7(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP8(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP9(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                getBrendaProfileP10(theDate);
            } else {
                getBrendaProfileP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaProfileP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaProfileNumbers(data);
                if (brendaProfileTotal === 300) {
                    $("#brendaProfileFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaProfileFromDate").append('<div onclick=showBrendaProfile(); style="cursor:pointer">Profile : ' + brendaProfileTotal + '</div>');
                }
            } else {
                $("#brendaProfileFromDate").append('<div onclick=showBrendaProfile(); style="cursor:pointer">Profile : ' + brendaProfileTotal + '</div>');
            }
            getBrendaWebsites(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function getBrendaWebsites(theDate) {
    brendaWebsitesTotal = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP2(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP3(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP4(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP5(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP6(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP7(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP8(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP9(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                getBrendaWebsitesP10(theDate);
            } else {
                getBrendaWebsitesP10(theDate);
            }
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}
function getBrendaWebsitesP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                checkBrendaWebsitesNumbers(data);
                if (brendaWebsitesTotal === 300) {
                    $("#brendaWebsitesFromDate").append(" ** You've hit the max! pick a date closer to today **")
                        .css('color', 'red').show();
                    $("#errorsDiv").html('<a target="_blank" href="https://weathershield.freshdesk.com/a/reports/">You reached the page limit! To view more detailed reports, go here!</a>');
                } else {
                    $("#brendaWebsitesFromDate").append('<div onclick=showBrendaWebsites(); style="cursor:pointer">Websites : ' + brendaWebsitesTotal + '</div>');
                }
            } else {
                $("#brendaWebsitesFromDate").append('<div onclick=showBrendaWebsites(); style="cursor:pointer">Websites : ' + brendaWebsitesTotal + '</div>');
            }
            //getBrendaWebsites(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("We couldn't get tickets for that date. Try again or update url in hd.js").css('color', 'red').removeClass('alert-success').addClass('alert-danger');
        }
    });
}

function showBrendaApps() {
    $("#brendaFromDateTable").toggle();
    $("#brendaFromTableResults").show();
}
function showBrendaAv() {
    $("#brendaAvFromDateTable").toggle();
    $("#brendaAvFromTableResults").show();
}
function showBrendaCitrix() {
    $("#brendaCitrixFromDateTable").toggle();
    $("#brendaCitrixFromTableResults").show();
}
function showBrendaOther() {
    $("#brendaOtherFromDateTable").toggle();
    $("#brendaOtherFromTableResults").show();
}
function showBrendaPasswords() {
    $("#brendaPasswordsFromDateTable").toggle();
    $("#brendaPasswordsFromTableResults").show();
}
function showBrendaImage() {
    $("#brendaImageFromDateTable").toggle();
    $("#brendaImageFromTableResults").show();
}
function showBrendaNetworking() {
    $("#brendaNetworkingFromDateTable").toggle();
    $("#brendaNetworkingFromTableResults").show();
}
function showBrendaNewUser() {
    $("#brendaNewUserFromDateTable").toggle();
    $("#brendaNewUserFromTableResults").show();
}
function showBrendaPc() {
    $("#brendaPcFromDateTable").toggle();
    $("#brendaPcFromTableResults").show();
}
function showBrendaPrinter() {
    $("#brendaPrinterFromDateTable").toggle();
    $("#brendaPrinterFromTableResults").show();
}
function showBrendaProfile() {
    $("#brendaProfileFromDateTable").toggle();
    $("#brendaProfileFromTableResults").show();
}
function showBrendaWebsites() {
    $("#brendaWebsitesFromDateTable").toggle();
    $("#brendaWebsitesFromTableResults").show();
}