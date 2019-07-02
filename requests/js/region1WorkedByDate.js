$(document).ready(function () {
    $("#OSSubmit").click(
        function () {
            var yourdomain = 'weathershield'; // Your freshdesk domain name. Ex., yourcompany
            var api_key = 'xO5KtvPyOHGcq8PEDsl'; // Ref: https://support.freshdesk.com/support/solutions/articles/215517-how-to-find-your-api-key

            var formdata = new FormData();
            formdata.append('description', 'sample description');
            formdata.append('email', 'adam.stouffer@weathershield.com');
            formdata.append('subject', 'Test subject');
            formdata.append('priority', '2');
            formdata.append('status', '2');
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
                    success: function () {
                        alert('yep');
                    },
                    error: function () {
                        alert('nope');
                    }
                }
            );
        }
    );
});