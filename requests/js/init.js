$(function () {
    $('.ttp').tooltip({ html: true });
    var showLoader;

    showSpinner = function () {
        $('#ajaxSpinnerImage').show();
    }

    hideSpinner = function () {
        $('#ajaxSpinnerImage').hide();
    }

    $.ajaxSetup({
        cache: false
    });

    //uncaught error handler - kill spinner so it doesn't run forever.
    window.onerror = function () {
        $('#ajaxSpinnerImage').hide();
    };

    //set bootstrap notify defaults
    $.notifyDefaults({
        type: 'success',
        animate: {
            enter: 'animated bounceInDown',
            exit: 'animated bounceOutUp'
        },
        newest_on_top: true,
        placement: {
            align: 'center'
        }
    });

    $('.closeTab').click(function (e) {
        e.preventDefault;
        var id = $(this).closest("tr").attr("id").replace("tab_", "");

        $.ajax({
            url: "/Project/CloseTab/" + id,
            type: 'GET',
            cache: false,
            success: function (result) {
                $("#tab_" + id).remove();

                //if menu is empty, hide
                if ($('.quoteItem').length == 0) {
                    $("#quotedropdown").hide();
                    $("#quotemenu").hide();
                }
            },
            error: function (ex) {
                $.notify({ message: "An error occurred closing this tab. Please retry." }, { type: 'danger' });
            }
        });
        return false;
    });

    //prevent backspace from paging back in browser on any non-input element
    $(function () {
        var rx = /INPUT|SELECT|TEXTAREA/i;

        $(document).bind("keydown keypress", function (e) {
            if (e.which == 8) { // 8 == backspace
                //console.log("1: " + !rx.test(e.target.tagName) + " 2: " + e.target.disabled + " 3: " + e.target.readOnly + " 4: " + $(e.target).is(':checkbox,:radio,:submit') + " target: " + e.target);
                if (!rx.test(e.target.tagName) || e.target.disabled || e.target.readOnly || $(e.target).is(':checkbox,:radio,:submit')) {
                    e.preventDefault();
                }
            }
        });
    });
});

/**
* detect IE
* returns version of IE or false, if browser is not Internet Explorer - this is accurate up through version 12 (edge)
*/
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

$(document).off('click', '#printResults').on('click', '#printResults', function (e) {
    var DocumentContainer = document.getElementById('printModal');
    var WindowObject = window.open("", "PrintWindow",
    "width=750,height=650,top=50,left=50,toolbars=no,scrollbars=yes,status=no,resizable=yes");
    WindowObject.document.writeln(DocumentContainer.innerHTML);
    WindowObject.document.writeln('<link rel="stylesheet" type="text/css" href="/Content/bootstrap.min.css">')
    WindowObject.document.close();
    setTimeout(function () {
        WindowObject.focus();
        WindowObject.print();
        WindowObject.close();
    }, 1000);
});