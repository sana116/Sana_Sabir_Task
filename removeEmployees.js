$("#employeeData").on('click','.remEmp',function(){
    $(this).parent().parent().remove();
    reassignRow();
});

function reassignRow(){
var renum = 1;
$("#employeeData tr .rowNo").each(function() {
$(this).text(renum);
renum++;
});
}