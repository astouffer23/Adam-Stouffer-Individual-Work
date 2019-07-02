var resolvedOnRegion4Orders = 0;
var resolvedOnRegion4Quotes = 0;
var resolvedOnRegion4Reorder = 0;
var resolvedOnRegion4ServiceParts = 0;
var resolvedOnRegion4ServiceRequest = 0;
var resolvedOnRegion4Manufacturing = 0;
var resolvedOnRegion4Change = 0;
var resolvedOnRegion4Rush = 0;
var resolvedOnRegion4Discount = 0;
var resolvedOnRegion4Credit = 0;
var resolvedOnRegion4Menards = 0;
var resolvedOnRegion4CustomerInquiry = 0;
var resolvedOnRegion4Helpdesk = 0;
var resolvedOnRegion4SocialMedia = 0;
var resolvedOnRegion4WSOSRequest = 0;
var resolvedOnRegion4AlysBeach = 0;
var resolvedNotMarkedR4 = 0;

var iResolvedR4 = 0;

var resolved_at = {
    resolved_at: "resolved_at"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R4P1Resolved();
    });
});


function validateResultsR4Resolved(data) {
    if (data.results[iResolvedR4].type === "Quote") {
        resolvedOnRegion4Quotes++;
    }
    if (data.results[iResolvedR4].type === "Order") {
        resolvedOnRegion4Orders++;
    }
    if (data.results[iResolvedR4].type === "Reorder") {
        resolvedOnRegion4Reorder++;
    }
    if (data.results[iResolvedR4].type === "Service Parts") {
        resolvedOnRegion4ServiceParts++;
    }
    if (data.results[iResolvedR4].type === "Service Request") {
        resolvedOnRegion4ServiceRequest++;
    }
    if (data.results[iResolvedR4].type === "Manufacturing") {
        resolvedOnRegion4Manufacturing++;
    }
    if (data.results[iResolvedR4].type === "Rush") {
        resolvedOnRegion4Rush++;
    }
    if (data.results[iResolvedR4].type === "Discount") {
        resolvedOnRegion4Discount++;
    }
    if (data.results[iResolvedR4].type === "Menards \ Crestline Request") {
        resolvedOnRegion4Menards++;
    }
    if (data.results[iResolvedR4].type === "Customer Inquiry") {
        resolvedOnRegion4CustomerInquiry++;
    }
    if (data.results[iResolvedR4].type === "Internal Helpdesk Request") {
        resolvedOnRegion4Helpdesk++;
    }
    if (data.results[iResolvedR4].type === "Social Media") {
        resolvedOnRegion4SocialMedia++;
    }
    if (data.results[iResolvedR4].type === "WSOneSourceRequest") {
        resolvedOnRegion4WSOSRequest++;
    }
    if (data.results[iResolvedR4].type === "Alys Beach") {
        resolvedOnRegion4AlysBeach++;
    }
    if (data.results[iResolvedR4].type === "Change") {
        resolvedOnRegion4Change++;
    }
    if (data.results[iResolvedR4].type === "Credit") {
        resolvedOnRegion4Credit++;
    }
    if (data.results[iResolvedR4].type === null) {
        resolvedNotMarkedR4++;
    }
    iResolvedR4++;

}

function getByDate1R4P1Resolved() {
    $('#r4resolvedQuotes').html("").css('color', 'white');
    $('#r4resolvedOrders').html("").css('color', 'white');
    $('#r4resolvedReorders').html("").css('color', 'white');
    $('#r4resolvedServiceRequest').html("").css('color', 'white');
    $('#r4resolvedServiceParts').html("").css('color', 'white');
    $('#r4resolvedChange').html("").css('color', 'white');
    $('#r4resolvedDiscount').html("").css('color', 'white');
    $('#r4resolvedCredit').html("").css('color', 'white');
    $('#r4resolvedManufacturing').html("").css('color', 'white');
    $('#r4resolvedRush').html("").css('color', 'white');
    $('#r4resolvedMenards').html("").css('color', 'white');
    $('#r4resolvedCustomerInquiry').html("").css('color', 'white');
    $('#r4resolvedHelpdesk').html("").css('color', 'white');
    $('#r4resolvedWSOS').html("").css('color', 'white');
    $('#r4resolvedSocialMedia').html("").css('color', 'white');
    $('#r4resolvedAlys').html("").css('color', 'white');
    $('#r4resolvedNoTag').html("").css('color', 'white');
    $('#r4allResolved').html("").css('color', 'white');
    $('#region4ContainerResolved').show();
    $('#h24Resolved').css("color", "red").html("Loading");
    resolvedOnRegion4Orders = 0;
    resolvedOnRegion4Quotes = 0;
    resolvedOnRegion4Reorder = 0;
    resolvedOnRegion4ServiceParts = 0;
    resolvedOnRegion4ServiceRequest = 0;
    resolvedOnRegion4Manufacturing = 0;
    resolvedOnRegion4Change = 0;
    resolvedOnRegion4Rush = 0;
    resolvedOnRegion4Discount = 0;
    resolvedOnRegion4Credit = 0;
    resolvedOnRegion4Menards = 0;
    resolvedOnRegion4CustomerInquiry = 0;
    resolvedOnRegion4Helpdesk = 0;
    resolvedOnRegion4SocialMedia = 0;
    resolvedOnRegion4WSOSRequest = 0;
    resolvedOnRegion4AlysBeach = 0;
    resolvedNotMarkedR4 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR4 < data.results.length) { validateResultsR4Resolved(data); } });
            iResolvedR4 = 0;
            getByDate1R4P2Resolved(enteredDate);
        },
        error: function () {
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R4P2Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () { while (iResolvedR4 < data.results.length) { validateResultsR4Resolved(data); } });
            iResolvedR4 = 0;
            getByDate1R4P3Resolved(enteredDate);
        },
        error: function () {
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R4P3Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () {
                while (iResolvedR4 < data.results.length) {
                    validateResultsR4Resolved(data);
                }
            });
            iResolvedR4 = 0;
            getByDate1R4P4Resolved(enteredDate);
        },
        error: function () {
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R4P4Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () {
                while (iResolvedR4 < data.results.length) {
                    validateResultsR4Resolved(data);
                }
            });
            iResolvedR4 = 0;
            getByDate1R4P5Resolved(enteredDate);
        },
        error: function () {
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R4P5Resolved() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048255\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR4 < data.results.length) { validateResultsR4Resolved(data); } });
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        },
        error: function () {
            iResolvedR4 = 0;
            showr4OldDataResolved(enteredDate);
        }
    });
}






function showr4OldDataResolved(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var resolvedIntquoter4 = parseInt(resolvedOnRegion4Quotes);
    var resolvedIntorderr4 = parseInt(resolvedOnRegion4Orders);
    var resolvedIntreorderr4 = parseInt(resolvedOnRegion4Reorder);
    var resolvedIntServiceRequestr4 = parseInt(resolvedOnRegion4ServiceRequest);
    var resolvedIntServicePartsr4 = parseInt(resolvedOnRegion4ServiceParts);
    var resolvedIntChanger4 = parseInt(resolvedOnRegion4Change);
    var resolvedIntDiscountr4 = parseInt(resolvedOnRegion4Discount);
    var resolvedIntCreditr4 = parseInt(resolvedOnRegion4Credit);
    var resolvedIntManufacturingr4 = parseInt(resolvedOnRegion4Manufacturing);
    var resolvedIntRushr4 = parseInt(resolvedOnRegion4Rush);
    var resolvedIntMenardsr4 = parseInt(resolvedOnRegion4Menards);
    var resolvedIntCustomerInquiryr4 = parseInt(resolvedOnRegion4CustomerInquiry);
    var resolvedIntHelpdeskr4 = parseInt(resolvedOnRegion4Helpdesk);
    var resolvedIntsosr4 = parseInt(resolvedOnRegion4WSOSRequest);
    var resolvedIntAlysr4 = parseInt(resolvedOnRegion4AlysBeach);
    var resolvedIntNoTagR4 = parseInt(resolvedNotMarkedR4);
    var resolvedIntTotalr4 = resolvedIntquoter4 + resolvedIntorderr4 + resolvedIntreorderr4 + resolvedIntServiceRequestr4 + resolvedIntServicePartsr4 +
        resolvedIntChanger4 + resolvedIntDiscountr4 + resolvedIntCreditr4 + resolvedIntManufacturingr4 + resolvedIntRushr4 + resolvedIntMenardsr4 +
        resolvedIntCustomerInquiryr4 + resolvedIntHelpdeskr4 + resolvedIntsosr4 + resolvedIntAlysr4 + resolvedIntNoTagR4;
    $('#r4resolvedQuotes').html("    " + resolvedOnRegion4Quotes);
    $('#r4resolvedOrders').html("    " + resolvedOnRegion4Orders);
    $('#r4resolvedReorders').html("    " + resolvedOnRegion4Reorder);
    $('#r4resolvedServiceRequest').html("    " + resolvedOnRegion4ServiceRequest);
    $('#r4resolvedServiceParts').html("    " + resolvedOnRegion4ServiceParts);
    $('#r4resolvedChange').html("    " + resolvedOnRegion4Change);
    $('#r4resolvedDiscount').html("    " + resolvedOnRegion4Discount);
    $('#r4resolvedCredit').html("    " + resolvedOnRegion4Credit);
    $('#r4resolvedManufacturing').html("    " + resolvedOnRegion4Manufacturing);
    $('#r4resolvedRush').html("    " + resolvedOnRegion4Rush);
    $('#r4resolvedMenards').html("    " + resolvedOnRegion4Menards);
    $('#r4resolvedCustomerInquiry').html("    " + resolvedOnRegion4CustomerInquiry);
    $('#r4resolvedHelpdesk').html("    " + resolvedOnRegion4Helpdesk);
    $('#r4resolvedWSOS').html("    " + resolvedOnRegion4WSOSRequest);
    $('#r4resolvedSocialMedia').html("    " + resolvedOnRegion4SocialMedia);
    $('#r4resolvedAlys').html("    " + resolvedOnRegion4AlysBeach);
    if (resolvedIntNoTagR4 > 0) {
        $('#r4resolvedNoTag').html("    " + resolvedNotMarkedR4).css('color', 'red');
    } else {
        $('#r4resolvedNoTag').html("    " + resolvedNotMarkedR4);
    }
    $('#r4allResolved').html(resolvedIntTotalr4).val();
    $('#h24Resolved').css('color', '#42f459').contents().first().replaceWith('Resolved Per Day (Shows status of resolved by date selected)');
}