function ajaxPost ( form ) {
  let formData = new FormData(form);
  $.ajax({
    url: 'actionEmpty.php',
    type: 'POST',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    success: function () {
      alert("Wysłano");
    }
  });
}
