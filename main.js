const randomUser = async() => {
    let fetchUser = await fetch("https://randomuser.me/api")
    let jsonFetchUser = await fetchUser.json()
    let userDetails = jsonFetchUser.results
    
    let outputUser = `<img src="${userDetails[0].picture.large}">
    <br> Full name: ${userDetails[0].name.title} ${userDetails[0].name.first} ${userDetails[0].name.last} 
    <br> Home: ${userDetails[0].location.street.number}, ${userDetails[0].location.street.name} 
    <br> State: ${userDetails[0].location.state} 
    <br> Country: ${userDetails[0].location.country} 
    <br> E-mail: ${userDetails[0].email} 
    <br> DOB: ${userDetails[0].dob.date}
    <br> Age: ${userDetails[0].dob.age}
    <br> Phone: ${userDetails[0].phone}`   
 
    return document.body.innerHTML = outputUser
}
randomUser()