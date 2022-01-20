const viewTemplate = {
    render: (container, models) => {
        const app = Vue.createApp({
            data() {
              return {
                models
              }
            },
            template: `
                <div v-for="model in models">
                    <model :model="model"></model>
                </div>`
        });

        app.component('model', {
            props: ['model'],
            template: `
                <div v-for="(instance, index) in model.instances">
                    <h3>{{model.name}} {{index + 1}}</h3>
                    <ul>
                        <li v-for="(prop, key) in instance">
                            {{key}}: <b>{{prop.value}}</b> <i>{{prop.notes || ''}}</i>
                        </li>
                    </ul>
                </div>`
        });
        
        app.mount(container)
    }
};
