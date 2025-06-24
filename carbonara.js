document.addEventListener('DOMContentLoaded', function(){
    const factorInput = document.getElementById('factor_portion');

    function updatePortionFactor(){
        let newValue = parseInt(factorInput);
        factorInput.value = newValue;
    }
    updatePortionFactor();
});