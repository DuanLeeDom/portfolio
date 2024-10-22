const elemProjectsContainer = document.getElementById('projects__content');

const createImage = (projectImage) => {
    const elemPicture = document.createElement('picture');
    const elemImg = document.createElement('img');

    elemImg.setAttribute('src', projectImage);

    elemPicture.appendChild(elemImg);

    return elemPicture;
} 

const createStrong = (projectName) => {
    const elemStrong = document.createElement('strong');
    elemStrong.innerText = projectName; // Corrigido para usar o parâmetro projectName

    return elemStrong;
}

const createTags = (projectTags) => {
    const elemTags = document.createElement('div');
    projectTags.forEach(tag => {
        const elemTag = document.createElement('span');
        elemTag.innerText = tag;

        elemTags.appendChild(elemTag);
    });

    return elemTags;
}

const createProject = (project, index) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');

    elemProject.setAttribute('data-aos', 'zoom-in-up')
    elemProject.setAttribute('data-aos-duration', '800')
    elemProject.setAttribute('data-aos-easing', 'ease-in-out')
    elemProject.setAttribute('data-aos-offset', '-100')
    elemProject.setAttribute('data-aos-delay', 300 * (index + 1))

    elemProject.classList.add('project');

    // Adiciona a imagem ao projeto
    elemProject.appendChild(createImage(project.image));

    // Adiciona o nome do projeto ao projeto
    elemProject.appendChild(createStrong(project.name));

    // Adiciona as tags ao projeto
    elemProject.appendChild(createTags(project.tags));

    return elemProject
}

const loadproject = (projects) => {
    projects.forEach((project, index) => {
        elemProjectsContainer.appendChild(createProject(project, index));
    });
}

fetch('./projects.json').then(Response => Response.json()).then(loadproject);

const createStatusIndicator = (status) => {
    const elemStatus = document.createElement('span');
    elemStatus.classList.add('project-status'); // Adicione uma classe para estilização

    // Define o texto e a classe com base no status
    if (status === 'alpha') {
        elemStatus.innerText = 'Alpha';
        elemStatus.classList.add('status-alpha'); // Classe para o estilo de alpha
    } else if (status === 'beta') {
        elemStatus.innerText = 'Beta';
        elemStatus.classList.add('status-beta'); // Classe para o estilo de beta
    }

    return elemStatus;
}