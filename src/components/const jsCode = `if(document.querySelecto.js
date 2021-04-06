const jsCode = `if(document.querySelector('span.pf-credit-card__remove-text')?.innerText === 'Remove Card'){
    document.querySelector('span.pf-credit-card__remove-text').click();
    document.getElementsByClassName('btn btn-secondary v-medium pf-deletion-modal__submit-button')[0].click();
    document.querySelector('a.pf-credit-card-list__add-payment-method-card').click();
    
    document.querySelector("#cardNumber-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "5224310000029118")
    Object.getOwnPropertyDescriptor(document.querySelector("#expirationMonth-id").__proto__, 'value').
    set.call(document.querySelector("#expirationMonth-id"),"04");
    document.querySelector("#expirationMonth-id").dispatchEvent(new Event('change',{bubbles: true}))
    Object.getOwnPropertyDescriptor(document.querySelector("#expirationYear-id").__proto__, 'value').
    set.call(document.querySelector("#expirationYear-id"),"2024");
    document.querySelector("#expirationYear-id").dispatchEvent(new Event('change',{bubbles: true}))
    document.querySelector("#firstName-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "DEMO")
    document.querySelector("#lastName-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "Name")
    document.querySelector("#addressLine1-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "Abc Street, Xyz")
    document.querySelector("#city-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "XYZ City")
    Object.getOwnPropertyDescriptor(document.querySelector("#state-id").__proto__, 'value').
    set.call(document.querySelector("#state-id"),"AL");
    document.querySelector("#state-id").dispatchEvent(new Event('change',{bubbles: true}))
    document.querySelector("#zip-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "36117")
    document.querySelector("#phone-id").focus()
    document.execCommand("selectAll")
    document.execCommand("delete")
    document.execCommand("insertText", false, "5105550174")
    document.getElementById('cardNumber-id').scrollIntoView()
    document.getElementsByClassName('btn btn-secondary v-medium pf-add-update-form__submit-button')[0].click()
    setTimeout(function(){ 
        document.getElementsByClassName('btn btn-secondary v-medium pf-confirm-address__confirm-button')[0].click()
     }, 3000);

     setTimeout(function(){ 
        window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : "ok"}));
    }, 4000);true;

}
else{
    document.querySelector('a.pf-credit-card-list__add-payment-method-card').click();
        document.querySelector("#cardNumber-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "5224310000029118")
        Object.getOwnPropertyDescriptor(document.querySelector("#expirationMonth-id").__proto__, 'value').
        set.call(document.querySelector("#expirationMonth-id"),"04");
        document.querySelector("#expirationMonth-id").dispatchEvent(new Event('change',{bubbles: true}))
        Object.getOwnPropertyDescriptor(document.querySelector("#expirationYear-id").__proto__, 'value').
        set.call(document.querySelector("#expirationYear-id"),"2024");
        document.querySelector("#expirationYear-id").dispatchEvent(new Event('change',{bubbles: true}))
        document.querySelector("#firstName-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "DEMO")
        document.querySelector("#lastName-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "Name")
        document.querySelector("#addressLine1-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "Abc Street, Xyz")
        document.querySelector("#city-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "XYZ City")
        Object.getOwnPropertyDescriptor(document.querySelector("#state-id").__proto__, 'value').
        set.call(document.querySelector("#state-id"),"AL");
        document.querySelector("#state-id").dispatchEvent(new Event('change',{bubbles: true}))
        document.querySelector("#zip-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "36117")
        document.querySelector("#phone-id").focus()
        document.execCommand("selectAll")
        document.execCommand("delete")
        document.execCommand("insertText", false, "5105550174")
        document.getElementById('cardNumber-id').scrollIntoView()
        document.getElementsByClassName('btn btn-secondary v-medium pf-add-update-form__submit-button')[0].click()
        setTimeout(function(){ 
            document.getElementsByClassName('btn btn-secondary v-medium pf-confirm-address__confirm-button')[0].click()
         }, 3000);

         setTimeout(function(){ 
            window.ReactNativeWebView.postMessage(JSON.stringify({type: "click", message : "ok"}));
        }, 4000); true;
}`;