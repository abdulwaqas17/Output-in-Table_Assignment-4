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
var studentsSno = [1,2,3,4,5,6,7,8,9,10]
var studentsName = [];
var studentsRollNum = [];
var studentsHTML = [];
var studentsCSS = [];
var studentsPerf = []


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


    // ---------- FOR STD1 ----------- [0]

    // (Std1perf) if else condition to prevent number > 100 | create 5th variable for performance | Std1
    if(studentsHTML[0]<=100 && studentsCSS[0] <= 100){ // dono array kay 0 index walay pr kam hoga bs, Islien agay Array chaly Ga hi nhe.
        
        var Std1perf = ((studentsHTML[0]+studentsCSS[0])/200 * 100).toFixed(2);
        
    }else{

        Std1perf = 'enter correct numbers'

    }


    // console.log(Std1perf);

    // push the perf variable for Std1  
    studentsPerf.push(Std1perf);

    // print the 1st value of all array through indexNo.[0] fOR Std1 
    document.getElementById('1:1').innerHTML = studentsSno[0];
    document.getElementById('name1').innerHTML = studentsName[0];
    document.getElementById('rollnum1').innerHTML = studentsRollNum[0];
    document.getElementById('html1').innerHTML = studentsHTML[0];
    document.getElementById('css1').innerHTML = studentsCSS[0];
    // document.getElementById('perf1').innerHTML = `${Std1perf}%`; // both right 
    document.getElementById('perf1').innerHTML = `${studentsPerf[0]}%`;




    // ----------- FOR STD2 ----------- [1] 

    // If condition for Std2 | to avoid user write Num > 100 
    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
    if(studentsHTML[1] <= 100 && studentsCSS[1] <= 100) {

        var Std2perf = ((studentsHTML[1] + studentsCSS[1]) / 200 * 100).toFixed(2);

    } else {

        Std2perf = 'enter correct numbers'

    };
    }


        
    // push the perf of Std2 into studentsPerf    // statement, Means Ager undefined Yani Kali Nhe Ho (Kali Nhe Ho Yani Kuch Ho, Kuch Store Ho to ye Chaly,[undefined Nhe Ho = Kuch Store h])
    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){//undefined Nahi honi Chahie,Lekin Undefined To h,Is lien Ye Nhe ChalyGa
                                                                 
        studentsPerf.splice(1,0,Std2perf);
    }
    // studentsPerf.splice(1,0,Std2perf);



    // print the all values for Std2 in 2nd row of table | get td through ID and insert value through index number | [1] 

    if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){
        document.getElementById('2:1').innerHTML = studentsSno[1];
        document.getElementById('name2').innerHTML = studentsName[1];
        document.getElementById('rollnum2').innerHTML = studentsRollNum[1];
        document.getElementById('html2').innerHTML = studentsHTML[1];
        document.getElementById('css2').innerHTML = studentsCSS[1];
        // document.getElementById('perf2').innerHTML = `${Std2perf}%`; // both right
        document.getElementById('perf2').innerHTML = `${studentsPerf[1]}%`;
    }
    
        
    // console.log(studentsHTML);
    // console.log(studentsCSS);
    // console.log(studentsPerf);
    // console.log(Std1perf);
    // console.log(Std2perf);

    
    // ----------- FOR STD3 ----------- [2] 

    // If condition for Std3 | to avoid user write Num > 100 
    if(studentsHTML[2] !== undefined && studentsCSS[2] !== undefined){ // jab html aur css k index [2] undefined nhe hongy, Jab ye perform ho
        if(studentsHTML[2] <= 100 && studentsCSS[2] <= 100) {
    
            var Std3perf = ((studentsHTML[2] + studentsCSS[2]) / 200 * 100).toFixed(2);
    
        } else {
    
            Std3perf = 'enter correct numbers'
    
        };
        }
    
    
            
        // push the perf of Std3 into studentsPerf
        if(studentsHTML[1] !== undefined && studentsCSS[1] !== undefined){//undefined Nahi honi Chahie,Lekin [2] pr to Undefined h, Is lien Ye Nhe ChalyGa
                                                                     
            studentsPerf.splice(2,0,Std3perf);
        }
        // studentsPerf.splice(2,0,Std3perf); // work yahn bhi kray ga, But start m bhi Show hon gi undefined Values
    
    
    
        // print the all values for Std3 in 3rd row of table | get td through ID and insert value through index number | [2] 
        if(studentsHTML[2] !== undefined && studentsCSS[2] !== undefined){
            document.getElementById('3:1').innerHTML = studentsSno[2];
            document.getElementById('name3').innerHTML = studentsName[2];
            document.getElementById('rollnum3').innerHTML = studentsRollNum[2];
            document.getElementById('html3').innerHTML = studentsHTML[2];
            document.getElementById('css3').innerHTML = studentsCSS[2];
            // document.getElementById('perf2').innerHTML = `${Std2perf}%`; // both right, Ye direct if else La rha h Value
            document.getElementById('perf3').innerHTML = `${studentsPerf[2]}%`; // ye perf k arrays sy La rha h Value
        }





        // --------- FOR STD4 ---------[3]

        // if statement , TA K JAB [3] PR JAB KUCH STORE HO TAB HI YE WORK KRY 
        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){

            // if statement to avoid > 100 
            if(studentsHTML[3] <= 100 && studentsCSS[3] <= 100){

                var Std4perf = ((studentsHTML[3] + studentsCSS[3]) / 200 * 100).toFixed(2);

            } else{

                Std4perf = 'enter correct numbers';

            }
        }

        // PUSH THE PERF OF STD4 TO STDPREF ARRAY 

        // IF CSSLayerStatementRule, JAB ADD HO KUCH TAB HI PUSH, HO WARNA [3] PR UNDEFINED STORE HO GYE GainNode, AUR AGAY PHIR PROBLEM HOGI
        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){

            studentsPerf.splice(3,0,Std4perf); // USE SPLICE, DESIRE POSITION PR RAKH WANY K LIEN

        }
        

        // print the all values for Std4 in 4TH row of table | get td through ID and insert value through index number | [3] 
        if(studentsHTML[3] !== undefined && studentsCSS[3] !== undefined){
            document.getElementById('4:1').innerHTML = studentsSno[3];
            document.getElementById('name4').innerHTML = studentsName[3];
            document.getElementById('rollnum4').innerHTML = studentsRollNum[3];
            document.getElementById('html4').innerHTML = studentsHTML[3];
            document.getElementById('css4').innerHTML = studentsCSS[3];
            // document.getElementById('perf4').innerHTML = `${Std4perf}%`; // both right, Ye direct if else La rha h Value
            document.getElementById('perf4').innerHTML = `${studentsPerf[3]}%`; // ye perf k arrays sy La rha h Value
        }
    



        // --------- FOR STD5 ---------[4]

        // if statement , TA K JAB [4] PR JAB KUCH STORE HO TAB HI YE WORK KRY 
        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){

            // if statement to avoid > 100 
            if(studentsHTML[4] <= 100 && studentsCSS[4] <= 100){

                var Std5perf = ((studentsHTML[4] + studentsCSS[4]) / 200 * 100).toFixed(2);

            } else{

                Std5perf = 'enter correct numbers';

            }
        }

        // PUSH THE PERF OF STD4 TO STDPREF ARRAY 

        // IF CSSLayerStatementRule, JAB ADD HO KUCH TAB HI PUSH, HO WARNA [3] PR UNDEFINED STORE HO GYE GainNode, AUR AGAY PHIR PROBLEM HOGI
        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){

            studentsPerf.splice(4,0,Std5perf); 

        }
        

        // print the all values for Std4 in 4TH row of table | get td through ID and insert value through index number | [3] 
        if(studentsHTML[4] !== undefined && studentsCSS[4] !== undefined){
            document.getElementById('5:1').innerHTML = studentsSno[4];
            document.getElementById('name5').innerHTML = studentsName[4];
            document.getElementById('rollnum5').innerHTML = studentsRollNum[4];
            document.getElementById('html5').innerHTML = studentsHTML[4];
            document.getElementById('css5').innerHTML = studentsCSS[4];
            // document.getElementById('perf5').innerHTML = `${Std4perf}%`; // both right, Ye direct if else La rha h Value
            document.getElementById('perf5').innerHTML = `${studentsPerf[4]}%`; // ye perf k arrays sy La rha h Value
        }
    


}


// FUNCTION FOR REMOVE ALL THE INPUTS 
function removeAll(){

    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];

    document.getElementById('1:1').innerHTML= studentsSno;
    document.getElementById('name1').innerHTML = studentsName;
    document.getElementById('rollnum1').innerHTML = studentsRollNum;
    document.getElementById('html1').innerHTML = studentsHTML;
    document.getElementById('css1').innerHTML = studentsCSS;
    document.getElementById('perf1').innerHTML = studentsPerf;


    document.getElementById('2:1').innerHTML = studentsSno;
    document.getElementById('name2').innerHTML = studentsName;
    document.getElementById('rollnum2').innerHTML = studentsRollNum;
    document.getElementById('html2').innerHTML = studentsHTML;
    document.getElementById('css2').innerHTML = studentsCSS;
    document.getElementById('perf2').innerHTML = studentsPerf;

    document.getElementById('3:1').innerHTML = studentsSno;
    document.getElementById('name3').innerHTML = studentsName;
    document.getElementById('rollnum3').innerHTML = studentsRollNum;
    document.getElementById('html3').innerHTML = studentsHTML;
    document.getElementById('css3').innerHTML = studentsCSS;
    document.getElementById('perf3').innerHTML = studentsPerf;

    document.getElementById('4:1').innerHTML = studentsSno;
    document.getElementById('name4').innerHTML = studentsName;
    document.getElementById('rollnum4').innerHTML = studentsRollNum;
    document.getElementById('html4').innerHTML = studentsHTML;
    document.getElementById('css4').innerHTML = studentsCSS;
    document.getElementById('perf4').innerHTML = studentsPerf;


    document.getElementById('5:1').innerHTML = studentsSno;
    document.getElementById('name5').innerHTML = studentsName;
    document.getElementById('rollnum5').innerHTML = studentsRollNum;
    document.getElementById('html5').innerHTML = studentsHTML;
    document.getElementById('css5').innerHTML = studentsCSS;
    document.getElementById('perf5').innerHTML = studentsPerf;

}


// function for remove First Student Data 
function removeFirst(){

    
    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];

    document.getElementById('1:1').innerHTML= studentsSno;
    document.getElementById('name1').innerHTML = studentsName;
    document.getElementById('rollnum1').innerHTML = studentsRollNum;
    document.getElementById('html1').innerHTML = studentsHTML;
    document.getElementById('css1').innerHTML = studentsCSS;
    document.getElementById('perf1').innerHTML = studentsPerf;

}


// function for remove Last Student Data 
function removeLast(){


    studentsSno = [];
    studentsName = [];
    studentsRollNum = [];
    studentsHTML = [];
    studentsCSS = [];
    studentsPerf = [];



    
    document.getElementById('5:1').innerHTML = studentsSno;
    document.getElementById('name5').innerHTML = studentsName;
    document.getElementById('rollnum5').innerHTML = studentsRollNum;
    document.getElementById('html5').innerHTML = studentsHTML;
    document.getElementById('css5').innerHTML = studentsCSS;
    document.getElementById('perf5').innerHTML = studentsPerf;
}


// var a = 1;
// var b = 1;

// if(b === a){

//   var x = 12; // variable declare ho chuka h Ya nhe ???

// }

// console.log(x);