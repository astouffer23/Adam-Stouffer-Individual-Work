var createdOnRegion3OpenOrders = 0;
var createdOnRegion3OpenQuotes = 0;
var createdOnRegion3OpenReorder = 0;
var createdOnRegion3OpenServiceParts = 0;
var createdOnRegion3OpenServiceRequest = 0;
var createdOnRegion3OpenManufacturing = 0;
var createdOnRegion3OpenChange = 0;
var createdOnRegion3OpenRush = 0;
var createdOnRegion3OpenDiscount = 0;
var createdOnRegion3OpenCredit = 0;
var createdOnRegion3OpenMenards = 0;
var createdOnRegion3OpenCustomerInquiry = 0;
var createdOnRegion3OpenHelpdesk = 0;
var createdOnRegion3OpenSocialMedia = 0;
var createdOnRegion3OpenWSOSRequest = 0;
var createdOnRegion3OpenAlysBeach = 0;
var openNotMarkedR3 = 0;

var iCreateR3=0;

var created_at = {
    created_at: "created_at"
};

$(document).ready(function() {
    $('#dateSubmit').click(function() {
        getByDate1r3P1();
    });
});


function validateResultsR3(data)
{
    if (data.results[iCreateR3].type ==="Quote"){
        createdOnRegion3OpenQuotes++;
    } 
    if (data.results[iCreateR3].type ==="Order"){
        createdOnRegion3OpenOrders++;
    } 
    if (data.results[iCreateR3].type ==="Reorder"){
        createdOnRegion3OpenReorder++;
    } 
    if (data.results[iCreateR3].type ==="Service Parts"){
        createdOnRegion3OpenServiceParts++;
    } 
    if (data.results[iCreateR3].type ==="Service Request"){
        createdOnRegion3OpenServiceRequest++;
    } 
    if (data.results[iCreateR3].type ==="Manufacturing"){
        createdOnRegion3OpenManufacturing++;
    } 
    if (data.results[iCreateR3].type ==="Rush"){
        createdOnRegion3OpenRush++;
    } 
    if (data.results[iCreateR3].type ==="Discount"){
        createdOnRegion3OpenDiscount++;
    } 
    if (data.results[iCreateR3].type ==="Menards \ Crestline Request"){
        createdOnRegion3OpenMenards++;
    } 
    if (data.results[iCreateR3].type ==="Customer Inquiry"){
        createdOnRegion3OpenCustomerInquiry++;
    } 
    if (data.results[iCreateR3].type ==="Internal Helpdesk Request"){
        createdOnRegion3OpenHelpdesk++;
    } 
    if (data.results[iCreateR3].type ==="Social Media"){
        createdOnRegion3OpenSocialMedia++;
    } 
    if (data.results[iCreateR3].type ==="WSOneSourceRequest"){
        createdOnRegion3OpenWSOSRequest++;
    } 
    if (data.results[iCreateR3].type ==="Alys Beach"){
        createdOnRegion3OpenAlysBeach++;
    } 
    if (data.results[iCreateR3].type ==="Change"){
        createdOnRegion3OpenChange++;
    }  
    if (data.results[iCreateR3].type ==="Credit"){
        createdOnRegion3OpenCredit++;
    }
    if (data.results[iCreateR3].type === null) {
        openNotMarkedR3++;
    } 
    iCreateR3++;

}

function getByDate1r3P1() {
    $('#r3openQuotes').html("").css('color', 'white');
    $('#r3openOrders').html("").css('color', 'white');
    $('#r3openReorders').html("").css('color', 'white');
    $('#r3openServiceRequest').html("").css('color', 'white');
    $('#r3openServiceParts').html("").css('color', 'white');
    $('#r3openChange').html("").css('color', 'white');
    $('#r3openDiscount').html("").css('color', 'white');
    $('#r3openCredit').html("").css('color', 'white');
    $('#r3openManufacturing').html("").css('color', 'white');
    $('#r3openRush').html("").css('color', 'white');
    $('#r3openMenards').html("").css('color', 'white');
    $('#r3openCustomerInquiry').html("").css('color', 'white');
    $('#r3openHelpdesk').html("").css('color', 'white');
    $('#r3openWSOS').html("").css('color', 'white');
    $('#r3openSocialMedia').html("").css('color', 'white');
    $('#r3openAlys').html("").css('color', 'white');
    $('#r3openNoTag').html("").css('color', 'white');
    $('#r3allOpen').html("").css('color', 'white');
    $('#region3Container').show();
    $('#h23').css("color", "red").html("Loading");
        createdOnRegion3OpenOrders = 0;
        createdOnRegion3OpenQuotes = 0;
        createdOnRegion3OpenReorder = 0;
        createdOnRegion3OpenServiceParts = 0;
        createdOnRegion3OpenServiceRequest = 0;
        createdOnRegion3OpenManufacturing = 0;
        createdOnRegion3OpenChange = 0;
        createdOnRegion3OpenRush = 0;
        createdOnRegion3OpenDiscount = 0;
        createdOnRegion3OpenCredit = 0;
        createdOnRegion3OpenMenards = 0;
        createdOnRegion3OpenCustomerInquiry = 0;
        createdOnRegion3OpenHelpdesk = 0;
        createdOnRegion3OpenSocialMedia = 0;
        createdOnRegion3OpenWSOSRequest = 0;
        createdOnRegion3OpenAlysBeach = 0;
        openNotMarkedR3 = 0;
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048213\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR3 < data.results.length) {
                        validateResultsR3(data);
                    }
                });
            iCreateR3=0;
            getByDate1r3P2(enteredDate);
        },
        error: function () 
        {
            iCreateR3=0;
            showr3OldData(enteredDate);
        }
    });
}

function getByDate1r3P2(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048213\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR3 < data.results.length) {
                        validateResultsR3(data);
                    }
                });
            iCreateR3=0;
            getByDate1r3P3(enteredDate);
        },
        error: function () 
        {
            iCreateR3=0;
            showr3OldData(enteredDate);
        }
    });
}

function getByDate1r3P3(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048213\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR3 < data.results.length) {
                        validateResultsR3(data);
                    }
                });
            iCreateR3=0;
            getByDate1r3P4(enteredDate);
        },
        error: function () 
        {
            iCreateR3=0;
            showr3OldData(enteredDate);
        }
    });
}

function getByDate1r3P4(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048213\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR3 < data.results.length) {
                        validateResultsR3(data);
                    }
                });
            iCreateR3=0;
            getByDate1r3P5(enteredDate);
        },
        error: function () 
        {
            iCreateR3=0;
            showr3OldData(enteredDate);
        }
    });
}

function getByDate1r3P5(){
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048213\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR3 < data.results.length) {
                        validateResultsR3(data);
                    }
                });
            iCreateR3=0;
            showr3OldData(enteredDate);
        },
        error: function () 
        {
            iCreateR3=0;
            showr3OldData(enteredDate);
        }
    });
}






function showr3OldData(enteredDate){
    //$('#dateSubmit').append(enteredDate);
    var createdIntquoter3 = parseInt(createdOnRegion3OpenQuotes);
    var createdIntorderr3 = parseInt(createdOnRegion3OpenOrders);
    var createdIntreorderr3 = parseInt(createdOnRegion3OpenReorder);
    var createdIntServiceRequestr3 = parseInt(createdOnRegion3OpenServiceRequest);
    var createdIntServicePartsr3 = parseInt(createdOnRegion3OpenServiceParts);
    var createdIntChanger3 = parseInt(createdOnRegion3OpenChange);
    var createdIntDiscountr3 = parseInt(createdOnRegion3OpenDiscount);
    var createdIntCreditr3 = parseInt(createdOnRegion3OpenCredit);
    var createdIntManufacturingr3 = parseInt(createdOnRegion3OpenManufacturing);
    var createdIntRushr3 = parseInt(createdOnRegion3OpenRush);
    var createdIntMenardsr3 = parseInt(createdOnRegion3OpenMenards);
    var createdIntCustomerInquiryr3 = parseInt(createdOnRegion3OpenCustomerInquiry);
    var createdIntHelpdeskr3 = parseInt(createdOnRegion3OpenHelpdesk);
    var createdIntWsosr3 = parseInt(createdOnRegion3OpenWSOSRequest);
    var createdIntAlysr3 = parseInt(createdOnRegion3OpenAlysBeach);
    var createdIntNoTagR3 = parseInt(openNotMarkedR3);
    var createdIotalr3 = createdIntquoter3 + createdIntorderr3 + createdIntreorderr3 + createdIntServiceRequestr3 + createdIntServicePartsr3 +
        createdIntChanger3 + createdIntDiscountr3 + createdIntCreditr3 + createdIntManufacturingr3 + createdIntRushr3 + createdIntMenardsr3 +
        createdIntCustomerInquiryr3 + createdIntHelpdeskr3 + createdIntWsosr3 + createdIntAlysr3 + createdIntNoTagR3;
    $('#r3openQuotes').html("    " + createdOnRegion3OpenQuotes).css('color', 'white');
    $('#r3openOrders').html("    " + createdOnRegion3OpenOrders).css('color', 'white');
    $('#r3openReorders').html("    " + createdOnRegion3OpenReorder).css('color', 'white');
    $('#r3openServiceRequest').html("    " + createdOnRegion3OpenServiceRequest).css('color', 'white');
    $('#r3openServiceParts').html("    " + createdOnRegion3OpenServiceParts).css('color', 'white');
    $('#r3openChange').html("    " + createdOnRegion3OpenChange).css('color', 'white');
    $('#r3openDiscount').html("    " + createdOnRegion3OpenDiscount).css('color', 'white');
    $('#r3openCredit').html("    " + createdOnRegion3OpenCredit).css('color', 'white');
    $('#r3openManufacturing').html("    " + createdOnRegion3OpenManufacturing).css('color', 'white');
    $('#r3openRush').html("    " + createdOnRegion3OpenRush).css('color', 'white');
    $('#r3openMenards').html("    " + createdOnRegion3OpenMenards).css('color', 'white');
    $('#r3openCustomerInquiry').html("    " + createdOnRegion3OpenCustomerInquiry).css('color', 'white');
    $('#r3openHelpdesk').html("    " + createdOnRegion3OpenHelpdesk).css('color', 'white');
    $('#r3openWSOS').html("    " + createdOnRegion3OpenWSOSRequest).css('color', 'white');
    $('#r3openSocialMedia').html("    " + createdOnRegion3OpenSocialMedia).css('color', 'white');
    $('#r3openAlys').html("    " + createdOnRegion3OpenAlysBeach).css('color', 'white');
    if (createdIntNoTagR3 > 0) {
        $('#r3openNoTag').html("    " + openNotMarkedR3).css('color', 'white').css('color', 'red');
    } else {
        $('#r3openNoTag').html("    " + openNotMarkedR3).css('color', 'white');
    }
    $('#r3allOpen').html(createdIotalr3).css('color', 'white').val();
    $('#h23').css('color', '#42f459').contents().first().replaceWith('Total Created Per Day');
}