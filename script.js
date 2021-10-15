const form = document.getElementById('form');
// const inputName = document.getElementById('name');
const inputMessage = document.getElementById('message');
var d = new Date().getDate();
var m = new Date().getMonth();
var y = new Date().getFullYear();
var timestamp = d + "/" + m + "/" + y


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
    // name: inputName.value,
    message: inputMessage.value,
    timestamp: timestamp,
  };

  console.log(data);
  postData(
    'https://sheet.best/api/sheets/280c3557-6f7e-4055-9d3b-22b571749774',data
  );
  
//   inputName.value = '';
  inputMessage.value = '';
  confirm('Success');
  window.location.reload();
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

	// let allNamesElm = document.getElementById("allNames")
	// let loaderElm = document.getElementById("loader")
	// let errorMessageElm = document.getElementById("errorMessage")
	
	// function setErrorDisplay(){
	// // loaderElm.style.display = "none"
	// allNamesElm.style.display = "none"
	// errorMessageElm.style.display = "block"
	// }
			
	fetch("https://api.apispreadsheets.com/data/18509/").then(res=>{
		if (res.status === 200){
			res.json().then(data=>{ 
				const yourData = data["data"]
				for(let i = 0; i < yourData.length; i++){
				    let rowInfo = yourData[i]
				    let rowInfoDiv = document.createElement("div")
				    rowInfoDiv.classList.add("name-row")
					
				    let rowName = document.createElement("h4")
				    let rowNameNode = document.createTextNode(rowInfo["name"])
				    rowName.appendChild(rowNameNode)
				    rowName.classList.add("name")
					
				    let rowWritten = document.createElement("p")
				    let rowWrittenNode = document.createTextNode(rowInfo["message"])
				    rowWritten.appendChild(rowWrittenNode)
				    rowWritten.classList.add("message")
	
				    let rowtimestamp = document.createElement("p")
            let rowTimestampNode = document.createTextNode(rowInfo["timestamp"])
            rowtimestamp.appendChild(rowTimestampNode)
				    rowtimestamp.classList.add("timestamp")
					
				    rowInfoDiv.appendChild(rowName)
				    rowInfoDiv.appendChild(rowWritten)
				    rowInfoDiv.appendChild(rowtimestamp)
					
				    allNamesElm.appendChild(rowInfoDiv)
				}
				
				// loaderElm.style.display = "none"
				// allNamesElm.style.display = "block"
				// errorMessageElm.style.display = "none"

			}).catch(err => {
				setErrorDisplay()
			})
		}
		else{
			setErrorDisplay()
			}
		}).catch(err =>{
			// setErrorDisplay()
		})


