var createdOnRegion1OpenOrders = 0;
var createdOnRegion1OpenQuotes = 0;
var createdOnRegion1OpenReorder = 0;
var createdOnRegion1OpenServiceParts = 0;
var createdOnRegion1OpenServiceRequest = 0;
var createdOnRegion1OpenManufacturing = 0;
var createdOnRegion1OpenChange = 0;
var createdOnRegion1OpenRush = 0;
var createdOnRegion1OpenDiscount = 0;
var createdOnRegion1OpenCredit = 0;
var createdOnRegion1OpenMenards = 0;
var createdOnRegion1OpenCustomerInquiry = 0;
var createdOnRegion1OpenCredit = 0;
var createdOnRegion1OpenHelpdesk = 0;
var createdOnRegion1OpenSocialMedia = 0;
var createdOnRegion1OpenWSOSRequest = 0;
var createdOnRegion1OpenAlysBeach = 0;
var createdOpenNotMarkedR1 = 0;

var iCreateR1 = 0;

var created_at = {
    created_at: "created_at"
};

$(document).ready(function () {
    $('#dateSubmit').click(function () {
        $('#showMessage').show();
        $('#r1ShowTicketsButton').hide();
        $('#r2ShowTicketsButton').hide();
        $('#r3ShowTicketsButton').hide();
        $('#r4ShowTicketsButton').hide();
        $('#r5ShowTicketsButton').hide();
        $('#r1HideTicketsButton').hide();
        $('#r2HideTicketsButton').hide();
        $('#r3HideTicketsButton').hide();
        $('#r4HideTicketsButton').hide();
        $('#r5HideTicketsButton').hide();
        $("#r1HideTicketsButton").hide();
        $('#r1TotalDiv').hide();
        $('#region1TotalList').html('');
        $('#r1QuoteDiv').hide();
        $('#region1QuoteList').html('');
        $('#r1OrdersDiv').hide();
        $('#region1OrdersList').html('');
        $('#r1ReordersDiv').hide();
        $('#region1ReordersList').html('');
        $('#r1RushDiv').hide();
        $('#region1RushList').html('');
        $('#r1CreditDiv').hide();
        $('#region1CreditList').html('');
        $('#r1MenardsDiv').hide();
        $('#region1MenardsList').html('');
        $('#r1ServicePartsDiv').hide();
        $('#region1ServicePartsList').html('');
        $('#r1ServiceRequestDiv').hide();
        $('#region1ServiceRequestList').html('');
        $('#r1ManufacturingDiv').hide();
        $('#region1ManufacturingList').html('');
        $('#r1CustomerInquiryDiv').hide();
        $('#region1CustomerInquiryList').html('');
        $('#r1SocialMediaDiv').hide();
        $('#region1SocialMediaList').html('');
        $('#r1HelpdeskDiv').hide();
        $('#region1HelpdeskList').html('');
        $('#r1WsosDiv').hide();
        $('#region1WsosList').html('');
        $('#r1AlysDiv').hide();
        $('#region1AlysList').html('');
        $('#r1ChangeDiv').hide();
        $('#region1ChangeList').html('');
        $('#r1DiscountDiv').hide();
        $('#region1DiscountList').html('');
        $('#r1NoTagDiv').hide();
        $('#region1NoTagList').html('');

        $("#r2HideTicketsButton").hide();
        $('#r2TotalDiv').hide();
        $('#region2TotalList').html('');
        $('#r2QuoteDiv').hide();
        $('#region2QuoteList').html('');
        $('#r2OrdersDiv').hide();
        $('#region2OrdersList').html('');
        $('#r2ReordersDiv').hide();
        $('#region2ReordersList').html('');
        $('#r2RushDiv').hide();
        $('#region2RushList').html('');
        $('#r2CreditDiv').hide();
        $('#region2CreditList').html('');
        $('#r2MenardsDiv').hide();
        $('#region2MenardsList').html('');
        $('#r2ServicePartsDiv').hide();
        $('#region2ServicePartsList').html('');
        $('#r2ServiceRequestDiv').hide();
        $('#region2ServiceRequestList').html('');
        $('#r2ManufacturingDiv').hide();
        $('#region2ManufacturingList').html('');
        $('#r2CustomerInquiryDiv').hide();
        $('#region2CustomerInquiryList').html('');
        $('#r2SocialMediaDiv').hide();
        $('#region2SocialMediaList').html('');
        $('#r2HelpdeskDiv').hide();
        $('#region2HelpdeskList').html('');
        $('#r2WsosDiv').hide();
        $('#region2WsosList').html('');
        $('#r2AlysDiv').hide();
        $('#region2AlysList').html('');
        $('#r2ChangeDiv').hide();
        $('#region2ChangeList').html('');
        $('#r2DiscountDiv').hide();
        $('#region2DiscountList').html('');
        $('#r2NoTagDiv').hide();
        $('#region2NoTagList').html('');



        $("#r3HideTicketsButton").hide();
        $('#r3TotalDiv').hide();
        $('#region3TotalList').html('');
        $('#r3QuoteDiv').hide();
        $('#region3QuoteList').html('');
        $('#r3OrdersDiv').hide();
        $('#region3OrdersList').html('');
        $('#r3ReordersDiv').hide();
        $('#region3ReordersList').html('');
        $('#r3RushDiv').hide();
        $('#region3RushList').html('');
        $('#r3CreditDiv').hide();
        $('#region3CreditList').html('');
        $('#r3MenardsDiv').hide();
        $('#region3MenardsList').html('');
        $('#r3ServicePartsDiv').hide();
        $('#region3ServicePartsList').html('');
        $('#r3ServiceRequestDiv').hide();
        $('#region3ServiceRequestList').html('');
        $('#r3ManufacturingDiv').hide();
        $('#region3ManufacturingList').html('');
        $('#r3CustomerInquiryDiv').hide();
        $('#region3CustomerInquiryList').html('');
        $('#r3SocialMediaDiv').hide();
        $('#region3SocialMediaList').html('');
        $('#r3HelpdeskDiv').hide();
        $('#region3HelpdeskList').html('');
        $('#r3WsosDiv').hide();
        $('#region3WsosList').html('');
        $('#r3AlysDiv').hide();
        $('#region3AlysList').html('');
        $('#r3ChangeDiv').hide();
        $('#region3ChangeList').html('');
        $('#r3DiscountDiv').hide();
        $('#region3DiscountList').html('');
        $('#r3NoTagDiv').hide();
        $('#region3NoTagList').html('');



        $("#r4HideTicketsButton").hide();
        $('#r4TotalDiv').hide();
        $('#region4TotalList').html('');
        $('#r4QuoteDiv').hide();
        $('#region4QuoteList').html('');
        $('#r4OrdersDiv').hide();
        $('#region4OrdersList').html('');
        $('#r4ReordersDiv').hide();
        $('#region4ReordersList').html('');
        $('#r4RushDiv').hide();
        $('#region4RushList').html('');
        $('#r4CreditDiv').hide();
        $('#region4CreditList').html('');
        $('#r4MenardsDiv').hide();
        $('#region4MenardsList').html('');
        $('#r4ServicePartsDiv').hide();
        $('#region4ServicePartsList').html('');
        $('#r4ServiceRequestDiv').hide();
        $('#region4ServiceRequestList').html('');
        $('#r4ManufacturingDiv').hide();
        $('#region4ManufacturingList').html('');
        $('#r4CustomerInquiryDiv').hide();
        $('#region4CustomerInquiryList').html('');
        $('#r4SocialMediaDiv').hide();
        $('#region4SocialMediaList').html('');
        $('#r4HelpdeskDiv').hide();
        $('#region4HelpdeskList').html('');
        $('#r4WsosDiv').hide();
        $('#region4WsosList').html('');
        $('#r4AlysDiv').hide();
        $('#region4AlysList').html('');
        $('#r4ChangeDiv').hide();
        $('#region4ChangeList').html('');
        $('#r4DiscountDiv').hide();
        $('#region4DiscountList').html('');
        $('#r4NoTagDiv').hide();
        $('#region4NoTagList').html('');

        $("#r5HideTicketsButton").hide();
        $('#r5TotalDiv').hide();
        $('#region5TotalList').html('');
        $('#r5QuoteDiv').hide();
        $('#region5QuoteList').html('');
        $('#r5OrdersDiv').hide();
        $('#region5OrdersList').html('');
        $('#r5ReordersDiv').hide();
        $('#region5ReordersList').html('');
        $('#r5RushDiv').hide();
        $('#region5RushList').html('');
        $('#r5CreditDiv').hide();
        $('#region5CreditList').html('');
        $('#r5MenardsDiv').hide();
        $('#region5MenardsList').html('');
        $('#r5ServicePartsDiv').hide();
        $('#region5ServicePartsList').html('');
        $('#r5ServiceRequestDiv').hide();
        $('#region5ServiceRequestList').html('');
        $('#r5ManufacturingDiv').hide();
        $('#region5ManufacturingList').html('');
        $('#r5CustomerInquiryDiv').hide();
        $('#region5CustomerInquiryList').html('');
        $('#r5SocialMediaDiv').hide();
        $('#region5SocialMediaList').html('');
        $('#r5HelpdeskDiv').hide();
        $('#region5HelpdeskList').html('');
        $('#r5WsosDiv').hide();
        $('#region5WsosList').html('');
        $('#r5AlysDiv').hide();
        $('#region5AlysList').html('');
        $('#r5ChangeDiv').hide();
        $('#region5ChangeList').html('');
        $('#r5DiscountDiv').hide();
        $('#region5DiscountList').html('');
        $('#r5NoTagDiv').hide();
        $('#region5NoTagList').html('');
        $('#r1OrdersDiv').hide();
        $('#r1QuoteDiv').hide();
        $('#r1ReordersDiv').hide();
        $('#r1ServicePartsDiv').hide();
        $('#r1ServiceRequestDiv').hide();
        $('#r1ChangeDiv').hide();
        $('#r1DiscountDiv').hide();
        $('#r1CreditDiv').hide();
        $('#r1ManufacturingDiv').hide();
        $('#r1MenardsDiv').hide();
        $('#r1CustomerInquiryDiv').hide();
        $('#r1WsosDiv').hide();
        $('#r1SocialMediaDiv').hide();
        $('#r1AlysDiv').hide();
        $('#r1TotalDiv').hide();
        $('#r1RushDiv').hide();
        $('#r1HelpdeskDiv').hide();
        $('#r1NoTagDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2TotalDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2NoTagDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3TotalDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3NoTagDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4TotalDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4NoTagDiv').hide();
        $('#r5OrdersDiv').hide();
        $('#r5QuoteDiv').hide();
        $('#r5ReordersDiv').hide();
        $('#r5ServicePartsDiv').hide();
        $('#r5ServiceRequestDiv').hide();
        $('#r5ChangeDiv').hide();
        $('#r5DiscountDiv').hide();
        $('#r5CreditDiv').hide();
        $('#r5ManufacturingDiv').hide();
        $('#r5MenardsDiv').hide();
        $('#r5CustomerInquiryDiv').hide();
        $('#r5WsosDiv').hide();
        $('#r5SocialMediaDiv').hide();
        $('#r5AlysDiv').hide();
        $('#r5TotalDiv').hide();
        $('#r5RushDiv').hide();
        $('#r5HelpdeskDiv').hide();
        $('#r5NoTagDiv').hide();
        getByDate1R1P1();
    });
});


function validateResultsR1(data) {
    if (data.results[iCreateR1].type === "Quote") {
        createdOnRegion1OpenQuotes++;
    }
    if (data.results[iCreateR1].type === "Order") {
        createdOnRegion1OpenOrders++;
    }
    if (data.results[iCreateR1].type === "Reorder") {
        createdOnRegion1OpenReorder++;
    }
    if (data.results[iCreateR1].type === "Service Parts") {
        createdOnRegion1OpenServiceParts++;
    }
    if (data.results[iCreateR1].type === "Service Request") {
        createdOnRegion1OpenServiceRequest++;
    }
    if (data.results[iCreateR1].type === "Manufacturing") {
        createdOnRegion1OpenManufacturing++;
    }
    if (data.results[iCreateR1].type === "Rush") {
        createdOnRegion1OpenRush++;
    }
    if (data.results[iCreateR1].type === "Discount") {
        createdOnRegion1OpenDiscount++;
    }
    if (data.results[iCreateR1].type === "Menards \ Crestline Request") {
        createdOnRegion1OpenMenards++;
    }
    if (data.results[iCreateR1].type === "Customer Inquiry") {
        createdOnRegion1OpenCustomerInquiry++;
    }
    if (data.results[iCreateR1].type === "Internal Helpdesk Request") {
        createdOnRegion1OpenHelpdesk++;
    }
    if (data.results[iCreateR1].type === "Social Media") {
        createdOnRegion1OpenSocialMedia++;
    }
    if (data.results[iCreateR1].type === "WSOneSourceRequest") {
        createdOnRegion1OpenWSOSRequest++;
    }
    if (data.results[iCreateR1].type === "Alys Beach") {
        createdOnRegion1OpenAlysBeach++;
    }
    if (data.results[iCreateR1].type === "Change") {
        createdOnRegion1OpenChange++;
    }
    if (data.results[iCreateR1].type === "Credit") {
        createdOnRegion1OpenCredit++;
    }
    if (data.results[iCreateR1].type === null) {
        createdOpenNotMarkedR1++;
    }
    iCreateR1++;

}

function getByDate1R1P1() {
    $('#r1openQuotes').html("").css('color', 'white');
    $('#r1openOrders').html("").css('color', 'white');
    $('#r1openReorders').html("").css('color', 'white');
    $('#r1openServiceRequest').html("").css('color', 'white');
    $('#r1openServiceParts').html("").css('color', 'white');
    $('#r1openChange').html("").css('color', 'white');
    $('#r1openDiscount').html("").css('color', 'white');
    $('#r1openCredit').html("").css('color', 'white');
    $('#r1openManufacturing').html("").css('color', 'white');
    $('#r1openRush').html("").css('color', 'white');
    $('#r1openMenards').html("").css('color', 'white');
    $('#r1openCustomerInquiry').html("").css('color', 'white');
    $('#r1openHelpdesk').html("").css('color', 'white');
    $('#r1openWSOS').html("").css('color', 'white');
    $('#r1openSocialMedia').html("").css('color', 'white');
    $('#r1openAlys').html("").css('color', 'white');
    $('#r1openNoTag').html("").css('color', 'white');
    $('#r1allOpen').html("").css('color', 'white');
    $('#region1Container').show();
    $('#h21').css("color", "red").html("Loading");
    createdOnRegion1OpenOrders = 0;
    createdOnRegion1OpenQuotes = 0;
    createdOnRegion1OpenReorder = 0;
    createdOnRegion1OpenServiceParts = 0;
    createdOnRegion1OpenServiceRequest = 0;
    createdOnRegion1OpenManufacturing = 0;
    createdOnRegion1OpenChange = 0;
    createdOnRegion1OpenRush = 0;
    createdOnRegion1OpenDiscount = 0;
    createdOnRegion1OpenCredit = 0;
    createdOnRegion1OpenMenards = 0;
    createdOnRegion1OpenCustomerInquiry = 0;
    createdOnRegion1OpenHelpdesk = 0;
    createdOnRegion1OpenSocialMedia = 0;
    createdOnRegion1OpenWSOSRequest = 0;
    createdOnRegion1OpenAlysBeach = 0;
    createdOpenNotMarkedR1 = 0;

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048208\%20AND\%20created_at:\%27" + enteredDate + "\%27\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function () {
                    while (iCreateR1 < data.results.length) {
                        validateResultsR1(data);
                    }
                });
            iCreateR1 = 0;
            getByDate1R1P2(enteredDate);
        },
        error: function () {
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        }
    });
}

function getByDate1R1P2() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048208\%20AND\%20created_at:\%27" + enteredDate + "\%27\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function () {
                    while (iCreateR1 < data.results.length) {
                        validateResultsR1(data);
                    }
                });
            iCreateR1 = 0;
            getByDate1R1P3(enteredDate);
        },
        error: function () {
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        }
    });
}

function getByDate1R1P3() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048208\%20AND\%20created_at:\%27" + enteredDate + "\%27\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function () {
                    while (iCreateR1 < data.results.length) {
                        validateResultsR1(data);
                    }
                });
            iCreateR1 = 0;
            getByDate1R1P4(enteredDate);
        },
        error: function () {
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        }
    });
}

function getByDate1R1P4() {
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048208\%20AND\%20created_at:\%27" + enteredDate + "\%27\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function () {
                    while (iCreateR1 < data.results.length) {
                        validateResultsR1(data);
                    }
                });
            iCreateR1 = 0;
            getByDate1R1P5(enteredDate);
        },
        error: function () {
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        }
    });
}

function getByDate1R1P5() {

    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048208\%20AND\%20created_at:\%27" + enteredDate + "\%27\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function () {
                    while (iCreateR1 < data.results.length) {
                        validateResultsR1(data);
                    }
                });
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        },
        error: function () {
            iCreateR1 = 0;
            showr1OldData(enteredDate);
        }
    });
}






function showr1OldData(enteredDate) {
    //$('#dateSubmit').append(enteredDate);
    var createdIntquoter1 = parseInt(createdOnRegion1OpenQuotes);
    var createdIntorderr1 = parseInt(createdOnRegion1OpenOrders);
    var createdIntreorderr1 = parseInt(createdOnRegion1OpenReorder);
    var createdIntServiceRequestr1 = parseInt(createdOnRegion1OpenServiceRequest);
    var createdIntServicePartsr1 = parseInt(createdOnRegion1OpenServiceParts);
    var createdIntChanger1 = parseInt(createdOnRegion1OpenChange);
    var createdIntDiscountr1 = parseInt(createdOnRegion1OpenDiscount);
    var createdIntCreditr1 = parseInt(createdOnRegion1OpenCredit);
    var createdIntManufacturingr1 = parseInt(createdOnRegion1OpenManufacturing);
    var createdIntRushr1 = parseInt(createdOnRegion1OpenRush);
    var createdIntMenardsr1 = parseInt(createdOnRegion1OpenMenards);
    var createdIntCustomerInquiryr1 = parseInt(createdOnRegion1OpenCustomerInquiry);
    var createdIntHelpdeskr1 = parseInt(createdOnRegion1OpenHelpdesk);
    var createdIntWsosr1 = parseInt(createdOnRegion1OpenWSOSRequest);
    var createdIntAlysr1 = parseInt(createdOnRegion1OpenAlysBeach);
    var createdIntNoTagR1 = parseInt(createdOpenNotMarkedR1);
    var createdIntTotalr1 = createdIntquoter1 + createdIntorderr1 + createdIntreorderr1 + createdIntServiceRequestr1 + createdIntServicePartsr1 + createdIntChanger1 +
        createdIntDiscountr1 + createdIntCreditr1 + createdIntManufacturingr1 + createdIntRushr1 + createdIntMenardsr1 + createdIntCustomerInquiryr1 +
        createdIntHelpdeskr1 + createdIntWsosr1 + createdIntAlysr1 + createdIntNoTagR1;
    $('#r1openQuotes').html("    " + createdOnRegion1OpenQuotes).css('color', 'white');
    $('#r1openOrders').html("    " + createdOnRegion1OpenOrders).css('color', 'white');
    $('#r1openReorders').html("    " + createdOnRegion1OpenReorder).css('color', 'white');
    $('#r1openServiceRequest').html("    " + createdOnRegion1OpenServiceRequest).css('color', 'white');
    $('#r1openServiceParts').html("    " + createdOnRegion1OpenServiceParts).css('color', 'white');
    $('#r1openChange').html("    " + createdOnRegion1OpenChange).css('color', 'white');
    $('#r1openDiscount').html("    " + createdOnRegion1OpenDiscount).css('color', 'white');
    $('#r1openCredit').html("    " + createdOnRegion1OpenCredit).css('color', 'white');
    $('#r1openManufacturing').html("    " + createdOnRegion1OpenManufacturing).css('color', 'white');
    $('#r1openMenards').html("    " + createdOnRegion1OpenMenards).css('color', 'white');
    $('#r1openCustomerInquiry').html("    " + createdOnRegion1OpenCustomerInquiry).css('color', 'white');
    $('#r1openWSOS').html("    " + createdOnRegion1OpenWSOSRequest).css('color', 'white');
    $('#r1openSocialMedia').html("    " + createdOnRegion1OpenSocialMedia).css('color', 'white');
    $('#r1openAlys').html("    " + createdOnRegion1OpenAlysBeach).css('color', 'white');
    $('#r1allOpen').html(createdIntTotalr1).css('color', 'white').val();
    $('#r1openRush').html("    " + createdOnRegion1OpenRush).css('color', 'white');
    $('#r1openHelpdesk').html("    " + createdOnRegion1OpenHelpdesk).css('color', 'white');
    if (createdIntNoTagR1 > 0) {
        $('#r1openNoTag').html("    " + createdOpenNotMarkedR1).css('color', 'red');
    } else {
        $('#r1openNoTag').html("    " + createdOpenNotMarkedR1).css('color', 'white');
    }
    $('#h21').css('color', '#42f459').contents().first().replaceWith('Total Created Per Day');
}