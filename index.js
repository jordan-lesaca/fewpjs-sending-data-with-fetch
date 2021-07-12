// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   };

  function submitData(userName, userEmail){
    let data = {
        name: userName,
        email: userEmail
    }
    
    const configObj = {
      method: "POST", 
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
      },
      body: JSON.stringify(data)
  }
  return fetch("http://localhost:3000/users", configObj)

  .then(function(response){
      return response.json();
  })
  .then(function(object){
      let h2 = document.createElement('h2')
      h2.innerHTML = object.id
      document.body.appendChild(h2)
  })

  .catch(function(error){
      let h3 = document.createElement('h3')
      h3.innerHTML = error.message
      document.body.appendChild(h3)
      alert("SOMETHING IS WRONG!")
})

}  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject); 