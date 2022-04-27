//Generate salutations
//t - top, l - left, c - colour, s - font-size, z - z-index, id - class
function sals(t, l, c, s, z, id){
    var sal = document.getElementsByClassName(id);
    sal[0].style.top = t;
    sal[0].style.left = l;
    sal[0].style.color = c;
    sal[0].style.fontSize = s;
    sal[0].style.zindex = z;
}
sals('5%','50%', '#1b95cd','250px','20','GB');
sals('1%', '10%', 'red', '150px', '19', "ES");
sals('15%', '30%', 'blue', '100px', '18', "FR");
sals('35%', '60%', 'green', '170px', '17', "IT");
sals('54%', '20%', 'orange', '170px', '16', "GE");
sals('54%', '35%', 'yellow', '100px', '15', "JP");
sals('10%', '55%', 'grey', '80px', '14', "RU");
sals('27%', '21%', 'lightgrey', '100px', '13', "KO");
sals('37%', '31%', '#333', '65px', '12', "PO");
sals('67%', '51%', 'pink', '125px', '11', "HI");
sals('47%', '11%', 'lightblue', '115px', '10', "HE");
sals('27%', '31%', 'lightgreen', '185px', '9', "SW");
