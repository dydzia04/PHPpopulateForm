let numberOfForms = 1;
let bodyHTML = document.body.innerHTML;

function addForm() {
  let basicForm = `
    <div class="container">
        <form method="post" enctype="multipart/form-data" action="actionEmpty.php" id="form_${numberOfForms}">
            <input type="hidden" value="${numberOfForms}" name="id"/>
            <div class="form-group" id="nameInput">
                <label for="name_${numberOfForms}">Name: </label>
                <input type="text" id="name_${numberOfForms}" name="name" class="form-control">
            </div>
            <div class="form-group photoUpload">
                <label for="file_${numberOfForms}">Przeciąg w okienko poniżej lub kliknij przycisk.</label>
                <input type="file" name="files[]" accept="image/png, image/jpeg" multiple="multiple" id="file_${numberOfForms}" class="form-control photoInput" style="height: 100%;">
                <!--<button type="submit" class="btn btn-info"></button>-->
                <button type="button" onclick="ajaxPost(form_${numberOfForms})" class="btn btn-info">Wyślij zdjęcia</button>
            </div>
            <div class="form-group" id="buttonInput">
                <button type="button" id="deleteForm_${numberOfForms}" class="btn btn-danger" onclick="deleteForm(${numberOfForms})">Usuń</button>
                <button type="button" id="addForm_${numberOfForms}" class="btn btn-success" onclick="addForm()">Dodaj obiekt</button>
            </div>
        </form>
        <hr/>
    </div>`;
  numberOfForms++;
  document.body.insertAdjacentHTML("beforeend", basicForm);
}

function deleteForm( indexOfForm ) {
  let divToDelete = document.querySelector("#form_"+indexOfForm);
  document.body.removeChild(divToDelete);
}
//---------------------------------------------------------------------------
addForm();
