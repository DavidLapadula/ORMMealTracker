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
            // makes a new burger then reloads page to display new results
            $.post("/create", newBurgerObj)
                .done((response) => {
                    if (response === 'Created') {
                        window.location.href = '/';
                    }
                });
        } else {  
            newBurgerInput.bind("animationend", function () {
                // method for animate CSS if the field is empty
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
        }).done((response) => {
            if (response === 'OK') {
                window.location.href = '/';
            }
        });
 
    });
   
}); 




