var createdOnRegion4OpenOrders = 0;
var createdOnRegion4OpenQuotes = 0;
var createdOnRegion4OpenReorder = 0;
var createdOnRegion4OpenServiceParts = 0;
var createdOnRegion4OpenServiceRequest = 0;
var createdOnRegion4OpenManufacturing = 0;
var createdOnRegion4OpenChange = 0;
var createdOnRegion4OpenRush = 0;
var createdOnRegion4OpenDiscount = 0;
var createdOnRegion4OpenCredit = 0;
var createdOnRegion4OpenMenards = 0;
var createdOnRegion4OpenCustomerInquiry = 0;
var createdOnRegion4OpenHelpdesk = 0;
var createdOnRegion4OpenSocialMedia = 0;
var createdOnRegion4OpenWSOSRequest = 0;
var createdOnRegion4OpenAlysBeach = 0;
var openNotMarkedR4 = 0;

var iCreateR4=0;

var created_at = {
    created_at: "created_at"
};

$(document).ready(function() {
    $('#dateSubmit').click(function() {
        getByDate1r4P1();
    });
});


function validateResultsR4(data)
{
    if (data.results[iCreateR4].type ==="Quote"){
        createdOnRegion4OpenQuotes++;
    } 
    if (data.results[iCreateR4].type ==="Order"){
        createdOnRegion4OpenOrders++;
    } 
    if (data.results[iCreateR4].type ==="Reorder"){
        createdOnRegion4OpenReorder++;
    } 
    if (data.results[iCreateR4].type ==="Service Parts"){
        createdOnRegion4OpenServiceParts++;
    } 
    if (data.results[iCreateR4].type ==="Service Request"){
        createdOnRegion4OpenServiceRequest++;
    } 
    if (data.results[iCreateR4].type ==="Manufacturing"){
        createdOnRegion4OpenManufacturing++;
    } 
    if (data.results[iCreateR4].type ==="Rush"){
        createdOnRegion4OpenRush++;
    } 
    if (data.results[iCreateR4].type ==="Discount"){
        createdOnRegion4OpenDiscount++;
    } 
    if (data.results[iCreateR4].type ==="Menards \ Crestline Request"){
        createdOnRegion4OpenMenards++;
    } 
    if (data.results[iCreateR4].type ==="Customer Inquiry"){
        createdOnRegion4OpenCustomerInquiry++;
    } 
    if (data.results[iCreateR4].type ==="Internal Helpdesk Request"){
        createdOnRegion4OpenHelpdesk++;
    } 
    if (data.results[iCreateR4].type ==="Social Media"){
        createdOnRegion4OpenSocialMedia++;
    } 
    if (data.results[iCreateR4].type ==="WSOneSourceRequest"){
        createdOnRegion4OpenWSOSRequest++;
    } 
    if (data.results[iCreateR4].type ==="Alys Beach"){
        createdOnRegion4OpenAlysBeach++;
    } 
    if (data.results[iCreateR4].type ==="Change"){
        createdOnRegion4OpenChange++;
    }  
    if (data.results[iCreateR4].type ==="Credit"){
        createdOnRegion4OpenCredit++;
    }
    if (data.results[iCreateR4].type === null) {
        openNotMarkedR4++;
    } 
    iCreateR4++;

}

function getByDate1r4P1() {
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
    $('#region4Container').show();
    $('#h24').css("color", "red").html("Loading");
        createdOnRegion4OpenOrders = 0;
        createdOnRegion4OpenQuotes = 0;
        createdOnRegion4OpenReorder = 0;
        createdOnRegion4OpenServiceParts = 0;
        createdOnRegion4OpenServiceRequest = 0;
        createdOnRegion4OpenManufacturing = 0;
        createdOnRegion4OpenChange = 0;
        createdOnRegion4OpenRush = 0;
        createdOnRegion4OpenDiscount = 0;
        createdOnRegion4OpenCredit = 0;
        createdOnRegion4OpenMenards = 0;
        createdOnRegion4OpenCustomerInquiry = 0;
        createdOnRegion4OpenHelpdesk = 0;
        createdOnRegion4OpenSocialMedia = 0;
        createdOnRegion4OpenWSOSRequest = 0;
        createdOnRegion4OpenAlysBeach = 0;
        openNotMarkedR4 = 0;
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048255\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR4 < data.results.length) {
                        validateResultsR4(data);
                    }
                });
            iCreateR4=0;
            getByDate1r4P2(enteredDate);
        },
        error: function () 
        {
            iCreateR4=0;
            showr4OldData(enteredDate);
        }
    });
}

function getByDate1r4P2(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048255\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR4 < data.results.length) {
                        validateResultsR4(data);
                    }
                });
            iCreateR4=0;
            getByDate1r4P3(enteredDate);
        },
        error: function () 
        {
            iCreateR4=0;
            showr4OldData(enteredDate);
        }
    });
}

function getByDate1r4P3(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048255\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(created_at,
                function() {
                    while (iCreateR4 < data.results.length) {
                        validateResultsR4(data);
                    }
                });
            iCreateR4=0;
            getByDate1r4P4(enteredDate);
        },
        error: function () 
        {
            iCreateR4=0;
            showr4OldData(enteredDate);
        }
    });
}

function getByDate1r4P4(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048255\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR4 < data.results.length) {
                        validateResultsR4(data);
                    }
                });
            iCreateR4=0;
            getByDate1r4P5(enteredDate);
        },
        error: function () 
        {
            iCreateR4=0;
            showr4OldData(enteredDate);
        }
    });
}

function getByDate1r4P5(){
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"group_id:19000048255\%20AND\%20created_at:\%27"+enteredDate+"\%27\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(created_at,
                function() {
                    while (iCreateR4 < data.results.length) {
                        validateResultsR4(data);
                    }
                });
            iCreateR4=0;
            showr4OldData(enteredDate);
        },
        error: function () 
        {
            iCreateR4=0;
            showr4OldData(enteredDate);
        }
    });
}






function showr4OldData(enteredDate){
    //$('#dateSubmit').append(enteredDate);
    var createdIntquoter4 = parseInt(createdOnRegion4OpenQuotes);
    var createdIntorderr4 = parseInt(createdOnRegion4OpenOrders);
    var createdIntreorderr4 = parseInt(createdOnRegion4OpenReorder);
    var createdIntServiceRequestr4 = parseInt(createdOnRegion4OpenServiceRequest);
    var createdIntServicePartsr4 = parseInt(createdOnRegion4OpenServiceParts);
    var createdIntChanger4 = parseInt(createdOnRegion4OpenChange);
    var createdIntDiscountr4 = parseInt(createdOnRegion4OpenDiscount);
    var createdIntCreditr4 = parseInt(createdOnRegion4OpenCredit);
    var createdIntManufacturingr4 = parseInt(createdOnRegion4OpenManufacturing);
    var createdIntRushr4 = parseInt(createdOnRegion4OpenRush);
    var createdIntMenardsr4 = parseInt(createdOnRegion4OpenMenards);
    var createdIntCustomerInquiryr4 = parseInt(createdOnRegion4OpenCustomerInquiry);
    var createdIntHelpdeskr4 = parseInt(createdOnRegion4OpenHelpdesk);
    var createdIntWsosr4 = parseInt(createdOnRegion4OpenWSOSRequest);
    var createdIntAlysr4 = parseInt(createdOnRegion4OpenAlysBeach);
    var createdIntNoTagR4 = parseInt(openNotMarkedR4);
    var createdIntTotalr4 = createdIntquoter4 + createdIntorderr4 + createdIntreorderr4 + createdIntServiceRequestr4 + createdIntServicePartsr4 + createdIntChanger4 +
        createdIntDiscountr4 + createdIntCreditr4 + createdIntManufacturingr4 + createdIntRushr4 + createdIntMenardsr4 + createdIntCustomerInquiryr4 +
        createdIntHelpdeskr4 + createdIntWsosr4 + createdIntAlysr4 + createdIntNoTagR4;
    $('#r4openQuotes').html("    " + createdOnRegion4OpenQuotes).css('color', 'white');
    $('#r4openOrders').html("    " + createdOnRegion4OpenOrders).css('color', 'white');
    $('#r4openReorders').html("    " + createdOnRegion4OpenReorder).css('color', 'white');
    $('#r4openServiceRequest').html("    " + createdOnRegion4OpenServiceRequest).css('color', 'white');
    $('#r4openServiceParts').html("    " + createdOnRegion4OpenServiceParts).css('color', 'white');
    $('#r4openChange').html("    " + createdOnRegion4OpenChange).css('color', 'white');
    $('#r4openDiscount').html("    " + createdOnRegion4OpenDiscount).css('color', 'white');
    $('#r4openCredit').html("    " + createdOnRegion4OpenCredit).css('color', 'white');
    $('#r4openManufacturing').html("    " + createdOnRegion4OpenManufacturing).css('color', 'white');
    $('#r4openRush').html("    " + createdOnRegion4OpenRush).css('color', 'white');
    $('#r4openMenards').html("    " + createdOnRegion4OpenMenards).css('color', 'white');
    $('#r4openCustomerInquiry').html("    " + createdOnRegion4OpenCustomerInquiry).css('color', 'white');
    $('#r4openHelpdesk').html("    " + createdOnRegion4OpenHelpdesk).css('color', 'white');
    $('#r4openWSOS').html("    " + createdOnRegion4OpenWSOSRequest).css('color', 'white');
    $('#r4openSocialMedia').html("    " + createdOnRegion4OpenSocialMedia).css('color', 'white');
    $('#r4openAlys').html("    " + createdOnRegion4OpenAlysBeach).css('color', 'white');
    if (createdIntNoTagR4 > 0) {
        $('#r4openNoTag').html("    " + openNotMarkedR4).css('color', 'red');
    }
    else{
        $('#r4openNoTag').html("    " + openNotMarkedR4).css('color', 'white');
    }
    $('#r4allOpen').html(createdIntTotalr4).css('color', 'white').val();
    $('#h24').css('color', '#42f459').contents().first().replaceWith('Total Created Per Day');
}