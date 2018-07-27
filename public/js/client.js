$(document).ready(function () {
    // Selectors for requests
    let newBurgerInput = $("#newBurgerInput");
    let addBurgerBtn = $("#addBurgerBtn");
    let devourBtn = $(".devourBtn");
  
// only allow post request if there is something in the field, otherwise add animation to the input field
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
            newBurgerInput.bind("animationend", function () {
                $(this).removeClass("animated shake border border-danger");
            }).addClass("animated shake border border-danger");
        }
    });

    // use AJAX for put request
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




