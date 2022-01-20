const valueBySource = source => {
    let value = source[Math.floor(Math.random() * source.length)];
    let name = value.name;
    let notes = value.notes;
    let valueSource = value.source;
    
    if(value.value) {
        value = value.value;
    }

    if(valueSource) {
        const valueObj = valueBySource(valueSource);
        value = `${value.name} - ${valueObj.value}`;
        notes = valueObj.notes || notes;
    }

    return { value, notes };
};


class Generator {
    constructor(models) {
        this.models = models;
    }
    
    generateData() {
        return this.models.map(model => {
            const instances = [];
            for (let i = 1; i <= model.defaultCount; i++) {
                const instance = {};
                model.props.forEach(prop => {
                    instance[prop.name] = valueBySource(prop.source);
                });
                instances.push(instance);
            }
            
            
            return {
                name: model.name,
                notes: model.notes,
                instances
            }
        });
    }
}
