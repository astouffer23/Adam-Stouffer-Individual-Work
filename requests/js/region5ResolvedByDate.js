var resolvedOnRegion5Orders = 0;
var resolvedOnRegion5Quotes = 0;
var resolvedOnRegion5Reorder = 0;
var resolvedOnRegion5ServiceParts = 0;
var resolvedOnRegion5ServiceRequest = 0;
var resolvedOnRegion5Manufacturing = 0;
var resolvedOnRegion5Change = 0;
var resolvedOnRegion5Rush = 0;
var resolvedOnRegion5Discount = 0;
var resolvedOnRegion5Credit = 0;
var resolvedOnRegion5Menards = 0;
var resolvedOnRegion5CustomerInquiry = 0;
var resolvedOnRegion5Helpdesk = 0;
var resolvedOnRegion5SocialMedia = 0;
var resolvedOnRegion5WSOSRequest = 0;
var resolvedOnRegion5AlysBeach = 0;
var resolvedNotMarkedR5 = 0;

var iResolvedR5 = 0;

var resolved_at = {
    resolved_at: "resolved_at"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        getByDate1R5P1Resolved();
    });
});


function validateResultsR5Resolved(data) {
    if (data.results[iResolvedR5].type === "Quote") {
        resolvedOnRegion5Quotes++;
    }
    if (data.results[iResolvedR5].type === "Order") {
        resolvedOnRegion5Orders++;
    }
    if (data.results[iResolvedR5].type === "Reorder") {
        resolvedOnRegion5Reorder++;
    }
    if (data.results[iResolvedR5].type === "Service Parts") {
        resolvedOnRegion5ServiceParts++;
    }
    if (data.results[iResolvedR5].type === "Service Request") {
        resolvedOnRegion5ServiceRequest++;
    }
    if (data.results[iResolvedR5].type === "Manufacturing") {
        resolvedOnRegion5Manufacturing++;
    }
    if (data.results[iResolvedR5].type === "Rush") {
        resolvedOnRegion5Rush++;
    }
    if (data.results[iResolvedR5].type === "Discount") {
        resolvedOnRegion5Discount++;
    }
    if (data.results[iResolvedR5].type === "Menards \ Crestline Request") {
        resolvedOnRegion5Menards++;
    }
    if (data.results[iResolvedR5].type === "Customer Inquiry") {
        resolvedOnRegion5CustomerInquiry++;
    }
    if (data.results[iResolvedR5].type === "Internal Helpdesk Request") {
        resolvedOnRegion5Helpdesk++;
    }
    if (data.results[iResolvedR5].type === "Social Media") {
        resolvedOnRegion5SocialMedia++;
    }
    if (data.results[iResolvedR5].type === "WSOneSourceRequest") {
        resolvedOnRegion5WSOSRequest++;
    }
    if (data.results[iResolvedR5].type === "Alys Beach") {
        resolvedOnRegion5AlysBeach++;
    }
    if (data.results[iResolvedR5].type === "Change") {
        resolvedOnRegion5Change++;
    }
    if (data.results[iResolvedR5].type === "Credit") {
        resolvedOnRegion5Credit++;
    }
    if (data.results[iResolvedR5].type === null) {
        resolvedNotMarkedR5++;
    }
    iResolvedR5++;

}

function getByDate1R5P1Resolved() {
    $('#r5resolvedQuotes').html("").css('color', 'white');
    $('#r5resolvedOrders').html("").css('color', 'white');
    $('#r5resolvedReorders').html("").css('color', 'white');
    $('#r5resolvedServiceRequest').html("").css('color', 'white');
    $('#r5resolvedServiceParts').html("").css('color', 'white');
    $('#r5resolvedChange').html("").css('color', 'white');
    $('#r5resolvedDiscount').html("").css('color', 'white');
    $('#r5resolvedCredit').html("").css('color', 'white');
    $('#r5resolvedManufacturing').html("").css('color', 'white');
    $('#r5resolvedRush').html("").css('color', 'white');
    $('#r5resolvedMenards').html("").css('color', 'white');
    $('#r5resolvedCustomerInquiry').html("").css('color', 'white');
    $('#r5resolvedHelpdesk').html("").css('color', 'white');
    $('#r5resolvedWSOS').html("").css('color', 'white');
    $('#r5resolvedSocialMedia').html("").css('color', 'white');
    $('#r5resolvedAlys').html("").css('color', 'white');
    $('#r5resolvedNoTag').html("").css('color', 'white');
    $('#r5allResolved').html("").css('color', 'white');
    $('#region5ContainerResolved').show();
    $('#h25Resolved').css("color", "red").html("Loading");
    resolvedOnRegion5Orders = 0;
    resolvedOnRegion5Quotes = 0;
    resolvedOnRegion5Reorder = 0;
    resolvedOnRegion5ServiceParts = 0;
    resolvedOnRegion5ServiceRequest = 0;
    resolvedOnRegion5Manufacturing = 0;
    resolvedOnRegion5Change = 0;
    resolvedOnRegion5Rush = 0;
    resolvedOnRegion5Discount = 0;
    resolvedOnRegion5Credit = 0;
    resolvedOnRegion5Menards = 0;
    resolvedOnRegion5CustomerInquiry = 0;
    resolvedOnRegion5Helpdesk = 0;
    resolvedOnRegion5SocialMedia = 0;
    resolvedOnRegion5WSOSRequest = 0;
    resolvedOnRegion5AlysBeach = 0;
    resolvedNotMarkedR5 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR5 < data.results.length) { validateResultsR5Resolved(data); } });
            iResolvedR5 = 0;
            getByDate1R5P2Resolved(enteredDate);
        },
        error: function () {
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R5P2Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () { while (iResolvedR5 < data.results.length) { validateResultsR5Resolved(data); } });
            iResolvedR5 = 0;
            getByDate1R5P3Resolved(enteredDate);
        },
        error: function () {
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R5P3Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at, function () {
                while (iResolvedR5 < data.results.length) {
                    validateResultsR5Resolved(data);
                }
            });
            iResolvedR5 = 0;
            getByDate1R5P4Resolved(enteredDate);
        },
        error: function () {
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R5P4Resolved() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () {
                while (iResolvedR5 < data.results.length) {
                    validateResultsR5Resolved(data);
                }
            });
            iResolvedR5 = 0;
            getByDate1R5P5Resolved(enteredDate);
        },
        error: function () {
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R5P5Resolved() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27" + enteredDate + "\%27\%20AND\%20group_id:19000050835\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at, function () { while (iResolvedR5 < data.results.length) { validateResultsR5Resolved(data); } });
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        },
        error: function () {
            iResolvedR5 = 0;
            showr5OldDataResolved(enteredDate);
        }
    });
}






function showr5OldDataResolved(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var resolvedIntquoter5 = parseInt(resolvedOnRegion5Quotes);
    var resolvedIntorderr5 = parseInt(resolvedOnRegion5Orders);
    var resolvedIntreorderr5 = parseInt(resolvedOnRegion5Reorder);
    var resolvedIntServiceRequestr5 = parseInt(resolvedOnRegion5ServiceRequest);
    var resolvedIntServicePartsr5 = parseInt(resolvedOnRegion5ServiceParts);
    var resolvedIntChanger5 = parseInt(resolvedOnRegion5Change);
    var resolvedIntDiscountr5 = parseInt(resolvedOnRegion5Discount);
    var resolvedIntCreditr5 = parseInt(resolvedOnRegion5Credit);
    var resolvedIntManufacturingr5 = parseInt(resolvedOnRegion5Manufacturing);
    var resolvedIntRushr5 = parseInt(resolvedOnRegion5Rush);
    var resolvedIntMenardsr5 = parseInt(resolvedOnRegion5Menards);
    var resolvedIntCustomerInquiryr5 = parseInt(resolvedOnRegion5CustomerInquiry);
    var resolvedIntHelpdeskr5 = parseInt(resolvedOnRegion5Helpdesk);
    var resolvedIntWsosr5 = parseInt(resolvedOnRegion5WSOSRequest);
    var resolvedIntAlysr5 = parseInt(resolvedOnRegion5AlysBeach);
    var resolvedIntNoTagR5 = parseInt(resolvedNotMarkedR5);
    var resolvedIntTotalr5 = resolvedIntquoter5 + resolvedIntorderr5 + resolvedIntreorderr5 + resolvedIntServiceRequestr5 + resolvedIntServicePartsr5 +
        resolvedIntChanger5 + resolvedIntDiscountr5 + resolvedIntCreditr5 + resolvedIntManufacturingr5 + resolvedIntRushr5 + resolvedIntMenardsr5 +
        resolvedIntCustomerInquiryr5 + resolvedIntHelpdeskr5 + resolvedIntWsosr5 + resolvedIntAlysr5 + resolvedIntNoTagR5;
    $('#r5resolvedQuotes').html("    " + resolvedOnRegion5Quotes);
    $('#r5resolvedOrders').html("    " + resolvedOnRegion5Orders);
    $('#r5resolvedReorders').html("    " + resolvedOnRegion5Reorder);
    $('#r5resolvedServiceRequest').html("    " + resolvedOnRegion5ServiceRequest);
    $('#r5resolvedServiceParts').html("    " + resolvedOnRegion5ServiceParts);
    $('#r5resolvedChange').html("    " + resolvedOnRegion5Change);
    $('#r5resolvedDiscount').html("    " + resolvedOnRegion5Discount);
    $('#r5resolvedCredit').html("    " + resolvedOnRegion5Credit);
    $('#r5resolvedManufacturing').html("    " + resolvedOnRegion5Manufacturing);
    $('#r5resolvedRush').html("    " + resolvedOnRegion5Rush);
    $('#r5resolvedMenards').html("    " + resolvedOnRegion5Menards);
    $('#r5resolvedCustomerInquiry').html("    " + resolvedOnRegion5CustomerInquiry);
    $('#r5resolvedHelpdesk').html("    " + resolvedOnRegion5Helpdesk);
    $('#r5resolvedWSOS').html("    " + resolvedOnRegion5WSOSRequest);
    $('#r5resolvedSocialMedia').html("    " + resolvedOnRegion5SocialMedia);
    $('#r5resolvedAlys').html("    " + resolvedOnRegion5AlysBeach);
    if (resolvedIntNoTagR5 > 0) {
        $('#r5resolvedNoTag').html("    " + resolvedNotMarkedR5).css('color', 'red');
    } else {
        $('#r5resolvedNoTag').html("    " + resolvedNotMarkedR5);
    }
    $('#r5allResolved').html(resolvedIntTotalr5).val();
    $('#h25Resolved').css('color', '#42f459').contents().first().replaceWith('Resolved Per Day (Shows status of resolved by date selected)');
}