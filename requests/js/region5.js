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
var r5div = '<div class="col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 r1IndividualTicket" style="font-size:14px; text-align:center; cursor:pointer;">';
var openOrdersR5 = 0;
var openQuotesR5 = 0;
var openReorderR5 = 0;
var openServicePartsR5 = 0;
var openServiceRequestR5 = 0;
var openManufacturingR5 = 0;
var openChangeR5 = 0;
var openRushR5 = 0;
var openDiscountR5 = 0;
var openCreditR5 = 0;
var openMenardsR5 = 0;
var openCustomerInquiryR5 = 0;
var openHelpdeskR5 = 0;
var openSocialMediaR5 = 0;
var openWSOSRequestR5 = 0;
var openAlysBeachR5 = 0;
var openNotMarkedR5 = 0;
var iR5 = 0;
var created_at = {
    created_at: "created_at"
};


$(document).ready(function () {
    $('#region5').click(function () {
        $(document).on('click',
            ".r5IndividualTicket",
            function () {
                window.open('https:weathershield.freshdesk.com/helpdesk/tickets/' + this.innerText + '', '_blank');
            });
        $('#r1ShowTicketsButton').show();
        $('#r2ShowTicketsButton').show();
        $('#r3ShowTicketsButton').show();
        $('#r4ShowTicketsButton').show();
        $('#r5ShowTicketsButton').show();
        r5ClearPages();
        showRegion5();
    });
    $("#r5ShowTicketsButton").click(function () {
        r5CheckInfo();
    });
    $("#r5HideTicketsButton").click(function () {
        r5HideTickets();
    });
    r5CheckForClicks();
});

function r5CheckForClicks() {
    $('#r5allOpen').click(function () {
        $('#r5TotalDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openQuotes').click(function () {
        $('#r5QuoteDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openOrders').click(function () {
        $('#r5OrdersDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openReorders').click(function () {
        $('#r5ReordersDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openRush').click(function () {
        $('#r5RushDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openCredit').click(function () {
        $('#r5CreditDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openMenards').click(function () {
        $('#r5MenardsDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openServiceParts').click(function () {
        $('#r5ServicePartsDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openServiceRequest').click(function () {
        $('#r5ServiceRequestDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openManufacturing').click(function () {
        $('#r5ManufacturingDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openCustomerInquiry').click(function () {
        $('#r5CustomerInquiryDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openSocialMedia').click(function () {
        $('#r5SocialMediaDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openHelpdesk').click(function () {
        $('#r5HelpdeskDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openWSOS').click(function () {
        $('#r5WsosDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openAlys').click(function () {
        $('#r5AlysDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openChange').click(function () {
        $('#r5ChangeDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openDiscount').click(function () {
        $('#r5DiscountDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $('#r5openNoTag').click(function () {
        $('#r5NoTagDiv').toggle();
        $("#r5HideTicketsButton").show();
    });
    $("#r5HideTicketsButton").show();
}

function r5ClearPages() {

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
    $('#r5openQuotes').html("").css('color', 'white');
    $('#r5openOrders').html("").css('color', 'white');
    $('#r5openReorders').html("").css('color', 'white');
    $('#r5openServiceRequest').html("").css('color', 'white');
    $('#r5openServiceParts').html("").css('color', 'white');
    $('#r5openChange').html("").css('color', 'white');
    $('#r5openDiscount').html("").css('color', 'white');
    $('#r5openCredit').html("").css('color', 'white');
    $('#r5openManufacturing').html("").css('color', 'white');
    $('#r5openRush').html("").css('color', 'white');
    $('#r5openMenards').html("").css('color', 'white');
    $('#r5openCustomerInquiry').html("").css('color', 'white');
    $('#r5openHelpdesk').html("").css('color', 'white');
    $('#r5openWSOS').html("").css('color', 'white');
    $('#r5openSocialMedia').html("").css('color', 'white');
    $('#r5openAlys').html("").css('color', 'white');
    $('#r5openNoTag').html("").css('color', 'white');
    $('#r5allOpen').html("").css('color', 'white');
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
    $('#region4Container').hide();
    $('#region1Container').hide();
    $('#region3Container').hide();
    $('#region2Container').hide();
}

function r5CheckInfo() {
    if (openQuotesR5 < 1) {
        $('#r5QuoteDiv').hide();
    } else {
        $('#r5QuoteDiv').show();
    }
    $('#r5TotalDiv').show();
    if (openOrdersR5 < 1) {
        $('#r5OrdersDiv').hide();
    } else {
        $('#r5OrdersDiv').show();
    }
    if (openReorderR5 < 1) {
        $('#r5ReordersDiv').hide();
    } else {
        $('#r5ReordersDiv').show();
    }
    if (openRushR5 < 1) {
        $('#r5RushDiv').hide();
    } else {
        $('#r5RushDiv').show();
    }
    if (openCreditR5 < 1) {
        $('#r5CreditDiv').hide();
    } else {
        $('#r5CreditDiv').show();
    }
    if (openMenardsR5 < 1) {
        $('#r5MenardsDiv').hide();
    } else {
        $('#r5MenardsDiv').show();
    }
    if (openServicePartsR5 < 1) {
        $('#r5ServicePartsDiv').hide();
    } else {
        $('#r5ServicePartsDiv').show();
    }
    if (openServiceRequestR5 < 1) {
        $('#r5ServiceRequestDiv').hide();
    } else {
        $('#r5ServiceRequestDiv').show();
    }
    if (openManufacturingR5 < 1) {
        $('#r5ManufacturingDiv').hide();
    } else {
        $('#r5ManufacturingDiv').show();
    }
    if (openCustomerInquiryR5 < 1) {
        $('#r5CustomerInquiryDiv').hide();
    } else {
        $('#r5CustomerInquiryDiv').show();
    }
    if (openSocialMediaR5 < 1) {
        $('#r5SocialMediaDiv').hide();
    } else {
        $('#r5SocialMediaDiv').show();
    }
    if (openHelpdeskR5 < 1) {
        $('#r5HelpdeskDiv').hide();
    } else {
        $('#r5HelpdeskDiv').show();
    }
    if (openWSOSRequestR5 < 1) {
        $('#r5WsosDiv').hide();
    } else {
        $('#r5WsosDiv').show();
    }
    if (openAlysBeachR5 < 1) {
        $('#r5AlysDiv').hide();
    } else {
        $('#r5AlysDiv').show();
    }
    if (openChangeR5 < 1) {
        $('#r5ChangeDiv').hide();
    } else {
        $('#r5ChangeDiv').show();
    }
    if (openDiscountR5 < 1) {
        $('#r5DiscountDiv').hide();
    } else {
        $('#r5DiscountDiv').show();
    }
    if (openNotMarkedR5 < 1) {
        $('#r5NoTagDiv').hide();
    } else {
        $('#r5NoTagDiv').show();
    }
    $("#r5HideTicketsButton").show();

}

function r5HideTickets() {
    $("#r5HideTicketsButton").hide();
    $('#r5TotalDiv').hide();
    $('#r5QuoteDiv').hide();
    $('#r5OrdersDiv').hide();
    $('#r5ReordersDiv').hide();
    $('#r5RushDiv').hide();
    $('#r5CreditDiv').hide();
    $('#r5MenardsDiv').hide();
    $('#r5ServicePartsDiv').hide();
    $('#r5ServiceRequestDiv').hide();
    $('#r5ManufacturingDiv').hide();
    $('#r5CustomerInquiryDiv').hide();
    $('#r5SocialMediaDiv').hide();
    $('#r5SocialMediaDiv').hide();
    $('#r5HelpdeskDiv').hide();
    $('#r5WsosDiv').hide();
    $('#r5AlysDiv').hide();
    $('#r5ChangeDiv').hide();
    $('#r5DiscountDiv').hide();
    $('#r5NoTagDiv').hide();
}

function showRegion5() {
    $("#r5HideTicketsButton").hide();
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
    getPage1r5();
}

function getPage1r5() {
    $('#h25').css("color", "red").html("Loading");
    openOrdersR5 = 0;
    openQuotesR5 = 0;
    openReorderR5 = 0;
    openServicePartsR5 = 0;
    openServiceRequestR5 = 0;
    openManufacturingR5 = 0;
    openChangeR5 = 0;
    openRushR5 = 0;
    openDiscountR5 = 0;
    openCreditR5 = 0;
    openMenardsR5 = 0;
    openCustomerInquiryR5 = 0;
    openHelpdeskR5 = 0;
    openSocialMediaR5 = 0;
    openWSOSRequestR5 = 0;
    openAlysBeachR5 = 0;
    openNotMarkedR5 = 0;
    iR5 = 0;
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage2r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage2r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage3r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage3r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage4r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage4r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage5r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });

}

function getPage5r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage6r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });

}

function getPage6r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=6",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage7r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });

}

function getPage7r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=7",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage8r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage8r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=8",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage9r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage9r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=9",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage10r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function getPage10r5() {
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"(status:2\%20AND\%20group_id:19000050835\%20OR\%20status:19\%20AND\%20group_id:19000050835\%20OR%20status:18\%20AND\%20group_id:19000050835\%20OR\%20status:20\%20AND\%20group_id:19000050835)\"\&page=10",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            if (data.results.length !== 0) {
                $.each(created_at,
                    function () {
                        while (iR5 < data.results.length) {
                            if (data.results.length === 0) {
                                showDataR5();
                                return;
                            }
                            checkDataR5(data);
                        }
                    });
                iR5 = 0;
                getPage10r5();
            }
            else {
                showDataR5();
            }
        },
        error: function () {
            iR5 = 0;
            showDataR5();
        }
    });
}

function checkDataR5(data) {
    if (typeof data.results[iR5].custom_fields["cf_routed_to_example"] === 'undefined') {
        showDataR5();
    }

    $('#region5TotalList').prepend($(r5div).text(data.results[iR5].id));

    if (data.results[iR5].type === "Quote") {
        openQuotesR5++;
        $('#region5QuoteList').prepend($(r5div).text(data.results[iR5].id));
    }
    if (data.results[iR5].type === "Order") {
        openOrdersR5++;
        $('#region5OrdersList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Reorder") {
        openReorderR5++;
        $('#region5ReordersList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Service Parts") {
        openServicePartsR5++;
        $('#region5ServicePartsList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Service Request") {
        openServiceRequestR5++;
        $('#region5ServiceRequestList').prepend($(r5div).text(data.results[iR5].id));
    }
    if (data.results[iR5].type === "Manufacturing") {
        openManufacturingR5++;
        $('#region5ManufacturingList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Rush") {
        openRushR5++;
        $('#region5RushList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Discount") {
        openDiscountR5++;
        $('#region5DiscountList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Menards \ Crestline Request") {
        openMenardsR5++;
        $('#region5MenardsList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Customer Inquiry") {
        openCustomerInquiryR5++;
        $('#region5CustomerInquiryList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Internal Helpdesk Request") {
        openHelpdeskR5++;
        $('#region5HelpdeskList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Social Media") {
        openSocialMediaR5++;
        $('#region5SocialMediaList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "WSOneSourceRequest") {
        openWSOSRequestR5++;
        $('#region5WsosList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Alys Beach") {
        openAlysBeachR5++;
        $('#region5AlysList').prepend($(r5div).text(data.results[iR5].id));
    }
    if (data.results[iR5].type === "Change") {
        openChangeR5++;
        $('#region5ChangeList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === "Credit") {
        openCreditR5++;
        $('#region5CreditList').prepend($(r5div).text(data.results[iR5].id));

    }
    if (data.results[iR5].type === null) {
        openNotMarkedR5++;
        $('#region5NoTagList').prepend($(r5div).text(data.results[iR5].id));

    }
    iR5++;
}

function showDataR5() {
    $('#region5Container').show();
    var intquoteR5 = parseInt(openQuotesR5);
    var intorderR5 = parseInt(openOrdersR5);
    var intreorderR5 = parseInt(openReorderR5);
    var intServicePartsR5 = parseInt(openServicePartsR5);
    var intServiceRequestR5 = parseInt(openServiceRequestR5);
    var intManufacturingR5 = parseInt(openManufacturingR5);
    var intRushR5 = parseInt(openRushR5);
    var intDiscountR5 = parseInt(openDiscountR5);
    var intMenardsR5 = parseInt(openMenardsR5);
    var intCustomerInquiryR5 = parseInt(openCustomerInquiryR5);
    var intHelpdeskR5 = parseInt(openHelpdeskR5);
    var intSocialMediaR5 = parseInt(openSocialMediaR5);
    var intWsosR5 = parseInt(openWSOSRequestR5);
    var intAlysR5 = parseInt(openAlysBeachR5);
    var intChangeR5 = parseInt(openChangeR5);
    var intCreditR5 = parseInt(openCreditR5);

    var intNoTagR5 = parseInt(openNotMarkedR5);
    var totalR5 = intquoteR5 + intorderR5 + intreorderR5 + intServiceRequestR5 + intServicePartsR5 + intChangeR5 + intDiscountR5 +
        intCreditR5 + intManufacturingR5 + intRushR5 + intMenardsR5 + intCustomerInquiryR5 + intHelpdeskR5 + intWsosR5 + intAlysR5 + intNoTagR5 + intSocialMediaR5;
    $('#region5ContainerResolved').css('color', 'white');

    if (intquoteR5 > 0) {
        $('#r5openQuotes').html("    " + openQuotesR5).css('color', '#42f459');
    } else {
        $('#r5openQuotes').html("    " + openQuotesR5);
    }
    if (intorderR5 > 0) {
        $('#r5openOrders').html("    " + openOrdersR5).css('color', '#42f459');
    } else {
        $('#r5openOrders').html("    " + openOrdersR5);
    }
    if (intreorderR5 > 0) {
        $('#r5openReorders').html("    " + openReorderR5).css('color', '#42f459');
    } else {
        $('#r5openReorders').html("    " + openReorderR5);
    }
    if (intServiceRequestR5 > 0) {
        $('#r5openServiceRequest').html("    " + openServiceRequestR5).css('color', '#42f459');
    } else {
        $('#r5openServiceRequest').html("    " + openServiceRequestR5);
    }
    if (intServicePartsR5 > 0) {
        $('#r5openServiceParts').html("    " + openServicePartsR5).css('color', '#42f459');
    } else {
        $('#r5openServiceParts').html("    " + openServicePartsR5);
    }
    if (intChangeR5 > 0) {
        $('#r5openChange').html("    " + openChangeR5).css('color', '#42f459');
    } else {
        $('#r5openChange').html("    " + openChangeR5);
    }
    if (intDiscountR5 > 0) {
        $('#r5openDiscount').html("    " + openDiscountR5).css('color', '#42f459');
    } else {
        $('#r5openDiscount').html("    " + openDiscountR5);
    }
    if (intCreditR5 > 0) {
        $('#r5openCredit').html("    " + openCreditR5).css('color', '#42f459');
    } else {
        $('#r5openCredit').html("    " + openCreditR5);
    }
    if (intManufacturingR5 > 0) {
        $('#r5openManufacturing').html("    " + openManufacturingR5).css('color', '#42f459');
    } else {
        $('#r5openManufacturing').html("    " + openManufacturingR5);
    }
    if (intRushR5 > 0) {
        $('#r5openRush').html("    " + openRushR5).css('color', 'red');
    } else {
        $('#r5openRush').html("    " + openRushR5);
    }
    if (intMenardsR5 > 0) {
        $('#r5openMenards').html("    " + openMenardsR5).css('color', '#42f459');
    } else {
        $('#r5openMenards').html("    " + openMenardsR5);
    }
    if (intCustomerInquiryR5 > 0) {
        $('#r5openCustomerInquiry').html("    " + openCustomerInquiryR5).css('color', '#42f459');
    } else {
        $('#r5openCustomerInquiry').html("    " + openCustomerInquiryR5);
    }
    if (intSocialMediaR5 > 0) {
        $('#r5openSocialMedia').html("    " + openSocialMediaR5).css('color', '#42f459');
    } else {
        $('#r5openSocialMedia').html("    " + openSocialMediaR5);
    }
    if (intHelpdeskR5 > 0) {
        $('#r5openHelpdesk').html("    " + openHelpdeskR5).css('color', 'red');
    } else {
        $('#r5openHelpdesk').html("    " + openHelpdeskR5);
    }
    if (intWsosR5 > 0) {
        $('#r5openWSOS').html("    " + openWSOSRequestR5).css('color', '#42f459');
    } else {
        $('#r5openWSOS').html("    " + openWSOSRequestR5);
    }
    if (intAlysR5 > 0) {
        $('#r5openAlys').html("    " + openAlysBeachR5).css('color', 'red');
    } else {
        $('#r5openAlys').html("    " + openAlysBeachR5);
    }
    if (intNoTagR5 > 0) {
        $('#r5openNoTag').html("    " + openNotMarkedR5).css('color', 'red');
    } else {
        $('#r5openNoTag').html("    " + openNotMarkedR5);
    }
    $('#r5allOpen').html("    " + totalR5).css('color', '#42f459');
    $('#h25').css('color', 'white').contents().first().replaceWith('Current Count (Shows status of all current new, open, working, & OE verify tickets. Does not show Sent to or Pending)');

}