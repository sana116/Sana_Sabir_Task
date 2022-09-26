$(".save").click(function(){
    let firstName = $("#firstName").val();
    let lastName = $("#lastName").val();
    let lastIndex = $('#employeeData tr:last').find('.rowNo').text().trim() ? $('#employeeData tr:last').find('.rowNo').text().trim() : 0 ;
    var message = "";
    let designation=$("#designation option:selected").text();
    
    if(firstName == "" || lastName == "" ||  $('#designation option:selected').val() == '0'){
        message = "Please Fill Out All Fields."
    }

    if(message != ""){
        alert(message);
        
    }
    else{
        $('#employeeData').append(`<tr><td class='rowNo'>${parseInt(lastIndex)+1}</td><td>${firstName}</td><td>${lastName}</td><td>${designation}</td><td><button class='remEmp'> Remove</button></td></tr>`)
        $("#firstName").val('');
        $("#lastName").val('');
        $("#designation").val(0);
        $('.modal').modal('hide');
    }
    

});