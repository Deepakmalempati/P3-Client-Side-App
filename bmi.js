const mul = (x, y) => { return x * y}




function updateBMI () {
  document.querySelector('#answer').innerHTML = ''
  if (document.querySelector('#height').checkValidity() && document.querySelector('#weight').checkValidity()) {
    
    const i = parseInt(document.querySelector('#height').value)
    const j = parseInt(document.querySelector('#weight').value)
    
    const ans = ` Your BMI is:  ${mul(i, j)}.`
    document.querySelector('#answer').innerHTML = ans
    }
    }

    function loadDoc() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("jokespace").innerHTML =
          this.responseText;
        }
      };
      xhttp.open("GET", "ajax.txt", true);
      xhttp.send();
    }

    

    document.addEventListener('focusout', event => {
      if (event.target && event.target.id === 'height' ||
        event.target && event.target.id === 'weight') {
        validate(event)
      }
    });

    

    document.addEventListener('click', event => {
      if (event.target && event.target.id === 'factButton') { updateWithJoke(event) }
    });
    



    function add(x, y) { return x * y }
window.addEventListener('load', (event) => {
if (localStorage.getItem('input1')) {
      document.querySelector('#height').value = parseInt(localStorage.input1)
      console.log(`  Stored height = ${localStorage.input1}`)
    }
    if (localStorage.getItem('input2')) {
      document.querySelector('#weight').value = parseInt(localStorage.input2)
      console.log(`  Stored weight = ${localStorage.input2}`)
    }
    
  })

  document.querySelector('#bmiButton').addEventListener('click', () => {
    const origCount = parseInt(localStorage.getItem('countOfClicks')) || 0
    const i = parseInt(document.querySelector('#height').value)
   const j = parseInt(document.querySelector('#weight').value)
    const count = origCount + 1
    const ans = `    This has been run  ${count}  times.`
      document.querySelector('#storagecount').innerHTML = ans
      localStorage.setItem('countOfClicks', count)
    localStorage.setItem('input1', i)
    localStorage.setItem('input2', j)
    
  })



  







  