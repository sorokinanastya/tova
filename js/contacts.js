
const contactsSection = document.getElementById('contactssec');


function checkScreenWidth() {
    const docSliderInner = document.querySelector('#fullpage');
    if (window.innerWidth > 725) {
       
        if (contactsSection.parentNode) {
            contactsSection.parentNode.removeChild(contactsSection);
        }
    } else {
    
        if (!contactsSection.parentNode) {
            
            docSliderInner.appendChild(contactsSection);
        }
    }
}


checkScreenWidth();


window.addEventListener('resize', checkScreenWidth);

