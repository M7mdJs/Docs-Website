function toggleShowMore(button) {
    const content = button.nextElementSibling;
    button.classList.toggle('active');
    content.classList.toggle('active');
    
    const buttonText = button.querySelector('span');
    buttonText.textContent = button.classList.contains('active') ? 'Show Less' : 'Show More';
}

function copyCode(button) {
    const codeBlock = button.closest('.code-block').querySelector('code');
    navigator.clipboard.writeText(codeBlock.textContent);
    
   
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
        button.innerHTML = originalText;
    }, 2000);
}


document.addEventListener('DOMContentLoaded', () => {
    
    const homeLoader = document.getElementById('homeLoader');
    
    if (homeLoader) {
        
        document.body.classList.add('home-loading');

        
        window.addEventListener('load', () => {
            document.body.classList.remove('home-loading');
            
            
            homeLoader.classList.add('fade-out');
            
          
            setTimeout(() => {
                homeLoader.style.display = 'none';
            }, 50000);
        });
    }
});


document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
});
