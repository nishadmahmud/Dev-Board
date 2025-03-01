let taskAssignedCount = 6;
let navTaskCount = 23;

function addActivity(taskName) {
    const activityLog = document.getElementById('activity-log');

    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US');

    const activityItem = document.createElement('div');
    activityItem.className = 'bg-[#e4e9f8] p-3 rounded-lg mb-2';
    activityItem.innerHTML = `
      <p class="text-[12px] text-gray-700">You have Completed The Task <span class = "font-semibold"> ${taskName} </span> at <span class = "font-semibold">${timeString} </span></p>
    `;

    activityLog.appendChild(activityItem);
}

for (const button of document.querySelectorAll('.complete-task-btn')) {
    button.addEventListener('click', function () {
        alert('Board Updated Successfully');
        const taskCard = button.parentNode.parentNode;
        const taskName = taskCard.querySelector('h2').textContent;

        button.classList.remove('hover:bg-white','hover:text-[#3752FD]' ,'cursor-pointer');
        button.classList.add('opacity-30');
        button.disabled = true;

        taskAssignedCount--;
        navTaskCount++;

        if(taskAssignedCount===0)
            alert('Congrates!!! You have completed all the current task');
        
        document.getElementById('task-assigned-count').textContent = taskAssignedCount;
        document.getElementById('nav-task-count').textContent = navTaskCount;

        addActivity(taskName);
    });
}