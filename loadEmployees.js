 $(document).ready(function () {

    $.getJSON( "employees.json", function( data ) {
        var items = [];
        $.each( data.users, function( index, val ) {
            let designation='';
            val.designation == 1 ? 
                designation= 'Admin' : 
                val.designation == 2? 
                designation="HR" : 
            designation = "Accountant" ;
            $('#employeeData').append(`<tr><td class='rowNo'>${index+1}</td><td>${val.firstName}</td><td>${val.lastName}</td><td>${designation}</td><td><button class='remEmp'> Remove</button></td></tr>`)
        })
        
    })
  
 
})