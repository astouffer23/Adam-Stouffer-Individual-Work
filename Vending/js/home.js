var moneyIn = parseInt($('#enterCash').val().substring(1));
$('document').ready(function() {
grabProducts();
insertChange();
selectItem();
buyItem();
returnChange();
});

function grabProducts(){
var i = 1;
$.ajax({
    type: 'GET',
    url: 'http://localhost:8080/items',
    success: function(data){
            $.each(data,function(index,product){
            var name = product.name;
            var price = parseFloat(product.price).toFixed(2);
            var quantity = product.quantity;
            var id = product.id;
            $('.centerInfo'+i).text('$'+price);
            $('.title'+i).text(name);
            $('.quantity'+i).text(quantity);
            $('.corner'+i).text(id);
            i++;
        })
    },
    error: function(){
        $('#errorMessages').append($('<ul>').attr({class: 'list-group-item list-group-item-danger'}).text('Error calling web service.  Please try again later.'));
    }
});
}
function insertChange() {
    
    $('#dollarButton').click(function () {
        $('#messageInfo').val('');
        moneyIn += 1;
        $('#enterCash').val('$' + parseFloat(moneyIn).toFixed(2));
    });
                             
    $('#quarterButton').click(function () {
        $('#messageInfo').val('');
        moneyIn += 0.25;
        $('#enterCash').val('$' + parseFloat(moneyIn).toFixed(2));
    });
  
    $('#dimeButton').click(function () {
        $('#messageInfo').val('');
        moneyIn += 0.1;
        $('#enterCash').val('$' + parseFloat(moneyIn).toFixed(2));
    });
                             
    $('#nickelButton').click(function () {
        $('#messageInfo').val('');
        moneyIn += 0.05;
        $('#enterCash').val('$' + parseFloat(moneyIn).toFixed(2));
    });
 }
 function selectItem(){
     $('.singleButton').click(function(){
         $('#itemInfoID').val($(this).find('#cornerNumber').text());
         $('#itemInfoField').val($(this).find('.title').text());
     })
 }
 function buyItem(){
     $('#amountEntered').click(function(){
        var money = $('#enterCash').val().substring(1);
        var id = $('#itemInfoID').val();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/money/'+money+'/item/'+id,
            success: function(result){
                $('#errorMessages').empty();
                $('#errorMessages').append($('<ul>').attr({class: 'list-group-item list-group-item-success'}).text('Thank You!!!'));
                $('#changeOut').val('')
                var quarters = result.quarters;
                var dimes = result.dimes;
                var nickels = result.nickels;
                var pennies = result.pennies;
                var quarterInfo = '';
                var dimeInfo = '';
                var nickelInfo = '';
                var pennyInfo = '';
                if (quarters==0&&dimes==0&&nickels==0&&pennies==0){
                    $('#changeOut').val('No Change For You!').css('text-shadow','0px 5px 10px green');
                    return;
                }
                if(quarters>= 1){
                    var quarterInfo = 'Quarters: '+quarters+' ';
                }
                if(dimes >=1){
                    var dimeInfo = 'Dimes: '+dimes+' ';
                }
                if(nickels >=1){
                    var nickelInfo = 'Nickels: '+nickels+' ';
                }
                if(pennies >=1){
                    var pennyInfo = 'Pennies: ' +pennies+' ';
                }
                $('#changeOut').val(quarterInfo+dimeInfo+nickelInfo+pennyInfo).css('font-size','12px')
            },
            error: function(result){
                $('#errorMessages').empty();
                var message = result.responseText.substring(12).slice(0,-2);
                $('#errorMessages').append($('<ul>').attr({class: 'list-group-item list-group-item-danger'}).text(message));
            }
        })
     })
 }
 function returnChange(){
     $('#changeButton').click(function(){
         $('#enterCash').val('');
         moneyIn = 0;
         $('#itemInfoField').val('');
         $('#changeOut').val('');
         $('#errorMessages').empty();
     })
 }
 