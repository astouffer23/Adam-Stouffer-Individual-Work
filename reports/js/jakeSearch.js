var jakeResolvedLength = 0;
var jakeTotalAntivirus = 0;
var jakeTotalApplications = 0;
var jakeTotalCitrix = 0;
var jakeTotalNetwork = 0;
var jakeTotalImage = 0;
var jakeTotalNewUser = 0;
var jakeTotalPasswords = 0;
var jakeFinalTotal = 0;
var jakeTotalPCs = 0;
var jakeTotalProfiles = 0;
var jakeTotalPrinters = 0;
var jakeTotalWebsites = 0;
var jakeTotalOther = 0;

$(document).ready(function () {
    $("#fromDateSubmit").click(function () {
        $("#refreshDiv").show();
        $("#resolvedSummary").hide();
        $("#totalResCount").html("");
        $("#jakeResolvedContentRows").empty();
        $("#jakeResolvedContentRows").empty();
        $("#tylerResolvedContentRows").empty();
        $("#unassignedResolvedContentRows").empty();
        $("#jakeResolvedSummaryRows1").empty();
        $("#jakeResolvedSummaryRows2").empty();
        $("#jakeResolvedSummaryRows3").empty();
        $("#jakeResolvedSummaryRows4").empty();
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").show();
        var theDate = $("#dateSearch").val();
        jakeNumbers(theDate);
    });

});

function jakeNumbers(theDate) {
    jakeGetAntivirus(theDate);

}

function jakeGetAntivirus(theDate) {
    jakeGetAVP1(theDate);


    function jakeGetAVP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeTotalAntivirus = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;
                    jakeFinalTotal = 0;
                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;

                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAVP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAVP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAVP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAVP10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;

                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAVP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAVP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalAntivirus = jakeTotalAntivirus + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetApps(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }

}

function jakeGetApps(theDate) {
    jakeGetAPP1(theDate);

    function jakeGetAPP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    jakeTotalApplications = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAPP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAPP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetAPP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalApplications = jakeTotalApplications + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetAPP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetAPP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalApplications = jakeTotalApplications + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetCitrix(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetCitrix(theDate) {
    jakeGetCitrix1(theDate);

    function jakeGetCitrix1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeTotalCitrix = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetCitrix3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetCitrix4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetCitrix5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    jakeGetCitrix10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetCitrix10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetCitrix10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalCitrix = jakeTotalCitrix + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetImage(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetImage(theDate) {
    jakeGetImage1(theDate);

    function jakeGetImage1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeTotalImage = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetImage3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetImage4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetImage5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetImage10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalImage = jakeTotalImage + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetImage10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetImage10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalImage = jakeTotalImage + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetNetwork(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
}

function jakeGetNetwork(theDate) {
    jakeGetNetwork1(theDate);

    function jakeGetNetwork1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeTotalNetwork = 0;
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNetwork3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNetwork4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNetwork5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNetwork10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNetwork10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNetwork10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalNetwork = jakeTotalNetwork + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetNewUser(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetNewUser(theDate) {
    jakeGetNewUser1(theDate);

    function jakeGetNewUser1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeTotalNewUser = 0;
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNewUser3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNewUser4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetNewUser5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetNewUser10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetNewUser10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetNewUser10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalNewUser = jakeTotalNewUser + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetPasswords(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetPasswords(theDate) {
    jakeGetPasswords1(theDate);

    function jakeGetPasswords1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeTotalPasswords = 0;
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPasswords3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPasswords4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPasswords5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPasswords10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPasswords10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPasswords10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalPasswords = jakeTotalPasswords + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetPCPhone(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetPCPhone(theDate) {
    jakeGetPCPhone1(theDate);

    function jakeGetPCPhone1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;
                    jakeTotalPCs = 0;
                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPCPhone3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPCPhone4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPCPhone5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPCPhone10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPCs = jakeTotalPCs + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPCPhone10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPCPhone10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalPCs = jakeTotalPCs + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });

                jakeGetProfile(theDate);
                
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetProfile(theDate) {
    jakeGetProfile1(theDate);

    function jakeGetProfile1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;
                    jakeTotalProfiles = 0;
                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetProfile3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetProfile4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetProfile5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetProfile10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetProfile10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetProfile10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalProfiles = jakeTotalProfiles + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });

                jakeGetPrinter(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetPrinter(theDate) {
    jakeGetPrinter1(theDate);

    function jakeGetPrinter1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;
                    jakeTotalPrinters = 0;
                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPrinter3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPrinter4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetPrinter5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetPrinter10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetPrinter10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetPrinter10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalPrinters = jakeTotalPrinters + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetWebsites(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetWebsites(theDate) {
    jakeGetWebsites1(theDate);

    function jakeGetWebsites1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;
                    jakeTotalWebsites = 0;
                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetWebsites3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetWebsites4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetWebsites5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetWebsites10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetWebsites10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetWebsites10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalWebsites = jakeTotalWebsites + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }

                    });
                jakeGetOther(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}

function jakeGetOther(theDate) {
    jakeGetOthers1(theDate);

    function jakeGetOthers1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;
                    jakeTotalOther = 0;
                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetOthers3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetOthers4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });
    }
    function jakeGetOthers5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    jakeGetOthers10(theDate);
                } else {
                    jakeResolvedLength = 0;

                    jakeTotalOther = jakeTotalOther + data.results.length;
                    jakeFinalTotal = jakeFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (jakeResolvedLength < data.results.length) {
                                var ticketNumber = data.results[jakeResolvedLength].id;
                                var subject = data.results[jakeResolvedLength].subject;
                                var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#jakeResolvedContentRows").append(row);
                                jakeResolvedLength++;
                            }

                        });
                    jakeGetOthers10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
    function jakeGetOthers10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19008173125\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                jakeResolvedLength = 0;

                jakeTotalOther = jakeTotalOther + data.results.length;
                jakeFinalTotal = jakeFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (jakeResolvedLength < data.results.length) {
                            var ticketNumber = data.results[jakeResolvedLength].id;
                            var subject = data.results[jakeResolvedLength].subject;
                            var row = '<tr id="' + data.results[jakeResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[jakeResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarjakeGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#jakeResolvedContentRows").append(row);
                            jakeResolvedLength++;
                        }
                    });

                var row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + jakeTotalAntivirus + '</td><td>' + jakeTotalApplications + '</td><td>' + jakeTotalCitrix + '</td></tr>';
                $("#jakeResolvedSummaryRows1").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + jakeTotalImage + '</td><td>' + jakeTotalNetwork + '</td><td>' + jakeTotalNewUser + '</td></tr>';
                $("#jakeResolvedSummaryRows2").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + jakeTotalPasswords + '</td><td>' + jakeTotalPCs + '</td><td>' + jakeTotalPrinters + '</td></tr>';
                $("#jakeResolvedSummaryRows3").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + jakeTotalProfiles + '</td><td>' + jakeTotalWebsites + '</td><td>' + jakeTotalOther + '</td></tr>';
                $("#jakeResolvedSummaryRows4").append(row);
                $("#jakeTotalResolved").html("Jake: "+ jakeFinalTotal);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't jakeGet resolved tickets");
            }
        });

    }
}