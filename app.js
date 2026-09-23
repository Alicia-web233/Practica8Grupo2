document.getElementById('task-form').addEventListener('submit', function(event)
{
event.preventDefault(); // Evita el envío del formulario
// Obtener el valor de la tarea
const taskInput = document.getElementById('task-input');
const task = taskInput.value.trim();
if (task !== '') {