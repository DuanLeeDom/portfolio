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

const createProject = (project) => {
    const elemProject = document.createElement('a');

    elemProject.setAttribute('href', project.link);
    elemProject.setAttribute('target', '_blank');

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
    projects.forEach(project => {
        elemProjectsContainer.appendChild(createProject(project));
    });
}

fetch('./projects.json').then(Response => Response.json()).then(loadproject);