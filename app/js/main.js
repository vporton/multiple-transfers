function addTransferWidget() {
    let elt = $('#transfer_tmpl').clone();
    elt.css('display', 'block');
    $('#transfers').append(elt);
}
