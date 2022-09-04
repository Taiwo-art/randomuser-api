const randomUser = async() => {
    let fetchUser = await fetch("https://randomuser.me/api")
    let jsonFetchUser = await fetchUser.json()
    let userDetails = jsonFetchUser.results
    let userD = userDetails[0]
    
    let outputUser = `<img src="${userD.picture.large}">
    <br> Full name: ${userD.name.title} ${userD.name.first} ${userD.name.last} 
    <br> Home: ${userD.location.street.number}, ${userD.location.street.name} 
    <br> State: ${userD.location.state} 
    <br> Country: ${userD.location.country} 
    <br> E-mail: ${userD.email} 
    <br> DOB: ${userD.dob.date}
    <br> Age: ${userD.dob.age}
    <br> Phone: ${userD.phone}`   
 
    return document.body.innerHTML = outputUser
}
randomUser()