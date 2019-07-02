var resolvedOnRegion3Orders = 0;
var resolvedOnRegion3Quotes = 0;
var resolvedOnRegion3Reorder = 0;
var resolvedOnRegion3ServiceParts = 0;
var resolvedOnRegion3ServiceRequest = 0;
var resolvedOnRegion3Manufacturing = 0;
var resolvedOnRegion3Change = 0;
var resolvedOnRegion3Rush = 0;
var resolvedOnRegion3Discount = 0;
var resolvedOnRegion3Credit = 0;
var resolvedOnRegion3Menards = 0;
var resolvedOnRegion3CustomerInquiry = 0;
var resolvedOnRegion3Helpdesk = 0;
var resolvedOnRegion3SocialMedia = 0;
var resolvedOnRegion3WSOSRequest = 0;
var resolvedOnRegion3AlysBeach = 0;
var resolvedNotMarkedR3 = 0;

var iResolvedR3 = 0;

var resolved_at = {
    resolved_at: "resolved_at"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R3P1Resolved();
    });
});


function validateResultsR3Resolved(data) {
    if (data.results[iResolvedR3].type === "Quote") {
        resolvedOnRegion3Quotes++;
    }
    if (data.results[iResolvedR3].type === "Order") {
        resolvedOnRegion3Orders++;
    }
    if (data.results[iResolvedR3].type === "Reorder") {
        resolvedOnRegion3Reorder++;
    }
    if (data.results[iResolvedR3].type === "Service Parts") {
        resolvedOnRegion3ServiceParts++;
    }
    if (data.results[iResolvedR3].type === "Service Request") {
        resolvedOnRegion3ServiceRequest++;
    }
    if (data.results[iResolvedR3].type === "Manufacturing") {
        resolvedOnRegion3Manufacturing++;
    }
    if (data.results[iResolvedR3].type === "Rush") {
        resolvedOnRegion3Rush++;
    }
    if (data.results[iResolvedR3].type === "Discount") {
        resolvedOnRegion3Discount++;
    }
    if (data.results[iResolvedR3].type === "Menards \ Crestline Request") {
        resolvedOnRegion3Menards++;
    }
    if (data.results[iResolvedR3].type === "Customer Inquiry") {
        resolvedOnRegion3CustomerInquiry++;
    }
    if (data.results[iResolvedR3].type === "Internal Helpdesk Request") {
        resolvedOnRegion3Helpdesk++;
    }
    if (data.results[iResolvedR3].type === "Social Media") {
        resolvedOnRegion3SocialMedia++;
    }
    if (data.results[iResolvedR3].type === "WSOneSourceRequest") {
        resolvedOnRegion3WSOSRequest++;
    }
    if (data.results[iResolvedR3].type === "Alys Beach") {
        resolvedOnRegion3AlysBeach++;
    }
    if (data.results[iResolvedR3].type === "Change") {
        resolvedOnRegion3Change++;
    }
    if (data.results[iResolvedR3].type === "Credit") {
        resolvedOnRegion3Credit++;
    }
    if (data.results[iResolvedR3].type === null) {
        resolvedNotMarkedR3++;
    }
    iResolvedR3++;
}

function getByDate1R3P1Resolved() {
    $('#r3resolvedQuotes').html("").css('color', 'white');
    $('#r3resolvedOrders').html("").css('color', 'white');
    $('#r3resolvedReorders').html("").css('color', 'white');
    $('#r3resolvedServiceRequest').html("").css('color', 'white');
    $('#r3resolvedServiceParts').html("").css('color', 'white');
    $('#r3resolvedChange').html("").css('color', 'white');
    $('#r3resolvedDiscount').html("").css('color', 'white');
    $('#r3resolvedCredit').html("").css('color', 'white');
    $('#r3resolvedManufacturing').html("").css('color', 'white');
    $('#r3resolvedRush').html("").css('color', 'white');
    $('#r3resolvedMenards').html("").css('color', 'white');
    $('#r3resolvedCustomerInquiry').html("").css('color', 'white');
    $('#r3resolvedHelpdesk').html("").css('color', 'white');
    $('#r3resolvedWSOS').html("").css('color', 'white');
    $('#r3resolvedSocialMedia').html("").css('color', 'white');
    $('#r3resolvedAlys').html("").css('color', 'white');
    $('#r3resolvedNoTag').html("").css('color', 'white');
    $('#r3allResolved').html("").css('color', 'white');
    $('#region3ContainerResolved').show();
    $('#h23Resolved').css("color", "red").html("Loading");
    resolvedOnRegion3Orders = 0;
    resolvedOnRegion3Quotes = 0;
    resolvedOnRegion3Reorder = 0;
    resolvedOnRegion3ServiceParts = 0;
    resolvedOnRegion3ServiceRequest = 0;
    resolvedOnRegion3Manufacturing = 0;
    resolvedOnRegion3Change = 0;
    resolvedOnRegion3Rush = 0;
    resolvedOnRegion3Discount = 0;
    resolvedOnRegion3Credit = 0;
    resolvedOnRegion3Menards = 0;
    resolvedOnRegion3CustomerInquiry = 0;
    resolvedOnRegion3Helpdesk = 0;
    resolvedOnRegion3SocialMedia = 0;
    resolvedOnRegion3WSOSRequest = 0;
    resolvedOnRegion3AlysBeach = 0;
    resolvedNotMarkedR3 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR3 < data.results.length) { validateResultsR3Resolved(data); } });
            iResolvedR3 = 0;
            getByDate1R3P2Resolved(enteredDate);
        },
        error: function () {
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R3P2Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () { while (iResolvedR3 < data.results.length) { validateResultsR3Resolved(data); } });
            iResolvedR3 = 0;
            getByDate1R3P3Resolved(enteredDate);
        },
        error: function () {
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R3P3Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () {
                while (iResolvedR3 < data.results.length) {
                    validateResultsR3Resolved(data);
                }
            });
            iResolvedR3 = 0;
            getByDate1R3P4Resolved(enteredDate);
        },
        error: function () {
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R3P4Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () {
                while (iResolvedR3 < data.results.length) {
                    validateResultsR3Resolved(data);
                }
            });
            iResolvedR3 = 0;
            getByDate1R3P5Resolved(enteredDate);
        },
        error: function () {
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R3P5Resolved() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000048213\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR3 < data.results.length) { validateResultsR3Resolved(data); } });
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        },
        error: function () {
            iResolvedR3 = 0;
            showr3OldDataResolved(enteredDate);
        }
    });
}






function showr3OldDataResolved(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var resolvedIntquoter3 = parseInt(resolvedOnRegion3Quotes);
    var resolvedIntorderr3 = parseInt(resolvedOnRegion3Orders);
    var resolvedIntreorderr3 = parseInt(resolvedOnRegion3Reorder);
    var resolvedIntServiceRequestr3 = parseInt(resolvedOnRegion3ServiceRequest);
    var resolvedIntServicePartsr3 = parseInt(resolvedOnRegion3ServiceParts);
    var resolvedIntChanger3 = parseInt(resolvedOnRegion3Change);
    var resolvedIntDiscountr3 = parseInt(resolvedOnRegion3Discount);
    var resolvedIntCreditr3 = parseInt(resolvedOnRegion3Credit);
    var resolvedIntManufacturingr3 = parseInt(resolvedOnRegion3Manufacturing);
    var resolvedIntRushr3 = parseInt(resolvedOnRegion3Rush);
    var resolvedIntMenardsr3 = parseInt(resolvedOnRegion3Menards);
    var resolvedIntCustomerInquiryr3 = parseInt(resolvedOnRegion3CustomerInquiry);
    var resolvedIntHelpdeskr3 = parseInt(resolvedOnRegion3Helpdesk);
    var resolvedIntWsosr3 = parseInt(resolvedOnRegion3WSOSRequest);
    var resolvedIntAlysr3 = parseInt(resolvedOnRegion3AlysBeach);
    var resolvedIntNoTagR3 = parseInt(resolvedNotMarkedR3);
    var resolvedIntTotalr3 = resolvedIntquoter3 + resolvedIntorderr3 + resolvedIntreorderr3 + resolvedIntServiceRequestr3 + resolvedIntServicePartsr3 +
        resolvedIntChanger3 + resolvedIntDiscountr3 + resolvedIntCreditr3 + resolvedIntManufacturingr3 + resolvedIntRushr3 +
        resolvedIntMenardsr3 + resolvedIntCustomerInquiryr3 + resolvedIntHelpdeskr3 + resolvedIntWsosr3 + resolvedIntAlysr3 + resolvedIntNoTagR3;
    $('#r3resolvedQuotes').html("    " + resolvedOnRegion3Quotes);
    $('#r3resolvedOrders').html("    " + resolvedOnRegion3Orders);
    $('#r3resolvedReorders').html("    " + resolvedOnRegion3Reorder);
    $('#r3resolvedServiceRequest').html("    " + resolvedOnRegion3ServiceRequest);
    $('#r3resolvedServiceParts').html("    " + resolvedOnRegion3ServiceParts);
    $('#r3resolvedChange').html("    " + resolvedOnRegion3Change);
    $('#r3resolvedDiscount').html("    " + resolvedOnRegion3Discount);
    $('#r3resolvedCredit').html("    " + resolvedOnRegion3Credit);
    $('#r3resolvedManufacturing').html("    " + resolvedOnRegion3Manufacturing);
    $('#r3resolvedRush').html("    " + resolvedOnRegion3Rush);
    $('#r3resolvedMenards').html("    " + resolvedOnRegion3Menards);
    $('#r3resolvedCustomerInquiry').html("    " + resolvedOnRegion3CustomerInquiry);
    $('#r3resolvedHelpdesk').html("    " + resolvedOnRegion3Helpdesk);
    $('#r3resolvedWSOS').html("    " + resolvedOnRegion3WSOSRequest);
    $('#r3resolvedSocialMedia').html("    " + resolvedOnRegion3SocialMedia);
    $('#r3resolvedAlys').html("    " + resolvedOnRegion3AlysBeach);
    if (resolvedIntNoTagR3 > 0) {
        $('#r3resolvedNoTag').html("    " + resolvedNotMarkedR3).css('color', 'red');
    } else {
        $('#r3resolvedNoTag').html("    " + resolvedNotMarkedR3);
    }
    $('#r3allResolved').html(resolvedIntTotalr3).val();
    $('#h23Resolved').css('color', '#42f459').contents().first().replaceWith('Resolved Per Day (Shows status of resolved by date selected)');
}