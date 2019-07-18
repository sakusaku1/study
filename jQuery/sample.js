function sum(arr) {
    let total = 0;
    for(let i = 0; i < arr.length; i++) {
        total += Number(arr[i].value);
    }
    return total
}

function sumValues(n, m) {
    
    const rowClass = "row-" + n;
    const colClass = "col-" + m;

    let rowValues = document.getElementsByClassName(rowClass);
    document.getElementById("sum-" + rowClass).innerText = sum(rowValues);

    let colValues = document.getElementsByClassName(colClass);
    document.getElementById("sum-" + colClass).innerText = sum(colValues);

   
    let totalValue = document.getElementsByClassName("sum-col");
    let total = 0;
    for (let i = 0; i < totalValue.length; i++) {
        total += Number(totalValue[i].innerText);
    }
    document.getElementById("total").innerText = total;
}
 

 
jQuery(function($){
 
 
  
    $('select').change(function() {
   
    var selectedValue = $("#select-1").val();
     
      $('p1').text(selectedValue);
    
    var selectedValue = $("#select-2").val();
     
      $('p2').text(selectedValue);
      
      var selectedValue = $("#select-3").val();
     
      $('p3').text(selectedValue);
      
      var selectedValue = $("#select-4").val();
     
      $('p4').text(selectedValue);
      
      var selectedValue = $("#select-5").val();
     
      $('p5').text(selectedValue);
      
      var selectedValue = $("#select-6").val();
     
      $('p6').text(selectedValue);
      
      
     });
    });
    
