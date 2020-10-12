'use strict'

let btn_monthly = document.getElementById('monthly');
let btn_anually = document.getElementById('annualy');

function toggle(){
    if(btn_anually.classList.contains('inactive')){
        btn_anually.classList.remove('inactive');
        btn_monthly.classList.add('inactive');
    } else {
        btn_monthly.classList.remove('inactive');
        btn_anually.classList.add('inactive');
    }
}



