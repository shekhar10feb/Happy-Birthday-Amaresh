function happyBirthday() {

    function backgroundChanger(){
        let subContainer = document.querySelector('.sub-container')
        
        subContainer.style.backgroundColor = randomBg();
        subContainer.style.borderRadius = 5 + 'px';
    }
    
    function randomBg() {
        return `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    }
    
    
    setInterval(backgroundChanger, 200);
    
    function createGift() {
        const gift = document.createElement('div');
        gift.classList.add('gift');
    
        gift.style.left = Math.random() * 95 + 'vw';
    
        gift.style.fontSize = Math.random() * 30 + 'px';
    
        gift.style.animationDuration = Math.random() *  2 + 3 + 's';
    
        gift.innerText = '🎁';
    
        document.querySelector('.sub-container').appendChild(gift);
    
        setTimeout(() => {
            gift.remove();
        }, 4000);
    }
    
    setInterval(createGift, 200);
}

document.addEventListener('DOMContentLoaded', happyBirthday);