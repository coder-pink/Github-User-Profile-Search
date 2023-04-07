const APIURL = "https://api.github.com/users/";

const main = document.querySelector("#main")

// const main = document.querySelector('#main')
const getUser = async(username) => {
    const response = await fetch(APIURL + username)
    console.log(response)
    const data = await response.json()
    console.log(data)


    const card = `
    <div class="card">
            <div class="img-box">
                <img src="${data.avatar_url}" alt="image" class="profile-img">
            </div>
            <div class="user-info">
                <h2>${data.name}</h2>
                <p>${data.bio}</p>

                <ul class="info">
                    <li>${data.followers}<strong> Followers</strong></li>
                    <li>${data.following}<strong>Following</strong> </li>
                    <li>${data.public_repos}<strong>Repos</strong></li>
                </ul>

                <div id="repos">

                </div>
            </div>
        </div>
    `
// push card to main
    main.innerHTML = card

    // getrepo function

    getRepo(username)
}


// init call

// getUser("coder-pink")
getUser("mis-coder")


const getRepo = async(username) =>{

    const  repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos")
    console.log(response)
    const data = await response.json()
    console.log(data)

    data.forEach( (item) => {
        // repos.appendChild
        console.log(item)
        const element = document.createElement("a")
        element.classList.add("repo")
        element.href = item.html_url
        element.innerText = item.name 
        element.target = "_blank"
        repos.appendChild(element)
    }

    
    )

}


//  form submit function
const formSubmit = () =>{
    const searchBox = document.querySelector("#search")
    if(searchBox.value != ""){
        getUser(searchBox.value)
        searchBox.value = ""
    }
    return false



}

