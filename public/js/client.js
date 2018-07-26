$(document).ready(function () {
    // Selectors for requests
    let newBurgerInput = $("#newBurgerInput");
    let addBurgerBtn = $("#addBurgerBtn");
    let devourBtn = $(".devourBtn");


    addBurgerBtn.click(() => {
        event.preventDefault();
        let newBurgerReq = newBurgerInput.val();
        if (newBurgerReq) {
            newBurgerInput.val('');
            let newBurgerObj = {
                burger_name: newBurgerReq,
                devoured: 0
            }
            $.post("/create", newBurgerObj)
                .done((data) => {
                    if (data === 'Created') {
                        window.location.href = '/';
                    }
                });
        } else {
            alert('Burger names cannot be empty')
        }
    }); 

    devourBtn.on('click', function () {
        event.preventDefault();
        let devouredBurger = $(this).data("devourid");
        $.ajax({
            url: '/' + devouredBurger,
            type: 'PUT'
        }).done((data) => {
            if (data === 'OK') {
                window.location.href = '/';
            }
        });
 
    });

});




