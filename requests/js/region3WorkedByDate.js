var workedOnRegion3Orders = 0;
var workedOnRegion3Quotes = 0;
var workedOnRegion3Reorder = 0;
var workedOnRegion3ServiceParts = 0;
var workedOnRegion3ServiceRequest = 0;
var workedOnRegion3Manufacturing = 0;
var workedOnRegion3Change = 0;
var workedOnRegion3Rush = 0;
var workedOnRegion3Discount = 0;
var workedOnRegion3Credit = 0;
var workedOnRegion3Menards = 0;
var workedOnRegion3CustomerInquiry = 0;
var workedOnRegion3Helpdesk = 0;
var workedOnRegion3SocialMedia = 0;
var workedOnRegion3WSOSRequest = 0;
var workedOnRegion3AlysBeach = 0;
var workedNotMarkedR3 = 0;

var iWorkedR3 = 0;

var worked_on = {
    worked_on: "worked_on"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R3P1Worked();
    });
});


function validateResultsR3Worked(data) {
    if (data.results[iWorkedR3].type === "Quote") {
        workedOnRegion3Quotes++;
    }
    if (data.results[iWorkedR3].type === "Order") {
        workedOnRegion3Orders++;
    }
    if (data.results[iWorkedR3].type === "Reorder") {
        workedOnRegion3Reorder++;
    }
    if (data.results[iWorkedR3].type === "Service Parts") {
        workedOnRegion3ServiceParts++;
    }
    if (data.results[iWorkedR3].type === "Service Request") {
        workedOnRegion3ServiceRequest++;
    }
    if (data.results[iWorkedR3].type === "Manufacturing") {
        workedOnRegion3Manufacturing++;
    }
    if (data.results[iWorkedR3].type === "Rush") {
        workedOnRegion3Rush++;
    }
    if (data.results[iWorkedR3].type === "Discount") {
        workedOnRegion3Discount++;
    }
    if (data.results[iWorkedR3].type === "Menards \ Crestline Request") {
        workedOnRegion3Menards++;
    }
    if (data.results[iWorkedR3].type === "Customer Inquiry") {
        workedOnRegion3CustomerInquiry++;
    }
    if (data.results[iWorkedR3].type === "Internal Helpdesk Request") {
        workedOnRegion3Helpdesk++;
    }
    if (data.results[iWorkedR3].type === "Social Media") {
        workedOnRegion3SocialMedia++;
    }
    if (data.results[iWorkedR3].type === "WSOneSourceRequest") {
        workedOnRegion3WSOSRequest++;
    }
    if (data.results[iWorkedR3].type === "Alys Beach") {
        workedOnRegion3AlysBeach++;
    }
    if (data.results[iWorkedR3].type === "Change") {
        workedOnRegion3Change++;
    }
    if (data.results[iWorkedR3].type === "Credit") {
        workedOnRegion3Credit++;
    }
    if (data.results[iWorkedR3].type === null) {
        workedNotMarkedR3++;
    }
    iWorkedR3++;

}

function getByDate1R3P1Worked() {
    $('#r3workedQuotes').html("").css('color', 'white');
    $('#r3workedOrders').html("").css('color', 'white');
    $('#r3workedReorders').html("").css('color', 'white');
    $('#r3workedServiceRequest').html("").css('color', 'white');
    $('#r3workedServiceParts').html("").css('color', 'white');
    $('#r3workedChange').html("").css('color', 'white');
    $('#r3workedDiscount').html("").css('color', 'white');
    $('#r3workedCredit').html("").css('color', 'white');
    $('#r3workedManufacturing').html("").css('color', 'white');
    $('#r3workedRush').html("").css('color', 'white');
    $('#r3workedMenards').html("").css('color', 'white');
    $('#r3workedCustomerInquiry').html("").css('color', 'white');
    $('#r3workedHelpdesk').html("").css('color', 'white');
    $('#r3workedWSOS').html("").css('color', 'white');
    $('#r3workedSocialMedia').html("").css('color', 'white');
    $('#r3workedAlys').html("").css('color', 'white');
    $('#r3workedNoTag').html("").css('color', 'white');
    $('#r3allWorked').html("").css('color', 'white');
    $('#region3ContainerWorked').show();
    $('#h23Worked').css("color", "red").html("Loading");
    workedOnRegion3Orders = 0;
    workedOnRegion3Quotes = 0;
    workedOnRegion3Reorder = 0;
    workedOnRegion3ServiceParts = 0;
    workedOnRegion3ServiceRequest = 0;
    workedOnRegion3Manufacturing = 0;
    workedOnRegion3Change = 0;
    workedOnRegion3Rush = 0;
    workedOnRegion3Discount = 0;
    workedOnRegion3Credit = 0;
    workedOnRegion3Menards = 0;
    workedOnRegion3CustomerInquiry = 0;
    workedOnRegion3Helpdesk = 0;
    workedOnRegion3SocialMedia = 0;
    workedOnRegion3WSOSRequest = 0;
    workedOnRegion3AlysBeach = 0;
    workedNotMarkedR3 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR3 < data.results.length) {
                        validateResultsR3Worked(data);
                    }
                });
            iWorkedR3 = 0;
            getByDate1R3P2Worked(enteredDate);
        },
        error: function () {
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R3P2Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR3 < data.results.length) {
                        validateResultsR3Worked(data);
                    }
                });
            iWorkedR3 = 0;
            getByDate1R3P3Worked(enteredDate);
        },
        error: function () {
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R3P3Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR3 < data.results.length) {
                        validateResultsR3Worked(data);
                    }
                });
            iWorkedR3 = 0;
            getByDate1R3P4Worked(enteredDate);
        },
        error: function () {
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R3P4Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR3 < data.results.length) {
                        validateResultsR3Worked(data);
                    }
                });
            iWorkedR3 = 0;
            getByDate1R3P5Worked(enteredDate);
        },
        error: function () {
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R3P5Worked() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR3 < data.results.length) {
                        validateResultsR3Worked(data);
                    }
                });
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        },
        error: function () {
            iWorkedR3 = 0;
            showr3OldDataWorked(enteredDate);
        }
    });
}






function showr3OldDataWorked(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var workedIntquoter3 = parseInt(workedOnRegion3Quotes);
    var workedIntorderr3 = parseInt(workedOnRegion3Orders);
    var workedIntreorderr3 = parseInt(workedOnRegion3Reorder);
    var workedIntServiceRequestr3 = parseInt(workedOnRegion3ServiceRequest);
    var workedIntServicePartsr3 = parseInt(workedOnRegion3ServiceParts);
    var workedIntChanger3 = parseInt(workedOnRegion3Change);
    var workedIntDiscountr3 = parseInt(workedOnRegion3Discount);
    var workedIntCreditr3 = parseInt(workedOnRegion3Credit);
    var workedIntManufacturingr3 = parseInt(workedOnRegion3Manufacturing);
    var workedIntRushr3 = parseInt(workedOnRegion3Rush);
    var workedIntMenardsr3 = parseInt(workedOnRegion3Menards);
    var workedIntCustomerInquiryr3 = parseInt(workedOnRegion3CustomerInquiry);
    var workedIntHelpdeskr3 = parseInt(workedOnRegion3Helpdesk);
    var workedIntWsosr3 = parseInt(workedOnRegion3WSOSRequest);
    var workedIntAlysr3 = parseInt(workedOnRegion3AlysBeach);
    var workedIntNoTagR3 = parseInt(workedNotMarkedR3);
    var workedIntTotalr3 = workedIntquoter3 + workedIntorderr3 + workedIntreorderr3 + workedIntServiceRequestr3 + workedIntServicePartsr3 + workedIntChanger3 +
        workedIntDiscountr3 + workedIntCreditr3 + workedIntManufacturingr3 +
        workedIntRushr3 + workedIntMenardsr3 + workedIntCustomerInquiryr3 + workedIntHelpdeskr3 + workedIntWsosr3 + workedIntAlysr3 + workedIntNoTagR3;
    $('#r3workedQuotes').html("    " + workedOnRegion3Quotes);
    $('#r3workedOrders').html("    " + workedOnRegion3Orders);
    $('#r3workedReorders').html("    " + workedOnRegion3Reorder);
    $('#r3workedServiceRequest').html("    " + workedOnRegion3ServiceRequest);
    $('#r3workedServiceParts').html("    " + workedOnRegion3ServiceParts);
    $('#r3workedChange').html("    " + workedOnRegion3Change);
    $('#r3workedDiscount').html("    " + workedOnRegion3Discount);
    $('#r3workedCredit').html("    " + workedOnRegion3Credit);
    $('#r3workedManufacturing').html("    " + workedOnRegion3Manufacturing);
    $('#r3workedRush').html("    " + workedOnRegion3Rush);
    $('#r3workedMenards').html("    " + workedOnRegion3Menards);
    $('#r3workedCustomerInquiry').html("    " + workedOnRegion3CustomerInquiry);
    $('#r3workedHelpdesk').html("    " + workedOnRegion3Helpdesk);
    $('#r3workedWSOS').html("    " + workedOnRegion3WSOSRequest);
    $('#r3workedSocialMedia').html("    " + workedOnRegion3SocialMedia);
    $('#r3workedAlys').html("    " + workedOnRegion3AlysBeach);
    if (workedIntNoTagR3 > 0) {
        $('#r3workedNoTag').html("    " + workedNotMarkedR3).css('color', 'red');
    } else {
        $('#r3workedNoTag').html("    " + workedNotMarkedR3);
    }
    $('#r3allWorked').html(workedIntTotalr3).val();
    $('#h23Worked').css('color', '#42f459').contents().first().replaceWith('Total Worked Per Day (shows by date last updated)');
}