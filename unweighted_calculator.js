const grade = [];
const points = [];
const multiplier = [];
percent = [];

function checker(grade, points, multiplier){
    if(grade.toLowerCase() === 'a+' || grade.toLowerCase() === 'a' || grade.toLowerCase() === 'a-' || grade.toLowerCase() === 'b+' || grade.toLowerCase() === 'b' || grade.toLowerCase() === 'b-' || grade.toLowerCase() === 'c+' || grade.toLowerCase() === 'c' || grade.toLowerCase() === 'c-' || grade.toLowerCase() === 'd+' || grade.toLowerCase() === 'd' || grade.toLowerCase() === 'd-' || grade.toLowerCase() === 'f+' || grade.toLowerCase() === 'f' || grade.toLowerCase() === 'f-' || grade.toLowerCase() === 'nc' || grade.toLowerCase() === 'incomplete' || grade.toLowerCase() === 'complete'){
        if(!isNaN(points) && points > 0){
            if(!isNaN(multiplier) && multiplier > 0){
                return true;
            }else{
                document.getElementById("p1").innerText = "Invalid assignment multiplier!";   
                return false;                
            }  
        }else{
            document.getElementById("p1").innerText = "Invalid assignment points!";   
            return false;            
        }
    }else{
        if(grade === ""){
            document.getElementById("p1").innerText = "Put in a grade first!";
            return false;
        }else{
            document.getElementById("p1").innerText = "Invalid assignment grade!";   
            return false;            
        }
    }
}

function myFunction(){
    var table = document.getElementById("myTable");
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    if(checker(document.getElementById('cellOne').value, document.getElementById('cellTwo').value, document.getElementById('cellThree').value)){
        cell1.innerText = document.getElementById('cellOne').value;
        cell2.innerText = document.getElementById('cellTwo').value;
        cell3.innerText = document.getElementById('cellThree').value;
        grade.push(document.getElementById('cellOne').value);
        points.push(document.getElementById('cellTwo').value);
        multiplier.push(document.getElementById('cellThree').value);
    } else{
        document.getElementById("myTable").deleteRow(table.rows.length - 1);
    }
  
}

function deleteRow(){
    var table = document.getElementById("myTable");
    if(table.rows.length != 1){
        document.getElementById("myTable").deleteRow(table.rows.length - 1);
        grade.pop();
        points.pop();
        multiplier.pop();
    }
}


function calculate(){
    percent = [];
    for(let i = 0; i < grade.length; i++){
       if(grade[i].toLowerCase() === 'a+' || grade[i].toLowerCase() === 'complete'){
           percent.push(1);
       }
       if(grade[i].toLowerCase() === 'a'){
           percent.push(0.9);
       }
       if(grade[i].toLowerCase() === 'a-'){
           percent.push(0.825);
       }
       if(grade[i].toLowerCase() === 'b+'){
           percent.push(0.775);
       }
       if(grade[i].toLowerCase() === 'b'){
           percent.push(0.7);
       }
       if(grade[i].toLowerCase() === 'b-'){
           percent.push(0.625);
       }
       if(grade[i].toLowerCase() === 'c+'){
           percent.push(0.575);
       }
       if(grade[i].toLowerCase() === 'c'){
           percent.push(0.5);
       }
       if(grade[i].toLowerCase() === 'c-'){
           percent.push(0.425);
       }
       if(grade[i].toLowerCase() === 'd+'){
           percent.push(0.375);
       }
       if(grade[i].toLowerCase() === 'd'){
           percent.push(0.3);
       }       
       if(grade[i].toLowerCase() === 'd-'){
           percent.push(0.225);
       }
       if(grade[i].toLowerCase() === 'f+'){
           percent.push(0.175);
       }
       if(grade[i].toLowerCase() === 'f'){
           percent.push(0.1);
       }
       if(grade[i].toLowerCase() === 'f-' || grade[i].toLowerCase() === 'nc' || grade[i].toLowerCase() === 'incomplete'){
           percent.push(0);
       }
    }

    var totalEarnedPoints = 0;
    var totalPoints = 0;
    
    for(let i = 0; i < grade.length; i++){
        totalPoints += points[i]*multiplier[i];
        totalEarnedPoints += points[i]*percent[i]*multiplier[i];
    }
    
    finalGrade = Math.floor(10000*(totalEarnedPoints/totalPoints))/100;
    
    if(!isNaN(finalGrade)){
        document.getElementById("p1").innerText = "Your grade is " + finalGrade + "% ";        
    }else{
        document.getElementById("p1").innerText = "Put in a grade first!";
    }
}