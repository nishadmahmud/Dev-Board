function updateDate() {
  const now = new Date();
  
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });

  const dateInfo = now.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
  });
  
  document.getElementById('day-name').textContent = dayName;
  document.getElementById('date-info').textContent = dateInfo;
}
updateDate();
