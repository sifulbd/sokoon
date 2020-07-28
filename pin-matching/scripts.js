  //OTP number Generate                      
  function generateOTP(){
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++){
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }

  const number = document.getElementById('OTP');
  number.addEventListener('click', function(){                          
    const generatePinDisplay = document.getElementById('pin-display');
    const pinDisplayNumber = parseInt(generatePinDisplay);
    //document.getElementById('pin-display').value=generateOTP();
    generatePinDisplay.value = generateOTP();                       
  })

  // submit button
  // adding event listener to display pad

  let numberBtn = document.getElementsByClassName("number");
    for (let i = 0; i < numberBtn.length; i++) {
    const element = numberBtn[i];
    element.addEventListener("click", function(){
      let inputPinDisplay = document.getElementsByTagName("input")[1];
      let numberTyped = this.innerText;
      inputPinDisplay.value += numberTyped;
    });
  }

  // check input pin and generate pin matching or not matching
  document.getElementById('submit-Button').addEventListener('click', function(){
    let inputPinDisplay = document.getElementsByTagName("input")[1];
    let generatePinDisplay = document.getElementById('pin-display');

    if (inputPinDisplay.value == generatePinDisplay.value){
      const activeDisplay = document.getElementById('match-notify');
      activeDisplay.style.display = "block";
      const didNotMatch = document.getElementById('notMatch-notify');
      didNotMatch.style.display = "none";
    }

    if (inputPinDisplay.value != generatePinDisplay.value){
      const activeDisplay = document.getElementById('match-notify');
      activeDisplay.style.display = "none";
      const didNotMatch = document.getElementById('notMatch-notify');
      didNotMatch.style.display = "block";
 
      // action try to left  (assignment-extra part)
      const option = document.getElementById('option').innerText;
      const currentOption = parseFloat(option);

      const currentOptionLeft = currentOption - 1;
      document.getElementById('option').innerText = currentOptionLeft;
      if(currentOptionLeft > 0){
        document.getElementById("submit-Button").disabled = false;
      }
      else {              
        document.getElementById("submit-Button").disabled = true;              
        document.getElementById('after-disable').innerText = 'Disable';
        document.getElementById('submit-Button').style.backgroundColor = 'red';
      }          
    }    
  })

// backspace button 
document.getElementById('backSpace').addEventListener('click', function(){
  const back = document.getElementById('display-input').value.slice( 0 , -1);
  document.getElementById('display-input').value = back;
})

// clear all Button
document.getElementById('clearAll').addEventListener('click', function(){
  const clearAll = document.getElementById('display-input').value = null;
  document.getElementById('display-input').value = clearAll;
})