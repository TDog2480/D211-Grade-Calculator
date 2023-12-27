const grade = [];
const points = [];
const weight = [];
const multiplier = [];
const category = [];
categoryNum = 0;
percent = [];
var userInput = 0;
var categoryWeightChecker = true;
var newCategoryChecker = true;

function newCategory(){
    if(newCategoryChecker){
        var inputWeight = document.getElementById("weight");
        inputWeight.removeAttribute("hidden");
        var text = document.getElementById("text");
        text.removeAttribute("hidden");
        var enter = document.getElementById("enter");
        enter.removeAttribute("hidden");        
    }else{
        document.getElementById("p1").innerText = "Put in a grade first!";
    }
}

function weightChecker(){
    totalWeight = 0;
    for(let i = 1; i <= category[category.length - 1]; i++){
        categorySum = 0;
        assignmentSum = 0;
        for(let j = 0; j < category.length; j++){
            if(category[j] == i){
                categorySum += parseFloat(weight[j]);
                assignmentSum++;
            }
        }
        totalWeight += (categorySum/assignmentSum);
    }
    return totalWeight;
}

function userWeight(){
    userInput = document.getElementById('weight').value;
    totalWeight = parseFloat(weightChecker()) + parseFloat(userInput);
    if(!isNaN(userInput) && userInput > 0){
        if(totalWeight <= 100){
            categoryNum += 1;
            var inputWeight = document.getElementById("weight");
            inputWeight.setAttribute("hidden", "hidden");
            var text = document.getElementById("text");
            text.setAttribute("hidden", "hidden");
            var enter = document.getElementById("enter");
            enter.setAttribute("hidden", "hidden");
            document.getElementById("p1").innerText = "";
            categoryWeightChecker = true;
            newCategoryChecker = false;            
        }else{
            document.getElementById("p1").innerText = "Category weight can't add up to over 100!";
            categoryWeightChecker = false;    
        }
    }
    else{
        document.getElementById("p1").innerText = "Invalid category weight!";
        categoryWeightChecker = false;
    }
}

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
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    if(checker(document.getElementById('cellOne').value, document.getElementById('cellTwo').value, document.getElementById('cellThree').value)){
        if(userInput != 0){
            if(categoryWeightChecker){
                newCategoryChecker = true;
                document.getElementById("p1").innerText = "";
                cell1.innerText = document.getElementById('cellOne').value;
                cell2.innerText = document.getElementById('cellTwo').value;
                cell3.innerText = document.getElementById('cellThree').value;
                cell4.innerText = categoryNum;
                cell5.innerText = userInput;
                grade.push(document.getElementById('cellOne').value);
                points.push(document.getElementById('cellTwo').value);
                multiplier.push(document.getElementById('cellThree').value);
                category.push(categoryNum);
                weight.push(userInput);                
            }else{
                document.getElementById("p1").innerText = "";
                cell1.innerText = document.getElementById('cellOne').value;
                cell2.innerText = document.getElementById('cellTwo').value;
                cell3.innerText = document.getElementById('cellThree').value;
                cell4.innerText = category[category.length - 1];
                cell5.innerText = weight[weight.length - 1];
                grade.push(document.getElementById('cellOne').value);
                points.push(document.getElementById('cellTwo').value);
                multiplier.push(document.getElementById('cellThree').value);
                category.push(category[category.length - 1]);
                weight.push(weight[weight.length - 1]);    
            }
        }else{
            document.getElementById("myTable").deleteRow(table.rows.length - 1);
            document.getElementById("p1").innerText = "Add a category weight first!";   
        }
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
        category.pop();
        weight.pop();
        categoryNum = category[category.length - 1];
        userInput = weight[weight.length - 1];
    }
    if(categoryNum == undefined || userInput == undefined){
        userInput = 0;
        categoryNum = 0;
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
    
    var finalGrade = 0;
    var totalWeight = 0;
    
    for(let j = 1; j <= category[category.length - 1]; j++){
        var categorySum = 0;
        var assignmentSum = 0;
        var totalEarnedPoints = 0;
        var totalPoints = 0;        
        for(let k = 0; k < category.length; k++){
            if(category[k] == j){
                categorySum += parseFloat(weight[k]);
                assignmentSum++;
                totalEarnedPoints += percent[k]*points[k]*multiplier[k];
                totalPoints += points[k]*multiplier[k];
            }
        }
        totalWeight += (categorySum/assignmentSum);
        finalGrade += ((categorySum/assignmentSum)*(totalEarnedPoints/totalPoints));
        
    }
    
    finalGrade = Math.floor(10000*(finalGrade/totalWeight))/100;
    
    if(!isNaN(finalGrade)){
        document.getElementById("p1").innerText = "Your grade is " + finalGrade + "% ";        
    }else{
        document.getElementById("p1").innerText = "Put in a grade first!";
    }
}