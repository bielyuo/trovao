// Simulação de dados de tópicos
const topics = [
    { title: 'Primeiro Tópico', content: 'Este é o conteúdo do primeiro tópico.' },
    { title: 'Segundo Tópico', content: 'Este é o conteúdo do segundo tópico.' },
    { title: 'Terceiro Tópico', content: 'Este é o conteúdo do terceiro tópico.' },
];

    // Função para carregar tópicos na página
    function loadTopics() {
        const topicList = document.getElementById('topic-list');
        topicList.innerHTML = '';

    topics.forEach((topic) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <h3>${topic.title}</h3>
            <p>${topic.content}</p>
        `;
        topicList.appendChild(listItem);
    });
}

    // Carregar tópicos quando a página for carregada
    document.addEventListener('DOMContentLoaded', loadTopics);


    document.addEventListener('DOMContentLoaded', function () {
        const topicList = document.getElementById('topic-list');
        const topicTitleInput = document.getElementById('topic-title');
        const topicContentInput = document.getElementById('topic-content');
        const addTopicBtn = document.getElementById('add-topic-btn');



    addEventListener('click', function () {
        const title = topicTitleInput.value;
        const content = topicContentInput.value;


        if (title !== '' && content !== '') {
            // Criar nova div de tópico
            const newTopic = document.createElement('li');
            newTopic.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</p>
            `;
            topicList.appendChild(newTopic);

            // Limpar os campos de entrada
            topicTitleInput.value = '';
            topicContentInput.value = '';
        }
        else {
            if(title ==' ' && content == ' '){
            alert('Por favor, preencha todos os campos.');
            }
        }
    });
});