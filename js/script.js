document.addEventListener('DOMContentLoaded', () => {
    fetch('./projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al cargar el archivo JSON');
            }
            return response.json();
        })
        .then(projects => {
            const projectsContainer = document.getElementById('projects-container');
            
             projects.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card';

                const projectNameLink = document.createElement('a');
                projectNameLink.href = project.repoUrl; 
                projectNameLink.target = '_blank'; 

                const projectName = document.createElement('h3');
                projectName.textContent = project.name;

                projectNameLink.appendChild(projectName);

                const projectDesc = document.createElement('p');
                projectDesc.textContent = project.description;

                const projectLink = document.createElement('a');
                projectLink.href = project.readmeUrl;
                projectLink.target = '_blank';
                projectLink.textContent = 'Ver README';

                projectCard.appendChild(projectNameLink);
                projectCard.appendChild(projectDesc);
                projectCard.appendChild(projectLink);

                projectsContainer.appendChild(projectCard);
            });
        })
        .catch(error => {
            console.error('Hubo un problema con la operación de fetch:', error);
            const projectsContainer = document.getElementById('projects-container');
            projectsContainer.innerHTML = '<p>No se pudieron cargar los proyectos. Inténtalo de nuevo más tarde.</p>';
        });

/* ===== ANIMACIÓN DE CÓDIGO ===== */

const textoHacker = [
    "python iniciar_proyecto.py",
    "Cargando habilidades...",
    "Conectando con GitHub...",
    "Proyectos listos.",
    "Desarrollando nuevas ideas..."
];

const elementoHacker = document.getElementById("codigo-hacker");

if (elementoHacker) {
    let fraseActual = 0;
    let caracterActual = 0;
    let borrando = false;

    function escribirCodigo() {
        const frase = textoHacker[fraseActual];

        if (borrando) {
            caracterActual--;
        } else {
            caracterActual++;
        }

        elementoHacker.textContent =
            frase.substring(0, caracterActual);

        let velocidad = borrando ? 30 : 65;

        if (!borrando && caracterActual === frase.length) {
            borrando = true;
            velocidad = 1400;
        } else if (borrando && caracterActual === 0) {
            borrando = false;
            fraseActual = (fraseActual + 1) % textoHacker.length;
            velocidad = 350;
        }

        setTimeout(escribirCodigo, velocidad);
    }

    escribirCodigo();
}

});