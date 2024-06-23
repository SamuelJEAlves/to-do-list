document.getElementById('adicionar_tarefa').addEventListener('click', add_tarefa);

function add_tarefa() {
    const entrada_tarefa = document.getElementById('entrada_tarefa');
    const entrada_data = document.getElementById('entrada_data');
    const texto_tarefa = entrada_tarefa.value;
    const data_tarefa = entrada_data.value;

    if (texto_tarefa === '' || data_tarefa === '') {
        alert('Por favor, preencha a tarefa e a data.');
        return;
    }

    const lista_tarefas = document.getElementById('to_do_list');
    const nova_tarefa = document.createElement('li');
    const span_tarefa = document.createElement('span');
    const span_data = document.createElement('span');
    const span_atraso = document.createElement('span');
    const botao_concluir = document.createElement('button');
    const botao_excluir = document.createElement('button');

    span_tarefa.textContent = texto_tarefa;
    span_data.textContent = new Date(data_tarefa).toLocaleDateString('pt-BR');
    span_data.classList.add('date');
    botao_concluir.textContent = 'Concluir';
    botao_excluir.textContent = 'Excluir';

    botao_concluir.classList.add('complete-btn');
    botao_excluir.classList.add('delete-btn');

    botao_concluir.addEventListener('click', () => concluir_tarefa(nova_tarefa));
    botao_excluir.addEventListener('click', () => deletar_tarefa(nova_tarefa));

    const data_atual = new Date();
    const data_vencimento = new Date(data_tarefa);

    if (data_vencimento < data_atual) {
        nova_tarefa.classList.add('late');
        span_atraso.textContent = ' Atrasado';
        span_atraso.classList.add('late-text');
    }

    nova_tarefa.appendChild(span_tarefa);
    nova_tarefa.appendChild(span_data);
    nova_tarefa.appendChild(span_atraso);
    nova_tarefa.appendChild(botao_concluir);
    nova_tarefa.appendChild(botao_excluir);
    
    lista_tarefas.appendChild(nova_tarefa);

    entrada_tarefa.value = '';
    entrada_data.value = '';
}

function concluir_tarefa(task) {
    task.classList.toggle('completed');
    const completeSpan = task.querySelector('.complete-text');
    if (task.classList.contains('completed')) {
        if (!completeSpan) {
            const newCompleteSpan = document.createElement('span');
            newCompleteSpan.textContent = ' Concluído';
            newCompleteSpan.classList.add('complete-text');
            task.appendChild(newCompleteSpan);
        }
    } else {
        if (completeSpan) {
            completeSpan.remove();
        }
    }
}

function deletar_tarefa(task) {
    task.remove();
}
