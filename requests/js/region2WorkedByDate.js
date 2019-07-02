var workedOnRegion2Orders = 0;
var workedOnRegion2Quotes = 0;
var workedOnRegion2Reorder = 0;
var workedOnRegion2ServiceParts = 0;
var workedOnRegion2ServiceRequest = 0;
var workedOnRegion2Manufacturing = 0;
var workedOnRegion2Change = 0;
var workedOnRegion2Rush = 0;
var workedOnRegion2Discount = 0;
var workedOnRegion2Credit = 0;
var workedOnRegion2Menards = 0;
var workedOnRegion2CustomerInquiry = 0;
var workedOnRegion2Helpdesk = 0;
var workedOnRegion2SocialMedia = 0;
var workedOnRegion2WSOSRequest = 0;
var workedOnRegion2AlysBeach = 0;
var workedNotMarkedR2 = 0;

var iWorkedR2 = 0;

var worked_on = {
    worked_on: "worked_on"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R2P1Worked();
    });
});


function validateResultsR2Worked(data) {
    if (data.results[iWorkedR2].type === "Quote") {
        workedOnRegion2Quotes++;
    }
    if (data.results[iWorkedR2].type === "Order") {
        workedOnRegion2Orders++;
    }
    if (data.results[iWorkedR2].type === "Reorder") {
        workedOnRegion2Reorder++;
    }
    if (data.results[iWorkedR2].type === "Service Parts") {
        workedOnRegion2ServiceParts++;
    }
    if (data.results[iWorkedR2].type === "Service Request") {
        workedOnRegion2ServiceRequest++;
    }
    if (data.results[iWorkedR2].type === "Manufacturing") {
        workedOnRegion2Manufacturing++;
    }
    if (data.results[iWorkedR2].type === "Rush") {
        workedOnRegion2Rush++;
    }
    if (data.results[iWorkedR2].type === "Discount") {
        workedOnRegion2Discount++;
    }
    if (data.results[iWorkedR2].type === "Menards \ Crestline Request") {
        workedOnRegion2Menards++;
    }
    if (data.results[iWorkedR2].type === "Customer Inquiry") {
        workedOnRegion2CustomerInquiry++;
    }
    if (data.results[iWorkedR2].type === "Internal Helpdesk Request") {
        workedOnRegion2Helpdesk++;
    }
    if (data.results[iWorkedR2].type === "Social Media") {
        workedOnRegion2SocialMedia++;
    }
    if (data.results[iWorkedR2].type === "WSOneSourceRequest") {
        workedOnRegion2WSOSRequest++;
    }
    if (data.results[iWorkedR2].type === "Alys Beach") {
        workedOnRegion2AlysBeach++;
    }
    if (data.results[iWorkedR2].type === "Change") {
        workedOnRegion2Change++;
    }
    if (data.results[iWorkedR2].type === "Credit") {
        workedOnRegion2Credit++;
    }
    if (data.results[iWorkedR2].type === null) {
        workedNotMarkedR2++;
    }
    iWorkedR2++;

}

function getByDate1R2P1Worked() {
    $('#r2workedQuotes').html("").css('color', 'white');
    $('#r2workedOrders').html("").css('color', 'white');
    $('#r2workedReorders').html("").css('color', 'white');
    $('#r2workedServiceRequest').html("").css('color', 'white');
    $('#r2workedServiceParts').html("").css('color', 'white');
    $('#r2workedChange').html("").css('color', 'white');
    $('#r2workedDiscount').html("").css('color', 'white');
    $('#r2workedCredit').html("").css('color', 'white');
    $('#r2workedManufacturing').html("").css('color', 'white');
    $('#r2workedRush').html("").css('color', 'white');
    $('#r2workedMenards').html("").css('color', 'white');
    $('#r2workedCustomerInquiry').html("").css('color', 'white');
    $('#r2workedHelpdesk').html("").css('color', 'white');
    $('#r2workedWSOS').html("").css('color', 'white');
    $('#r2workedSocialMedia').html("").css('color', 'white');
    $('#r2workedAlys').html("").css('color', 'white');
    $('#r2workedNoTag').html("").css('color', 'white');
    $('#r2allWorked').html("").css('color', 'white');
    $('#region2ContainerWorked').show();
    $('#h22Worked').css("color", "red").html("Loading");
    workedOnRegion2Orders = 0;
    workedOnRegion2Quotes = 0;
    workedOnRegion2Reorder = 0;
    workedOnRegion2ServiceParts = 0;
    workedOnRegion2ServiceRequest = 0;
    workedOnRegion2Manufacturing = 0;
    workedOnRegion2Change = 0;
    workedOnRegion2Rush = 0;
    workedOnRegion2Discount = 0;
    workedOnRegion2Credit = 0;
    workedOnRegion2Menards = 0;
    workedOnRegion2CustomerInquiry = 0;
    workedOnRegion2Helpdesk = 0;
    workedOnRegion2SocialMedia = 0;
    workedOnRegion2WSOSRequest = 0;
    workedOnRegion2AlysBeach = 0;
    workedNotMarkedR2 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048209\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR2 < data.results.length) {
                        validateResultsR2Worked(data);
                    }
                });
            iWorkedR2 = 0;
            getByDate1R2P2Worked(enteredDate);
        },
        error: function () {
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R2P2Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048209\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR2 < data.results.length) {
                        validateResultsR2Worked(data);
                    }
                });
            iWorkedR2 = 0;
            getByDate1R2P3Worked(enteredDate);
        },
        error: function () {
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R2P3Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048209\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR2 < data.results.length) {
                        validateResultsR2Worked(data);
                    }
                });
            iWorkedR2 = 0;
            getByDate1R2P4Worked(enteredDate);
        },
        error: function () {
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R2P4Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048209\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR2 < data.results.length) {
                        validateResultsR2Worked(data);
                    }
                });
            iWorkedR2 = 0;
            getByDate1R2P5Worked(enteredDate);
        },
        error: function () {
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R2P5Worked() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048209\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR2 < data.results.length) {
                        validateResultsR2Worked(data);
                    }
                });
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        },
        error: function () {
            iWorkedR2 = 0;
            showr2OldDataWorked(enteredDate);
        }
    });
}






function showr2OldDataWorked(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var workedIntquoter2 = parseInt(workedOnRegion2Quotes);
    var workedIntorderr2 = parseInt(workedOnRegion2Orders);
    var workedIntreorderr2 = parseInt(workedOnRegion2Reorder);
    var workedIntServiceRequestr2 = parseInt(workedOnRegion2ServiceRequest);
    var workedIntServicePartsr2 = parseInt(workedOnRegion2ServiceParts);
    var workedIntChanger2 = parseInt(workedOnRegion2Change);
    var workedIntDiscountr2 = parseInt(workedOnRegion2Discount);
    var workedIntCreditr2 = parseInt(workedOnRegion2Credit);
    var workedIntManufacturingr2 = parseInt(workedOnRegion2Manufacturing);
    var workedIntRushr2 = parseInt(workedOnRegion2Rush);
    var workedIntMenardsr2 = parseInt(workedOnRegion2Menards);
    var workedIntCustomerInquiryr2 = parseInt(workedOnRegion2CustomerInquiry);
    var workedIntHelpdeskr2 = parseInt(workedOnRegion2Helpdesk);
    var workedIntwsosr2 = parseInt(workedOnRegion2WSOSRequest);
    var workedIntAlysr2 = parseInt(workedOnRegion2AlysBeach);
    var workedIntNoTagR2 = parseInt(workedNotMarkedR2);
    var workedIntTotalr2 = workedIntquoter2 + workedIntorderr2 + workedIntreorderr2 + workedIntServiceRequestr2 + workedIntServicePartsr2 + workedIntChanger2 +
        workedIntDiscountr2 + workedIntCreditr2 + workedIntManufacturingr2 +
        workedIntRushr2 + workedIntMenardsr2 + workedIntCustomerInquiryr2 + workedIntHelpdeskr2 + workedIntwsosr2 + workedIntAlysr2 + workedIntNoTagR2;
    $('#r2workedQuotes').html("    " + workedOnRegion2Quotes);
    $('#r2workedOrders').html("    " + workedOnRegion2Orders);
    $('#r2workedReorders').html("    " + workedOnRegion2Reorder);
    $('#r2workedServiceRequest').html("    " + workedOnRegion2ServiceRequest);
    $('#r2workedServiceParts').html("    " + workedOnRegion2ServiceParts);
    $('#r2workedChange').html("    " + workedOnRegion2Change);
    $('#r2workedDiscount').html("    " + workedOnRegion2Discount);
    $('#r2workedCredit').html("    " + workedOnRegion2Credit);
    $('#r2workedManufacturing').html("    " + workedOnRegion2Manufacturing);
    $('#r2workedRush').html("    " + workedOnRegion2Rush);
    $('#r2workedMenards').html("    " + workedOnRegion2Menards);
    $('#r2workedCustomerInquiry').html("    " + workedOnRegion2CustomerInquiry);
    $('#r2workedHelpdesk').html("    " + workedOnRegion2Helpdesk);
    $('#r2workedWSOS').html("    " + workedOnRegion2WSOSRequest);
    $('#r2workedSocialMedia').html("    " + workedOnRegion2SocialMedia);
    $('#r2workedAlys').html("    " + workedOnRegion2AlysBeach);
    if (workedIntNoTagR2 > 0) {
        $('#r2workedNoTag').html("    " + workedNotMarkedR2).css('color', 'red');
    } else {
        $('#r2workedNoTag').html("    " + workedNotMarkedR2);
    }
    $('#r2allWorked').html(workedIntTotalr2).val();
    $('#h22Worked').css('color', '#42f459').contents().first().replaceWith('Total Worked Per Day (shows by date last updated)');
}