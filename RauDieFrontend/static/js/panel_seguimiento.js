const modifyProjectModal = document.getElementById('modifyProjectModal');
modifyProjectModal.addEventListener('show.bs.modal', function (event) {
  const button = event.relatedTarget; // Button that triggered the modal

  // Extraer la información de los atributos data-* del botón
  const proyectoId = button.getAttribute('data-proyecto-id');
  const nombre = button.getAttribute('data-nombre');
  const tipo = button.getAttribute('data-tipo');
  const descripcion = button.getAttribute('data-descripcion');
  const requerimientos = button.getAttribute('data-requerimientos');

  // Actualizar el contenido del modal
  const modifyProjectIdInput = document.getElementById('modifyProjectId');
  const modifyProjectNameInput = document.getElementById('modifyProjectName');
  const modifyProjectTypeInput = document.getElementById('modifyProjectType');
  const modifyProjectDescriptionInput = document.getElementById('modifyProjectDescription');
  const modifyProjectRequirementsInput = document.getElementById('modifyProjectRequirements');

  modifyProjectIdInput.value = proyectoId;
  modifyProjectNameInput.value = nombre;
  modifyProjectTypeInput.value = tipo;
  modifyProjectDescriptionInput.value = descripcion;
  modifyProjectRequirementsInput.value = requerimientos;
});