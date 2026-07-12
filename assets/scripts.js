// Language content
const translations = {
    en: {
        'header-title': 'Daniel Sletskov Smidt',
        'header-subtitle': 'IT Support Apprentice | Future Data Technician | Software Developer',
        'about-title': 'About Me',
        'about-text-1': 'Hi! I\'m Daniel, a passionate IT enthusiast with experience as an IT support apprentice at Saab in Sønderborg. I will start my education as a Data Technician in Sønderborg on August 3, 2026, specializing in infrastructure.',
        'about-text-2': 'I am passionate about developing software solutions, system administration, and exploring new technologies. My main skills include:',
        'projects-title': 'My Projects',
        'project-1-title': 'Kali Linux Virtual Machine Setup',
        'project-1-desc': 'Setting up Kali Linux in a virtual machine on Ubuntu desktop for software development, gaming, and developing a reading and publishing platform.',
        'project-1-btn': 'View Project',
        'project-2-title': 'IT Support Automation Tools',
        'project-2-desc': 'Developing Python scripts to automate daily IT support tasks at Saab, including system monitoring and log analysis.',
        'project-2-btn': 'View Project',
        'project-3-title': 'Local Network for Development',
        'project-3-desc': 'Design and implementation of a secure local network for a software development environment, focusing on infrastructure and security.',
        'project-3-btn': 'View Project',
        'contact-title': 'Contact',
        'contact-text': 'You can find my projects and contribute on my GitHub profile. I\'m always open to new ideas, collaborations, and feedback.',
        'contact-btn': 'Visit my GitHub',
        'footer-text': '&copy; 2026 Daniel Sletskov Smidt | <a href="https://github.com/daniel-sletskov-smidt">GitHub</a> | <a href="mailto:daniel@example.com">Email</a>'
    },
    da: {
        'header-title': 'Daniel Sletskov Smidt',
        'header-subtitle': 'IT Supporter Lærling | Fremtidig Datatekniker | Software Udvikler',
        'about-title': 'Om Mig',
        'about-text-1': 'Hej! Jeg er Daniel, en passioneret IT-entusiast med erfaring som IT supporter lærling hos Saab i Sønderborg. Jeg starter på datatekniker-uddannelsen i Sønderborg den 3. august 2026, med specialisering i infrastruktur.',
        'about-text-2': 'Jeg brænder for at udvikle softwareløsninger, arbejde med systemadministration og udforske nye teknologier. Mine primære kompetencer inkluderer:',
        'projects-title': 'Mine Projekter',
        'project-1-title': 'Kali Linux Virtual Machine Opsætning',
        'project-1-desc': 'Opsætning af Kali Linux i en virtuel maskine på Ubuntu desktop til softwareudvikling, gaming og udvikling af en læse- og publiceringsplatform.',
        'project-1-btn': 'Se Projekt',
        'project-2-title': 'IT Support Automatiseringsværktøjer',
        'project-2-desc': 'Udvikling af Python-scripts til automatisering af daglige IT-support opgaver hos Saab, herunder systemovervågning og loganalyse.',
        'project-2-btn': 'Se Projekt',
        'project-3-title': 'Lokalt Netværk til Udvikling',
        'project-3-desc': 'Design og implementering af et sikkert lokalt netværk til softwareudviklingsmiljø med fokus på infrastruktur og sikkerhed.',
        'project-3-btn': 'Se Projekt',
        'contact-title': 'Kontakt',
        'contact-text': 'Du kan finde mine projekter og bidrage på min GitHub-profil. Jeg er altid åben for nye idéer, samarbejder og feedback.',
        'contact-btn': 'Besøg min GitHub',
        'footer-text': '&copy; 2026 Daniel Sletskov Smidt | <a href="https://github.com/daniel-sletskov-smidt">GitHub</a> | <a href="mailto:daniel@example.com">Email</a>'
    }
};

// Switch language
function switchLanguage(lang) {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Update content
    for (const key in translations[lang]) {
        const element = document.getElementById(key);
        if (element) {
            element.innerHTML = translations[lang][key];
        }
    }
}