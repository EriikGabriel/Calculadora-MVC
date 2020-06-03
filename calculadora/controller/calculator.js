$(document).ready(() => {
    $('#open').click(() => {
    })
    $('#content').load('calculadora/view/calculadora.html')

    
    $(document).on('click', '.cc', (e) => {
        const miniDisplay = $('#mini-display')
        const display = $('#display')
        
        if(e.target.nodeName == "BUTTON") {
            var id = e.target.id
        } else {
            var id = e.target.parentNode.id
        }

        

        switch (id) {
            case "C":
                miniDisplay.html("") 
                display.val("") 
                break;
            case "+":
                if(display.data('isResult') == true) {
                    miniDisplay.html('')
                    miniDisplay.html(`${display.val()} ${id}`) 
                    display.data('operation', '+')
                    display.data('isResult', false)
                } else if(miniDisplay.html() != '') {
                    var conta = display.data('value') + parseInt(display.val())

                    miniDisplay.html(`${miniDisplay.html()} ${display.val()} ${id}`) 
                    display.val(conta)
                    display.data('value', parseInt(display.val()))
                    display.data('operation', '+')
                    
                } else {
                    if(miniDisplay.html() == '') {
                        miniDisplay.html(`${display.val()} ${id}`) 
                        display.data('value', parseInt(display.val()))
                    } else {
                        miniDisplay.html(`${miniDisplay.html()} ${display.val()} ${id}`) 
                    }
                    
                    display.data('operation', '+')
                }
                
                break;
            case "-":
                if(display.data('isResult') == true) {
                    miniDisplay.html('')
                    miniDisplay.html(`${display.val()} ${id}`) 
                    display.data('operation', '-')
                    display.data('isResult', false)
                } else if(miniDisplay.html() != '') {
                    var conta = display.data('value') - parseInt(display.val())

                    miniDisplay.html(`${miniDisplay.html()} ${display.val()} ${id}`) 
                    display.val(conta)
                    display.data('value', parseInt(display.val()))
                    display.data('operation', '-')
                    
                } else {
                    if(miniDisplay.html() == '') {
                        miniDisplay.html(`${display.val()} ${id}`) 
                        display.data('value', parseInt(display.val()))
                    } else {
                        miniDisplay.html(`${miniDisplay.html()} ${display.val()} ${id}`) 
                    }
                    
                    display.data('operation', '-')
                }
                
                break;
            case "=":
                if(display.data('isResult') !== true) {
                    var conta = display.data('value') + parseInt(display.val())

                    miniDisplay.html(`${miniDisplay.html()} ${display.val()}`)
                    display.val(conta)
                    display.data('value', parseInt(display.val()))
                    display.data('isResult', true)
                }
                break;

            default:
                break;
        }

        for (let i = 0; i < 10; i++) { 
            console.log(display.data('operation'))
            if(id == `${i}` && display.data('isResult') == true ) {
                display.val('')
                miniDisplay.html('')
                display.val(id)
                display.data('value', 0)
                display.data('isResult', false)
            } else if(id == `${i}` && display.data('operation') == '+') {
                display.val('')
                display.val(id)
                display.data('operation', false)
            } else if(id == `${i}`){
                display.val(`${display.val()}${id}`)
            }
        }
    })
})