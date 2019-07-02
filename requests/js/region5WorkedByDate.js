var workedOnRegion5Orders = 0;
var workedOnRegion5Quotes = 0;
var workedOnRegion5Reorder = 0;
var workedOnRegion5ServiceParts = 0;
var workedOnRegion5ServiceRequest = 0;
var workedOnRegion5Manufacturing = 0;
var workedOnRegion5Change = 0;
var workedOnRegion5Rush = 0;
var workedOnRegion5Discount = 0;
var workedOnRegion5Credit = 0;
var workedOnRegion5Menards = 0;
var workedOnRegion5CustomerInquiry = 0;
var workedOnRegion5Helpdesk = 0;
var workedOnRegion5SocialMedia = 0;
var workedOnRegion5WSOSRequest = 0;
var workedOnRegion5AlysBeach = 0;
var workedNotMarkedR5 = 0;

var iWorkedR5 = 0;

var worked_on = {
    worked_on: "worked_on"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R5P1Worked();
    });
});


function validateResultsR5Worked(data) {
    if (data.results[iWorkedR5].type === "Quote") {
        workedOnRegion5Quotes++;
    }
    if (data.results[iWorkedR5].type === "Order") {
        workedOnRegion5Orders++;
    }
    if (data.results[iWorkedR5].type === "Reorder") {
        workedOnRegion5Reorder++;
    }
    if (data.results[iWorkedR5].type === "Service Parts") {
        workedOnRegion5ServiceParts++;
    }
    if (data.results[iWorkedR5].type === "Service Request") {
        workedOnRegion5ServiceRequest++;
    }
    if (data.results[iWorkedR5].type === "Manufacturing") {
        workedOnRegion5Manufacturing++;
    }
    if (data.results[iWorkedR5].type === "Rush") {
        workedOnRegion5Rush++;
    }
    if (data.results[iWorkedR5].type === "Discount") {
        workedOnRegion5Discount++;
    }
    if (data.results[iWorkedR5].type === "Menards \ Crestline Request") {
        workedOnRegion5Menards++;
    }
    if (data.results[iWorkedR5].type === "Customer Inquiry") {
        workedOnRegion5CustomerInquiry++;
    }
    if (data.results[iWorkedR5].type === "Internal Helpdesk Request") {
        workedOnRegion5Helpdesk++;
    }
    if (data.results[iWorkedR5].type === "Social Media") {
        workedOnRegion5SocialMedia++;
    }
    if (data.results[iWorkedR5].type === "WSOneSourceRequest") {
        workedOnRegion5WSOSRequest++;
    }
    if (data.results[iWorkedR5].type === "Alys Beach") {
        workedOnRegion5AlysBeach++;
    }
    if (data.results[iWorkedR5].type === "Change") {
        workedOnRegion5Change++;
    }
    if (data.results[iWorkedR5].type === "Credit") {
        workedOnRegion5Credit++;
    }
    if (data.results[iWorkedR5].type === null) {
        workedNotMarkedR5++;
    }
    iWorkedR5++;

}

function getByDate1R5P1Worked() {
    $('#r5workedQuotes').html("").css('color', 'white');
    $('#r5workedOrders').html("").css('color', 'white');
    $('#r5workedReorders').html("").css('color', 'white');
    $('#r5workedServiceRequest').html("").css('color', 'white');
    $('#r5workedServiceParts').html("").css('color', 'white');
    $('#r5workedChange').html("").css('color', 'white');
    $('#r5workedDiscount').html("").css('color', 'white');
    $('#r5workedCredit').html("").css('color', 'white');
    $('#r5workedManufacturing').html("").css('color', 'white');
    $('#r5workedRush').html("").css('color', 'white');
    $('#r5workedMenards').html("").css('color', 'white');
    $('#r5workedCustomerInquiry').html("").css('color', 'white');
    $('#r5workedHelpdesk').html("").css('color', 'white');
    $('#r5workedWSOS').html("").css('color', 'white');
    $('#r5workedSocialMedia').html("").css('color', 'white');
    $('#r5workedAlys').html("").css('color', 'white');
    $('#r5workedNoTag').html("").css('color', 'white');
    $('#r5allWorked').html("").css('color', 'white');
    $('#region5ContainerWorked').show();
    $('#h25Worked').css("color", "red").html("Loading");
    workedOnRegion5Orders = 0;
    workedOnRegion5Quotes = 0;
    workedOnRegion5Reorder = 0;
    workedOnRegion5ServiceParts = 0;
    workedOnRegion5ServiceRequest = 0;
    workedOnRegion5Manufacturing = 0;
    workedOnRegion5Change = 0;
    workedOnRegion5Rush = 0;
    workedOnRegion5Discount = 0;
    workedOnRegion5Credit = 0;
    workedOnRegion5Menards = 0;
    workedOnRegion5CustomerInquiry = 0;
    workedOnRegion5Helpdesk = 0;
    workedOnRegion5SocialMedia = 0;
    workedOnRegion5WSOSRequest = 0;
    workedOnRegion5AlysBeach = 0;
    workedNotMarkedR5 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR5 < data.results.length) {
                        validateResultsR5Worked(data);
                    }
                });
            iWorkedR5 = 0;
            getByDate1R5P2Worked(enteredDate);
        },
        error: function () {
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R5P2Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR5 < data.results.length) {
                        validateResultsR5Worked(data);
                    }
                });
            iWorkedR5 = 0;
            getByDate1R5P3Worked(enteredDate);
        },
        error: function () {
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R5P3Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR5 < data.results.length) {
                        validateResultsR5Worked(data);
                    }
                });
            iWorkedR5 = 0;
            getByDate1R5P4Worked(enteredDate);
        },
        error: function () {
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R5P4Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR5 < data.results.length) {
                        validateResultsR5Worked(data);
                    }
                });
            iWorkedR5 = 0;
            getByDate1R5P5Worked(enteredDate);
        },
        error: function () {
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R5P5Worked() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR5 < data.results.length) {
                        validateResultsR5Worked(data);
                    }
                });
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        },
        error: function () {
            iWorkedR5 = 0;
            showr5OldDataWorked(enteredDate);
        }
    });
}






function showr5OldDataWorked(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var workedIntquoter5 = parseInt(workedOnRegion5Quotes);
    var workedIntorderr5 = parseInt(workedOnRegion5Orders);
    var workedIntreorderr5 = parseInt(workedOnRegion5Reorder);
    var workedIntServiceRequestr5 = parseInt(workedOnRegion5ServiceRequest);
    var workedIntServicePartsr5 = parseInt(workedOnRegion5ServiceParts);
    var workedIntChanger5 = parseInt(workedOnRegion5Change);
    var workedIntDiscountr5 = parseInt(workedOnRegion5Discount);
    var workedIntCreditr5 = parseInt(workedOnRegion5Credit);
    var workedIntManufacturingr5 = parseInt(workedOnRegion5Manufacturing);
    var workedIntRushr5 = parseInt(workedOnRegion5Rush);
    var workedIntMenardsr5 = parseInt(workedOnRegion5Menards);
    var workedIntCustomerInquiryr5 = parseInt(workedOnRegion5CustomerInquiry);
    var workedIntHelpdeskr5 = parseInt(workedOnRegion5Helpdesk);
    var workedIntWsosr5 = parseInt(workedOnRegion5WSOSRequest);
    var workedIntAlysr5 = parseInt(workedOnRegion5AlysBeach);
    var workedIntNoTagR5 = parseInt(workedNotMarkedR5);
    var workedIntTotalr5 = workedIntquoter5 + workedIntorderr5 + workedIntreorderr5 + workedIntServiceRequestr5 + workedIntServicePartsr5 + workedIntChanger5 +
        workedIntDiscountr5 + workedIntCreditr5 + workedIntManufacturingr5 +
        workedIntRushr5 + workedIntMenardsr5 + workedIntCustomerInquiryr5 + workedIntHelpdeskr5 + workedIntWsosr5 + workedIntAlysr5 + workedIntNoTagR5;
    $('#r5workedQuotes').html("    " + workedOnRegion5Quotes);
    $('#r5workedOrders').html("    " + workedOnRegion5Orders);
    $('#r5workedReorders').html("    " + workedOnRegion5Reorder);
    $('#r5workedServiceRequest').html("    " + workedOnRegion5ServiceRequest);
    $('#r5workedServiceParts').html("    " + workedOnRegion5ServiceParts);
    $('#r5workedChange').html("    " + workedOnRegion5Change);
    $('#r5workedDiscount').html("    " + workedOnRegion5Discount);
    $('#r5workedCredit').html("    " + workedOnRegion5Credit);
    $('#r5workedManufacturing').html("    " + workedOnRegion5Manufacturing);
    $('#r5workedRush').html("    " + workedOnRegion5Rush);
    $('#r5workedMenards').html("    " + workedOnRegion5Menards);
    $('#r5workedCustomerInquiry').html("    " + workedOnRegion5CustomerInquiry);
    $('#r5workedHelpdesk').html("    " + workedOnRegion5Helpdesk);
    $('#r5workedWSOS').html("    " + workedOnRegion5WSOSRequest);
    $('#r5workedSocialMedia').html("    " + workedOnRegion5SocialMedia);
    $('#r5workedAlys').html("    " + workedOnRegion5AlysBeach);
    if (workedIntNoTagR5 > 0) {
        $('#r5workedNoTag').html("    " + workedNotMarkedR5).css('color', 'red');
    } else {
        $('#r5workedNoTag').html("    " + workedNotMarkedR5); 
    }
    $('#r5allWorked').html(workedIntTotalr5).val();
    $('#h25Worked').css('color', '#42f459').contents().first().replaceWith('Total Worked Per Day (shows by date last updated)');
}