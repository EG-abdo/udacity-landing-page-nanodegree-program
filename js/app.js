//declre variables
const sections = document.querySelectorAll('section');
const navBar=document.getElementById('navbar__list');
//build function to create links automatically
function crtNavBar(){
    const frag= document.createDocumentFragment();
    for (let section of sections){
        const li= document.createElement('li');
        const anchor = document.createElement('a');
        anchor.setAttribute('data-id', section.id);
        anchor.href="#"+section.id;
        anchor.className="menu__links";
        
        anchor.textContent = section.getAttribute('data-nav');
        li.appendChild(anchor);
        frag.appendChild(li);
        
    }
        navBar.appendChild(frag);
}
//Function call
crtNavBar();
//hilight current section 
document.addEventListener('scroll', function name(evt) {
for (let section of sections){
    const rect= section.getBoundingClientRect();
    section.classList.remove('your-active-class');

    if (rect.top >= -150  &&  rect.bottom <= 1000){
        section.classList.add('your-active-class');}    
}    
})

