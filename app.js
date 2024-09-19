const studentsdata = []; // is may sab stds ka complete data aye ga

let std1 = []; // is may srif std1 ka data aye ga | her std ka data alag h is Lien table same A hi nhe Sakta Std1[1] And Std2[1] are different!!!!!!

function takeStudentsData() {

    // get the value of input through id from html | html,input,id -> var
    var name1 = document.getElementById('name').value;
    var rollNum1 = parseInt(document.getElementById('rollNum').value);
    // var html1 = document.getElementById('html').value;
    // var css1 =document.getElementById('css').value ;

    // convert string to Number 
    var html1 = parseInt(document.getElementById('html').value);
    var css1 = parseInt(document.getElementById('css').value) ;




    // put the value into std1 array by push method | var -> array

    std1.push(name1,rollNum1,html1,css1); //std1 ka complete data pust to std1 array
    studentsdata.push(std1); // std1 array push to studentsdata array

    console.log(std1);
    // console.log(studentsdata);

    document.getElementById('1:1').innerHTML = `01`
    document.getElementById('name1').innerHTML = std1[0];
    document.getElementById('rollnum1').innerHTML = std1[1];
    document.getElementById('html1').innerHTML = std1[2];
    document.getElementById('css1').innerHTML = std1[3];
    document.getElementById('perc1').innerHTML =` ${((std1[2]+std1[3]) / 200 * 100).toFixed(2)} %` ;


    // console.log((std1[2]+std1[3]) / 200 * 100,'%');

}