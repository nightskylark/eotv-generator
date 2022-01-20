const viewTemplate = {
    render: (container, data) => {
        data.forEach(model => {
            model.instances.forEach((props, i) => {
                const instanceContainer = document.createElement("div");
                container.appendChild(instanceContainer);

                const titleContainer = document.createElement("div");
                titleContainer.innerHTML = `<h3>${model.name} ${i + 1}</h3>`;
                instanceContainer.appendChild(titleContainer);

                const propsContainer = document.createElement("ul");
                Object.keys(props).forEach(propName => {
                    const prop = props[propName];
                    const propItem = document.createElement("li");
                    propItem.innerHTML = `${propName}: <b>${prop.value}</b> <i>${prop.notes || ''}</i>`;
                    propsContainer.appendChild(propItem);
                });
                instanceContainer.appendChild(propsContainer);
            });
            
            model.notes && model.notes.forEach(note => {
                const notesContainer = document.createElement("p");
                notesContainer.innerHTML = `<i>${note}</i>`;
                container.appendChild(notesContainer);
            });
        });
    }
};
