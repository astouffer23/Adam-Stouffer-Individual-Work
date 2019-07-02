var resolvedLength = 0;
var antivirusCounter = 0;
var applicationCounter = 0;
var citrixCounter = 0;
var imageCounter = 0;
var networkCounter = 0;
var newUserCounter = 0;
var passwordCounter = 0;
var pcPhoneTabletCounter = 0;
var printerScannerCounter = 0;
var profileCounter = 0;
var websiteCounter = 0;
var otherCounter = 0;
var untaggedCounter = 0;
var brendaResCounter = 0;
var jakeResCounter = 0;
var tylerResCounter = 0;
var unassignedResCounter = 0;
var totalBrendaResCounter = 0;
var totalJakeResCounter = 0;
var totalTylerResCounter = 0;
var totalUnassignedResCounter = 0;


$(document).ready(function () {

    $("#showDevStuff").click(function () {
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").hide();
        $("#allTickets2").show();
    })
    $("#singleDateSubmit").click(function () {
        $("#resolvedSummary").show();
        $("#brendaResolvedSummary").hide();
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").show();


        var theDate = $("#dateSearch").val();
        $("#brendaResolvedDiv").html("Brenda");
        $("#jakeResolvedDiv").html("Jake");
        $("#tylerResolvedDiv").html("Tyler");
        antivirusCounter = 0;
        applicationCounter = 0;
        citrixCounter = 0;
        imageCounter = 0;
        networkCounter = 0;
        newUserCounter = 0;
        passwordCounter = 0;
        pcPhoneTabletCounter = 0;
        printerScannerCounter = 0;
        profileCounter = 0;
        websiteCounter = 0;
        otherCounter = 0;
        brendaResCounter = 0;
        jakeResCounter = 0;
        tylerResCounter = 0;
        unassignedResCounter = 0;
        totalBrendaResCounter = 0;
        totalJakeResCounter = 0;
        totalTylerResCounter = 0;
        totalUnassignedResCounter = 0;
        untaggedCounter = 0;
        getResP1(theDate);


    });


});

function getResP1(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $("#brendaResolvedContentRows").empty();
            $("#jakeResolvedContentRows").empty();
            $("#tylerResolvedContentRows").empty();
            $("#unassignedResolvedContentRows").empty();
            $("#resolvedSummaryRows1").empty();
            $("#resolvedSummaryRows2").empty();
            $("#resolvedSummaryRows3").empty();
            $("#resolvedSummaryRows4").empty();
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP2(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP2(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }
            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP3(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP3(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP4(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP4(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP5(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP5(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP6(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP6(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP7(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP7(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP8(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP8(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP9(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP9(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:'" + theDate + "')\"&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            getResP10(theDate);
        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function getResP10(theDate) {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            if (data.results.length < 1) {
                displayResTotals();
                return;
            }

            //totalResolvedLength = totalResolvedLength + data.results.length;
            resolvedLength = 0;
            $.each(data,
                function () {
                    while (resolvedLength < data.results.length) {
                        var ticketNumber = data.results[resolvedLength].id;
                        var subject = data.results[resolvedLength].subject;
                        categorizeTicket(data.results[resolvedLength]);
                        var row = '<tr id="' + data.results[resolvedLength].id + '" style="font-weight:bold">';
                        row += '<td>' + data.results[resolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' target="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';

                        if (data.results[resolvedLength].responder_id === 19000197788) {
                            $("#brendaResolvedContentRows").append(row);
                            brendaResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19008173125) {
                            $("#jakeResolvedContentRows").append(row);
                            jakeResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id === 19001766755) {
                            $("#tylerResolvedContentRows").append(row);
                            tylerResCounter++;
                        }
                        if (data.results[resolvedLength].responder_id !== 19001766755 &&
                            data.results[resolvedLength].responder_id !== 19000197788 &&
                            data.results[resolvedLength].responder_id !== 19008173125) {
                            $("#unassignedResolvedContentRows").append(row);
                            unassignedResCounter++;
                        }

                        resolvedLength++;
                    }

                });
            displayResTotals();


        },
        error: function () {
            $("#errorsDiv").show().html("API call didn't connect. Try again or update url in hd.js");
        }
    });
}

function displayResTotals() {
    var row = '<tr style="font-weight:bold; text-align:center">';
    row += '<td>' + antivirusCounter + '</td><td>' + applicationCounter + '</td><td>' + citrixCounter + '</td></tr>';
    $("#resolvedSummaryRows1").append(row);
    row = '<tr style="font-weight:bold; text-align:center">';
    row += '<td>' + imageCounter + '</td><td>' + networkCounter + '</td><td>' + newUserCounter + '</td></tr>';
    $("#resolvedSummaryRows2").append(row);
    row = '<tr style="font-weight:bold; text-align:center">';
    row += '<td>' + passwordCounter + '</td><td>' + pcPhoneTabletCounter + '</td><td>' + printerScannerCounter + '</td></tr>';
    $("#resolvedSummaryRows3").append(row);
    row = '<tr style="font-weight:bold; text-align:center">';
    row += '<td>' + profileCounter + '</td><td>' + websiteCounter + '</td><td>' + otherCounter + '</td></tr>';
    $("#resolvedSummaryRows4").append(row);
}

function categorizeTicket(data) {
    if (data.custom_fields.cf_category === "Antivirus") {
        antivirusCounter++;
    } if (data.custom_fields.cf_category === "Applications") {
        applicationCounter++;
    } if (data.custom_fields.cf_category === "Citrix") {
        citrixCounter++;
    } if (data.custom_fields.cf_category === "Image/Migration") {
        imageCounter++;
    } if (data.custom_fields.cf_category === "Networking") {
        networkCounter++;
    } if (data.custom_fields.cf_category === "New User Setup") {
        newUserCounter++;
    } if (data.custom_fields.cf_category === "Passwords") {
        passwordCounter++;
    } if (data.custom_fields.cf_category === "PC-Phone-Tablet") {
        pcPhoneTabletCounter++;
    } if (data.custom_fields.cf_category === "Printer-Scanner") {
        printerScannerCounter++;
    } if (data.custom_fields.cf_category === "Profile Change") {
        profileCounter++;
    } if (data.custom_fields.cf_category === "Websites") {
        websiteCounter++;
    } if (data.custom_fields.cf_category === "Other") {
        otherCounter++;
    } if (data.custom_fields.cf_category === null) {
        if (data.responder_id !== null) {
            untaggedCounter++;
        }
    }

    var totalCounter = antivirusCounter +
        applicationCounter +
        citrixCounter +
        imageCounter +
        networkCounter +
        newUserCounter +
        passwordCounter +
        pcPhoneTabletCounter +
        printerScannerCounter +
        profileCounter +
        websiteCounter +
        otherCounter +
        untaggedCounter;
    $("#totalResCount").html("Total Resolved: " + totalCounter + "</br>Untagged Tickets: " + untaggedCounter);
}

function resInfoDisplay(ticketNumber) {
    $("#individualResolvedSummary").hide();
    $("#brendaResolvedSummary").hide();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/tickets/" + ticketNumber + "include=requester",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
        },
        success: function (data) {
            $("#individualResolvedSummary").empty();
            if (data.responder_id === 19008173125) {
                $("#individualResolvedSummary").append("<div id=" + "jakeDiv" + " style=" + "font-size:20px" + ">Assigned To: Jake</div><hr/><p>");
                $("#jakeDiv").css('color', 'red').css('font-weight', 'bold');
            }
            if (data.responder_id === 19000197788) {
                $("#individualResolvedSummary").append("<div id=" + "brendaDiv" + " style=" + "font-size:20px" + ">Assigned To: Brenda</div><hr/><p>");
                $("#brendaDiv").css('color', 'blue').css('font-weight', 'bold');
            }
            if (data.responder_id === 19001766755) {
                $("#individualResolvedSummary").append("<div id=" + "tylerDiv" + " style=" + "font-size:20px" + ">Assigned To: Tyler</div><hr/><p>");
                $("#tylerDiv").css('color', 'orange').css('font-weight', 'bold');
            }
            if (data.responder_id === null) {
                $("#individualResolvedSummary").append("<div style=" + "color:purple; " + ">Unassigned</div><hr/><p>");
            }

            $("#individualResolvedSummary").append("<a href=" + "https://weathershield.freshdesk.com/a/tickets/" + data.id + ">" + data.subject + "</a><p>" + data.description);
            $("#individualResolvedSummary").show();
            $("#resolvedSummary").hide();
        },
        error: function () {

        }
    });

}