function openChangelogModal() {
    document.getElementById('changelogModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeChangelogModal() {
    document.getElementById('changelogModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}


document.getElementById('changelogModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeChangelogModal();
    }
});


document.addEventListener('keydown', function(e) {
    
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('docsSearch').focus();
    }
    
    if (e.key === 'Escape') {
        closeChangelogModal();
    }
});


document.getElementById('docsSearch').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const content = document.querySelectorAll('.content-section');
    
    content.forEach(section => {
        const text = section.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
});


       
        document.querySelector('.mobile-menu').addEventListener('click', () => {
            document.querySelector('.docs-sidebar').classList.add('active');
        });

        document.querySelector('.mobile-close').addEventListener('click', () => {
            document.querySelector('.docs-sidebar').classList.remove('active');
        });

        
        const tabs = document.querySelectorAll('.tab');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                
                tabs.forEach(t => t.classList.remove('active'));
                
                tab.classList.add('active');

               
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                document.getElementById(`${tab.dataset.tab}-content`).classList.add('active');
            });
        });

       
        function copyCode(button) {
            const codeBlock = button.parentElement.nextElementSibling;
            navigator.clipboard.writeText(codeBlock.textContent);

            const icon = button.querySelector('i');
            icon.className = 'fas fa-check';
            setTimeout(() => {
                icon.className = 'far fa-copy';
            }, 2000);
        }

        
        function initializeNavigation() {
            
            const navLinks = document.querySelectorAll('.sidebar-nav a');
            
            
            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {

                    navLinks.forEach(l => l.classList.remove('active'));
                    
                   
                    e.target.classList.add('active');
                    
                   
                    const targetId = e.target.getAttribute('href').substring(1);
                    const targetSection = document.getElementById(targetId);
                    
                    
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                });
            });

          
            function setActiveFromHash() {
                const hash = window.location.hash;
                if (hash) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === hash) {
                            link.classList.add('active');
                        }
                    });
                }
            }

            
            setActiveFromHash();
            
           
            window.addEventListener('hashchange', setActiveFromHash);
        }

       
        document.addEventListener('DOMContentLoaded', initializeNavigation);