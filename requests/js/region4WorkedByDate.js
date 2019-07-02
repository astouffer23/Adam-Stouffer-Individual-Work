var workedOnRegion4Orders = 0;
var workedOnRegion4Quotes = 0;
var workedOnRegion4Reorder = 0;
var workedOnRegion4ServiceParts = 0;
var workedOnRegion4ServiceRequest = 0;
var workedOnRegion4Manufacturing = 0;
var workedOnRegion4Change = 0;
var workedOnRegion4Rush = 0;
var workedOnRegion4Discount = 0;
var workedOnRegion4Credit = 0;
var workedOnRegion4Menards = 0;
var workedOnRegion4CustomerInquiry = 0;
var workedOnRegion4Helpdesk = 0;
var workedOnRegion4SocialMedia = 0;
var workedOnRegion4WSOSRequest = 0;
var workedOnRegion4AlysBeach = 0;
var workedNotMarkedR4 = 0;

var iWorkedR4 = 0;

var worked_on = {
    worked_on: "worked_on"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R4P1Worked();
    });
});


function validateResultsR4Worked(data) {
    if (data.results[iWorkedR4].type === "Quote") {
        workedOnRegion4Quotes++;
    }
    if (data.results[iWorkedR4].type === "Order") {
        workedOnRegion4Orders++;
    }
    if (data.results[iWorkedR4].type === "Reorder") {
        workedOnRegion4Reorder++;
    }
    if (data.results[iWorkedR4].type === "Service Parts") {
        workedOnRegion4ServiceParts++;
    }
    if (data.results[iWorkedR4].type === "Service Request") {
        workedOnRegion4ServiceRequest++;
    }
    if (data.results[iWorkedR4].type === "Manufacturing") {
        workedOnRegion4Manufacturing++;
    }
    if (data.results[iWorkedR4].type === "Rush") {
        workedOnRegion4Rush++;
    }
    if (data.results[iWorkedR4].type === "Discount") {
        workedOnRegion4Discount++;
    }
    if (data.results[iWorkedR4].type === "Menards \ Crestline Request") {
        workedOnRegion4Menards++;
    }
    if (data.results[iWorkedR4].type === "Customer Inquiry") {
        workedOnRegion4CustomerInquiry++;
    }
    if (data.results[iWorkedR4].type === "Internal Helpdesk Request") {
        workedOnRegion4Helpdesk++;
    }
    if (data.results[iWorkedR4].type === "Social Media") {
        workedOnRegion4SocialMedia++;
    }
    if (data.results[iWorkedR4].type === "WSOneSourceRequest") {
        workedOnRegion4WSOSRequest++;
    }
    if (data.results[iWorkedR4].type === "Alys Beach") {
        workedOnRegion4AlysBeach++;
    }
    if (data.results[iWorkedR4].type === "Change") {
        workedOnRegion4Change++;
    }
    if (data.results[iWorkedR4].type === "Credit") {
        workedOnRegion4Credit++;
    }
    if (data.results[iWorkedR4].type === null) {
        workedNotMarkedR4++;
    }
    iWorkedR4++;

}

function getByDate1R4P1Worked() {
    $('#r4workedQuotes').html("").css('color', 'white');
    $('#r4workedOrders').html("").css('color', 'white');
    $('#r4workedReorders').html("").css('color', 'white');
    $('#r4workedServiceRequest').html("").css('color', 'white');
    $('#r4workedServiceParts').html("").css('color', 'white');
    $('#r4workedChange').html("").css('color', 'white');
    $('#r4workedDiscount').html("").css('color', 'white');
    $('#r4workedCredit').html("").css('color', 'white');
    $('#r4workedManufacturing').html("").css('color', 'white');
    $('#r4workedRush').html("").css('color', 'white');
    $('#r4workedMenards').html("").css('color', 'white');
    $('#r4workedCustomerInquiry').html("").css('color', 'white');
    $('#r4workedHelpdesk').html("").css('color', 'white');
    $('#r4workedWSOS').html("").css('color', 'white');
    $('#r4workedSocialMedia').html("").css('color', 'white');
    $('#r4workedAlys').html("").css('color', 'white');
    $('#r4workedNoTag').html("").css('color', 'white');
    $('#r4allWorked').html("").css('color', 'white');
    $('#region4ContainerWorked').show();
    $('#h24Worked').css("color", "red").html("Loading");
    workedOnRegion4Orders = 0;
    workedOnRegion4Quotes = 0;
    workedOnRegion4Reorder = 0;
    workedOnRegion4ServiceParts = 0;
    workedOnRegion4ServiceRequest = 0;
    workedOnRegion4Manufacturing = 0;
    workedOnRegion4Change = 0;
    workedOnRegion4Rush = 0;
    workedOnRegion4Discount = 0;
    workedOnRegion4Credit = 0;
    workedOnRegion4Menards = 0;
    workedOnRegion4CustomerInquiry = 0;
    workedOnRegion4Helpdesk = 0;
    workedOnRegion4SocialMedia = 0;
    workedOnRegion4WSOSRequest = 0;
    workedOnRegion4AlysBeach = 0;
    workedNotMarkedR4 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR4 < data.results.length) {
                        validateResultsR4Worked(data);
                    }
                });
            iWorkedR4 = 0;
            getByDate1R4P2Worked(enteredDate);
        },
        error: function () {
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R4P2Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR4 < data.results.length) {
                        validateResultsR4Worked(data);
                    }
                });
            iWorkedR4 = 0;
            getByDate1R4P3Worked(enteredDate);
        },
        error: function () {
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R4P3Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(worked_on,
                function () {
                    while (iWorkedR4 < data.results.length) {
                        validateResultsR4Worked(data);
                    }
                });
            iWorkedR4 = 0;
            getByDate1R4P4Worked(enteredDate);
        },
        error: function () {
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R4P4Worked() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR4 < data.results.length) {
                        validateResultsR4Worked(data);
                    }
                });
            iWorkedR4 = 0;
            getByDate1R4P5Worked(enteredDate);
        },
        error: function () {
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        }
    });
}

function getByDate1R4P5Worked() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(worked_on,
                function () {
                    while (iWorkedR4 < data.results.length) {
                        validateResultsR4Worked(data);
                    }
                });
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        },
        error: function () {
            iWorkedR4 = 0;
            showr4OldDataWorked(enteredDate);
        }
    });
}






function showr4OldDataWorked(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var workedIntquoter4 = parseInt(workedOnRegion4Quotes);
    var workedIntorderr4 = parseInt(workedOnRegion4Orders);
    var workedIntreorderr4 = parseInt(workedOnRegion4Reorder);
    var workedIntServiceRequestr4 = parseInt(workedOnRegion4ServiceRequest);
    var workedIntServicePartsr4 = parseInt(workedOnRegion4ServiceParts);
    var workedIntChanger4 = parseInt(workedOnRegion4Change);
    var workedIntDiscountr4 = parseInt(workedOnRegion4Discount);
    var workedIntCreditr4 = parseInt(workedOnRegion4Credit);
    var workedIntManufacturingr4 = parseInt(workedOnRegion4Manufacturing);
    var workedIntRushr4 = parseInt(workedOnRegion4Rush);
    var workedIntMenardsr4 = parseInt(workedOnRegion4Menards);
    var workedIntCustomerInquiryr4 = parseInt(workedOnRegion4CustomerInquiry);
    var workedIntHelpdeskr4 = parseInt(workedOnRegion4Helpdesk);
    var workedIntWsosr4 = parseInt(workedOnRegion4WSOSRequest);
    var workedIntAlysr4 = parseInt(workedOnRegion4AlysBeach);
    var workedIntNoTagR4 = parseInt(workedNotMarkedR4);
    var workedIntTotalr4 = workedIntquoter4 + workedIntorderr4 + workedIntreorderr4 + workedIntServiceRequestr4 + workedIntServicePartsr4 + workedIntChanger4 +
        workedIntDiscountr4 + workedIntCreditr4 + workedIntManufacturingr4 +
        workedIntRushr4 + workedIntMenardsr4 + workedIntCustomerInquiryr4 + workedIntHelpdeskr4 + workedIntWsosr4 + workedIntAlysr4 + workedIntNoTagR4;
    $('#r4workedQuotes').html("    " + workedOnRegion4Quotes);
    $('#r4workedOrders').html("    " + workedOnRegion4Orders);
    $('#r4workedReorders').html("    " + workedOnRegion4Reorder);
    $('#r4workedServiceRequest').html("    " + workedOnRegion4ServiceRequest);
    $('#r4workedServiceParts').html("    " + workedOnRegion4ServiceParts);
    $('#r4workedChange').html("    " + workedOnRegion4Change);
    $('#r4workedDiscount').html("    " + workedOnRegion4Discount);
    $('#r4workedCredit').html("    " + workedOnRegion4Credit);
    $('#r4workedManufacturing').html("    " + workedOnRegion4Manufacturing);
    $('#r4workedRush').html("    " + workedOnRegion4Rush);
    $('#r4workedMenards').html("    " + workedOnRegion4Menards);
    $('#r4workedCustomerInquiry').html("    " + workedOnRegion4CustomerInquiry);
    $('#r4workedHelpdesk').html("    " + workedOnRegion4Helpdesk);
    $('#r4workedWSOS').html("    " + workedOnRegion4WSOSRequest);
    $('#r4workedSocialMedia').html("    " + workedOnRegion4SocialMedia);
    $('#r4workedAlys').html("    " + workedOnRegion4AlysBeach);
    if (workedIntNoTagR4 > 0) {
        $('#r4workedNoTag').html("    " + workedNotMarkedR4).css('color', 'red');
    } else {
        $('#r4workedNoTag').html("    " + workedNotMarkedR4);
    }
    
    $('#r4allWorked').html(workedIntTotalr4).val();
    $('#h24Worked').css('color', '#42f459').contents().first().replaceWith('Total Worked Per Day (shows by date last updated)');
}