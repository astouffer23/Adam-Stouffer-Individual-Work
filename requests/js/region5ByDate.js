var createdOnRegion5OpenOrders = 0;
var createdOnRegion5OpenQuotes = 0;
var createdOnRegion5OpenReorder = 0;
var createdOnRegion5OpenServiceParts = 0;
var createdOnRegion5OpenServiceRequest = 0;
var createdOnRegion5OpenManufacturing = 0;
var createdOnRegion5OpenChange = 0;
var createdOnRegion5OpenRush = 0;
var createdOnRegion5OpenDiscount = 0;
var createdOnRegion5OpenCredit = 0;
var createdOnRegion5OpenMenards = 0;
var createdOnRegion5OpenCustomerInquiry = 0;
var createdOnRegion5OpenHelpdesk = 0;
var createdOnRegion5OpenSocialMedia = 0;
var createdOnRegion5OpenWSOSRequest = 0;
var createdOnRegion5OpenAlysBeach = 0;
var openNotMarkedR5 = 0;

var iCreateR5=0;

var created_at = {
    created_at: "created_at"
};

$(document).ready(function() {
    $('#dateSubmit').click(function() {
        getByDate1r5P1();
    });
});


function validateResultsR5(data)
{
    if (data.results[iCreateR5].type ==="Quote"){
        createdOnRegion5OpenQuotes++;
    } 
    if (data.results[iCreateR5].type ==="Order"){
        createdOnRegion5OpenOrders++;
    } 
    if (data.results[iCreateR5].type ==="Reorder"){
        createdOnRegion5OpenReorder++;
    } 
    if (data.results[iCreateR5].type ==="Service Parts"){
        createdOnRegion5OpenServiceParts++;
    } 
    if (data.results[iCreateR5].type ==="Service Request"){
        createdOnRegion5OpenServiceRequest++;
    } 
    if (data.results[iCreateR5].type ==="Manufacturing"){
        createdOnRegion5OpenManufacturing++;
    } 
    if (data.results[iCreateR5].type ==="Rush"){
        createdOnRegion5OpenRush++;
    } 
    if (data.results[iCreateR5].type ==="Discount"){
        createdOnRegion5OpenDiscount++;
    } 
    if (data.results[iCreateR5].type ==="Menards \ Crestline Request"){
        createdOnRegion5OpenMenards++;
    } 
    if (data.results[iCreateR5].type ==="Customer Inquiry"){
        createdOnRegion5OpenCustomerInquiry++;
    } 
    if (data.results[iCreateR5].type ==="Internal Helpdesk Request"){
        createdOnRegion5OpenHelpdesk++;
    } 
    if (data.results[iCreateR5].type ==="Social Media"){
        createdOnRegion5OpenSocialMedia++;
    } 
    if (data.results[iCreateR5].type ==="WSOneSourceRequest"){
        createdOnRegion5OpenWSOSRequest++;
    } 
    if (data.results[iCreateR5].type ==="Alys Beach"){
        createdOnRegion5OpenAlysBeach++;
    } 
    if (data.results[iCreateR5].type ==="Change"){
        createdOnRegion5OpenChange++;
    }  
    if (data.results[iCreateR5].type ==="Credit"){
        createdOnRegion5OpenCredit++;
    }
    if (data.results[iCreateR5].type === null) {
        openNotMarkedR5++;
    } 
    iCreateR5++;

}

function getByDate1r5P1() {
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
    $('#region5Container').show();
    $('#h25').css("color", "red").html("Loading");
        createdOnRegion5OpenOrders = 0;
        createdOnRegion5OpenQuotes = 0;
        createdOnRegion5OpenReorder = 0;
        createdOnRegion5OpenServiceParts = 0;
        createdOnRegion5OpenServiceRequest = 0;
        createdOnRegion5OpenManufacturing = 0;
        createdOnRegion5OpenChange = 0;
        createdOnRegion5OpenRush = 0;
        createdOnRegion5OpenDiscount = 0;
        createdOnRegion5OpenCredit = 0;
        createdOnRegion5OpenMenards = 0;
        createdOnRegion5OpenCustomerInquiry = 0;
        createdOnRegion5OpenHelpdesk = 0;
        createdOnRegion5OpenSocialMedia = 0;
        createdOnRegion5OpenWSOSRequest = 0;
        createdOnRegion5OpenAlysBeach = 0;
        openNotMarkedR5 = 0;
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000050835\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR5 < data.results.length) {
                        validateResultsR5(data);
                    }
                });
            iCreateR5=0;
            getByDate1r5P2(enteredDate);
        },
        error: function () 
        {
            iCreateR5=0;
            showr5OldData(enteredDate);
        }
    });
}

function getByDate1r5P2(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000050835\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR5 < data.results.length) {
                        validateResultsR5(data);
                    }
                });
            iCreateR5=0;
            getByDate1r5P3(enteredDate);
        },
        error: function () 
        {
            iCreateR5=0;
            showr5OldData(enteredDate);
        }
    });
}

function getByDate1r5P3(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000050835\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR5 < data.results.length) {
                        validateResultsR5(data);
                    }
                });
            iCreateR5=0;
            getByDate1r5P4(enteredDate);
        },
        error: function () 
        {
            iCreateR5=0;
            showr5OldData(enteredDate);
        }
    });
}

function getByDate1r5P4(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000050835\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR5 < data.results.length) {
                        validateResultsR5(data);
                    }
                });
            iCreateR5=0;
            getByDate1r5P5(enteredDate);
        },
        error: function () 
        {
            iCreateR5=0;
            showr5OldData(enteredDate);
        }
    });
}

function getByDate1r5P5(){
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000050835\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR5 < data.results.length) {
                        validateResultsR5(data);
                    }
                });
            iCreateR5=0;
            showr5OldData(enteredDate);
        },
        error: function () 
        {
            iCreateR5=0;
            showr5OldData(enteredDate);
        }
    });
}






function showr5OldData(enteredDate){
    //$('#dateSubmit').append(enteredDate);
    var createdIntquoter5 = parseInt(createdOnRegion5OpenQuotes);
    var createdIntorderr5 = parseInt(createdOnRegion5OpenOrders);
    var createdIntreorderr5 = parseInt(createdOnRegion5OpenReorder);
    var createdIntServiceRequestr5 = parseInt(createdOnRegion5OpenServiceRequest);
    var createdIntServicePartsr5 = parseInt(createdOnRegion5OpenServiceParts);
    var createdIntChanger5 = parseInt(createdOnRegion5OpenChange);
    var createdIntDiscountr5 = parseInt(createdOnRegion5OpenDiscount);
    var createdIntCreditr5 = parseInt(createdOnRegion5OpenCredit);
    var createdIntManufacturingr5 = parseInt(createdOnRegion5OpenManufacturing);
    var createdIntRushr5 = parseInt(createdOnRegion5OpenRush);
    var createdIntMenardsr5 = parseInt(createdOnRegion5OpenMenards);
    var createdIntCustomerInquiryr5 = parseInt(createdOnRegion5OpenCustomerInquiry);
    var createdIntHelpdeskr5 = parseInt(createdOnRegion5OpenHelpdesk);
    var createdIntWsosr5 = parseInt(createdOnRegion5OpenWSOSRequest);
    var createdIntAlysr5 = parseInt(createdOnRegion5OpenAlysBeach);
    var createdIntNoTagR5 = parseInt(openNotMarkedR5);
    var createdIntTotalr5 = createdIntquoter5+createdIntorderr5+createdIntreorderr5+createdIntServiceRequestr5+createdIntServicePartsr5+createdIntChanger5+createdIntDiscountr5+createdIntCreditr5+createdIntManufacturingr5+
        createdIntRushr5 + createdIntMenardsr5 + createdIntCustomerInquiryr5 + createdIntHelpdeskr5 + createdIntWsosr5+createdIntAlysr5+createdIntNoTagR5;
    $('#r5openQuotes').html("    " + createdOnRegion5OpenQuotes).css('color', 'white');
    $('#r5openOrders').html("    " + createdOnRegion5OpenOrders).css('color', 'white');
    $('#r5openReorders').html("    " + createdOnRegion5OpenReorder).css('color', 'white');
    $('#r5openServiceRequest').html("    " + createdOnRegion5OpenServiceRequest).css('color', 'white');
    $('#r5openServiceParts').html("    " + createdOnRegion5OpenServiceParts).css('color', 'white');
    $('#r5openChange').html("    " + createdOnRegion5OpenChange).css('color', 'white');
    $('#r5openDiscount').html("    " + createdOnRegion5OpenDiscount).css('color', 'white');
    $('#r5openCredit').html("    " + createdOnRegion5OpenCredit).css('color', 'white');
    $('#r5openManufacturing').html("    " + createdOnRegion5OpenManufacturing).css('color', 'white');
    $('#r5openRush').html("    " + createdOnRegion5OpenRush).css('color', 'white');
    $('#r5openMenards').html("    " + createdOnRegion5OpenMenards).css('color', 'white');
    $('#r5openCustomerInquiry').html("    " + createdOnRegion5OpenCustomerInquiry).css('color', 'white');
    $('#r5openHelpdesk').html("    " + createdOnRegion5OpenHelpdesk).css('color', 'white');
    $('#r5openWSOS').html("    " + createdOnRegion5OpenWSOSRequest).css('color', 'white');
    $('#r5openSocialMedia').html("    " + createdOnRegion5OpenSocialMedia).css('color', 'white');
    $('#r5openAlys').html("    " + createdOnRegion5OpenAlysBeach).css('color', 'white');
    if (createdIntNoTagR5 > 0) {
        $('#r5openNoTag').html("    " + openNotMarkedR5).css('color', 'red');
    } else {
        $('#r5openNoTag').html("    " + openNotMarkedR5).css('color', 'white');
    }
    $('#r5allOpen').html(createdIntTotalr5).css('color', 'white').val();
    $('#h25').css('color', '#42f459').contents().first().replaceWith('Total Created Per Day');
}