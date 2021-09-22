const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputMessage = document.getElementById('message');
var timestamp = new Date().toISOString().split('T')[0]


const postData = (url, data) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (e) {
        console.log(`Error: ${e}`);
      });
  };

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let data = {
    name: inputName.value,
    message: inputMessage.value,
    timestamp: new Date().toISOString().split('T')[0],
  };

  console.log(data);
  postData(
    'https://sheet.best/api/sheets/280c3557-6f7e-4055-9d3b-22b571749774',data
  );
  
  inputName.value = '';
  inputMessage.value = '';
  alert('Success');
});


function getData(){
  fetch("https://api.apispreadsheets.com/data/18509/").then(res=>{
    if (res.status === 200){
      // SUCCESS
      res.json().then(data=>{
        const yourData = data
      }).catch(err => console.log(err))
    }
    else{
      // ERROR
    }
  })
}


