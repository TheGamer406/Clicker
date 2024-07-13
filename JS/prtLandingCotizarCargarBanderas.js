document.addEventListener("DOMContentLoaded", function() {
    var input = document.querySelector("#txtNumeroTelFormCotizarLandign");
    window.intlTelInput(input, {
        preferredCountries: ["cr", "mx", "co", "ec"],
        separateDialCode: true,
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
    });
});
