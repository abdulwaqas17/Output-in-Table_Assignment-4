// const studentsdata = []; // is may sab stds ka complete data aye ga

// let std1 = []; // is may srif std1 ka data aye ga | her std ka data alag h is Lien table same A hi nhe Sakta Std1[1] And Std2[1] are different!!!!!!

// function takeStudentsData() {

//     // get the value of input through id from html | html,input,id -> var
//     var name1 = document.getElementById('name').value;
//     var rollNum1 = parseInt(document.getElementById('rollNum').value);
//     // var html1 = document.getElementById('html').value;
//     // var css1 =document.getElementById('css').value ;

//     // convert string to Number 
//     var html1 = parseInt(document.getElementById('html').value);
//     var css1 = parseInt(document.getElementById('css').value) ;




//     // put the value into std1 array by push method | var -> array

//     std1.push(name1,rollNum1,html1,css1); //std1 ka complete data pust to std1 array
//     studentsdata.push(std1); // std1 array push to studentsdata array

//     console.log(std1);
//     // console.log(studentsdata);

//     document.getElementById('1:1').innerHTML = `01`
//     document.getElementById('name1').innerHTML = std1[0];
//     document.getElementById('rollnum1').innerHTML = std1[1];
//     document.getElementById('html1').innerHTML = std1[2];
//     document.getElementById('css1').innerHTML = std1[3];
//     document.getElementById('perc1').innerHTML =` ${((std1[2]+std1[3]) / 200 * 100).toFixed(2)} %` ;


//     // console.log((std1[2]+std1[3]) / 200 * 100,'%');

// }

// std1 ka [4,5] ko std2 m store krwa den gy, phir jo std2 ka [0,1] hoga Wo BASICALLY std1 ka [4,5] hi hoga 

// Q Na name,roll no.etc in sab k hi alag alag array bna len, aur phir sab ka 1 wala std1 ka hoga aur isy trhn 2,3 wala

// Q | aki hi inputs sy do different value ly kr do diferent array m store krwana Kia possible h ????



// create a arrays for different inputs 
let studentsSno = [1,2,3,4,5,6,7,8,9,10]
let studentsName = [];
let studentsRollNum = [];
let studentsHTML = [];
let studentsCSS = [];


// create a function for doing work 
function studentsData() {

    // store the value of different inputs into specific variable 
    var name = document.getElementById('name').value;
    var rollNum = document.getElementById('rollNum').value;

    // convert string to Number
    var html = parseInt(document.getElementById('html').value);
    var css = parseInt(document.getElementById('css').value);

    // push the value of variable into respective arrays
    studentsName.push(name);
    studentsRollNum.push(rollNum);
    studentsHTML.push(html);
    studentsCSS.push(css);



    if(studentsHTML[0]<=100 && studentsCSS[0] <= 100){
        
        var performance = (studentsHTML[0]+studentsCSS[0])/200 * 100;
        
    }else{

        performance = 'enter correct numbers'

    }


    console.log(performance);

    // print the 1st value of all array through indexNo.[] from Std1 
    document.getElementById('1:1').innerHTML = studentsSno[0];
    document.getElementById('name1').innerHTML = studentsName[0];
    document.getElementById('rollnum1').innerHTML = studentsRollNum[0];
    document.getElementById('html1').innerHTML = studentsHTML[0];
    document.getElementById('css1').innerHTML = studentsCSS[0];
    document.getElementById('perf1').innerHTML = `${performance}%`

}