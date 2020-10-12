'use strict'

/* VARIABLES */
let btn_monthly = document.getElementById('monthly');
let btn_anually = document.getElementById('annualy');
let card_monthly = document.getElementById('card-monthly');
let card_annualy = document.getElementById('card-annualy');

/* FUNCTION TOGGLE */
function toggle(){
    if(btn_anually.classList.contains('inactive')){
        replace_class(btn_anually, btn_monthly, null, 'inactive');
        replace_class(card_annualy, card_monthly, 'row', 'hidden');
    } else {
        replace_class(btn_monthly, btn_anually, null, 'inactive');
        replace_class(card_monthly, card_annualy, 'row', 'hidden');
    }
}
/* GENERAL FUNCTION TO REPLACE A CLASS */
function replace_class(element1, element2, classname1, classname2) {
    element1.classList.add(classname1);
    element1.classList.remove(classname2);
    element2.classList.add(classname2);
    element2.classList.remove(classname1);
}

