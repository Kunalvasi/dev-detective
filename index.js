const inputTag=document.querySelector('[data-input]');
const btn=document.querySelector('[data-inputBtn]');
let textData;
function init(){
    const inp=document.querySelector('[data-input]');
    inp.value="";
}
init();
function renderData(data){
    const name=document.querySelector('[data-name]');
const date=document.querySelector('[data-date]');
const link=document.querySelector('[data-link]');
const bio=document.querySelector('[data-bio]');
const repos=document.querySelector('[data-repos]');
const followres=document.querySelector('[data-followres]');
const following=document.querySelector('[data-following]');
const location=document.querySelector('[data-location]');
const email=document.querySelector('[data-email]');
const twitter=document.querySelector('[data-twitter]');
const company=document.querySelector('[data-company]');
const img=document.querySelector('[data-avtar]');
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
    img.src=data?.avatar_url;
    link.href=data?.html_url;
    link.innerText=`@${data?.name}`;
    const dateStr=data?.created_at;
    const newDate=new Date(dateStr);
    const day=newDate.getUTCDate();
    const month=newDate.getUTCMonth();
    const year=newDate.getFullYear();
    date.innerText=`Joined ${day} ${months[month-1]} ${year}`;
    name.innerText=data?.name;
    bio.innerText=data?.bio;
    repos.innerText=data?.public_repos;
    followres.innerText=data?.followers;
    following.innerText=data?.following;
    if(!data?.location){
        location.innerText="Not Available";
    }
    else{
        location.innerText=data?.location;
    }
    if(!data?.email){
        email.innerText="Not Available";
    }
    else{
        email.innerText=data?.email;
    }
    if(!data?.twitter_username){
        twitter.innerText="Not Available";
    }
    else{
        twitter.innerText=data?.twitter_username;
    }
    if(!data?.company){
        company.innerText="Not Available";
    }
    else{
        company.innerText=data?.company;
    }
}
async function fetchDataUsingApi(textData){
    try{
        const response=await fetch(`https://api.github.com/users/${textData}`);
        const data=await response.json();
        renderData(data);
    }
    catch(err){
        console.log(err);
    }
}
btn.addEventListener('click',function(){
    textData=inputTag.value;
    if(textData===""){
        return ;
    }
    fetchDataUsingApi(textData);
});
const modeBtn=document.querySelector('.mode');
const heading=document.querySelector('h1');
const wrapper=document.querySelector('.wrapper');
const name=document.querySelector('[data-name]');
const link=document.querySelector('[data-link]');
const inp=document.querySelector('[data-input]');
const para2=document.querySelector('[para2]');
const para1=document.querySelector('[para1]');
const img2=document.querySelector('[img2]');
const img1=document.querySelector('[img1]');
modeBtn.addEventListener('click',function(){
    heading.classList.toggle('white');
    wrapper.classList.toggle('dark-mode');
    name.classList.toggle('white');
    link.classList.toggle('light-blue');
    inp.classList.toggle('white');
    para2.classList.toggle('visible');
    para2.classList.toggle('white');
    para1.classList.toggle('unvisible');
    para1.classList.toggle('white');
    img2.classList.toggle('visible');
    img1.classList.toggle('unvisible');
});
