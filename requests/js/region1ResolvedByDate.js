var resolvedOnRegion1Orders = 0;
var resolvedOnRegion1Quotes = 0;
var resolvedOnRegion1Reorder = 0;
var resolvedOnRegion1ServiceParts = 0;
var resolvedOnRegion1ServiceRequest = 0;
var resolvedOnRegion1Manufacturing = 0;
var resolvedOnRegion1Change = 0;
var resolvedOnRegion1Rush = 0;
var resolvedOnRegion1Discount = 0;
var resolvedOnRegion1Credit = 0;
var resolvedOnRegion1Menards = 0;
var resolvedOnRegion1CustomerInquiry = 0;
var resolvedOnRegion1Helpdesk = 0;
var resolvedOnRegion1SocialMedia = 0;
var resolvedOnRegion1WSOSRequest = 0;
var resolvedOnRegion1AlysBeach = 0;
var resolvedNotMarkedR1 = 0;

var iResolvedR1=0;

var resolved_at = {
    resolved_at: "resolved_at"
};

$(document).ready(function() {
    $('#dateSubmit').click(function() {
        getByDate1R1P1Resolved();
    });
});


function validateResultsR1Resolved(data)
{
    if (data.results[iResolvedR1].type ==="Quote"){
        resolvedOnRegion1Quotes++;
    } 
    if (data.results[iResolvedR1].type ==="Order"){
        resolvedOnRegion1Orders++;
    } 
    if (data.results[iResolvedR1].type ==="Reorder"){
        resolvedOnRegion1Reorder++;
    } 
    if (data.results[iResolvedR1].type ==="Service Parts"){
        resolvedOnRegion1ServiceParts++;
    } 
    if (data.results[iResolvedR1].type ==="Service Request"){
        resolvedOnRegion1ServiceRequest++;
    } 
    if (data.results[iResolvedR1].type ==="Manufacturing"){
        resolvedOnRegion1Manufacturing++;
    } 
    if (data.results[iResolvedR1].type ==="Rush"){
        resolvedOnRegion1Rush++;
    } 
    if (data.results[iResolvedR1].type ==="Discount"){
        resolvedOnRegion1Discount++;
    } 
    if (data.results[iResolvedR1].type ==="Menards \ Crestline Request"){
        resolvedOnRegion1Menards++;
    } 
    if (data.results[iResolvedR1].type ==="Customer Inquiry"){
        resolvedOnRegion1CustomerInquiry++;
    } 
    if (data.results[iResolvedR1].type ==="Internal Helpdesk Request"){
        resolvedOnRegion1Helpdesk++;
    } 
    if (data.results[iResolvedR1].type ==="Social Media"){
        resolvedOnRegion1SocialMedia++;
    } 
    if (data.results[iResolvedR1].type ==="WSOneSourceRequest"){
        resolvedOnRegion1WSOSRequest++;
    } 
    if (data.results[iResolvedR1].type ==="Alys Beach"){
        resolvedOnRegion1AlysBeach++;
    } 
    if (data.results[iResolvedR1].type ==="Change"){
        resolvedOnRegion1Change++;
    }  
    if (data.results[iResolvedR1].type ==="Credit"){
        resolvedOnRegion1Credit++;
    }
    if (data.results[iR1].type ===null){
        resolvedNotMarkedR1++;
    }    
    iResolvedR1++;

}

function getByDate1R1P1Resolved() {
    $('#r1resolvedQuotes').html("").css('color', 'white');
    $('#r1resolvedOrders').html("").css('color', 'white');
    $('#r1resolvedReorders').html("").css('color', 'white');
    $('#r1resolvedServiceRequest').html("").css('color', 'white');
    $('#r1resolvedServiceParts').html("").css('color', 'white');
    $('#r1resolvedChange').html("").css('color', 'white');
    $('#r1resolvedDiscount').html("").css('color', 'white');
    $('#r1resolvedCredit').html("").css('color', 'white');
    $('#r1resolvedManufacturing').html("").css('color', 'white');
    $('#r1resolvedRush').html("").css('color', 'white');
    $('#r1resolvedMenards').html("").css('color', 'white');
    $('#r1resolvedCustomerInquiry').html("").css('color', 'white');
    $('#r1resolvedHelpdesk').html("").css('color', 'white');
    $('#r1resolvedWSOS').html("").css('color', 'white');
    $('#r1resolvedSocialMedia').html("").css('color', 'white');
    $('#r1resolvedAlys').html("").css('color', 'white');
    $('#r1resolvedNoTag').html("").css('color', 'white');
    $('#r1allResolved').html("").css('color', 'white');
    $('#region1ContainerResolved').show();
    $('#h21Resolved').css("color", "red").html("Loading");
        resolvedOnRegion1Orders = 0;
        resolvedOnRegion1Quotes = 0;
        resolvedOnRegion1Reorder = 0;
        resolvedOnRegion1ServiceParts = 0;
        resolvedOnRegion1ServiceRequest = 0;
        resolvedOnRegion1Manufacturing = 0;
        resolvedOnRegion1Change = 0;
        resolvedOnRegion1Rush = 0;
        resolvedOnRegion1Discount = 0;
        resolvedOnRegion1Credit = 0;
        resolvedOnRegion1Menards = 0;
        resolvedOnRegion1CustomerInquiry = 0;
        resolvedOnRegion1Helpdesk = 0;
        resolvedOnRegion1SocialMedia = 0;
        resolvedOnRegion1WSOSRequest = 0;
        resolvedOnRegion1AlysBeach = 0;
        resolvedNotMarkedR1 = 0;
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048208\"\&page=1",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at,
                function() {
                    while (iResolvedR1 < data.results.length) {
                        validateResultsR1Resolved(data);
                    }
                });
            iResolvedR1=0;
            getByDate1R1P2Resolved(enteredDate);
        },
        error: function () 
        {
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R1P2Resolved(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048208\"\&page=2",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at,
                function() {
                    while (iResolvedR1 < data.results.length) {
                        validateResultsR1Resolved(data);
                    }
                });
            iResolvedR1=0;
            getByDate1R1P3Resolved(enteredDate);
        },
        error: function () 
        {
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R1P3Resolved(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048208\"\&page=3",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {
            $.each(resolved_at,
                function() {
                    while (iResolvedR1 < data.results.length) {
                        validateResultsR1Resolved(data);
                    }
                });
            iResolvedR1=0;
            getByDate1R1P4Resolved(enteredDate);
        },
        error: function () 
        {
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R1P4Resolved(){
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048208\"\&page=4",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at,
                function() {
                    while (iResolvedR1 < data.results.length) {
                        validateResultsR1Resolved(data);
                    }
                });
            iResolvedR1=0;
            getByDate1R1P5Resolved(enteredDate);
        },
        error: function () 
        {
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        }
    });
}

function getByDate1R1P5Resolved(){
    
    var enteredDate = $('#datePicked').val();
    var text = "";
    //$('#dateSubmit').text("Received On: ");
    //$('#receivedOn').html(enteredDate).val();
    $.ajax({
        type: 'GET',
        url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048208\"\&page=5",
        dataType: 'json',
        contentType: 'application/json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
        },
        success: function (data) {

            $.each(resolved_at,
                function() {
                    while (iResolvedR1 < data.results.length) {
                        validateResultsR1Resolved(data);
                    }
                });
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        },
        error: function () 
        {
            iResolvedR1=0;
            showr1OldDataResolved(enteredDate);
        }
    });
}






function showr1OldDataResolved(enteredDate){
    //$('#dateSubmit').append(enteredDate);
    var resolvedIntquoter1 = parseInt(resolvedOnRegion1Quotes);
    var resolvedIntorderr1 = parseInt(resolvedOnRegion1Orders);
    var resolvedIntreorderr1 = parseInt(resolvedOnRegion1Reorder);
    var resolvedIntServiceRequestr1 = parseInt(resolvedOnRegion1ServiceRequest);
    var resolvedIntServicePartsr1 = parseInt(resolvedOnRegion1ServiceParts);
    var resolvedIntChanger1 = parseInt(resolvedOnRegion1Change);
    var resolvedIntDiscountr1 = parseInt(resolvedOnRegion1Discount);
    var resolvedIntCreditr1 = parseInt(resolvedOnRegion1Credit);
    var resolvedIntManufacturingr1 = parseInt(resolvedOnRegion1Manufacturing);
    var resolvedIntRushr1 = parseInt(resolvedOnRegion1Rush);
    var resolvedIntMenardsr1 = parseInt(resolvedOnRegion1Menards);
    var resolvedIntCustomerInquiryr1 = parseInt(resolvedOnRegion1CustomerInquiry);
    var resolvedIntHelpdeskr1 = parseInt(resolvedOnRegion1Helpdesk);
    var resolvedIntWsosr1 = parseInt(resolvedOnRegion1WSOSRequest);
    var resolvedIntAlysr1 = parseInt(resolvedOnRegion1AlysBeach);
    var resolvedIntNoTagR1 = parseInt(resolvedNotMarkedR1);
    var resolvedIntTotalr1 = resolvedIntquoter1+resolvedIntorderr1+resolvedIntreorderr1+resolvedIntServiceRequestr1+resolvedIntServicePartsr1+resolvedIntChanger1+
    resolvedIntDiscountr1+resolvedIntCreditr1+resolvedIntManufacturingr1+
        resolvedIntRushr1 + resolvedIntMenardsr1 + resolvedIntCustomerInquiryr1 + resolvedIntHelpdeskr1 + resolvedIntWsosr1+resolvedIntAlysr1+resolvedIntNoTagR1;
    $('#r1resolvedQuotes').html("    "+resolvedOnRegion1Quotes);
    $('#r1resolvedOrders').html("    "+resolvedOnRegion1Orders);
    $('#r1resolvedReorders').html("    "+resolvedOnRegion1Reorder);
    $('#r1resolvedServiceRequest').html("    "+resolvedOnRegion1ServiceRequest);
    $('#r1resolvedServiceParts').html("    "+resolvedOnRegion1ServiceParts);
    $('#r1resolvedChange').html("    "+resolvedOnRegion1Change);
    $('#r1resolvedDiscount').html("    "+resolvedOnRegion1Discount);
    $('#r1resolvedCredit').html("    "+resolvedOnRegion1Credit);
    $('#r1resolvedManufacturing').html("    "+resolvedOnRegion1Manufacturing);
    $('#r1resolvedRush').html("    "+resolvedOnRegion1Rush);
    $('#r1resolvedMenards').html("    "+resolvedOnRegion1Menards);
    $('#r1resolvedCustomerInquiry').html("    "+resolvedOnRegion1CustomerInquiry);
    $('#r1resolvedHelpdesk').html("    "+resolvedOnRegion1Helpdesk);
    $('#r1resolvedWSOS').html("    "+resolvedOnRegion1WSOSRequest);
    $('#r1resolvedSocialMedia').html("    "+resolvedOnRegion1SocialMedia);
    $('#r1resolvedAlys').html("    " + resolvedOnRegion1AlysBeach);
    if (resolvedIntNoTagR1 > 0) {
        $('#r1resolvedNoTag').html("    " + resolvedNotMarkedR1).css('color', 'red');
    } else {
        $('#r1resolvedNoTag').html("    " + resolvedNotMarkedR1);
    }
    $('#r1allResolved').html(resolvedIntTotalr1).val();
    $('#h21Resolved').css('color','#42f459').contents().first().replaceWith('Resolved Per Day (Shows status of resolved by date selected)');
}