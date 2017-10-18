let i = 0, b = 0;
let a = [0];
let btn1 = document.getElementsByTagName("button")[0];

btn1.addEventListener('click', function( event ){
    input_string = document.getElementsByTagName("input")[0].value;
    a = input_string.split(","); 

    for(i=0; i<a.length; i++){
        a[i] = parseInt(a[i]);
    }

    document.getElementsByTagName("p")[0].innerHTML = "Unsorted = " + a;

    function sortNumber(x,y){
        return x - y;
    }

    a.sort(sortNumber);
    a.join(",");
    document.getElementsByTagName("p")[1].innerText = "Sorted = " + a;

    for(i=0; i<a.length; i++){
        if(a[i+1] !== a[i]+1){
            b=a[i]+1;
            document.getElementsByTagName("p")[2].innerText = "Missing number = " + b;
            break;
        }
    }

});