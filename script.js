//Set input only number  0-9
function validate(evt) {
    var theEvent = evt || window.event;
  
    // Handle paste
    if (theEvent.type === 'paste') {
        key = event.clipboardData.getData('text/plain');
    } else {
    // Handle key press
        var key = theEvent.keyCode || theEvent.which;
        key = String.fromCharCode(key);
    }
    var regex = /[0-9]|\./;
    if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
    }
  }

  //form
  const getName = document.getElementById('name');
  const getEmail = document.getElementById('email');
  const getHandphone = document.getElementById('handphone')
  const getSemester = document.getElementById('semester');
  const getIPK = document.getElementById('ipk');
  const getBeasiswa = document.getElementById('beasiswa');
  const getFile = document.getElementById('file');
  const form = document.getElementById('form');

  function setIPKValue(){
    const submitprompt = prompt('Masukan Value IPK : ')
    if (submitprompt != null){
      getIPK.value = submitprompt;
    }
  }

  setIPKValue();

  if (getIPK.value >= 3){
    form.addEventListener('submit', function(e){
      e.preventDefault();

      // const fd = new FormData(form);
      // const obj = Object.fromEntries(fd);

      // const json = JSON.stringify(obj);
      // sessionStorage.setItem('form', json);

      sessionStorage.setItem('myName', JSON.stringify(getName.value))
      sessionStorage.setItem('myEmail', JSON.stringify(getEmail.value))
      sessionStorage.setItem('myHandphone', JSON.stringify(getHandphone.value))
      sessionStorage.setItem('mySemester', JSON.stringify(getSemester.value))
      sessionStorage.setItem('myIPK', JSON.stringify(getIPK.value))
      sessionStorage.setItem('myBeasiswa', JSON.stringify(getBeasiswa.value))
      sessionStorage.setItem('myFile', JSON.stringify(getFile.files[0].name))

      // const params = (new URL(document.location)).searchParams;
      // const name = params.get('name');
      // const email = params.get('email');
      
      window.location.href = "nextpage.html";
      
    })
} else {
  const btndaftar = document.getElementById('btndaftar');
  btndaftar.addEventListener('click', () => {
    if(getIPK.value < 3){
      alert('Mohon maaf, IPK Minimum yang dibutuhkan adalah senial 3');
      btndaftar.disabled = true;
    }
  })

  function btnBatal(){
    const btnbatal = document.getElementById('btnbatal');
    btnbatal.addEventListener('click', () => {
      window.location.href = 'https://www.google.com';
    })
  }
  
  btnBatal();
}

// const outputfile = document.querySelector('img');
// const inputfile = document.querySelector('input');

// inputfile.addEventListener('change', () => {
//   imageoutput.src = URL.createObjectURL(inputfile.files[0]);
// })


  

  