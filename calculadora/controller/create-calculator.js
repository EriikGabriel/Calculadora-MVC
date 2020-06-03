function CreateCalculator(options = { rowsNumber: 5, rows: [[]] }) {
    for (let i = 0; i < options.rowsNumber; i++) {
        var div = $('div[id^="buttons-row"]:last');
        var num = parseInt(div.prop('id').match(/\d+/g), 10) + 1;
        
        div.clone().appendTo('#buttons-group').prop('id', 'buttons-row-' + num);
        
        $(`#buttons-row-${i + 1} .btn-calc`)[0].innerHTML = options.rows[i][0]
        $(`#buttons-row-${i + 1} .btn-calc`)[0].parentNode.id = options.rows[i][0]
    
        $(`#buttons-row-${i + 1} .btn-calc`)[1].innerHTML = options.rows[i][1]
        $(`#buttons-row-${i + 1} .btn-calc`)[1].parentNode.id = options.rows[i][1]
    
        $(`#buttons-row-${i + 1} .btn-calc`)[2].innerHTML = options.rows[i][2]
        $(`#buttons-row-${i + 1} .btn-calc`)[2].parentNode.id = options.rows[i][2]
    
        $(`#buttons-row-${i + 1} .btn-calc`)[3].innerHTML = options.rows[i][3]
        $(`#buttons-row-${i + 1} .btn-calc`)[3].parentNode.id = options.rows[i][3] 
    }
}

CreateCalculator({
    rowsNumber: 5,
    rows: [
        ["C", "<", "%", "/"],
        ["7", "8", "9", "x"],
        ["4", "5", "6", "-"],
        ["1", "2", "3", "+"],
        ["+/-", "0", ",", "="],
    ]
})