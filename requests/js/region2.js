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
var r2div = '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 r2IndividualTicket" style="font-size:14px; text-align:center; cursor:pointer;">';
var openOrdersR2 = 0;
var openQuotesR2 = 0;
var openReorderR2 = 0;
var openServicePartsR2 = 0;
var openServiceRequestR2 = 0;
var openManufacturingR2 = 0;
var openChangeR2 = 0;
var openRushR2 = 0;
var openDiscountR2 = 0;
var openCreditR2 = 0;
var openMenardsR2 = 0;
var openCustomerInquiryR2 = 0;
var openHelpdeskR2 = 0;
var openSocialMediaR2 = 0;
var openWSOSRequestR2 = 0;
var openAlysBeachR2 = 0;
var openNotMarkedR2 = 0;
var iR2 = 0;
var created_at = {
    created_at: "created_at"
};


$(document).ready(function () {
    $(document).on('click',
        ".r2IndividualTicket",
        function () {
            window.open('https:weathershield.freshdesk.com/helpdesk/tickets/' + this.innerText + '', '_blank');
        });

    $('#region2').click(function () {
        $('#r1ShowTicketsButton').show();
        $('#r2ShowTicketsButton').show();
        $('#r3ShowTicketsButton').show();
        $('#r4ShowTicketsButton').show();
        $('#r5ShowTicketsButton').show();
        r2ClearPages();
        showRegion2();
    });
    $("#r2ShowTicketsButton").click(function () {
        r2CheckInfo();
    });
    $("#r2HideTicketsButton").click(function () {
        r2HideTickets();
    });
    r2CheckForClicks();
});

function r2CheckForClicks() {
    $('#r2allOpen').click(function () {
        $('#r2TotalDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openQuotes').click(function () {
        $('#r2QuoteDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openOrders').click(function () {
        $('#r2OrdersDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openReorders').click(function () {
        $('#r2ReordersDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openRush').click(function () {
        $('#r2RushDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openCredit').click(function () {
        $('#r2CreditDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openMenards').click(function () {
        $('#r2MenardsDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openServiceParts').click(function () {
        $('#r2ServicePartsDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openServiceRequest').click(function () {
        $('#r2ServiceRequestDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openManufacturing').click(function () {
        $('#r2ManufacturingDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openCustomerInquiry').click(function () {
        $('#r2CustomerInquiryDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openSocialMedia').click(function () {
        $('#r2SocialMediaDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openHelpdesk').click(function () {
        $('#r2HelpdeskDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openWSOS').click(function () {
        $('#r2WsosDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openAlys').click(function () {
        $('#r2AlysDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openChange').click(function () {
        $('#r2ChangeDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2DiscountDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openDiscount').click(function () {
        $('#r2DiscountDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2NoTagDiv').hide();
    });
    $('#r2openNoTag').click(function () {
        $('#r2NoTagDiv').show();
        $("#r2HideTicketsButton").show();
        $('#r2TotalDiv').hide();
        $('#r2QuoteDiv').hide();
        $('#r2OrdersDiv').hide();
        $('#r2ReordersDiv').hide();
        $('#r2RushDiv').hide();
        $('#r2CreditDiv').hide();
        $('#r2MenardsDiv').hide();
        $('#r2ServicePartsDiv').hide();
        $('#r2ServiceRequestDiv').hide();
        $('#r2ManufacturingDiv').hide();
        $('#r2CustomerInquiryDiv').hide();
        $('#r2SocialMediaDiv').hide();
        $('#r2HelpdeskDiv').hide();
        $('#r2WsosDiv').hide();
        $('#r2AlysDiv').hide();
        $('#r2ChangeDiv').hide();
        $('#r2DiscountDiv').hide();
    });
    $("#r2HideTicketsButton").show();
}


function r2ClearPages() {

    $("#r2HideTicketsButton").hide();
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
    $('#region3Container').hide();
    $('#region4Container').hide();
}

function r2CheckInfo() {
    if (openQuotesR2 < 1) {
        $('#r2QuoteDiv').hide();
    } else {
        $('#r2QuoteDiv').show();
    }
    $('#r2TotalDiv').show();
    if (openOrdersR2 < 1) {
        $('#r2OrdersDiv').hide();
    } else {
        $('#r2OrdersDiv').show();
    }
    if (openReorderR2 < 1) {
        $('#r2ReordersDiv').hide();
    } else {
        $('#r2ReordersDiv').show();
    }
    if (openRushR2 < 1) {
        $('#r2RushDiv').hide();
    } else {
        $('#r2RushDiv').show();
    }
    if (openCreditR2 < 1) {
        $('#r2CreditDiv').hide();
    } else {
        $('#r2CreditDiv').show();
    }
    if (openMenardsR2 < 1) {
        $('#r2MenardsDiv').hide();
    } else {
        $('#r2MenardsDiv').show();
    }
    if (openServicePartsR2 < 1) {
        $('#r2ServicePartsDiv').hide();
    } else {
        $('#r2ServicePartsDiv').show();
    }
    if (openServiceRequestR2 < 1) {
        $('#r2ServiceRequestDiv').hide();
    } else {
        $('#r2ServiceRequestDiv').show();
    }
    if (openManufacturingR2 < 1) {
        $('#r2ManufacturingDiv').hide();
    } else {
        $('#r2ManufacturingDiv').show();
    }
    if (openCustomerInquiryR2 < 1) {
        $('#r2CustomerInquiryDiv').hide();
    } else {
        $('#r2CustomerInquiryDiv').show();
    }
    if (openSocialMediaR2 < 1) {
        $('#r2SocialMediaDiv').hide();
    } else {
        $('#r2SocialMediaDiv').show();
    }
    if (openHelpdeskR2 < 1) {
        $('#r2HelpdeskDiv').hide();
    } else {
        $('#r2HelpdeskDiv').show();
    }
    if (openWSOSRequestR2 < 1) {
        $('#r2WsosDiv').hide();
    } else {
        $('#r2WsosDiv').show();
    }
    if (openAlysBeachR2 < 1) {
        $('#r2AlysDiv').hide();
    } else {
        $('#r2AlysDiv').show();
    }
    if (openChangeR2 < 1) {
        $('#r2ChangeDiv').hide();
    } else {
        $('#r2ChangeDiv').show();
    }
    if (openDiscountR2 < 1) {
        $('#r2DiscountDiv').hide();
    } else {
        $('#r2DiscountDiv').show();
    }
    if (openNotMarkedR2 < 1) {
        $('#r2NoTagDiv').hide();
    } else {
        $('#r2NoTagDiv').show();
    }
    $("#r2HideTicketsButton").show();

}

function r2HideTickets() {
    $("#r2HideTicketsButton").hide();
    $('#r2TotalDiv').hide();
    $('#r2QuoteDiv').hide();
    $('#r2OrdersDiv').hide();
    $('#r2ReordersDiv').hide();
    $('#r2RushDiv').hide();
    $('#r2CreditDiv').hide();
    $('#r2MenardsDiv').hide();
    $('#r2ServicePartsDiv').hide();
    $('#r2ServiceRequestDiv').hide();
    $('#r2ManufacturingDiv').hide();
    $('#r2CustomerInquiryDiv').hide();
    $('#r2SocialMediaDiv').hide();
    $('#r2SocialMediaDiv').hide();
    $('#r2HelpdeskDiv').hide();
    $('#r2WsosDiv').hide();
    $('#r2AlysDiv').hide();
    $('#r2ChangeDiv').hide();
    $('#r2DiscountDiv').hide();
    $('#r2NoTagDiv').hide();
}

function showRegion2() {
    $("#r2HideTicketsButton").hide();
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
    getPage1r2();
}

function getPage1r2() {
    $('#h22').css("color", "red").html("Loading");
    openOrdersR2 = 0;
    openQuotesR2 = 0;
    openReorderR2 = 0;
    openServicePartsR2 = 0;
    openServiceRequestR2 = 0;
    openManufacturingR2 = 0;
    openChangeR2 = 0;
    openRushR2 = 0;
    openDiscountR2 = 0;
    openCreditR2 = 0;
    openMenardsR2 = 0;
    openCustomerInquiryR2 = 0;
    openHelpdeskR2 = 0;
    openSocialMediaR2 = 0;
    openWSOSRequestR2 = 0;
    openAlysBeachR2 = 0;
    openNotMarkedR2 = 0;
    iR2 = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage2r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage2r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage3r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage3r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage4r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage4r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage5r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });

}

function getPage5r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage6r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });

}

function getPage6r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage7r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });

}

function getPage7r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage8r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage8r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage9r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage9r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage10r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function getPage10r2() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048209\%20OR\%20status:19\%20AND\%20group_id:19000048209\%20OR%20status:18\%20AND\%20group_id:19000048209\%20OR\%20status:20\%20AND\%20group_id:19000048209)\"\&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR2 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR2();
                                return;
                            }
                            checkDataR2(data);
                        }
                    });
                iR2 = 0;
                getPage10r2();
            }
            else {
                showDataR2();
            }
        },
        error: function () {
            iR2 = 0;
            showDataR2();
        }
    });
}

function checkDataR2(data) {
    if (typeof data.results[iR2].custom_fields["cf_routed_to_example"] === 'undefined') {
        showDataR2();
    }

    $('#region2TotalList').prepend($(r2div).text(data.results[iR2].id));

    if (data.results[iR2].type === "Quote") {
        openQuotesR2++;
        $('#region2QuoteList').prepend($(r2div).text(data.results[iR2].id));
    }
    if (data.results[iR2].type === "Order") {
        openOrdersR2++;
        $('#region2OrdersList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Reorder") {
        openReorderR2++;
        $('#region2ReordersList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Service Parts") {
        openServicePartsR2++;
        $('#region2ServicePartsList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Service Request") {
        openServiceRequestR2++;
        $('#region2ServiceRequestList').prepend($(r2div).text(data.results[iR2].id));
    }
    if (data.results[iR2].type === "Manufacturing") {
        openManufacturingR2++;
        $('#region2ManufacturingList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Rush") {
        openRushR2++;
        $('#region2RushList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Discount") {
        openDiscountR2++;
        $('#region2DiscountList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Menards \ Crestline Request") {
        openMenardsR2++;
        $('#region2MenardsList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Customer Inquiry") {
        openCustomerInquiryR2++;
        $('#region2CustomerInquiryList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Internal Helpdesk Request") {
        openHelpdeskR2++;
        $('#region2HelpdeskList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Social Media") {
        openSocialMediaR2++;
        $('#region2SocialMediaList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "WSOneSourceRequest") {
        openWSOSRequestR2++;
        $('#region2WsosList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Alys Beach") {
        openAlysBeachR2++;
        $('#region2AlysList').prepend($(r2div).text(data.results[iR2].id));
    }
    if (data.results[iR2].type === "Change") {
        openChangeR2++;
        $('#region2ChangeList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === "Credit") {
        openCreditR2++;
        $('#region2CreditList').prepend($(r2div).text(data.results[iR2].id));

    }
    if (data.results[iR2].type === null) {
        openNotMarkedR2++;
        $('#region2NoTagList').prepend($(r2div).text(data.results[iR2].id));

    }
    iR2++;
}

function showDataR2() {
    $('#region2Container').show();
    var intquoteR2 = parseInt(openQuotesR2);
    var intorderR2 = parseInt(openOrdersR2);
    var intreorderR2 = parseInt(openReorderR2);
    var intServicePartsR2 = parseInt(openServicePartsR2);
    var intServiceRequestR2 = parseInt(openServiceRequestR2);
    var intManufacturingR2 = parseInt(openManufacturingR2);
    var intRushR2 = parseInt(openRushR2);
    var intDiscountR2 = parseInt(openDiscountR2);
    var intMenardsR2 = parseInt(openMenardsR2);
    var intCustomerInquiryR2 = parseInt(openCustomerInquiryR2);
    var intHelpdeskR2 = parseInt(openHelpdeskR2);
    var intSocialMediaR2 = parseInt(openSocialMediaR2);
    var intWsosR2 = parseInt(openWSOSRequestR2);
    var intAlysR2 = parseInt(openAlysBeachR2);
    var intChangeR2 = parseInt(openChangeR2);
    var intCreditR2 = parseInt(openCreditR2);

    var intNoTagR2 = parseInt(openNotMarkedR2);
    var totalR2 = intquoteR2 + intorderR2 + intreorderR2 + intServiceRequestR2 + intServicePartsR2 + intChangeR2 + intDiscountR2 +
        intCreditR2 + intManufacturingR2 + intRushR2 + intMenardsR2 + intCustomerInquiryR2 + intHelpdeskR2 + intWsosR2 + intAlysR2 + intNoTagR2 + intSocialMediaR2;
    $('#region2ContainerResolved').css('color', 'white');

    if (intquoteR2 > 0) {
        $('#r2openQuotes').html("    " + openQuotesR2).css('color', '#42f459');
    } else {
        $('#r2openQuotes').html("    " + openQuotesR2);
    }
    if (intorderR2 > 0) {
        $('#r2openOrders').html("    " + openOrdersR2).css('color', '#42f459');
    } else {
        $('#r2openOrders').html("    " + openOrdersR2);
    }
    if (intreorderR2 > 0) {
        $('#r2openReorders').html("    " + openReorderR2).css('color', '#42f459');
    } else {
        $('#r2openReorders').html("    " + openReorderR2);
    }
    if (intServiceRequestR2 > 0) {
        $('#r2openServiceRequest').html("    " + openServiceRequestR2).css('color', '#42f459');
    } else {
        $('#r2openServiceRequest').html("    " + openServiceRequestR2);
    }
    if (intServicePartsR2 > 0) {
        $('#r2openServiceParts').html("    " + openServicePartsR2).css('color', '#42f459');
    } else {
        $('#r2openServiceParts').html("    " + openServicePartsR2);
    }
    if (intChangeR2 > 0) {
        $('#r2openChange').html("    " + openChangeR2).css('color', '#42f459');
    } else {
        $('#r2openChange').html("    " + openChangeR2);
    }
    if (intDiscountR2 > 0) {
        $('#r2openDiscount').html("    " + openDiscountR2).css('color', '#42f459');
    } else {
        $('#r2openDiscount').html("    " + openDiscountR2);
    }
    if (intCreditR2 > 0) {
        $('#r2openCredit').html("    " + openCreditR2).css('color', '#42f459');
    } else {
        $('#r2openCredit').html("    " + openCreditR2);
    }
    if (intManufacturingR2 > 0) {
        $('#r2openManufacturing').html("    " + openManufacturingR2).css('color', '#42f459');
    } else {
        $('#r2openManufacturing').html("    " + openManufacturingR2);
    }
    if (intRushR2 > 0) {
        $('#r2openRush').html("    " + openRushR2).css('color', 'red');
    } else {
        $('#r2openRush').html("    " + openRushR2);
    }
    if (intMenardsR2 > 0) {
        $('#r2openMenards').html("    " + openMenardsR2).css('color', '#42f459');
    } else {
        $('#r2openMenards').html("    " + openMenardsR2);
    }
    if (intCustomerInquiryR2 > 0) {
        $('#r2openCustomerInquiry').html("    " + openCustomerInquiryR2).css('color', '#42f459');
    } else {
        $('#r2openCustomerInquiry').html("    " + openCustomerInquiryR2);
    }
    if (intSocialMediaR2 > 0) {
        $('#r2openSocialMedia').html("    " + openSocialMediaR2).css('color', '#42f459');
    } else {
        $('#r2openSocialMedia').html("    " + openSocialMediaR2);
    }
    if (intHelpdeskR2 > 0) {
        $('#r2openHelpdesk').html("    " + openHelpdeskR2).css('color', 'red');
    } else {
        $('#r2openHelpdesk').html("    " + openHelpdeskR2);
    }
    if (intWsosR2 > 0) {
        $('#r2openWSOS').html("    " + openWSOSRequestR2).css('color', '#42f459');
    } else {
        $('#r2openWSOS').html("    " + openWSOSRequestR2);
    }
    if (intAlysR2 > 0) {
        $('#r2openAlys').html("    " + openAlysBeachR2).css('color', 'red');
    } else {
        $('#r2openAlys').html("    " + openAlysBeachR2);
    }
    if (intNoTagR2 > 0) {
        $('#r2openNoTag').html("    " + openNotMarkedR2).css('color', 'red');
    } else {
        $('#r2openNoTag').html("    " + openNotMarkedR2);
    }
    $('#r2allOpen').html("    " + totalR2).css('color', '#42f459');
    $('#h22').css('color', 'white').contents().first().replaceWith('Current Count (Shows status of all current new, open, working, & OE verify tickets. Does not show Sent to or Pending)');

}





