var createdOnRegion2OpenOrders = 0;
var createdOnRegion2OpenQuotes = 0;
var createdOnRegion2OpenReorder = 0;
var createdOnRegion2OpenServiceParts = 0;
var createdOnRegion2OpenServiceRequest = 0;
var createdOnRegion2OpenManufacturing = 0;
var createdOnRegion2OpenChange = 0;
var createdOnRegion2OpenRush = 0;
var createdOnRegion2OpenDiscount = 0;
var createdOnRegion2OpenCredit = 0;
var createdOnRegion2OpenMenards = 0;
var createdOnRegion2OpenCustomerInquiry = 0;
var createdOnRegion2OpenHelpdesk = 0;
var createdOnRegion2OpenSocialMedia = 0;
var createdOnRegion2OpenWSOSRequest = 0;
var createdOnRegion2OpenAlysBeach = 0;
var openNotMarkedR2 = 0;

var iCreateR2=0;

var created_at = {
    created_at: "created_at"
};

$(document).ready(function() {
    $('#dateSubmit').click(function () {
        getByDate1r2P1();
    });
});


function validateResultsR2(data)
{
    if (data.results[iCreateR2].type ==="Quote"){
        createdOnRegion2OpenQuotes++;
    } 
    if (data.results[iCreateR2].type ==="Order"){
        createdOnRegion2OpenOrders++;
    } 
    if (data.results[iCreateR2].type ==="Reorder"){
        createdOnRegion2OpenReorder++;
    } 
    if (data.results[iCreateR2].type ==="Service Parts"){
        createdOnRegion2OpenServiceParts++;
    } 
    if (data.results[iCreateR2].type ==="Service Request"){
        createdOnRegion2OpenServiceRequest++;
    } 
    if (data.results[iCreateR2].type ==="Manufacturing"){
        createdOnRegion2OpenManufacturing++;
    } 
    if (data.results[iCreateR2].type ==="Rush"){
        createdOnRegion2OpenRush++;
    } 
    if (data.results[iCreateR2].type ==="Discount"){
        createdOnRegion2OpenDiscount++;
    } 
    if (data.results[iCreateR2].type ==="Menards \ Crestline Request"){
        createdOnRegion2OpenMenards++;
    } 
    if (data.results[iCreateR2].type ==="Customer Inquiry"){
        createdOnRegion2OpenCustomerInquiry++;
    } 
    if (data.results[iCreateR2].type ==="Internal Helpdesk Request"){
        createdOnRegion2OpenHelpdesk++;
    } 
    if (data.results[iCreateR2].type ==="Social Media"){
        createdOnRegion2OpenSocialMedia++;
    } 
    if (data.results[iCreateR2].type ==="WSOneSourceRequest"){
        createdOnRegion2OpenWSOSRequest++;
    } 
    if (data.results[iCreateR2].type ==="Alys Beach"){
        createdOnRegion2OpenAlysBeach++;
    } 
    if (data.results[iCreateR2].type ==="Change"){
        createdOnRegion2OpenChange++;
    }  
    if (data.results[iCreateR2].type ==="Credit"){
        createdOnRegion2OpenCredit++;
    }
    if (data.results[iCreateR2].type === null) {
        openNotMarkedR2++;
    } 
    iCreateR2++;

}

function getByDate1r2P1() {
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
    $('#region2Container').show();
    $('#h22').css("color", "red").html("Loading");
        createdOnRegion2OpenOrders = 0;
        createdOnRegion2OpenQuotes = 0;
        createdOnRegion2OpenReorder = 0;
        createdOnRegion2OpenServiceParts = 0;
        createdOnRegion2OpenServiceRequest = 0;
        createdOnRegion2OpenManufacturing = 0;
        createdOnRegion2OpenChange = 0;
        createdOnRegion2OpenRush = 0;
        createdOnRegion2OpenDiscount = 0;
        createdOnRegion2OpenCredit = 0;
        createdOnRegion2OpenMenards = 0;
        createdOnRegion2OpenCustomerInquiry = 0;
        createdOnRegion2OpenHelpdesk = 0;
        createdOnRegion2OpenSocialMedia = 0;
        createdOnRegion2OpenWSOSRequest = 0;
        createdOnRegion2OpenAlysBeach = 0;
        openNotMarkedR2 = 0;
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048209\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR2 < data.results.length) {
                        validateResultsR2(data);
                    }
                });
            iCreateR2=0;
            getByDate1r2P2(enteredDate);
        },
        error: function () 
        {
            iCreateR2=0;
            showr2OldData(enteredDate);
        }
    });
}

function getByDate1r2P2(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048209\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR2 < data.results.length) {
                        validateResultsR2(data);
                    }
                });
            iCreateR2=0;
            getByDate1r2P3(enteredDate);
        },
        error: function () 
        {
            iCreateR2=0;
            showr2OldData(enteredDate);
        }
    });
}

function getByDate1r2P3(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048209\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR2 < data.results.length) {
                        validateResultsR2(data);
                    }
                });
            iCreateR2=0;
            getByDate1r2P4(enteredDate);
        },
        error: function () 
        {
            iCreateR2=0;
            showr2OldData(enteredDate);
        }
    });
}

function getByDate1r2P4(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048209\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR2 < data.results.length) {
                        validateResultsR2(data);
                    }
                });
            iCreateR2=0;
            getByDate1r2P5(enteredDate);
        },
        error: function () 
        {
            iCreateR2=0;
            showr2OldData(enteredDate);
        }
    });
}

function getByDate1r2P5(){
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048209\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR2 < data.results.length) {
                        validateResultsR2(data);
                    }
                });
            iCreateR2=0;
            showr2OldData(enteredDate);
        },
        error: function () 
        {
            iCreateR2=0;
            showr2OldData(enteredDate);
        }
    });
}






function showr2OldData(enteredDate){
    //$('#dateSubmit').append(enteredDate);
    var createdIntquoter2 = parseInt(createdOnRegion2OpenQuotes);
    var createdIntorderr2 = parseInt(createdOnRegion2OpenOrders);
    var createdIntreorderr2 = parseInt(createdOnRegion2OpenReorder);
    var createdIntServiceRequestr2 = parseInt(createdOnRegion2OpenServiceRequest);
    var createdIntServicePartsr2 = parseInt(createdOnRegion2OpenServiceParts);
    var createdIntChanger2 = parseInt(createdOnRegion2OpenChange);
    var createdIntDiscountr2 = parseInt(createdOnRegion2OpenDiscount);
    var createdIntCreditr2 = parseInt(createdOnRegion2OpenCredit);
    var createdIntManufacturingr2 = parseInt(createdOnRegion2OpenManufacturing);
    var createdIntRushr2 = parseInt(createdOnRegion2OpenRush);
    var createdIntMenardsr2 = parseInt(createdOnRegion2OpenMenards);
    var createdIntCustomerInquiryr2 = parseInt(createdOnRegion2OpenCustomerInquiry);
    var createdIntHelpdeskr2 = parseInt(createdOnRegion2OpenHelpdesk);
    var createdIntWsosr2 = parseInt(createdOnRegion2OpenWSOSRequest);
    var createdIntAlysr2 = parseInt(createdOnRegion2OpenAlysBeach);
    var createdIntNoTagR2 = parseInt(openNotMarkedR2);
    var createdIntTotalR2 = createdIntquoter2 + createdIntorderr2 + createdIntreorderr2 + createdIntServiceRequestr2 + createdIntServicePartsr2 + createdIntChanger2 +
        createdIntDiscountr2 + createdIntCreditr2 + createdIntManufacturingr2 + createdIntRushr2 + createdIntMenardsr2 + createdIntCustomerInquiryr2 +
        createdIntHelpdeskr2 + createdIntWsosr2 + createdIntAlysr2 + createdIntNoTagR2;
    $('#r2openQuotes').html("    " + createdOnRegion2OpenQuotes).css('color', 'white');
    $('#r2openOrders').html("    " + createdOnRegion2OpenOrders).css('color', 'white');
    $('#r2openReorders').html("    " + createdOnRegion2OpenReorder).css('color', 'white');
    $('#r2openServiceRequest').html("    " + createdOnRegion2OpenServiceRequest).css('color', 'white');
    $('#r2openServiceParts').html("    " + createdOnRegion2OpenServiceParts).css('color', 'white');
    $('#r2openChange').html("    " + createdOnRegion2OpenChange).css('color', 'white');
    $('#r2openDiscount').html("    " + createdOnRegion2OpenDiscount).css('color', 'white');
    $('#r2openCredit').html("    " + createdOnRegion2OpenCredit).css('color', 'white');
    $('#r2openManufacturing').html("    " + createdOnRegion2OpenManufacturing).css('color', 'white');
    $('#r2openRush').html("    " + createdOnRegion2OpenRush).css('color', 'white');
    $('#r2openMenards').html("    " + createdOnRegion2OpenMenards).css('color', 'white');
    $('#r2openCustomerInquiry').html("    " + createdOnRegion2OpenCustomerInquiry).css('color', 'white');
    $('#r2openHelpdesk').html("    " + createdOnRegion2OpenHelpdesk).css('color', 'white');
    $('#r2openWSOS').html("    " + createdOnRegion2OpenWSOSRequest).css('color', 'white');
    $('#r2openSocialMedia').html("    " + createdOnRegion2OpenSocialMedia).css('color', 'white');
    $('#r2openAlys').html("    " + createdOnRegion2OpenAlysBeach).css('color', 'white');
    if (createdIntNoTagR2 > 0) {
        $('#r2openNoTag').html("    " + openNotMarkedR2).css('color', 'red');
    } else {
        $('#r2openNoTag').html("    " + openNotMarkedR2).css('color', 'white');
    }
    $('#r2allOpen').html(createdIntTotalR2).css('color', 'white').val();
    $('#h22').css('color', '#42f459').contents().first().replaceWith('Total Created Per Day');
}