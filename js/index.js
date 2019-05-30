
$(document).ready(function(){
    $("#number").intlTelInput({
        allowDropdown: true,

        autoHideDialCode: false,

        customPlaceholder: null,

        dropdownContainer: null,

        excludeCountries: [],

        formatOnDisplay: true,

        nationalMode: true,

        placeholderNumberType: "MOBILE",

        preferredCountries: [ "in" ],

        separateDialCode: true,


    });
    
});
