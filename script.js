// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const pageTitle = document.getElementById('page-title');
    
    // Page titles mapping
    const pageTitles = {
        'welcome': 'Welcome to University Portal',
        'tutorials': 'Tutorial Videos for Students',
        'announcements': 'Latest Announcements',
        'guidance': 'Guidance and Counseling Services',
        'courses': 'Course Modules'
    };
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            pageTitle.textContent = pageTitles[sectionId];
        });
    });
    
    // Initialize the first section
    document.getElementById('welcome').classList.add('active');
});