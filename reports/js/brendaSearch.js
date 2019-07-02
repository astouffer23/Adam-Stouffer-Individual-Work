var brendaResolvedLength = 0;
var brendaTotalAntivirus = 0;
var brendaTotalApplications = 0;
var brendaTotalCitrix = 0;
var brendaTotalNetwork = 0;
var brendaTotalImage = 0;
var brendaTotalNewUser = 0;
var brendaTotalPasswords = 0;
var brendaFinalTotal = 0;
var brendaTotalPCs = 0;
var brendaTotalProfiles = 0;
var brendaTotalPrinters = 0;
var brendaTotalWebsites = 0;
var brendaTotalOther = 0;

$(document).ready(function () {
    $("#fromDateSubmit").click(function () {

        $("#individualResolvedSummary").hide();
        $("#brendaResolvedSummary").hide();
        $("#refreshDiv").show();
        $("#resolvedSummary").hide();
        $("#totalResCount").html("");
        $("#brendaResolvedContentRows").empty();
        $("#jakeResolvedContentRows").empty();
        $("#tylerResolvedContentRows").empty();
        $("#unassignedResolvedContentRows").empty();
        $("#brendaResolvedSummaryRows1").empty();
        $("#brendaResolvedSummaryRows2").empty();
        $("#brendaResolvedSummaryRows3").empty();
        $("#brendaResolvedSummaryRows4").empty();
        $("#allTickets").hide();
        $("#numbersBar").hide();
        $("#pendingTickets").hide();
        $("#openTickets").hide();
        $("#sentToTickets").hide();
        $("#newTickets").hide();
        $("#resolvedTickets").hide();
        $("#resolvedByDate").show();
        var theDate = $("#dateSearch").val();
        brendaNumbers(theDate);
    });

});

function brendaNumbers(theDate) {
    brendaResolvedLength = 0;
    brendaTotalAntivirus = 0;
    brendaTotalApplications = 0;
    brendaTotalCitrix = 0;
    brendaTotalNetwork = 0;
    brendaTotalImage = 0;
    brendaTotalNewUser = 0;
    brendaTotalPasswords = 0;
    brendaFinalTotal = 0;
    brendaTotalPCs = 0;
    brendaTotalProfiles = 0;
    brendaTotalPrinters = 0;
    brendaTotalWebsites = 0;
    brendaTotalOther = 0;
    brendaGetAntivirus(theDate);

}

function brendaGetAntivirus(theDate) {
    brendaGetAVP1(theDate);


    function brendaGetAVP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaTotalAntivirus = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;
                    brendaFinalTotal = 0;
                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;

                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAVP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAVP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAVP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAVP10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;

                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAVP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAVP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Antivirus' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalAntivirus = brendaTotalAntivirus + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetApps(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }

}

function brendaGetApps(theDate) {
    brendaGetAPP1(theDate);

    function brendaGetAPP1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    brendaTotalApplications = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAPP3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAPP4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetAPP5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetAPP10(theDate);
                } else {
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalApplications = brendaTotalApplications + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetAPP10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetAPP10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Applications' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalApplications = brendaTotalApplications + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetCitrix(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetCitrix(theDate) {
    brendaGetCitrix1(theDate);

    function brendaGetCitrix1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaTotalCitrix = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetCitrix3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetCitrix4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetCitrix5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {

                if (data.results.length < 1) {
                    brendaGetCitrix10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetCitrix10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetCitrix10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Citrix' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalCitrix = brendaTotalCitrix + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetImage(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetImage(theDate) {
    brendaGetImage1(theDate);

    function brendaGetImage1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaTotalImage = 0;
                    //totalResolvedLength = totalResolvedLength + data.results.length;
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetImage3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetImage4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetImage5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetImage10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalImage = brendaTotalImage + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetImage10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetImage10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Image_Migration' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalImage = brendaTotalImage + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetNetwork(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
}

function brendaGetNetwork(theDate) {
    brendaGetNetwork1(theDate);

    function brendaGetNetwork1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaTotalNetwork = 0;
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNetwork3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNetwork4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNetwork5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNetwork10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNetwork10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNetwork10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Networking' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalNetwork = brendaTotalNetwork + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetNewUser(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetNewUser(theDate) {
    brendaGetNewUser1(theDate);

    function brendaGetNewUser1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaTotalNewUser = 0;
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNewUser3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNewUser4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetNewUser5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetNewUser10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetNewUser10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetNewUser10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'New_User_Setup' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalNewUser = brendaTotalNewUser + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetPasswords(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetPasswords(theDate) {
    brendaGetPasswords1(theDate);

    function brendaGetPasswords1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaTotalPasswords = 0;
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords3(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPasswords3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPasswords4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPasswords5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPasswords10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPasswords10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPasswords10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Passwords' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalPasswords = brendaTotalPasswords + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetPCPhone(theDate);

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetPCPhone(theDate) {
    brendaGetPCPhone1(theDate);

    function brendaGetPCPhone1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;
                    brendaTotalPCs = 0;
                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPCPhone3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPCPhone4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPCPhone5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPCPhone10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPCs = brendaTotalPCs + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPCPhone10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPCPhone10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'PC_Phone_Tablet' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalPCs = brendaTotalPCs + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });

                brendaGetProfile(theDate);
                
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetProfile(theDate) {
    brendaGetProfile1(theDate);

    function brendaGetProfile1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;
                    brendaTotalProfiles = 0;
                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetProfile3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetProfile4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetProfile5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetProfile10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetProfile10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetProfile10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Profile_Change' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalProfiles = brendaTotalProfiles + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });

                brendaGetPrinter(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetPrinter(theDate) {
    brendaGetPrinter1(theDate);

    function brendaGetPrinter1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;
                    brendaTotalPrinters = 0;
                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPrinter3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPrinter4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetPrinter5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetPrinter10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetPrinter10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetPrinter10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Printer_Scanner' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalPrinters = brendaTotalPrinters + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetWebsites(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetWebsites(theDate) {
    brendaGetWebsites1(theDate);

    function brendaGetWebsites1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;
                    brendaTotalWebsites = 0;
                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetWebsites3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetWebsites4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetWebsites5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetWebsites10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetWebsites10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetWebsites10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Websites' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalWebsites = brendaTotalWebsites + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }

                    });
                brendaGetOther(theDate);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}

function brendaGetOther(theDate) {
    brendaGetOthers1(theDate);

    function brendaGetOthers1(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=1",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;
                    brendaTotalOther = 0;
                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers2(theDate);
                }

            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers2(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=2",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers3(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetOthers3(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=3",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers4(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetOthers4(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=4",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers5(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });
    }
    function brendaGetOthers5(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=5",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers6(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers6(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=6",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers7(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers7(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=7",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers8(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers8(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=8",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers9(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers9(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=9",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                if (data.results.length < 1) {
                    brendaGetOthers10(theDate);
                } else {
                    brendaResolvedLength = 0;

                    brendaTotalOther = brendaTotalOther + data.results.length;
                    brendaFinalTotal = brendaFinalTotal + data.results.length;
                    $.each(data,
                        function () {
                            while (brendaResolvedLength < data.results.length) {
                                var ticketNumber = data.results[brendaResolvedLength].id;
                                var subject = data.results[brendaResolvedLength].subject;
                                var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                                row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                                $("#brendaResolvedContentRows").append(row);
                                brendaResolvedLength++;
                            }

                        });
                    brendaGetOthers10(theDate);
                }
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
    function brendaGetOthers10(theDate) {
        $.ajax({
            type: 'GET',
            url: "https://weathershield.freshdesk.com/api/v2/search/tickets?query=\"(cf_category:" + 'Other' + "\%20AND%20agent_id:19000197788\%20AND%20status:4\%20AND%20group_id:19000050000\%20AND%20updated_at:>'" + theDate + "')\"&page=10",
            dataType: 'json',
            contentType: 'application/json',
            beforeSend: function (xhr) {
                xhr.setRequestHeader("Authorization", "Basic " + btoa("1UcHqZ55eqKRqAUuNTY"));
            },
            success: function (data) {
                brendaResolvedLength = 0;

                brendaTotalOther = brendaTotalOther + data.results.length;
                brendaFinalTotal = brendaFinalTotal + data.results.length;
                $.each(data,
                    function () {
                        while (brendaResolvedLength < data.results.length) {
                            var ticketNumber = data.results[brendaResolvedLength].id;
                            var subject = data.results[brendaResolvedLength].subject;
                            var row = '<tr id="' + data.results[brendaResolvedLength].id + '" style="font-weight:bold">';
                            row += '<td>' + data.results[brendaResolvedLength].custom_fields.cf_category + '</td><td>' + '<a href="https://weathershield.freshdesk.com/a/tickets/' + ticketNumber + ' tarbrendaGet="_blank">' + ticketNumber + '</a></td><td><h7 style=' + "cursor:pointer" + ' onclick=' + 'resInfoDisplay(' + ticketNumber + ')' + '>' + subject + '</h7></td></tr>';
                            $("#brendaResolvedContentRows").append(row);
                            brendaResolvedLength++;
                        }
                    });

                $("#refreshDiv").hide();
                $("#refreshedDiv").show();
                $("#refreshedDiv").delay(1000).slideUp();
                $("#brendaResolvedSummary").show();
                var row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + brendaTotalAntivirus + '</td><td>' + brendaTotalApplications + '</td><td>' + brendaTotalCitrix + '</td></tr>';
                $("#brendaResolvedSummaryRows1").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + brendaTotalImage + '</td><td>' + brendaTotalNetwork + '</td><td>' + brendaTotalNewUser + '</td></tr>';
                $("#brendaResolvedSummaryRows2").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + brendaTotalPasswords + '</td><td>' + brendaTotalPCs + '</td><td>' + brendaTotalPrinters + '</td></tr>';
                $("#brendaResolvedSummaryRows3").append(row);
                row = '<tr style="font-weight:bold; text-align:center">';
                row += '<td>' + brendaTotalProfiles + '</td><td>' + brendaTotalWebsites + '</td><td>' + brendaTotalOther + '</td></tr>';
                $("#brendaResolvedSummaryRows4").append(row);
                $("#brendaTotalResolved").html("Brenda: "+ brendaFinalTotal);
            },
            error: function () {
                alert("Try again or call Adam. Couldn't brendaGet resolved tickets");
            }
        });

    }
}