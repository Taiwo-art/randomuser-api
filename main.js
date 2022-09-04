const randomUser = async() => {
    let fetchUser = await fetch("https://randomuser.me/api")
    let jsonFetchUser = await fetchUser.json()
    let userDetails = jsonFetchUser.results
    
    let outputUser = userDetails.map(person => 
    `<img src ="${person.picture.large}">
    <br> Full name: ${person.name.title} ${person.name.first} ${person.name.last} 
    <br> Home: ${person.location.street.number}, ${person.location.street.name} 
    <br> State: ${person.location.state} 
    <br> Country: ${person.location.country} 
    <br> E-mail: ${person.email} 
    <br> DOB: ${person.dob.date}
    <br> Age: ${person.dob.age}
    <br> Phone: ${person.phone}`)     
 
    return document.body.innerHTML = outputUser
}

randomUser()

