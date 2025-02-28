let completedTasks = new Set();
let taskAssignedCount = 6;
let navTaskCount = 23;

function addActivity(taskName) {
    const activityLog = document.getElementById('activity-log');

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    const activityItem = document.createElement('div');
    activityItem.className = 'bg-[#e4e9f8] p-3 rounded-lg mb-2';
    activityItem.innerHTML = `
      <p class="text-[12px] text-gray-700">You have Completed The Task ${taskName} at ${timeString}</p>
    `;

    activityLog.appendChild(activityItem);
}

for (const button of document.querySelectorAll('.complete-task-btn')) {
    button.addEventListener('click', function () {
        const taskCard = button.parentNode.parentNode;
        const taskName = taskCard.querySelector('h2').textContent;

        if (completedTasks.has(taskName)) {
            return;
        }

        completedTasks.add(taskName);

        button.textContent = 'Completed';
        button.classList.remove('hover:bg-slate-800' ,'cursor-pointer');
        button.classList.add('opacity-30');
        button.disabled = true;

        taskAssignedCount--;
        navTaskCount++;
        //   updateTaskAssignedCount();
        //   updateNavTaskCount();

        addActivity(taskName);
    });
}