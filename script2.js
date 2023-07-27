    let getData = JSON.parse(sessionStorage.getItem('myEmail', 'myName'));
    console.log(getData)

    const name = sessionStorage.getItem('myName');
    const email = sessionStorage.getItem('myEmail');
    const handphone = sessionStorage.getItem('myHandphone');
    const semester = sessionStorage.getItem('mySemester');
    const IPK = sessionStorage.getItem('myIPK');
    const beasiswa = sessionStorage.getItem('myBeasiswa');
    const file = sessionStorage.getItem('myFile');


     const resultname = document.getElementById('name-result').innerHTML = JSON.parse(name);
    document.getElementById('email-result').innerHTML = JSON.parse(email);
    document.getElementById('handphone-result').innerHTML = JSON.parse(handphone);
    document.getElementById('semester-result').innerHTML = JSON.parse(semester);
    document.getElementById('ipk-result').innerHTML = JSON.parse(IPK);
    document.getElementById('beasiswa-result').innerHTML = JSON.parse(beasiswa);
    document.getElementById('file-result').innerHTML = JSON.parse(file);
    document.querySelector('name-result');

    const btnbatal = document.getElementById('btnkembali');
    btnbatal.addEventListener('click', () => {
        window.location.href = 'index.html';
    })

    const btnverif = document.getElementById('btnverif');
    btnverif.addEventListener('click', () => {
        alert('Data anda telah sesuai');
        window.location.href = 'index.html';
    })
    
