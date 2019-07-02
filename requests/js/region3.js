//region 1 = 19000048208
//region 2 = 19000048209
//region 3 = 19000048213
//region 4 = 19000048255
//region 5 = 19000050835

//open = status = 2
//pending = status = 3
//resolved = status = 4
//closed = status = 5
//sent to customer = 6
//order entry verification = status = 18
//new = status = 19
//working issue now = status = 20
//sent to customer delayed = status = 28
var r3div = '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 r3IndividualTicket" style="font-size:14px; text-align:center; cursor:pointer;">';
var openOrdersR3 = 0;
var openQuotesR3 = 0;
var openReorderR3 = 0;
var openServicePartsR3 = 0;
var openServiceRequestR3 = 0;
var openManufacturingR3 = 0;
var openChangeR3 = 0;
var openRushR3 = 0;
var openDiscountR3 = 0;
var openCreditR3 = 0;
var openMenardsR3 = 0;
var openCustomerInquiryR3 = 0;
var openHelpdeskR3 = 0;
var openSocialMediaR3 = 0;
var openWSOSRequestR3 = 0;
var openAlysBeachR3 = 0;
var openNotMarkedR3 = 0;
var iR3 = 0;
var created_at = {
    created_at: "created_at"
};


$(document).ready(function () {
    $(document).on('click',
        ".r3IndividualTicket",
        function () {
            window.open('https:weathershield.freshdesk.com/helpdesk/tickets/' + this.innerText + '', '_blank');
        });

    $('#region3').click(function () {
        $('#r1ShowTicketsButton').show();
        $('#r2ShowTicketsButton').show();
        $('#r3ShowTicketsButton').show();
        $('#r4ShowTicketsButton').show();
        $('#r5ShowTicketsButton').show();
        r3ClearPages();
        showRegion3();
    });
    $("#r3ShowTicketsButton").click(function () {
        r3CheckInfo();
    });
    $("#r3HideTicketsButton").click(function () {
        r3HideTickets();
    });
    r3CheckForClicks();
});

function r3CheckForClicks() {
    $('#r3allOpen').click(function () {
        $('#r3TotalDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openQuotes').click(function () {
        $('#r3QuoteDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openOrders').click(function () {
        $('#r3OrdersDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openReorders').click(function () {
        $('#r3ReordersDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openRush').click(function () {
        $('#r3RushDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openCredit').click(function () {
        $('#r3CreditDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openMenards').click(function () {
        $('#r3MenardsDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openServiceParts').click(function () {
        $('#r3ServicePartsDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openServiceRequest').click(function () {
        $('#r3ServiceRequestDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openManufacturing').click(function () {
        $('#r3ManufacturingDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openCustomerInquiry').click(function () {
        $('#r3CustomerInquiryDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openSocialMedia').click(function () {
        $('#r3SocialMediaDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openHelpdesk').click(function () {
        $('#r3HelpdeskDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openWSOS').click(function () {
        $('#r3WsosDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openAlys').click(function () {
        $('#r3AlysDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openChange').click(function () {
        $('#r3ChangeDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3DiscountDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openDiscount').click(function () {
        $('#r3DiscountDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3NoTagDiv').hide();
    });
    $('#r3openNoTag').click(function () {
        $('#r3NoTagDiv').show();
        $("#r3HideTicketsButton").show();
        $('#r3TotalDiv').hide();
        $('#r3QuoteDiv').hide();
        $('#r3OrdersDiv').hide();
        $('#r3ReordersDiv').hide();
        $('#r3RushDiv').hide();
        $('#r3CreditDiv').hide();
        $('#r3MenardsDiv').hide();
        $('#r3ServicePartsDiv').hide();
        $('#r3ServiceRequestDiv').hide();
        $('#r3ManufacturingDiv').hide();
        $('#r3CustomerInquiryDiv').hide();
        $('#r3SocialMediaDiv').hide();
        $('#r3HelpdeskDiv').hide();
        $('#r3WsosDiv').hide();
        $('#r3AlysDiv').hide();
        $('#r3ChangeDiv').hide();
        $('#r3DiscountDiv').hide();
    });
    $("#r3HideTicketsButton").show();
}


function r3ClearPages() {

    $("#r3HideTicketsButton").hide();
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
    $("#r1HideTicketsButton").hide();
    $("#r2HideTicketsButton").hide();
    $("#r3HideTicketsButton").hide();
    $("#r4HideTicketsButton").hide();
    $("#r5HideTicketsButton").hide();
    $('#r2openQuotes').html("").css('color', 'white');
    $('#r2openOrders').html("").css('color', 'white');
    $('#r2openReorders').html("").css('color', 'white');
    $('#r2openServiceRequest').html("").css('color', 'white');
    $('#r2openServiceParts').html("").css('color', 'white');
    $('#r2openChange').html("").css('color', 'white');
    $('#r2openDiscount').html("").css('color', 'white');
    $('#r2openCredit').html("").css('color', 'white');
    $('#r2openManufacturing').html("").css('color', 'white');
    $('#r2openRush').html("").css('color', 'white');
    $('#r2openMenards').html("").css('color', 'white');
    $('#r2openCustomerInquiry').html("").css('color', 'white');
    $('#r2openHelpdesk').html("").css('color', 'white');
    $('#r2openWSOS').html("").css('color', 'white');
    $('#r2openSocialMedia').html("").css('color', 'white');
    $('#r2openAlys').html("").css('color', 'white');
    $('#r2openNoTag').html("").css('color', 'white');
    $('#r2allOpen').html("").css('color', 'white');
    $('#region1ContainerResolved').hide();
    $('#region1ContainerWorked').hide();
    $('#region2ContainerResolved').hide();
    $('#region2ContainerWorked').hide();
    $('#region3ContainerResolved').hide();
    $('#region3ContainerWorked').hide();
    $('#region4ContainerResolved').hide();
    $('#region4ContainerWorked').hide();
    $('#region5ContainerResolved').hide();
    $('#region5ContainerWorked').hide();
    $('#region5Container').hide();
    $('#region1Container').hide();
    $('#region2Container').hide();
    $('#region4Container').hide();
}

function r3CheckInfo() {
    if (openQuotesR3 < 1) {
        $('#r3QuoteDiv').hide();
    } else {
        $('#r3QuoteDiv').show();
    }
    $('#r3TotalDiv').show();
    if (openOrdersR3 < 1) {
        $('#r3OrdersDiv').hide();
    } else {
        $('#r3OrdersDiv').show();
    }
    if (openReorderR3 < 1) {
        $('#r3ReordersDiv').hide();
    } else {
        $('#r3ReordersDiv').show();
    }
    if (openRushR3 < 1) {
        $('#r3RushDiv').hide();
    } else {
        $('#r3RushDiv').show();
    }
    if (openCreditR3 < 1) {
        $('#r3CreditDiv').hide();
    } else {
        $('#r3CreditDiv').show();
    }
    if (openMenardsR3 < 1) {
        $('#r3MenardsDiv').hide();
    } else {
        $('#r3MenardsDiv').show();
    }
    if (openServicePartsR3 < 1) {
        $('#r3ServicePartsDiv').hide();
    } else {
        $('#r3ServicePartsDiv').show();
    }
    if (openServiceRequestR3 < 1) {
        $('#r3ServiceRequestDiv').hide();
    } else {
        $('#r3ServiceRequestDiv').show();
    }
    if (openManufacturingR3 < 1) {
        $('#r3ManufacturingDiv').hide();
    } else {
        $('#r3ManufacturingDiv').show();
    }
    if (openCustomerInquiryR3 < 1) {
        $('#r3CustomerInquiryDiv').hide();
    } else {
        $('#r3CustomerInquiryDiv').show();
    }
    if (openSocialMediaR3 < 1) {
        $('#r3SocialMediaDiv').hide();
    } else {
        $('#r3SocialMediaDiv').show();
    }
    if (openHelpdeskR3 < 1) {
        $('#r3HelpdeskDiv').hide();
    } else {
        $('#r3HelpdeskDiv').show();
    }
    if (openWSOSRequestR3 < 1) {
        $('#r3WsosDiv').hide();
    } else {
        $('#r3WsosDiv').show();
    }
    if (openAlysBeachR3 < 1) {
        $('#r3AlysDiv').hide();
    } else {
        $('#r3AlysDiv').show();
    }
    if (openChangeR3 < 1) {
        $('#r3ChangeDiv').hide();
    } else {
        $('#r3ChangeDiv').show();
    }
    if (openDiscountR3 < 1) {
        $('#r3DiscountDiv').hide();
    } else {
        $('#r3DiscountDiv').show();
    }
    if (openNotMarkedR3 < 1) {
        $('#r3NoTagDiv').hide();
    } else {
        $('#r3NoTagDiv').show();
    }
    $("#r3HideTicketsButton").show();

}

function r3HideTickets() {
    $("#r3HideTicketsButton").hide();
    $('#r3TotalDiv').hide();
    $('#r3QuoteDiv').hide();
    $('#r3OrdersDiv').hide();
    $('#r3ReordersDiv').hide();
    $('#r3RushDiv').hide();
    $('#r3CreditDiv').hide();
    $('#r3MenardsDiv').hide();
    $('#r3ServicePartsDiv').hide();
    $('#r3ServiceRequestDiv').hide();
    $('#r3ManufacturingDiv').hide();
    $('#r3CustomerInquiryDiv').hide();
    $('#r3SocialMediaDiv').hide();
    $('#r3SocialMediaDiv').hide();
    $('#r3HelpdeskDiv').hide();
    $('#r3WsosDiv').hide();
    $('#r3AlysDiv').hide();
    $('#r3ChangeDiv').hide();
    $('#r3DiscountDiv').hide();
    $('#r3NoTagDiv').hide();
}

function showRegion3() {
    $("#r3HideTicketsButton").hide();
    $('#region1ContainerResolved').hide();
    $('#region1ContainerWorked').hide();
    $('#region2ContainerResolved').hide();
    $('#region2ContainerWorked').hide();
    $('#region3ContainerResolved').hide();
    $('#region3ContainerWorked').hide();
    $('#region4ContainerResolved').hide();
    $('#region4ContainerWorked').hide();
    $('#region5ContainerResolved').hide();
    $('#region5ContainerWorked').hide();
    $('#region1Container').hide();
    $('#region2Container').hide();
    $('#region3Container').hide();
    $('#region4Container').hide();
    $('#region5Container').hide();
    getPage1r3();
}

function getPage1r3() {
    $('#h23').css("color", "red").html("Loading");
    openOrdersR3 = 0;
    openQuotesR3 = 0;
    openReorderR3 = 0;
    openServicePartsR3 = 0;
    openServiceRequestR3 = 0;
    openManufacturingR3 = 0;
    openChangeR3 = 0;
    openRushR3 = 0;
    openDiscountR3 = 0;
    openCreditR3 = 0;
    openMenardsR3 = 0;
    openCustomerInquiryR3 = 0;
    openHelpdeskR3 = 0;
    openSocialMediaR3 = 0;
    openWSOSRequestR3 = 0;
    openAlysBeachR3 = 0;
    openNotMarkedR3 = 0;
    iR3 = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage2r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage2r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage3r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage3r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage4r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage4r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage5r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });

}

function getPage5r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage6r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });

}

function getPage6r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage7r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });

}

function getPage7r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage8r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage8r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage9r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage9r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage10r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function getPage10r3() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048213\%20OR\%20status:19\%20AND\%20group_id:19000048213\%20OR%20status:18\%20AND\%20group_id:19000048213\%20OR\%20status:20\%20AND\%20group_id:19000048213)\"\&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR3 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR3();
                                return;
                            }
                            checkDataR3(data);
                        }
                    });
                iR3 = 0;
                getPage10r3();
            }
            else {
                showDataR3();
            }
        },
        error: function () {
            iR3 = 0;
            showDataR3();
        }
    });
}

function checkDataR3(data) {
    if (typeof data.results[iR3].custom_fields["cf_routed_to_example"] === 'undefined') {
        showDataR3();
    }

    $('#region3TotalList').prepend($(r3div).text(data.results[iR3].id));

    if (data.results[iR3].type === "Quote") {
        openQuotesR3++;
        $('#region3QuoteList').prepend($(r3div).text(data.results[iR3].id));
    }
    if (data.results[iR3].type === "Order") {
        openOrdersR3++;
        $('#region3OrdersList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Reorder") {
        openReorderR3++;
        $('#region3ReordersList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Service Parts") {
        openServicePartsR3++;
        $('#region3ServicePartsList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Service Request") {
        openServiceRequestR3++;
        $('#region3ServiceRequestList').prepend($(r3div).text(data.results[iR3].id));
    }
    if (data.results[iR3].type === "Manufacturing") {
        openManufacturingR3++;
        $('#region3ManufacturingList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Rush") {
        openRushR3++;
        $('#region3RushList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Discount") {
        openDiscountR3++;
        $('#region3DiscountList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Menards \ Crestline Request") {
        openMenardsR3++;
        $('#region3MenardsList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Customer Inquiry") {
        openCustomerInquiryR3++;
        $('#region3CustomerInquiryList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Internal Helpdesk Request") {
        openHelpdeskR3++;
        $('#region3HelpdeskList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Social Media") {
        openSocialMediaR3++;
        $('#region3SocialMediaList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "WSOneSourceRequest") {
        openWSOSRequestR3++;
        $('#region3WsosList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Alys Beach") {
        openAlysBeachR3++;
        $('#region3AlysList').prepend($(r3div).text(data.results[iR3].id));
    }
    if (data.results[iR3].type === "Change") {
        openChangeR3++;
        $('#region3ChangeList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === "Credit") {
        openCreditR3++;
        $('#region3CreditList').prepend($(r3div).text(data.results[iR3].id));

    }
    if (data.results[iR3].type === null) {
        openNotMarkedR3++;
        $('#region3NoTagList').prepend($(r3div).text(data.results[iR3].id));

    }
    iR3++;
}

function showDataR3() {
    $('#region3Container').show();
    var intquoteR3 = parseInt(openQuotesR3);
    var intorderR3 = parseInt(openOrdersR3);
    var intreorderR3 = parseInt(openReorderR3);
    var intServicePartsR3 = parseInt(openServicePartsR3);
    var intServiceRequestR3 = parseInt(openServiceRequestR3);
    var intManufacturingR3 = parseInt(openManufacturingR3);
    var intRushR3 = parseInt(openRushR3);
    var intDiscountR3 = parseInt(openDiscountR3);
    var intMenardsR3 = parseInt(openMenardsR3);
    var intCustomerInquiryR3 = parseInt(openCustomerInquiryR3);
    var intHelpdeskR3 = parseInt(openHelpdeskR3);
    var intSocialMediaR3 = parseInt(openSocialMediaR3);
    var intWsosR3 = parseInt(openWSOSRequestR3);
    var intAlysR3 = parseInt(openAlysBeachR3);
    var intChangeR3 = parseInt(openChangeR3);
    var intCreditR3 = parseInt(openCreditR3);

    var intNoTagR3 = parseInt(openNotMarkedR3);
    var totalR3 = intquoteR3 + intorderR3 + intreorderR3 + intServiceRequestR3 + intServicePartsR3 + intChangeR3 + intDiscountR3 +
        intCreditR3 + intManufacturingR3 + intRushR3 + intMenardsR3 + intCustomerInquiryR3 + intHelpdeskR3 + intWsosR3 + intAlysR3 + intNoTagR3 + intSocialMediaR3;
    $('#region3ContainerResolved').css('color', 'white');

    if (intquoteR3 > 0) {
        $('#r3openQuotes').html("    " + openQuotesR3).css('color', '#42f459');
    } else {
        $('#r3openQuotes').html("    " + openQuotesR3);
    }
    if (intorderR3 > 0) {
        $('#r3openOrders').html("    " + openOrdersR3).css('color', '#42f459');
    } else {
        $('#r3openOrders').html("    " + openOrdersR3);
    }
    if (intreorderR3 > 0) {
        $('#r3openReorders').html("    " + openReorderR3).css('color', '#42f459');
    } else {
        $('#r3openReorders').html("    " + openReorderR3);
    }
    if (intServiceRequestR3 > 0) {
        $('#r3openServiceRequest').html("    " + openServiceRequestR3).css('color', '#42f459');
    } else {
        $('#r3openServiceRequest').html("    " + openServiceRequestR3);
    }
    if (intServicePartsR3 > 0) {
        $('#r3openServiceParts').html("    " + openServicePartsR3).css('color', '#42f459');
    } else {
        $('#r3openServiceParts').html("    " + openServicePartsR3);
    }
    if (intChangeR3 > 0) {
        $('#r3openChange').html("    " + openChangeR3).css('color', '#42f459');
    } else {
        $('#r3openChange').html("    " + openChangeR3);
    }
    if (intDiscountR3 > 0) {
        $('#r3openDiscount').html("    " + openDiscountR3).css('color', '#42f459');
    } else {
        $('#r3openDiscount').html("    " + openDiscountR3);
    }
    if (intCreditR3 > 0) {
        $('#r3openCredit').html("    " + openCreditR3).css('color', '#42f459');
    } else {
        $('#r3openCredit').html("    " + openCreditR3);
    }
    if (intManufacturingR3 > 0) {
        $('#r3openManufacturing').html("    " + openManufacturingR3).css('color', '#42f459');
    } else {
        $('#r3openManufacturing').html("    " + openManufacturingR3);
    }
    if (intRushR3 > 0) {
        $('#r3openRush').html("    " + openRushR3).css('color', 'red');
    } else {
        $('#r3openRush').html("    " + openRushR3);
    }
    if (intMenardsR3 > 0) {
        $('#r3openMenards').html("    " + openMenardsR3).css('color', '#42f459');
    } else {
        $('#r3openMenards').html("    " + openMenardsR3);
    }
    if (intCustomerInquiryR3 > 0) {
        $('#r3openCustomerInquiry').html("    " + openCustomerInquiryR3).css('color', '#42f459');
    } else {
        $('#r3openCustomerInquiry').html("    " + openCustomerInquiryR3);
    }
    if (intSocialMediaR3 > 0) {
        $('#r3openSocialMedia').html("    " + openSocialMediaR3).css('color', '#42f459');
    } else {
        $('#r3openSocialMedia').html("    " + openSocialMediaR3);
    }
    if (intHelpdeskR3 > 0) {
        $('#r3openHelpdesk').html("    " + openHelpdeskR3).css('color', 'red');
    } else {
        $('#r3openHelpdesk').html("    " + openHelpdeskR3);
    }
    if (intWsosR3 > 0) {
        $('#r3openWSOS').html("    " + openWSOSRequestR3).css('color', '#42f459');
    } else {
        $('#r3openWSOS').html("    " + openWSOSRequestR3);
    }
    if (intAlysR3 > 0) {
        $('#r3openAlys').html("    " + openAlysBeachR3).css('color', 'red');
    } else {
        $('#r3openAlys').html("    " + openAlysBeachR3);
    }
    if (intNoTagR3 > 0) {
        $('#r3openNoTag').html("    " + openNotMarkedR3).css('color', 'red');
    } else {
        $('#r3openNoTag').html("    " + openNotMarkedR3);
    }
    $('#r3allOpen').html("    " + totalR3).css('color', '#42f459');
    $('#h23').css('color', 'white').contents().first().replaceWith('Current Count (Shows status of all current new, open, working, & OE verify tickets. Does not show Sent to or Pending)');

}