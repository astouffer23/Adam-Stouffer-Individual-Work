var tylerResolvedLength = 0;
var tylerTotalAntivirus = 0;
var tylerTotalApplications = 0;
var tylerTotalCitrix = 0;
var tylerTotalNetwork = 0;
var tylerTotalImage = 0;
var tylerTotalNewUser = 0;
var tylerTotalPasswords = 0;
var tylerFinalTotal = 0;
var tylerTotalPCs = 0;
var tylerTotalProfiles = 0;
var tylerTotalPrinters = 0;
var tylerTotalWebsites = 0;
var tylerTotalOther = 0;

$(document).ready(function () {
    $("#fromDateSubmit").click(function () {
        $("#refreshDiv").show();
        $("#resolvedSummary").hide();
        $("#totalResCount").html("");
        $("#tylerResolvedContentRows").empty();
        $("#tylerResolvedContentRows").empty();
        $("#tylerResolvedContentRows").empty();
        $("#unassignedResolvedContentRows").empty();
        $("#tylerResolvedSummaryRows1").empty();
        $("#tylerResolvedSummaryRows2").empty();
        $("#tylerResolvedSummaryRows3").empty();
        $("#tylerResolvedSummaryRows4").empty();
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").show();
        var theDate = $("#dateSearch").val();
        tylerNumbers(theDate);
    });

});

function tylerNumbers(theDate) {
    tylerGetAntivirus(theDate);

}

function tylerGetAntivirus(theDate) {
    tylerGetAVP1(theDate);


    function tylerGetAVP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerTotalAntivirus = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;
                    tylerFinalTotal = 0;
                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;

                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAVP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAVP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAVP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAVP10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;

                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAVP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAVP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalAntivirus = tylerTotalAntivirus + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetApps(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }

}

function tylerGetApps(theDate) {
    tylerGetAPP1(theDate);

    function tylerGetAPP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    tylerTotalApplications = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAPP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAPP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetAPP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalApplications = tylerTotalApplications + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetAPP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetAPP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalApplications = tylerTotalApplications + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetCitrix(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetCitrix(theDate) {
    tylerGetCitrix1(theDate);

    function tylerGetCitrix1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerTotalCitrix = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetCitrix3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetCitrix4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetCitrix5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    tylerGetCitrix10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetCitrix10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetCitrix10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalCitrix = tylerTotalCitrix + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetImage(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetImage(theDate) {
    tylerGetImage1(theDate);

    function tylerGetImage1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerTotalImage = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetImage3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetImage4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetImage5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetImage10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalImage = tylerTotalImage + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetImage10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetImage10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalImage = tylerTotalImage + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetNetwork(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
}

function tylerGetNetwork(theDate) {
    tylerGetNetwork1(theDate);

    function tylerGetNetwork1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerTotalNetwork = 0;
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNetwork3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNetwork4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNetwork5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNetwork10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNetwork10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNetwork10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalNetwork = tylerTotalNetwork + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetNewUser(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetNewUser(theDate) {
    tylerGetNewUser1(theDate);

    function tylerGetNewUser1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerTotalNewUser = 0;
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNewUser3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNewUser4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetNewUser5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetNewUser10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetNewUser10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetNewUser10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalNewUser = tylerTotalNewUser + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetPasswords(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetPasswords(theDate) {
    tylerGetPasswords1(theDate);

    function tylerGetPasswords1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerTotalPasswords = 0;
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPasswords3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPasswords4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPasswords5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPasswords10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPasswords10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPasswords10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalPasswords = tylerTotalPasswords + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetPCPhone(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetPCPhone(theDate) {
    tylerGetPCPhone1(theDate);

    function tylerGetPCPhone1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;
                    tylerTotalPCs = 0;
                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPCPhone3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPCPhone4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPCPhone5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPCPhone10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPCs = tylerTotalPCs + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPCPhone10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPCPhone10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalPCs = tylerTotalPCs + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });

                tylerGetProfile(theDate);
                
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetProfile(theDate) {
    tylerGetProfile1(theDate);

    function tylerGetProfile1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;
                    tylerTotalProfiles = 0;
                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetProfile3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetProfile4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetProfile5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetProfile10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetProfile10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetProfile10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalProfiles = tylerTotalProfiles + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });

                tylerGetPrinter(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetPrinter(theDate) {
    tylerGetPrinter1(theDate);

    function tylerGetPrinter1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;
                    tylerTotalPrinters = 0;
                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPrinter3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPrinter4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetPrinter5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetPrinter10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetPrinter10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetPrinter10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalPrinters = tylerTotalPrinters + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetWebsites(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetWebsites(theDate) {
    tylerGetWebsites1(theDate);

    function tylerGetWebsites1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;
                    tylerTotalWebsites = 0;
                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetWebsites3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetWebsites4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetWebsites5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetWebsites10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetWebsites10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetWebsites10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalWebsites = tylerTotalWebsites + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }

                    });
                tylerGetOther(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}

function tylerGetOther(theDate) {
    tylerGetOthers1(theDate);

    function tylerGetOthers1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;
                    tylerTotalOther = 0;
                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetOthers3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetOthers4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });
    }
    function tylerGetOthers5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    tylerGetOthers10(theDate);
                } else {
                    tylerResolvedLength = 0;

                    tylerTotalOther = tylerTotalOther + data.results.length;
                    tylerFinalTotal = tylerFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (tylerResolvedLength < data.results.length) {
                                var ticketNumber = data.results[tylerResolvedLength].id;
                                var subject = data.results[tylerResolvedLength].subject;
                                var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#tylerResolvedContentRows").append(row);
                                tylerResolvedLength++;
                            }

                        });
                    tylerGetOthers10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
    function tylerGetOthers10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19001766755\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                tylerResolvedLength = 0;

                tylerTotalOther = tylerTotalOther + data.results.length;
                tylerFinalTotal = tylerFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (tylerResolvedLength < data.results.length) {
                            var ticketNumber = data.results[tylerResolvedLength].id;
                            var subject = data.results[tylerResolvedLength].subject;
                            var row = '<tr id="' + data.results[tylerResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[tylerResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tartylerGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#tylerResolvedContentRows").append(row);
                            tylerResolvedLength++;
                        }
                    });

                var row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + tylerTotalAntivirus + '</td><td>' + tylerTotalApplications + '</td><td>' + tylerTotalCitrix + '</td></tr>';
                $("#tylerResolvedSummaryRows1").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + tylerTotalImage + '</td><td>' + tylerTotalNetwork + '</td><td>' + tylerTotalNewUser + '</td></tr>';
                $("#tylerResolvedSummaryRows2").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + tylerTotalPasswords + '</td><td>' + tylerTotalPCs + '</td><td>' + tylerTotalPrinters + '</td></tr>';
                $("#tylerResolvedSummaryRows3").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + tylerTotalProfiles + '</td><td>' + tylerTotalWebsites + '</td><td>' + tylerTotalOther + '</td></tr>';
                $("#tylerResolvedSummaryRows4").append(row);
                $("#tylerTotalResolved").html("Tyler: "+ tylerFinalTotal);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't tylerGet resolved tickets");
            }
        });

    }
}