document.getElementById('theme-btn')?.addEventListener('click', function () {
    const colors = [
        '#c6cbd2',
        '#d2c8e1',
        '#e1c8c8',
        '#c8e1d4',
        '#e1d4c8',
        '#c8dbe1',
        '#e1cdd7',
        '#d4e1c8',
        '#e1dbc8',
        '#c8c8e1',
        '#e1c8d2',
        '#c8e1db',
        '#d7c8e1',
        '#e1c8cd',
        '#c8d4e1',
        '#e1d7c8',
        '#cad7cb',
        '#ded5ce',
        '#c5d4df',
        '#e1d5c2'
    ];

    const currentColor = document.body.style.backgroundColor;

    let newColor = currentColor;
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    };

    document.body.style.backgroundColor = newColor;
});