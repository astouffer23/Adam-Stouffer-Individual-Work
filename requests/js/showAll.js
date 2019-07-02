$(document).ready(function () {
    $('#file').hover(function() {
    });
    $("#OSSubmit").click(function () {
        var yourdomain = 'weathershield'; // Your freshdesk domain name. Ex., yourcompany
        var api_key = 'zgUkAWW3h7nBcrAiNWR'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key

        var formdata = new FormData();
        formdata.append('description', 'sample description');
        formdata.append('email', 'adam.stouffer@weathershield.com');
        formdata.append('subject', 'Test subject');
        formdata.append('priority', '2');
        formdata.append('status', '19');
        formdata.append('group_id', '19000048208');
        formdata.append('attachments[]', $('#file')[0].files[0]);
        $.ajax(
            { 
                url: "https://" + yourdomain + ".freshdesk.com/api/v2/tickets",
                type: 'POST',
                contentType: false,
                processData: false,
                headers: {
                    "Authorization": "Basic " + btoa(api_key + ":x")
                },
                data: formdata,
                success: function (data, textStatus, jqXHR) {
                    $('#result').text('Success');
                    $('#code').text(jqXHR.status);
                    $('#response').html(JSON.stringify(data, null, "<br/>"));
                },
                error: function (jqXHR, tranStatus) {
                    $('#result').text('Error');
                    $('#code').text(jqXHR.status);
                    x_request_id = jqXHR.getResponseHeader('X-Request-Id');
                    response_text = jqXHR.responseText;
                    $('#response').html(" Error Message : <b style='color: red'>" + response_text + "</b>.<br/> Your X-Request-Id is : <b>" + x_request_id + "</b>. Please contact support@freshdesk.com with this id for more information.");

                }
            }
        );


    });

    $("#pick-department").change(function () {
        if ($(this).val() === "Sales") {
            $("#Issue").show();
            return;
        }
        if ($(this).val() === "Company Leadership") {
            $("#Issue").show();
            return;
        }
        if ($(this).val() === "InformationTechnology") {
            $("#Issue").show();
            return;
        }
        else {
            $("#Issue").hide();
            $('#OSDiv').hide();
            $('#pick-area').val('');
        }
    });

    $("#pick-area").change(function () {
        if ($(this).val() === "WSOS") {
            $('#BreakFixDiv').hide();
            $('#OSDiv').show();
        }
        if ($(this).val() === "BreakFix") {
            $('#OSDiv').hide();
            $('#BreakFixDiv').show();
        }
        if ($(this).val() === "SoftwareRequest") {
            $('#OSDiv').hide();
            $('#BreakFixDiv').hide();
        }
        if ($(this).val() === "HardwareRequest") {
            $('#OSDiv').hide();
            $('#BreakFixDiv').hide();
        }
        if ($(this).val() === "TrainingRequest") {
            $('#OSDiv').hide();
            $('#BreakFixDiv').hide();
        }
        if ($(this).val() === "NewUser") {
            $('#OSDiv').hide();
            $('#BreakFixDiv').hide();
        }
    });
});
