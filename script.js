// This function clear all the values
function clearScreen() {
    var clear = document.getElementById("clear")
    document.getElementById("result").value = "0";
    document.getElementById("readorclear").innerText = 'MR';

    }
    
    // This function display values
    function display(value) {
        if(document.getElementById("result").value == 0){
    document.getElementById("result").value = value;
        }else{
    document.getElementById("result").value += value;

        }
    }
// this function used to calculate the values
    function calculate() {
    var x = document.getElementById("result").value;    
    var y = eval(x); 
    document.getElementById("result").value = y;
    }
    //This function check if press only number otherwise show alert box
    window.addEventListener('keypress',(event)=>{
        operator = ['-','+','/','*','%']
        key = event.key
        code = event.code
        if (code.includes('Digit') || operator.includes(key) ){
            parent = document.getElementById("result")
            parent.innerText = parent.innerText + key
            console.log(event)
    
        }
        else{
           
            alert("Only numbers are allowed")
        }
        
    })
      function equal(){
        equ = document.getElementById("equal").value
      }

      function memoryAdd(){
        var x = document.getElementById("result").value;    
        var memoryVal =localStorage.getItem('memory');
        var sum = parseInt(memoryVal) + parseInt(x);
        localStorage.setItem('memory',sum)
      }
      function memorySub(){
        var x = document.getElementById("result").value;    
        var memoryVal =localStorage.getItem('memory');
        var diff = parseInt(memoryVal) - parseInt(x);
        localStorage.setItem('memory',diff)
      }

      function memoryReadOrClear(){
        var currentVal = document.getElementById('readorclear').innerText;
        if(currentVal == 'MC'){
            document.getElementById('readorclear').innerText = 'MR';
            localStorage.setItem('memory',0)
        }else{
            document.getElementById('readorclear').innerText = 'MC';
            if(document.getElementById("result").value == 0){
            document.getElementById("result").value =localStorage.getItem('memory');
                    }else{
            document.getElementById("result").value +=localStorage.getItem('memory');
            
                    }


        }
      }
      function OffOnscreen(){
        var on = document.getElementById("offoron").innerText;
        
        if(on=='OFF'){
            document.getElementById("result").value = "";
            document.getElementById('offoron').innerText="ON";
        }else{
            document.getElementById("result").value = "0";
            document.getElementById('offoron').innerText="OFF";
        }
    }