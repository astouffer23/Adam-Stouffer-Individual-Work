var resolvedOnRegion2Orders = 0;
var resolvedOnRegion2Quotes = 0;
var resolvedOnRegion2Reorder = 0;
var resolvedOnRegion2ServiceParts = 0;
var resolvedOnRegion2ServiceRequest = 0;
var resolvedOnRegion2Manufacturing = 0;
var resolvedOnRegion2Change = 0;
var resolvedOnRegion2Rush = 0;
var resolvedOnRegion2Discount = 0;
var resolvedOnRegion2Credit = 0;
var resolvedOnRegion2Menards = 0;
var resolvedOnRegion2CustomerInquiry = 0;
var resolvedOnRegion2Helpdesk = 0;
var resolvedOnRegion2SocialMedia = 0;
var resolvedOnRegion2WSOSRequest = 0;
var resolvedOnRegion2AlysBeach = 0;
var resolvedNotMarkedR2 = 0;

var iResolvedR2 = 0;

var resolved_at = {
	resolved_at: "resolved_at"
};

$(document).ready(function () {
	$('#dateSubmit').click(function () {
		getByDate1R2P1Resolved();
	});
});


function validateResultsR2Resolved(data) {
	if (data.results[iResolvedR2].type === "Quote") {
		resolvedOnRegion2Quotes++;
	}
	if (data.results[iResolvedR2].type === "Order") {
		resolvedOnRegion2Orders++;
	}
	if (data.results[iResolvedR2].type === "Reorder") {
		resolvedOnRegion2Reorder++;
	}
	if (data.results[iResolvedR2].type === "Service Parts") {
		resolvedOnRegion2ServiceParts++;
	}
	if (data.results[iResolvedR2].type === "Service Request") {
		resolvedOnRegion2ServiceRequest++;
	}
	if (data.results[iResolvedR2].type === "Manufacturing") {
		resolvedOnRegion2Manufacturing++;
	}
	if (data.results[iResolvedR2].type === "Rush") {
		resolvedOnRegion2Rush++;
	}
	if (data.results[iResolvedR2].type === "Discount") {
		resolvedOnRegion2Discount++;
	}
	if (data.results[iResolvedR2].type === "Menards \ Crestline Request") {
		resolvedOnRegion2Menards++;
	}
	if (data.results[iResolvedR2].type === "Customer Inquiry") {
		resolvedOnRegion2CustomerInquiry++;
	}
	if (data.results[iResolvedR2].type === "Internal Helpdesk Request") {
		resolvedOnRegion2Helpdesk++;
	}
	if (data.results[iResolvedR2].type === "Social Media") {
		resolvedOnRegion2SocialMedia++;
	}
	if (data.results[iResolvedR2].type === "WSOneSourceRequest") {
		resolvedOnRegion2WSOSRequest++;
	}
	if (data.results[iResolvedR2].type === "Alys Beach") {
		resolvedOnRegion2AlysBeach++;
	}
	if (data.results[iResolvedR2].type === "Change") {
		resolvedOnRegion2Change++;
	}
	if (data.results[iResolvedR2].type === "Credit") {
		resolvedOnRegion2Credit++;
	}
	if (data.results[iResolvedR2].type === null) {
		resolvedNotMarkedR2++;
	}
	iResolvedR2++;

}

function getByDate1R2P1Resolved() {
    $('#r2resolvedQuotes').html("").css('color', 'white');
    $('#r2resolvedOrders').html("").css('color', 'white');
    $('#r2resolvedReorders').html("").css('color', 'white');
    $('#r2resolvedServiceRequest').html("").css('color', 'white');
    $('#r2resolvedServiceParts').html("").css('color', 'white');
    $('#r2resolvedChange').html("").css('color', 'white');
    $('#r2resolvedDiscount').html("").css('color', 'white');
    $('#r2resolvedCredit').html("").css('color', 'white');
    $('#r2resolvedManufacturing').html("").css('color', 'white');
    $('#r2resolvedRush').html("").css('color', 'white');
    $('#r2resolvedMenards').html("").css('color', 'white');
    $('#r2resolvedCustomerInquiry').html("").css('color', 'white');
    $('#r2resolvedHelpdesk').html("").css('color', 'white');
    $('#r2resolvedWSOS').html("").css('color', 'white');
    $('#r2resolvedSocialMedia').html("").css('color', 'white');
    $('#r2resolvedAlys').html("").css('color', 'white');
    $('#r2resolvedNoTag').html("").css('color', 'white');
    $('#r2allResolved').html("").css('color', 'white');
	$('#region2ContainerResolved').show();
	$('#h22Resolved').css("color", "red").html("Loading");
	resolvedOnRegion2Orders = 0;
	resolvedOnRegion2Quotes = 0;
	resolvedOnRegion2Reorder = 0;
	resolvedOnRegion2ServiceParts = 0;
	resolvedOnRegion2ServiceRequest = 0;
	resolvedOnRegion2Manufacturing = 0;
	resolvedOnRegion2Change = 0;
	resolvedOnRegion2Rush = 0;
	resolvedOnRegion2Discount = 0;
	resolvedOnRegion2Credit = 0;
	resolvedOnRegion2Menards = 0;
	resolvedOnRegion2CustomerInquiry = 0;
	resolvedOnRegion2Helpdesk = 0;
	resolvedOnRegion2SocialMedia = 0;
	resolvedOnRegion2WSOSRequest = 0;
	resolvedOnRegion2AlysBeach = 0;
	resolvedNotMarkedR2 = 0;

	var enteredDate = $('#datePicked').val();
	var text = "";
	//$('#dateSubmit').text("Received On: ");
	//$('#receivedOn').html(enteredDate).val();
	$.ajax({
		type: 'GET',
		url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048209\"\&page=1",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
		},
		success: function (data) {

			$.each(resolved_at,function () {while (iResolvedR2 < data.results.length) {validateResultsR2Resolved(data);}});
			iResolvedR2 = 0;
			getByDate1R2P2Resolved(enteredDate);
		},
		error: function () {
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		}
	});
}

function getByDate1R2P2Resolved() {
	var enteredDate = $('#datePicked').val();
	var text = "";
	//$('#dateSubmit').text("Received On: ");
	//$('#receivedOn').html(enteredDate).val();
	$.ajax({
		type: 'GET',
		url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048209\"\&page=2",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
		},
		success: function (data) {
			$.each(resolved_at,function () {while (iResolvedR2 < data.results.length) {validateResultsR2Resolved(data);}});
			iResolvedR2 = 0;
			getByDate1R2P3Resolved(enteredDate);
		},
		error: function () {
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		}
	});
}

function getByDate1R2P3Resolved() {
	var enteredDate = $('#datePicked').val();
	var text = "";
	//$('#dateSubmit').text("Received On: ");
	//$('#receivedOn').html(enteredDate).val();
	$.ajax({
		type: 'GET',
		url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048209\"\&page=3",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
		},
		success: function (data) {
			$.each(resolved_at, function () {
				while (iResolvedR2 < data.results.length) {
					validateResultsR2Resolved(data);
				}
			});
			iResolvedR2 = 0;
			getByDate1R2P4Resolved(enteredDate);
		},
		error: function () {
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		}
	});
}

function getByDate1R2P4Resolved() {
	var enteredDate = $('#datePicked').val();
	var text = "";
	//$('#dateSubmit').text("Received On: ");
	//$('#receivedOn').html(enteredDate).val();
	$.ajax({
		type: 'GET',
		url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048209\"\&page=4",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
		},
		success: function (data) {

			$.each(resolved_at, function () {
				while (iResolvedR2 < data.results.length) {
					validateResultsR2Resolved(data);
				}
			});
			iResolvedR2 = 0;
			getByDate1R2P5Resolved(enteredDate);
		},
		error: function () {
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		}
	});
}

function getByDate1R2P5Resolved() {

	var enteredDate = $('#datePicked').val();
	var text = "";
	//$('#dateSubmit').text("Received On: ");
	//$('#receivedOn').html(enteredDate).val();
	$.ajax({
		type: 'GET',
		url: "https://weathershield.freshdesk.com/api/v2/search/tickets\?query=\"status:4\%20AND\%20updated_at:\%27"+enteredDate+"\%27\%20AND\%20group_id:19000048209\"\&page=5",
		dataType: 'json',
		contentType: 'application/json',
		beforeSend: function (xhr) {
			xhr.setRequestHeader("Authorization", "Basic " + btoa("xO5KtvPyOHGcq8PEDsl"));
		},
		success: function (data) {

			$.each(resolved_at,function () {while (iResolvedR2 < data.results.length) {validateResultsR2Resolved(data);}});
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		},
		error: function () {
			iResolvedR2 = 0;
			showr2OldDataResolved(enteredDate);
		}
	});
}






function showr2OldDataResolved(enteredDate) {
	//$('#dateSubmit').append(enteredDate);
	var resolvedIntquoter2 = parseInt(resolvedOnRegion2Quotes);
	var resolvedIntorderr2 = parseInt(resolvedOnRegion2Orders);
	var resolvedIntreorderr2 = parseInt(resolvedOnRegion2Reorder);
	var resolvedIntServiceRequestr2 = parseInt(resolvedOnRegion2ServiceRequest);
	var resolvedIntServicePartsr2 = parseInt(resolvedOnRegion2ServiceParts);
	var resolvedIntChanger2 = parseInt(resolvedOnRegion2Change);
	var resolvedIntDiscountr2 = parseInt(resolvedOnRegion2Discount);
	var resolvedIntCreditr2 = parseInt(resolvedOnRegion2Credit);
	var resolvedIntManufacturingr2 = parseInt(resolvedOnRegion2Manufacturing);
	var resolvedIntRushr2 = parseInt(resolvedOnRegion2Rush);
	var resolvedIntMenardsr2 = parseInt(resolvedOnRegion2Menards);
	var resolvedIntCustomerInquiryr2 = parseInt(resolvedOnRegion2CustomerInquiry);
	var resolvedIntHelpdeskr2 = parseInt(resolvedOnRegion2Helpdesk);
	var resolvedIntWsosr2 = parseInt(resolvedOnRegion2WSOSRequest);
	var resolvedIntAlysr2 = parseInt(resolvedOnRegion2AlysBeach);
	var resolvedIntNoTagR2 = parseInt(resolvedNotMarkedR2);
    var resolvedIntTotalr2 = resolvedIntquoter2 + resolvedIntorderr2 + resolvedIntreorderr2 + resolvedIntServiceRequestr2 + resolvedIntServicePartsr2 +
        resolvedIntChanger2 + resolvedIntDiscountr2 + resolvedIntCreditr2 + resolvedIntManufacturingr2 + resolvedIntRushr2 + resolvedIntMenardsr2 +
        resolvedIntCustomerInquiryr2 + resolvedIntHelpdeskr2 + resolvedIntWsosr2 + resolvedIntAlysr2 + resolvedIntNoTagR2;
	$('#r2resolvedQuotes').html("    " + resolvedOnRegion2Quotes);
	$('#r2resolvedOrders').html("    " + resolvedOnRegion2Orders);
	$('#r2resolvedReorders').html("    " + resolvedOnRegion2Reorder);
	$('#r2resolvedServiceRequest').html("    " + resolvedOnRegion2ServiceRequest);
	$('#r2resolvedServiceParts').html("    " + resolvedOnRegion2ServiceParts);
	$('#r2resolvedChange').html("    " + resolvedOnRegion2Change);
	$('#r2resolvedDiscount').html("    " + resolvedOnRegion2Discount);
	$('#r2resolvedCredit').html("    " + resolvedOnRegion2Credit);
	$('#r2resolvedManufacturing').html("    " + resolvedOnRegion2Manufacturing);
	$('#r2resolvedRush').html("    " + resolvedOnRegion2Rush);
	$('#r2resolvedMenards').html("    " + resolvedOnRegion2Menards);
	$('#r2resolvedCustomerInquiry').html("    " + resolvedOnRegion2CustomerInquiry);
	$('#r2resolvedHelpdesk').html("    " + resolvedOnRegion2Helpdesk);
	$('#r2resolvedWSOS').html("    " + resolvedOnRegion2WSOSRequest);
	$('#r2resolvedSocialMedia').html("    " + resolvedOnRegion2SocialMedia);
    $('#r2resolvedAlys').html("    " + resolvedOnRegion2AlysBeach);
    if (resolvedIntNoTagR2 > 0) {
        $('#r2resolvedNoTag').html("    " + resolvedNotMarkedR2).css('color', 'red');
    } else {
        $('#r2resolvedNoTag').html("    " + resolvedNotMarkedR2);
    }
    $('#r2allResolved').html(resolvedIntTotalr2).val();
    $('#h22Resolved').css('color', '#42f459').contents().first().replaceWith('Resolved Per Day (Shows status of resolved by date selected)');
}