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
var r4div = '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 r1IndividualTicket" style="font-size:14px; text-align:center; cursor:pointer;">';
var openOrdersR4 = 0;
var openQuotesR4 = 0;
var openReorderR4 = 0;
var openServicePartsR4 = 0;
var openServiceRequestR4 = 0;
var openManufacturingR4 = 0;
var openChangeR4 = 0;
var openRushR4 = 0;
var openDiscountR4 = 0;
var openCreditR4 = 0;
var openMenardsR4 = 0;
var openCustomerInquiryR4 = 0;
var openHelpdeskR4 = 0;
var openSocialMediaR4 = 0;
var openWSOSRequestR4 = 0;
var openAlysBeachR4 = 0;
var openNotMarkedR4 = 0;
var iR4 = 0;
var created_at = {
    created_at: "created_at"
};


$(document).ready(function () {
    $(document).on('click',
        ".r4IndividualTicket",
        function () {
            window.open('https:weathershield.freshdesk.com/helpdesk/tickets/' + this.innerText + '', '_blank');
        });

    $('#region4').click(function () {
        $('#r1ShowTicketsButton').show();
        $('#r2ShowTicketsButton').show();
        $('#r3ShowTicketsButton').show();
        $('#r4ShowTicketsButton').show();
        $('#r5ShowTicketsButton').show();
        r4ClearPages();
        showRegion4();
    });
    $("#r4ShowTicketsButton").click(function () {
        r4CheckInfo();
    });
    $("#r4HideTicketsButton").click(function () {
        r4HideTickets();
    });
    r4CheckForClicks();
});

function r4CheckForClicks() {
    $('#r4allOpen').click(function () {
        $('#r4TotalDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openQuotes').click(function () {
        $('#r4QuoteDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openOrders').click(function () {
        $('#r4OrdersDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openReorders').click(function () {
        $('#r4ReordersDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openRush').click(function () {
        $('#r4RushDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openCredit').click(function () {
        $('#r4CreditDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openMenards').click(function () {
        $('#r4MenardsDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openServiceParts').click(function () {
        $('#r4ServicePartsDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openServiceRequest').click(function () {
        $('#r4ServiceRequestDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openManufacturing').click(function () {
        $('#r4ManufacturingDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openCustomerInquiry').click(function () {
        $('#r4CustomerInquiryDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openSocialMedia').click(function () {
        $('#r4SocialMediaDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openHelpdesk').click(function () {
        $('#r4HelpdeskDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openWSOS').click(function () {
        $('#r4WsosDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openAlys').click(function () {
        $('#r4AlysDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openChange').click(function () {
        $('#r4ChangeDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4DiscountDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openDiscount').click(function () {
        $('#r4DiscountDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4NoTagDiv').hide();
    });
    $('#r4openNoTag').click(function () {
        $('#r4NoTagDiv').show();
        $("#r4HideTicketsButton").show();
        $('#r4TotalDiv').hide();
        $('#r4QuoteDiv').hide();
        $('#r4OrdersDiv').hide();
        $('#r4ReordersDiv').hide();
        $('#r4RushDiv').hide();
        $('#r4CreditDiv').hide();
        $('#r4MenardsDiv').hide();
        $('#r4ServicePartsDiv').hide();
        $('#r4ServiceRequestDiv').hide();
        $('#r4ManufacturingDiv').hide();
        $('#r4CustomerInquiryDiv').hide();
        $('#r4SocialMediaDiv').hide();
        $('#r4HelpdeskDiv').hide();
        $('#r4WsosDiv').hide();
        $('#r4AlysDiv').hide();
        $('#r4ChangeDiv').hide();
        $('#r4DiscountDiv').hide();
    });
    $("#r4HideTicketsButton").show();
}


function r4ClearPages() {

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
    $("#r1HideTicketsButton").hide();
    $("#r2HideTicketsButton").hide();
    $("#r3HideTicketsButton").hide();
    $("#r4HideTicketsButton").hide();
    $("#r5HideTicketsButton").hide();
    $('#r4openQuotes').html("").css('color', 'white');
    $('#r4openOrders').html("").css('color', 'white');
    $('#r4openReorders').html("").css('color', 'white');
    $('#r4openServiceRequest').html("").css('color', 'white');
    $('#r4openServiceParts').html("").css('color', 'white');
    $('#r4openChange').html("").css('color', 'white');
    $('#r4openDiscount').html("").css('color', 'white');
    $('#r4openCredit').html("").css('color', 'white');
    $('#r4openManufacturing').html("").css('color', 'white');
    $('#r4openRush').html("").css('color', 'white');
    $('#r4openMenards').html("").css('color', 'white');
    $('#r4openCustomerInquiry').html("").css('color', 'white');
    $('#r4openHelpdesk').html("").css('color', 'white');
    $('#r4openWSOS').html("").css('color', 'white');
    $('#r4openSocialMedia').html("").css('color', 'white');
    $('#r4openAlys').html("").css('color', 'white');
    $('#r4openNoTag').html("").css('color', 'white');
    $('#r4allOpen').html("").css('color', 'white');
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
    $('#region2Container').hide();
}

function r4CheckInfo() {
    if (openQuotesR4 < 1) {
        $('#r4QuoteDiv').hide();
    } else {
        $('#r4QuoteDiv').show();
    }
    $('#r4TotalDiv').show();
    if (openOrdersR4 < 1) {
        $('#r4OrdersDiv').hide();
    } else {
        $('#r4OrdersDiv').show();
    }
    if (openReorderR4 < 1) {
        $('#r4ReordersDiv').hide();
    } else {
        $('#r4ReordersDiv').show();
    }
    if (openRushR4 < 1) {
        $('#r4RushDiv').hide();
    } else {
        $('#r4RushDiv').show();
    }
    if (openCreditR4 < 1) {
        $('#r4CreditDiv').hide();
    } else {
        $('#r4CreditDiv').show();
    }
    if (openMenardsR4 < 1) {
        $('#r4MenardsDiv').hide();
    } else {
        $('#r4MenardsDiv').show();
    }
    if (openServicePartsR4 < 1) {
        $('#r4ServicePartsDiv').hide();
    } else {
        $('#r4ServicePartsDiv').show();
    }
    if (openServiceRequestR4 < 1) {
        $('#r4ServiceRequestDiv').hide();
    } else {
        $('#r4ServiceRequestDiv').show();
    }
    if (openManufacturingR4 < 1) {
        $('#r4ManufacturingDiv').hide();
    } else {
        $('#r4ManufacturingDiv').show();
    }
    if (openCustomerInquiryR4 < 1) {
        $('#r4CustomerInquiryDiv').hide();
    } else {
        $('#r4CustomerInquiryDiv').show();
    }
    if (openSocialMediaR4 < 1) {
        $('#r4SocialMediaDiv').hide();
    } else {
        $('#r4SocialMediaDiv').show();
    }
    if (openHelpdeskR4 < 1) {
        $('#r4HelpdeskDiv').hide();
    } else {
        $('#r4HelpdeskDiv').show();
    }
    if (openWSOSRequestR4 < 1) {
        $('#r4WsosDiv').hide();
    } else {
        $('#r4WsosDiv').show();
    }
    if (openAlysBeachR4 < 1) {
        $('#r4AlysDiv').hide();
    } else {
        $('#r4AlysDiv').show();
    }
    if (openChangeR4 < 1) {
        $('#r4ChangeDiv').hide();
    } else {
        $('#r4ChangeDiv').show();
    }
    if (openDiscountR4 < 1) {
        $('#r4DiscountDiv').hide();
    } else {
        $('#r4DiscountDiv').show();
    }
    if (openNotMarkedR4 < 1) {
        $('#r4NoTagDiv').hide();
    } else {
        $('#r4NoTagDiv').show();
    }
    $("#r4HideTicketsButton").show();

}

function r4HideTickets() {
    $("#r4HideTicketsButton").hide();
    $('#r4TotalDiv').hide();
    $('#r4QuoteDiv').hide();
    $('#r4OrdersDiv').hide();
    $('#r4ReordersDiv').hide();
    $('#r4RushDiv').hide();
    $('#r4CreditDiv').hide();
    $('#r4MenardsDiv').hide();
    $('#r4ServicePartsDiv').hide();
    $('#r4ServiceRequestDiv').hide();
    $('#r4ManufacturingDiv').hide();
    $('#r4CustomerInquiryDiv').hide();
    $('#r4SocialMediaDiv').hide();
    $('#r4SocialMediaDiv').hide();
    $('#r4HelpdeskDiv').hide();
    $('#r4WsosDiv').hide();
    $('#r4AlysDiv').hide();
    $('#r4ChangeDiv').hide();
    $('#r4DiscountDiv').hide();
    $('#r4NoTagDiv').hide();
}

function showRegion4() {
    $("#r4HideTicketsButton").hide();
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
    getPage1r4();
}

function getPage1r4() {
    $('#h24').css("color", "red").html("Loading");
    openOrdersR4 = 0;
    openQuotesR4 = 0;
    openReorderR4 = 0;
    openServicePartsR4 = 0;
    openServiceRequestR4 = 0;
    openManufacturingR4 = 0;
    openChangeR4 = 0;
    openRushR4 = 0;
    openDiscountR4 = 0;
    openCreditR4 = 0;
    openMenardsR4 = 0;
    openCustomerInquiryR4 = 0;
    openHelpdeskR4 = 0;
    openSocialMediaR4 = 0;
    openWSOSRequestR4 = 0;
    openAlysBeachR4 = 0;
    openNotMarkedR4 = 0;
    iR4 = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage2r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage2r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage3r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage3r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage4r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage4r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage5r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });

}

function getPage5r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage6r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });

}

function getPage6r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage7r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });

}

function getPage7r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage8r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage8r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage9r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage9r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage10r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function getPage10r4() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000048255\%20OR\%20status:19\%20AND\%20group_id:19000048255\%20OR%20status:18\%20AND\%20group_id:19000048255\%20OR\%20status:20\%20AND\%20group_id:19000048255)\"\&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR4 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR4();
                                return;
                            }
                            checkDataR4(data);
                        }
                    });
                iR4 = 0;
                getPage10r4();
            }
            else {
                showDataR4();
            }
        },
        error: function () {
            iR4 = 0;
            showDataR4();
        }
    });
}

function checkDataR4(data) {
    if (typeof data.results[iR4].custom_fields["cf_routed_to_example"] === 'undefined') {
        showDataR4();
    }

    $('#region4TotalList').prepend($(r4div).text(data.results[iR4].id));

    if (data.results[iR4].type === "Quote") {
        openQuotesR4++;
        $('#region4QuoteList').prepend($(r4div).text(data.results[iR4].id));
    }
    if (data.results[iR4].type === "Order") {
        openOrdersR4++;
        $('#region4OrdersList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Reorder") {
        openReorderR4++;
        $('#region4ReordersList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Service Parts") {
        openServicePartsR4++;
        $('#region4ServicePartsList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Service Request") {
        openServiceRequestR4++;
        $('#region4ServiceRequestList').prepend($(r4div).text(data.results[iR4].id));
    }
    if (data.results[iR4].type === "Manufacturing") {
        openManufacturingR4++;
        $('#region4ManufacturingList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Rush") {
        openRushR4++;
        $('#region4RushList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Discount") {
        openDiscountR4++;
        $('#region4DiscountList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Menards \ Crestline Request") {
        openMenardsR4++;
        $('#region4MenardsList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Customer Inquiry") {
        openCustomerInquiryR4++;
        $('#region4CustomerInquiryList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Internal Helpdesk Request") {
        openHelpdeskR4++;
        $('#region4HelpdeskList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Social Media") {
        openSocialMediaR4++;
        $('#region4SocialMediaList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "WSOneSourceRequest") {
        openWSOSRequestR4++;
        $('#region4WsosList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Alys Beach") {
        openAlysBeachR4++;
        $('#region4AlysList').prepend($(r4div).text(data.results[iR4].id));
    }
    if (data.results[iR4].type === "Change") {
        openChangeR4++;
        $('#region4ChangeList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === "Credit") {
        openCreditR4++;
        $('#region4CreditList').prepend($(r4div).text(data.results[iR4].id));

    }
    if (data.results[iR4].type === null) {
        openNotMarkedR4++;
        $('#region4NoTagList').prepend($(r4div).text(data.results[iR4].id));

    }
    iR4++;
}

function showDataR4() {
    $('#region4Container').show();
    var intquoteR4 = parseInt(openQuotesR4);
    var intorderR4 = parseInt(openOrdersR4);
    var intreorderR4 = parseInt(openReorderR4);
    var intServicePartsR4 = parseInt(openServicePartsR4);
    var intServiceRequestR4 = parseInt(openServiceRequestR4);
    var intManufacturingR4 = parseInt(openManufacturingR4);
    var intRushR4 = parseInt(openRushR4);
    var intDiscountR4 = parseInt(openDiscountR4);
    var intMenardsR4 = parseInt(openMenardsR4);
    var intCustomerInquiryR4 = parseInt(openCustomerInquiryR4);
    var intHelpdeskR4 = parseInt(openHelpdeskR4);
    var intSocialMediaR4 = parseInt(openSocialMediaR4);
    var intWsosR4 = parseInt(openWSOSRequestR4);
    var intAlysR4 = parseInt(openAlysBeachR4);
    var intChangeR4 = parseInt(openChangeR4);
    var intCreditR4 = parseInt(openCreditR4);

    var intNoTagR4 = parseInt(openNotMarkedR4);
    var totalR4 = intquoteR4 + intorderR4 + intreorderR4 + intServiceRequestR4 + intServicePartsR4 + intChangeR4 + intDiscountR4 +
        intCreditR4 + intManufacturingR4 + intRushR4 + intMenardsR4 + intCustomerInquiryR4 + intHelpdeskR4 + intWsosR4 + intAlysR4 + intNoTagR4 + intSocialMediaR4;
    $('#region4ContainerResolved').css('color', 'white');

    if (intquoteR4 > 0) {
        $('#r4openQuotes').html("    " + openQuotesR4).css('color', '#42f459');
    } else {
        $('#r4openQuotes').html("    " + openQuotesR4);
    }
    if (intorderR4 > 0) {
        $('#r4openOrders').html("    " + openOrdersR4).css('color', '#42f459');
    } else {
        $('#r4openOrders').html("    " + openOrdersR4);
    }
    if (intreorderR4 > 0) {
        $('#r4openReorders').html("    " + openReorderR4).css('color', '#42f459');
    } else {
        $('#r4openReorders').html("    " + openReorderR4);
    }
    if (intServiceRequestR4 > 0) {
        $('#r4openServiceRequest').html("    " + openServiceRequestR4).css('color', '#42f459');
    } else {
        $('#r4openServiceRequest').html("    " + openServiceRequestR4);
    }
    if (intServicePartsR4 > 0) {
        $('#r4openServiceParts').html("    " + openServicePartsR4).css('color', '#42f459');
    } else {
        $('#r4openServiceParts').html("    " + openServicePartsR4);
    }
    if (intChangeR4 > 0) {
        $('#r4openChange').html("    " + openChangeR4).css('color', '#42f459');
    } else {
        $('#r4openChange').html("    " + openChangeR4);
    }
    if (intDiscountR4 > 0) {
        $('#r4openDiscount').html("    " + openDiscountR4).css('color', '#42f459');
    } else {
        $('#r4openDiscount').html("    " + openDiscountR4);
    }
    if (intCreditR4 > 0) {
        $('#r4openCredit').html("    " + openCreditR4).css('color', '#42f459');
    } else {
        $('#r4openCredit').html("    " + openCreditR4);
    }
    if (intManufacturingR4 > 0) {
        $('#r4openManufacturing').html("    " + openManufacturingR4).css('color', '#42f459');
    } else {
        $('#r4openManufacturing').html("    " + openManufacturingR4);
    }
    if (intRushR4 > 0) {
        $('#r4openRush').html("    " + openRushR4).css('color', 'red');
    } else {
        $('#r4openRush').html("    " + openRushR4);
    }
    if (intMenardsR4 > 0) {
        $('#r4openMenards').html("    " + openMenardsR4).css('color', '#42f459');
    } else {
        $('#r4openMenards').html("    " + openMenardsR4);
    }
    if (intCustomerInquiryR4 > 0) {
        $('#r4openCustomerInquiry').html("    " + openCustomerInquiryR4).css('color', '#42f459');
    } else {
        $('#r4openCustomerInquiry').html("    " + openCustomerInquiryR4);
    }
    if (intSocialMediaR4 > 0) {
        $('#r4openSocialMedia').html("    " + openSocialMediaR4).css('color', '#42f459');
    } else {
        $('#r4openSocialMedia').html("    " + openSocialMediaR4);
    }
    if (intHelpdeskR4 > 0) {
        $('#r4openHelpdesk').html("    " + openHelpdeskR4).css('color', 'red');
    } else {
        $('#r4openHelpdesk').html("    " + openHelpdeskR4);
    }
    if (intWsosR4 > 0) {
        $('#r4openWSOS').html("    " + openWSOSRequestR4).css('color', '#42f459');
    } else {
        $('#r4openWSOS').html("    " + openWSOSRequestR4);
    }
    if (intAlysR4 > 0) {
        $('#r4openAlys').html("    " + openAlysBeachR4).css('color', 'red');
    } else {
        $('#r4openAlys').html("    " + openAlysBeachR4);
    }
    if (intNoTagR4 > 0) {
        $('#r4openNoTag').html("    " + openNotMarkedR4).css('color', 'red');
    } else {
        $('#r4openNoTag').html("    " + openNotMarkedR4);
    }
    $('#r4allOpen').html("    " + totalR4).css('color', '#42f459');
    $('#h24').css('color', 'white').contents().first().replaceWith('Current Count (Shows status of all current new, open, working, & OE verify tickets. Does not show Sent to or Pending)');

}