const btn = document.getElementById('btn');
const title = document.getElementById('title');
const container = document.getElementById('container');
const profiles = document.querySelectorAll('.profile');
let viewMore = false;



btn.addEventListener('click',async ()=>{
    if(!viewMore){
       const peoples = await getData();
        display(peoples);
        container.classList.add('active');
        profiles.forEach(profile=>{
            profile.classList.toggle('active');
        })
        btn.innerText = 'View less';
    }else{
        const users = document.querySelectorAll('.profile');
        container.classList.remove('active');
        users.forEach((user,idx)=>{
            if(idx > 4){
                user.classList.add('hide');
            }else{
                user.classList.remove('active');
            }
        })
        btn.innerText = 'View all';
    }
    title.classList.toggle('active');
    viewMore = !viewMore;
})


function display(peoples){
    peoples.forEach(people =>{
        const div = document.createElement('div');
        div.classList.add('profile');
        div.classList.add('active');
        div.innerHTML  = `
        <img class="profile-image" src="${people.picture.medium}" alt="">
        <div class="profile-detail">
            <p class="profile-name">${people.name.first} ${people.name.last}</p>
            <p class="profile-age">${people.dob.age} years</p>
        </div>
        `;
        container.appendChild(div);
    })
}


async function getData(){
    const res = await fetch('https://randomuser.me/api/1.4/?results=19');
    const data = await res.json();
     return data.results;
}
 


 