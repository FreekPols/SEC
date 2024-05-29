const addFigureForm = () => {
    // Dynamically create and append the form
    var form = document.createElement('form');

    // Name input label + form
    var nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = 'Label:';
    form.appendChild(nameLabel);
    form.appendChild(document.createElement('br'));

    // Referentienaam
    var nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');
    nameInput.setAttribute('name', 'name');
    nameInput.setAttribute('required', 'true');
    form.appendChild(nameInput);
    form.appendChild(document.createElement('br'));

    // Image location input label + form
    var imageLabel = document.createElement('label');
    imageLabel.setAttribute('for', 'imageLocation');
    imageLabel.textContent = 'Image Location + name + extension:';
    form.appendChild(imageLabel);
    form.appendChild(document.createElement('br'));

    var imageInput = document.createElement('input');
    imageInput.setAttribute('type', 'text');
    imageInput.setAttribute('id', 'imageLocation');
    imageInput.setAttribute('name', 'imageLocation');
    imageInput.setAttribute('required', 'true');
    form.appendChild(imageInput);
    form.appendChild(document.createElement('br'));

    // Width input label + form
    var widthLabel = document.createElement('label');
    widthLabel.setAttribute('for', 'width');
    widthLabel.textContent = 'Width:';
    form.appendChild(widthLabel);
    form.appendChild(document.createElement('br'));

    var widthInput = document.createElement('input');
    widthInput.setAttribute('type', 'text');
    widthInput.setAttribute('id', 'width');
    widthInput.setAttribute('name', 'width');
    widthInput.setAttribute('required', 'true');
    form.appendChild(widthInput);
    form.appendChild(document.createElement('br'));

    // Caption input label + form
    var captionLabel = document.createElement('label');
    captionLabel.setAttribute('for', 'caption');
    captionLabel.textContent = 'Caption:';
    form.appendChild(captionLabel);
    form.appendChild(document.createElement('br'));

    var captionInput = document.createElement('input');
    captionInput.setAttribute('type', 'text');
    captionInput.setAttribute('id', 'caption');
    captionInput.setAttribute('name', 'caption');
    captionInput.setAttribute('required', 'true');
    form.appendChild(captionInput);
    form.appendChild(document.createElement('br'));

    // Select table or figure label + form
    var typeLabel = document.createElement('label');
    typeLabel.setAttribute('for', 'type');
    typeLabel.textContent = 'Select Table or Figure:';
    form.appendChild(typeLabel);
    form.appendChild(document.createElement('br'));

    var typeSelect = document.createElement('select');
    typeSelect.setAttribute('id', 'type');
    typeSelect.setAttribute('name', 'type');
    var optionFigure = document.createElement('option');
    optionFigure.setAttribute('value', 'figure');
    optionFigure.textContent = 'Figure';
    typeSelect.appendChild(optionFigure);
    var optionTable = document.createElement('option');
    optionTable.setAttribute('value', 'table');
    optionTable.textContent = 'Table';
    typeSelect.appendChild(optionTable);
    form.appendChild(typeSelect);
    form.appendChild(document.createElement('br'));

    // Submit button
    var submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'button');
    submitButton.textContent = 'Submit';
    submitButton.addEventListener('click', submitForm);
    form.appendChild(submitButton);

    // Append the form to the body
    document.getElementById("exform").appendChild(form);
}

const createFigureReference = (path, name, width, caption) => {
    return "<b>Figuur code: </b><br/>"
        + "```{figure} " + path + "<br/>"
        + "--- <br/>"
        + "width: " + width + "<br/>"
        + "name: " + name + "<br/>"
        + "---<br/>"
        + caption + "<br/> ```<br/>"
        + "<b>Figuur referentie: </b><br/>"
        + "{numref}`{number} &lt" + name + "&gt`";
}

const submitForm = () => {
    var path = document.getElementById('imageLocation').value;
    var name = document.getElementById('name').value;
    var width = document.getElementById('width').value;
    var caption = document.getElementById('caption').value;
    var type = document.getElementById('type').value;

    if (type === 'figure') {
        var reference = createFigureReference(path, name, width, caption);
    } else {
        var reference = createTableReference(caption, name);
    }

    // You can handle the output as needed, e.g., display it or save it somewhere
    console.log(reference);
}

document.addEventListener("DOMContentLoaded", () => {
    addFigureForm();
});
