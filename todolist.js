 const addButton = document.getElementById('addButton');
        const taskInput = document.getElementById('taskInput');
        const taskList = document.getElementById('taskList');

        addButton.addEventListener('click', addTask);
        taskInput.addEventListener('keydown', function (event) 
        {
            if (event.key === 'Enter') {
                addTask();
        }
        });

        function addTask() {
            const taskText = taskInput.value.trim();
            if (taskText === '') return;

            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';

            const taskLabel = document.createElement('label');
            taskLabel.textContent = taskText;

            const deleteButton = document.createElement('button');
            deleteButton.className = 'deleteButton';
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', 
            function () 
            {
                taskDiv.remove();

            
            });

            

            taskDiv.appendChild(taskLabel);
          
            taskDiv.appendChild(deleteButton);

            taskList.appendChild(taskDiv);

            taskInput.value = '';
        }
