document.getElementById('theme-btn')?.addEventListener('click', function() {
    const colors = [
        '#e4e9f8',   
        '#f0e6ff',   
        '#ffe6e6',   
        '#e6fff2',   
        '#fff2e6',  
        '#e6f9ff',   
        '#ffebf5',   
        '#f2ffe6',   
        '#fff9e6',  
        '#e6e6ff',  
        '#ffe6f0',   
        '#e6fff9',   
        '#f5e6ff',   
        '#ffe6eb',  
        '#e6f2ff',   
        '#fff5e6',   
        '#e8f5e9',   
        '#fce4ec',  
        '#e3f2fd',   
        '#fff3e0' 
    ];
    
    const currentColor = document.body.style.backgroundColor;
    
    let newColor = currentColor;
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    };
    
    document.body.style.backgroundColor = newColor;
});

// Create
const newDiv = document.createElement('div');
newDiv.textContent = 'Hello, World!';

// Add
document.body.appendChild(newDiv);

// Remove
newDiv.remove();