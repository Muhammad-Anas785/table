let get_table=document.getElementById('get_table');

get_table.addEventListener('click',multiply);

function multiply(){
    let table_num=document.getElementById('table_num').value;
    let table_times=document.getElementById('table_times').value;
    document.getElementById('tab').innerHTML=table_num;
    var result="";
    
    for(let i=1;i<=table_times;i++){
        result=result+"<p>"+table_num+" x "+i+" = "+table_num*i+"</p>";

    }
    document.getElementById('table_screen').innerHTML=result;
}



































// var table_num=Number(document.getElementById('table_num').value);
// var table_times=Number(document.getElementById('table_times').value);

// var screen=document.getElementById('table_screen');
// let get_table=document.getElementById('get_table');

// get_table.addEventListener('click',multiply);

// function multiply(){
//     var table_num=Number(document.getElementById('table_num').value);
//     var table_times=Number(document.getElementById('table_times').value);
    
//     for(let i=1;i<=table_times;i++){
//         var result=result+"<p>"+table_num+" x "+i+" = "+table_num*i+"</p>"

//     }

//     screen.innerHTML=result;
// }
