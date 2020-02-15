let numberOfForms = 1;

function addForm() {
  let basicForm = `
    <div class="container" id="form_${numberOfForms}">
        <form method="post" enctype="multipart/form-data" action="action.php">
            <input type="hidden" value="${numberOfForms}" name="id"/>
            <div class="form-group">
                <label for="name_${numberOfForms}">Name: </label>
                <input type="text" id="name_${numberOfForms}" name="name" class="form-control">
            </div>
            <div class="form-group">
                <label for="file_${numberOfForms}">Przeciąg w okienko poniżej lub kliknij przycisk.</label>
                <input type="file" name="files[]" accept="image/png, image/jpeg" multiple="multiple" id="file_${numberOfForms}" class="form-control" style="height: 100%;">
                <button type="submit" class="btn btn-info">Wyślij zdjęcia</button>
            </div>
            <div class="form-group">
                <button type="button" id="deleteForm_${numberOfForms}" class="btn btn-danger" onclick="deleteForm(${numberOfForms})">Usuń</button>
                <button type="button" id="addForm_${numberOfForms}" class="btn btn-success" onclick="addForm()">Dodaj obiekt</button>
            </div>
        </form>
    </div>`;
  numberOfForms++;
  document.body.innerHTML += basicForm;
}

function deleteForm( indexOfForm ) {
  let divToDelete = document.querySelector("#form_"+indexOfForm);
  document.body.removeChild(divToDelete);
}

addForm();

