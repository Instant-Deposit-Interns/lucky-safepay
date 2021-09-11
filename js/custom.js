
submitForms = function(){
    document.getElementById("form1").submit();
    document.getElementById("form2").submit();
    document.getElementById("form3").submit();

}

checkit = function(){
    var check = document.getElementById("reference"),
        phone = document.getElementById("phone")

        disp = function(){
            phone.style.transition = "";
            phone.style.display = "block";
        }

        phone.style.display = (check.checked ? disp() : "none");

}