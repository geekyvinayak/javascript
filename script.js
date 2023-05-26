const list = document.getElementById('list');

fetch("./project.json")
    .then(response => {
        return response.json();
    })
    .then(data => {
        updateUI(data);
    });

function updateUI(projects){
    projects.forEach(({name, code,demo, index}) => {

        const listItem = document.createElement('li');
    
        listItem.innerHTML = `
            <span class="project-number">${index}</span>
            <a class="project-name" target="_blank">
                ${projectNameFormater(name)}
            </a>
            <a href=${demo} class="container-links" target="_blank">
                Demo <i class="fa fa-desktop" aria-hidden="true"></i>
            </a>
            <a href=${code} class="container-links" target="_blank">
                Code <i class="fa fa-code" aria-hidden="true"></i>
            </a>
        `;
        list.appendChild(listItem);    
    });
}

function projectNameFormater(name){
    return name
		.split('-')
		.map(word => word[0].toUpperCase() + word.slice(1))
		.join(' ');
}