var formSubmitted = false;
var formFocused = false;
var formId;
var productName4HT = false;
var productName4SA = false;

(function ($) {
    $(document).ready(function () {

        $("#futureContact").keydown(function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                if (!$(this).prop('checked')) {
                    $(this).prop('checked', true);
                }
                else {
                    $(this).prop('checked', false);
                }
            }
        });

        var panels = document.getElementsByClassName("frm-panel");
        $('.productrange').hide();
        $('.productnamegs').hide();
        $('.productnamesl').hide();
        $('.units').hide();
        $('.unitsgs').hide();
        $('.units4ht').hide();
        $('.units4sa').hide();

        // Form Validations for MVC
        $('input#firstname').attr({ maxLength: 50 });
        $('input#lastname').attr({ maxLength: 50 });
        $('input#company').attr({ maxLength: 100 });
        $('input#country').attr({ maxLength: 80 });
        $('input#city').attr({ maxLength: 50 });
        $('input#productrange').attr({ maxLength: 80 });
        $('input#productnamegs').attr({ maxLength: 80 });
        $('input#productnamesl').attr({ maxLength: 80 });
        $('input#units').attr({ maxLength: 40 });
        $('input#unitsgs').attr({ maxLength: 40 });
        $('input#units4ht').attr({ maxLength: 40 });
        $('input#units4sa').attr({ maxLength: 40 });
        $('input#businessemail').attr({ maxLength: 75 });
        $('input#businessphone').attr({ maxLength: 30 });
        $('#comments').attr({ maxLength: 32000 });
        $('input#businesspphoneext').attr({ maxLength: 10 });

        $('#code').prop("readonly", true);


        $('#businessphone').val('');

        $("#inquiry").change(function () {
            var inquiryValue = $('.inquiry :selected').val().toLowerCase();

            var type = inquiryValue.split("~");
            var inquiryType = type[0];
            var productRange = [];
            var productNameGS = [];
            var productNameSL = [];
            var units = [];
            var unitsGS = [];
            var units4HT = [];
            var units4SA = [];
            $('.productrange').val($(".productrange option:first").val());
            $('.productrange :checked').each(function (i) {

                productRange[i] = $(this);
            });
            $('.productnamegs :checked').each(function (j) {

                productNameGS[j] = $(this);

            });
            $('.productnamesl :checked').each(function (k) {

                productNameSL[k] = $(this);

            });
            $('.units :checked').each(function (n) {

                units[n] = $(this);

            });
            $('.unitsgs :checked').each(function (o) {

                unitsGS[o] = $(this);

            });
            $('.units4ht :checked').each(function (p) {

                units4HT[p] = $(this);

            });
            $('.units4sa :checked').each(function (q) {

                units4SA[q] = $(this);

            });

            if ((inquiryType === "request a quote") || (inquiryType === "ask a question")) {

                for (let i = 0; i < productRange.length; i++) {
                    if (typeof productRange[i] != "undefined") {
                        productRange[i].attr('checked', false)
                    }
                }

                for (let i = 0; i < productNameGS.length; i++) {
                    for (let j = 0; j < unitsGS.length; j++) {
                        if (typeof unitsGS[j] != "undefined") {
                            unitsGS[j].attr('checked', false)
                        }
                    }
                    if (typeof productNameGS[i] != "undefined") {
                        productNameGS[i].attr('checked', false)
                    }
                }
                for (let i = 0; i < productNameSL.length; i++) {
                    for (let j = 0; j < units.length; j++) {
                        if (typeof units[j] != "undefined") {
                            units[j].attr('checked', false)
                        }
                    }
                    if (typeof productNameSL[i] != "undefined") {
                        productNameSL[i].attr('checked', false)
                    }
                }
                for (let j = 0; j < units4ht.length; j++) {
                    if (typeof units4ht[j] != "undefined") {
                        units4ht[j].attr('checked', false)
                    }
                }
                for (let j = 0; j < units4sa.length; j++) {
                        if (typeof units4sa[j] != "undefined") {
                            units4sa[j].attr('checked', false)
                        }
                }

                $('.productrange').show();
                panels[0].setAttribute('aria-hidden', 'false');
                panels[0].removeAttribute('hidden');
                $('.productnamegs').hide();
                $('.productnamesl').hide();
                $('.units').hide();
                $('.unitsgs').hide();
                $('.units4ht').hide();
                $('.units4sa').hide();
            }

            else {
                $('.productrange').hide();
                $('.productnamegs').hide();
                $('.productnamesl').hide();
                $('.units').hide();
                $('.unitsgs').hide();
                $('.units4ht').hide();
                $('.units4sa').hide();
                panels[0].setAttribute('aria-hidden', 'true');
                panels[0].setAttribute('hidden', 'true');
            }

        });


        $('.productrange').on('click', function () {

            var i = 0;
            var productRange = [];
            var productNameGS = [];
            var productNameSL = [];
            var units = [];
            var unitsGS = [];
            var units4HT = [];
            var units4SA = [];
            var inquiryValue = $('.inquiry :selected').val().toLowerCase();

            var type = inquiryValue.split("~");
            var inquiry = type[0];

            allCboxes = document.querySelectorAll('.frm-product-panel input[type=checkbox]');

            $('.productnamegs :checked').each(function (j) {

                productNameGS[j] = $(this);

            });
            $('.productnamesl :checked').each(function (k) {

                productNameSL[k] = $(this);

            });            
            $('.units :checked').each(function (n) {

                units[n] = $(this);

            });
            $('.unitsgs :checked').each(function (o) {

                unitsGS[o] = $(this);

            });
            $('.units4ht :checked').each(function (p) {

                units4HT[p] = $(this);

            });
            $('.units4sa :checked').each(function (q) {

                units4SA[q] = $(this);

            });
            $('.productrange :checked').each(function (i) {

                productRange[i] = $(this).val();
            });
            if (($('.productrange :checked').length !== 0) && (inquiry == "request a quote")) {

                if (productRange.length === 1) {

                    if (productRange[i] === "Suniso GS") {
                        $('.productnamegs').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();
                        productName4HT = false;
                        productName4SA = false;                        
                        $('.units4ht').hide();
                        $('.units4sa').hide();

                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }

                    }
                    else if (productRange[i] === "Suniso SL") {
                        $('.productnamesl').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();
                        productName4HT = false;
                        productName4SA = false;                      
                        $('.units4ht').hide();
                        $('.units4sa').hide();
                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                    }
                    else if (productRange[i] === "Suniso 4HT") {                      
                        $('.units4ht').show();                       
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();                      
                        $('.units4sa').hide();
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                        productName4HT = true;
                        productName4SA = false;
                    }
                    else if (productRange[i] === "Suniso 4SA") {
                        $('.units4sa').show();                       
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();                       
                        $('.units4ht').hide();
                        productName4HT = false;
                        productName4SA = true;
                    }
                }
                else if (productRange.length === 2) {
                    if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL")) {
                        $('.productnamegs').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        $('.productnamesl').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }                       
                        $('.units4ht').hide();
                        $('.units4sa').hide();
                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                        productName4HT = false;
                        productName4SA = false;
                    }
                    else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4HT")) {
                        $('.productnamegs').show();
                        $('.units4ht').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        $('.productname4ht').show();                      
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();                       
                        $('.units4sa').hide();
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                        productName4HT = true;
                        productName4SA = false;
                    }
                    else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4SA")) {
                        $('.productnamegs').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        $('.productname4sa').show();                      
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();                      
                        $('.units4ht').hide();
                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        productName4HT = false;
                        productName4SA = true;
                    }
                    else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4HT")) {
                        $('.productnamesl').show();
                        $('.units4ht').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }                       
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();                       
                        $('.units4sa').hide();
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                        productName4HT = true;
                        productName4SA = false;
                    }
                    else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4SA")) {
                        $('.productnamesl').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }                      
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();                      
                        $('.units4ht').hide();
                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        productName4HT = false;
                        productName4SA = true;
                    }
                    else if ((productRange[0] === "Suniso 4HT") && (productRange[1] === "Suniso 4SA")) {
                        $('.units4ht').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();
                        productName4HT = true;
                        productName4SA = true;
                    }
                }
                else if (productRange.length === 3) {
                    if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL") && (productRange[2] === "Suniso 4HT")) {
                        $('.productnamegs').show();
                        $('.units4ht').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        $('.productnamesl').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }                       
                        $('.units4sa').hide();
                        for (let i = 0; i < units4SA.length; i++) {
                            if (typeof units4SA[i] != "undefined") {
                                units4SA[i].attr('checked', false)
                            }
                        }
                        productName4HT = true;
                        productName4SA = false;
                    }
                    else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL") && (productRange[2] === "Suniso 4SA")) {
                        $('.productnamegs').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }
                        $('.productnamesl').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }
                        $('.units4ht').hide();
                        for (let i = 0; i < units4HT.length; i++) {
                            if (typeof units4HT[i] != "undefined") {
                                units4HT[i].attr('checked', false)
                            }
                        }
                        productName4HT = false;
                        productName4SA = true;
                    }
                    else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4HT") && (productRange[2] === "Suniso 4SA")) {
                        $('.productnamegs').show();
                        $('.units4ht').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameGS.length; i++) {
                            if (typeof productNameGS[i] != "undefined") {
                                $('.unitsgs').show();
                            }
                        }                        
                        for (let i = 0; i < productNameSL.length; i++) {
                            for (let j = 0; j < units.length; j++) {
                                if (typeof units[j] != "undefined") {
                                    units[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameSL[i] != "undefined") {
                                productNameSL[i].attr('checked', false)
                            }
                        }
                        $('.productnamesl').hide();
                        $('.units').hide();
                        productName4HT = true;
                        productName4SA = true;
                    }
                    else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4HT") && (productRange[2] === "Suniso 4SA")) {
                        $('.productnamesl').show();
                        $('.units4ht').show();
                        $('.units4sa').show();
                        for (let i = 0; i < productNameSL.length; i++) {
                            if (typeof productNameSL[i] != "undefined") {
                                $('.units').show();
                            }
                        }                       
                        for (let i = 0; i < productNameGS.length; i++) {
                            for (let j = 0; j < unitsGS.length; j++) {
                                if (typeof unitsGS[j] != "undefined") {
                                    unitsGS[j].attr('checked', false)
                                }
                            }
                            if (typeof productNameGS[i] != "undefined") {
                                productNameGS[i].attr('checked', false)
                            }
                        }
                        $('.productnamegs').hide();
                        $('.unitsgs').hide();
                        productName4HT = true;
                        productName4SA = true;
                    }
                }
                else if (productRange.length == 4) {                   
                    $('.productnamesl').show();
                    $('.productnamegs').show();                  
                    $('.units4ht').show();
                    $('.units4sa').show();
                    for (let i = 0; i < productNameGS.length; i++) {
                        if (typeof productNameGS[i] != "undefined") {
                            $('.unitsgs').show();
                        }
                        else {
                            $('.unitsgs').hide();
                        }
                    }
                    for (let i = 0; i < productNameSL.length; i++) {
                        if (typeof productNameSL[i] != "undefined") {
                            $('.units').show();
                        }
                        else {
                            $('.units').hide();
                        }
                    }
                    productName4HT = true;
                    productName4SA = true;                   
                }

            }

            else if (($('.productrange :checked').length !== 0) && (inquiry == "ask a question")) {
                $('.productrange :checked').each(function (i) {

                    productRange[i] = $(this).val();
                    if (productRange.length === 1) {
                        if ((productRange[0] === "Suniso GS")) {
                            $('.productnamegs').show();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();                           
                        }
                        else if ((productRange[0] === "Suniso SL")) {
                            $('.productnamesl').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();                          
                        }
                        else if ((productRange[0] === "Suniso 4HT")) {
                            $('.productname4ht').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();                           
                        }
                        else if ((productRange[0] === "Suniso 4SA")) {
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();                           
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();
                        }
                    }
                    else if (productRange.length == 2) {
                        if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL")) {
                            $('.productnamegs').show();
                            $('.productnamesl').show();                            
                        }
                        else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4HT")) {
                            $('.productnamegs').show();
                            $('.productname4ht').show();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();                            
                        }
                        else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4SA")) {
                            $('.productnamegs').show();
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();                           
                        }
                        else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4HT")) {
                            $('.productnamesl').show();
                            $('.productname4ht').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();                          
                        }
                        else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4SA")) {
                            $('.productnamesl').show();
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();                           
                        }
                        else if ((productRange[0] === "Suniso 4HT") && (productRange[1] === "Suniso 4SA")) {
                            $('.productname4ht').show();
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();
                        }
                    }
                    else if (productRange.length == 3) {
                        if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL") && (productRange[2] === "Suniso 4HT")) {
                            $('.productnamegs').show();
                            $('.productnamesl').show();
                            $('.productname4ht').show();                           
                        }
                        else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso SL") && (productRange[2] === "Suniso 4SA")) {
                            $('.productnamegs').show();
                            $('.productnamesl').show();
                            $('.productname4sa').show();                          
                        }
                        else if ((productRange[0] === "Suniso GS") && (productRange[1] === "Suniso 4HT") && (productRange[2] === "Suniso 4SA")) {
                            $('.productnamegs').show();
                            $('.productname4ht').show();
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameSL.length; i++) {
                                if (typeof productNameSL[i] != "undefined") {
                                    productNameSL[i].attr('checked', false)
                                }
                            }
                            $('.productnamesl').hide();
                        }
                        else if ((productRange[0] === "Suniso SL") && (productRange[1] === "Suniso 4HT") && (productRange[2] === "Suniso 4SA")) {
                            $('.productnamesl').show();
                            $('.productname4ht').show();
                            $('.productname4sa').show();
                            for (let i = 0; i < productNameGS.length; i++) {
                                if (typeof productNameGS[i] != "undefined") {
                                    productNameGS[i].attr('checked', false)
                                }
                            }
                            $('.productnamegs').hide();
                        }
                    }
                    else if (productRange.length == 4) {
                        $('.productnamegs').show();
                        $('.productnamesl').show();                       
                    }

                });
            }
            else {
                  for (let i = 0; i < allCboxes.length; i++) {
                    allCboxes[i].checked = false;
                  }
                  $('.productnamegs').hide();
                  $('.productnamesl').hide();
                  $('.units').hide();
                  $('.unitsgs').hide();
                  $('.units4ht').hide();
                  $('.units4sa').hide();
            }

        });



        $('.productnamegs').click(function () {

            ProductNameSelect();
        });

        function ProductNameSelect() {

            var inquiryValue = $('.inquiry :selected').val().toLowerCase();

            var type = inquiryValue.split("~");
            var inquiry = type[0];

            var units = [];
            var unitsGS = [];
            var units4HT = [];
            var units4SA = [];

            var productNameGS = $('.productnamegs :checked').val();
            var productNameSL = $('.productnamesl :checked').val();          
            $('.units :checked').each(function (l) {

                units[l] = $(this);

            });
            $('.unitsgs :checked').each(function (m) {

                unitsGS[m] = $(this);

            });
            $('.units4ht :checked').each(function (n) {

                units4HT[n] = $(this);

            });
            $('.units4sa :checked').each(function (o) {

                units4SA[o] = $(this);

            });
            if (inquiry === "ask a question") {
                $('.units').hide();
                $('.unitsgs').hide();
                $('.units4ht').hide();
                $('.units4sa').hide();
            }
            else {
                if ((typeof productNameGS !== "undefined") && (typeof productNameSL == "undefined") && productName4HT === false && productName4SA === false) {
                    $('.unitsgs').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.units').hide();
                    $('.units4ht').hide();
                    $('.units4sa').hide();

                }
                else if ((typeof productNameSL !== "undefined") && (typeof productNameGS == "undefined") && productName4HT === false && productName4SA === false) {
                    $('.units').show();
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units4ht').hide();
                    $('.units4sa').hide();

                }
                else if (productName4HT === true && (typeof productNameGS == "undefined") && (typeof productNameSL == "undefined") && productName4SA === false) {
                    $('.units4ht').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units').hide();
                    $('.units4sa').hide();

                }
                else if (productName4SA === true && (typeof productNameGS == "undefined") && (typeof productNameSL == "undefined") && productName4HT === false) {
                    $('.units4sa').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units').hide();
                    $('.units4ht').hide();                                      
                }
                else if ((typeof productNameGS != "undefined") && (typeof productNameSL != "undefined") && productName4HT === false && productName4SA === false) {
                    $('.unitsgs').show();
                    $('.units').show();
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.units4ht').hide();
                    $('.units4sa').hide();
                }
                else if ((typeof productNameGS != "undefined") && productName4HT === true && (typeof productNameSL == "undefined") && productName4SA === false) {
                    $('.unitsgs').show();
                    $('.units4ht').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.units').hide();
                    $('.units4sa').hide();
                }
                else if ((typeof productNameGS != "undefined") && productName4SA === true && (typeof productNameSL == "undefined") && productName4HT === false) {
                    $('.unitsgs').show();
                    $('.units4sa').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    $('.units').hide();
                    $('.units4ht').hide();
                }
                else if ((typeof productNameSL != "undefined") && productName4HT === true && (typeof productNameGS == "undefined") && productName4SA === false) {
                    $('.units').show();
                    $('.units4ht').show();
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units4sa').hide();
                }
                else if ((typeof productNameSL != "undefined") && productName4SA === true && (typeof productNameGS == "undefined") && productName4HT === false) {
                    $('.units').show();
                    $('.units4sa').show();
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units4ht').hide();
                }
                else if (productName4HT === true && productName4SA === true && (typeof productNameGS == "undefined") && (typeof productNameSL == "undefined")) {
                    $('.units4ht').show();
                    $('.units4sa').show();
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                    $('.units').hide();
                }
                else if ((typeof productNameSL != "undefined") && (typeof productNameGS != "undefined") && productName4HT === true && productName4SA === false) {
                    $('.unitsgs').show();                  
                    $('.units').show();
                    $('.units4ht').show();
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }                   
                    $('.units4sa').hide();
                }
                else if ((typeof productNameSL != "undefined") && (typeof productNameGS != "undefined") && productName4HT === false && productName4SA === true) {
                    $('.unitsgs').show();
                    $('.units').show();
                    $('.units4sa').show();
                    for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    $('.units4ht').hide();
                }
                else if ((typeof productNameSL != "undefined") && (typeof productNameGS == "undefined") && productName4HT === true && productName4SA === true) {
                    $('.units').show();
                    $('.units4ht').show();
                    $('.units4sa').show();
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    }
                    $('.unitsgs').hide();
                }
                else if ((typeof productNameSL == "undefined") && (typeof productNameGS != "undefined") && productName4HT === true && productName4SA === true) {
                    $('.unitsgs').show();
                    $('.units4ht').show();
                    $('.units4sa').show();
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    $('.units').hide();
                }  
                else if ((typeof productNameSL != "undefined") && (typeof productNameGS != "undefined") && productName4HT === true && productName4SA === true) {
                    $('.unitsgs').show();
                    $('.units').show();
                    $('.units4ht').show();
                    $('.units4sa').show();
                }  
                else {
                    for (let i = 0; i < units.length; i++) {
                        if (typeof units[i] != "undefined") {
                            units[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < unitsGS.length; i++) {
                        if (typeof unitsGS[i] != "undefined") {
                            unitsGS[i].attr('checked', false)
                        }
                    } for (let i = 0; i < units4HT.length; i++) {
                        if (typeof units4HT[i] != "undefined") {
                            units4HT[i].attr('checked', false)
                        }
                    }
                    for (let i = 0; i < units4SA.length; i++) {
                        if (typeof units4SA[i] != "undefined") {
                            units4SA[i].attr('checked', false)
                        }
                    }
                    $('.units').hide();
                    $('.unitsgs').hide();
                    $('.units4ht').hide();
                    $('.units4sa').hide();

                }
            }

        };



        $('.productnamesl').click(function () {


            ProductNameSelect();
        });
        

        $("#country").change(function () {

            var countrycode = $('#country option:selected').data('countrycode');
            if (countrycode !== "") {
                countrycode = '+' + $('#country option:selected').data('countrycode');
            }

            $('#code').val(countrycode);
        });

        $.validator.methods.email = function (value, element) {
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }

        $.validator.addMethod("countrycoderegex", function (value, element, regexpr) {
            return regexpr.test(value);
        }, gitBusinessPhoneErr);

        $.validator.addMethod("blanknameregex", function (value, element) {
            return this.optional(element) || /.*\S.*/.test(value);
        });

        $.validator.addMethod("numberregex", function (value, element) {
            return this.optional(element) || /^(\+?( |-|\.)?\d{1,2}( |-|\.)?)?((\(\d{3}\))|(\d{3}))( |-|\.)?(\d{3}( |-|\.)?\d{4})$/.test(value);
        });

        $.validator.addMethod("numbercharregex", function (value, element) {
            return this.optional(element) || /^[0-9.,\s]+$/.test(value);
        });

        $.validator.addMethod("phonenumberregex", function (value, element) {
            return this.optional(element) || /^[0-9]+$/.test(value);
        });
        if ($('.thank-you-msg').length > 0) {

            $('.thank-you-msg').css('display', 'none');
        }
        if ($('#frmContact').length > 0) {


            var gitFirstNameErr, gitLastNameErr, gitCompanyErr, gitCityErr, gitCountryErr, gitBusinessEmailErr, gitBusinessPhoneExt, gitProductRangeErr, gitProductNameErr, gitVolumeErr, gitUnitsErr, gitInquiryTypeErr, gitBusinessPhoneErr;
            
            var gitFirstName = $('.pvs #firstname');
            var gitLastName = $('.pvs #lastname');
            var gitCompany = $('.pvs #company');
            var gitCity = $('.pvs #city');
            var gitCountry = $('.pvs #country');
            var gitBusinessEmail = $('.pvs #businessemail');
            var gitBusinessPhone = $('.pvs #businessphone');
            var gitInquiryType = $('.pvs #inquiry');
            var gitBusinessPhoneExt = $('.pvs #businessphoneext');

            if (gitInquiryType != undefined) {
                gitInquiryTypeErr = gitInquiryType.data('val-required');
            }

            if (gitFirstName != undefined) {
                gitFirstNameErr = gitFirstName.data('val-required');
            }
            if (gitLastName != undefined) {
                gitLastNameErr = gitLastName.data('val-required');
            }
            if (gitCompany != undefined) {
                gitCompanyErr = gitCompany.data('val-required');
            }
            if (gitCity != undefined) {
                gitCityErr = gitCity.data('val-required');
            }
            
            if (gitCountry != undefined) {
                gitCountryErr = gitCountry.data('val-required');
            }
            if (gitBusinessEmail != undefined) {
                gitBusinessEmailErr = gitBusinessEmail.data('val-required');
            }
           

            gitBusinessPhoneErr = $(gitBusinessPhone).data('val-required');
            gitBusinessPhoneExtErr = $(gitBusinessPhoneExt).data('val-required');

            $('#frmContact').validate({
                messages: {
                    firstname: {
                        required: gitFirstNameErr,
                        blanknameregex: gitFirstNameErr
                    },
                    lastname: {
                        required: gitLastNameErr,
                        blanknameregex: gitLastNameErr
                    },
                    company: {
                        required: gitCompanyErr,
                        blanknameregex: gitCompanyErr
                    },
                    city: {
                        required: gitCityErr,
                        blanknameregex: gitCityErr
                    },

                    country: gitCountryErr,
                    businessemail: gitBusinessEmailErr,
                    inquiry: gitInquiryTypeErr,

                    'businessphone': {
                        phonenumberregex: gitBusinessPhoneErr,
                        minlength: gitBusinessPhoneErr,
                        maxlength: gitBusinessPhoneErr
                    },
                    'businessphoneext': {
                        phonenumberregex: gitBusinessPhoneExtErr,
                        minlength: gitBusinessPhoneErr,
                        maxlength: gitBusinessPhoneErr

                    }
                },
                groups: {
                    businessphoneerror: 'countrycode phonenumber phoneext'
                },
                rules: {
                    'phonenumber': {
                        required: true,
                        numberregex: true,
                        blanknameregex: true,
                        businessphoneregex: true
                    },
                    'firstname': {
                        required: true,
                        blanknameregex: true
                    },
                    'lastname': {
                        required: true,
                        blanknameregex: true
                    },
                    'company': {
                        required: true,
                        blanknameregex: true
                    },

                    'city': {
                        required: true,
                        blanknameregex: true
                    },
                    'businessphone': {
                        phonenumberregex: true,
                        minlength: 0,
                        maxlength: 20
                    },
                    'businessphoneext': {
                        phonenumberregex: true,
                        minlength: 0,
                        maxlength: 20

                    }
                },
                submitHandler: GetInTouchSubmit

            });

            function GetInTouchSubmit() {

                var a = $('html')[0].lang.toLowerCase();
                $('#frmContact button').attr('disabled', 'disabled');
                var country, inquiry, units, productnamegs, productnamesl, unitsgs, desc, inquiryID;
                var firstName = $('#frmContact input#firstname').val();
                var lastName = $('#frmContact input#lastname').val();
                var company = $('#frmContact input#company').val();
                var businessPhoneExt = $('#frmContact input#businessphoneext').val();
                if ($("#country option:selected").text() != "Select a country") {
                    country = $("#country option:selected").val();
                }

                var city = $('#frmContact input#city').val();
                var businessEmail = $('#frmContact input#businessemail').val();
                var businessPhone = $('#frmContact input#businessphone').val();
                var businessPhoneExt = $('#frmContact input#businessphoneext').val();
                var comments = $('#frmContact #comments').val() ;

                var productrange = [];
                productnamegs = "";
                productnamesl = "";               
                units = "";
                unitsgs = "";
                units4ht = "";
                units4sa = "";
                $('.productrange :checked').each(function (j) {
                    productrange[j] = $(this).val();
                   // productrange += $(this).val() + ";";

                });

                $('.productnamegs :checked').each(function (j) {

                    productnamegs += $(this).val() + ";";

                });
                $('.productnamesl :checked').each(function (j) {

                    productnamesl += $(this).val() + ";";

                });                
                $('.units :checked').each(function (j) {

                    units += $(this).val() + ";";

                });
                $('.unitsgs :checked').each(function (j) {

                    unitsgs += $(this).val() + ";";

                });
                $('.units4ht :checked').each(function (j) {

                    units4ht += $(this).val() + ";";

                });
                $('.units4sa :checked').each(function (j) {

                    units4sa += $(this).val() + ";";

                });

                var inquirydesc = "";

                if ($("#inquiry option:selected").text() != "Select an inquiry type") {
                    var inquiryOption = $("#inquiry option:selected").val();
                    var id = inquiryOption.split("~");
                    inquiry = id[0];
                    inquirydesc = id[0];
                    inquiryID = id[1];
                    if (inquiry.toLowerCase() == "request a quote") {
                        inquiry = "Get a Quote";
                    }
                    else if (inquiry.toLowerCase() == "ask a question") {
                        inquiry = "Question About Products";
                    }
                    else {
                        inquiry = "Become a Distributor";
                    }
                }                
                if (productrange && inquirydesc.toLowerCase() == "ask a question") {
                   // console.log("inside ask a question")
                   // console.log(productrange)
                   // console.log(productrange.length)
                    if (productrange.length === 1) {
                       // console.log("inside ask a question1")
                        if (productrange[0] === "Suniso GS") {
                          //  console.log("inside gs")
                            desc = productrange[0] + ";" + productnamegs;
                           // console.log(desc)
                        }
                        else if (productrange[0] === "Suniso SL") {
                            desc = productrange[0] + ";" + productnamesl;
                        }
                        else if (productrange[0] === "Suniso 4HT") {
                            desc = productrange[0] + ";" ;
                        }
                        else if (productrange[0] === "Suniso 4SA") {
                            desc = productrange[0] + ";" ;
                        }
                    }
                    else if (productrange.length == 2) {
                        //console.log("inside ask a question1")
                        if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" + productnamesl;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamesl + productrange[1] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamesl + productrange[1] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso 4HT") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productrange[1] + ";" ;
                        }
                    }
                    else if (productrange.length == 3) {
                       // console.log("inside ask a question3")
                        if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL") && (productrange[2] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" + productnamesl + productrange[2] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" + productnamesl + productrange[2] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4HT") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" + productrange[2] + ";" ;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4HT") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamesl + productrange[1] + ";" + productrange[2] + ";" ;
                        }
                    }
                    else if (productrange.length == 4) {
                        //console.log("inside ask a question4")
                        desc = productrange[0] + ";" + productnamegs + productrange[1] + ";" + productnamesl + productrange[2] + ";" + productrange[3] + ";" ;
                    }
                    else {
                        desc = "";
                    }
                }
                else if (productrange && inquirydesc.toLowerCase() == "request a quote") {
                    if (productrange.length === 1) {
                        if (productrange[0] === "Suniso GS") {
                            desc = productrange[0] + ";" + productnamegs + unitsgs;
                        }
                        else if (productrange[0] === "Suniso SL") {
                            desc = productrange[0] + ";" + productnamesl + units;
                        }
                        else if (productrange[0] === "Suniso 4HT") {
                            desc = productrange[0] + ";" + units4ht;
                        }
                        else if (productrange[0] === "Suniso 4SA") {
                            desc = productrange[0] + ";" + units4sa;
                        }
                    }
                    else if (productrange.length == 2) {
                        if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";" + productnamesl + units;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";"  + units4ht;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";"  + units4sa;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamesl + units + productrange[1] + ";"  + units4ht;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamesl + units + productrange[1] + ";"  + units4sa;
                        }
                        else if ((productrange[0] === "Suniso 4HT") && (productrange[1] === "Suniso 4SA")) {
                            desc = productrange[0] + ";"  + units4ht + ";" + productrange[1] + ";"  + units4sa;
                        }
                    }
                    else if (productrange.length == 3) {
                        if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL") && (productrange[2] === "Suniso 4HT")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";" + productnamesl + units + productrange[2] + ";"  + units4ht;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso SL") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";" + productnamesl + units + productrange[2] + ";"  + units4sa;
                        }
                        else if ((productrange[0] === "Suniso GS") && (productrange[1] === "Suniso 4HT") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";"  + units4ht + productrange[2] + ";"  + units4sa;
                        }
                        else if ((productrange[0] === "Suniso SL") && (productrange[1] === "Suniso 4HT") && (productrange[2] === "Suniso 4SA")) {
                            desc = productrange[0] + ";" + productnamesl + units + productrange[1] + ";" + units4ht + productrange[2] + ";"  + units4sa;
                        }
                    }
                    else if (productrange.length == 4) {
                        desc = productrange[0] + ";" + productnamegs + unitsgs + productrange[1] + ";" + productnamesl + units + productrange[2] + ";" + units4ht + productrange[3] + ";"  + units4sa;
                    }
                    else {
                        desc = "";
                    }
                }               
                else {

                    desc = "";
                }
                
                var emailconsent = $("#futureContact").is(":checked");

                var formItemId = $('#frmContact input#form-itemid').val();


                //context lanuage, country from form hidden fields
                var contextLanguage = $('#hidden-context-language').val();
                var formLanguage;
                var countryName = $('#hidden-country-name').val();

                if (contextLanguage.startsWith("en-")) {
                    formLanguage = "English";
                }
                else if (contextLanguage.startsWith("fr-")) {
                    formLanguage = "French";
                }
                else if (contextLanguage.startsWith("es-")) {
                    formLanguage = "Espanol";
                }
                else if (contextLanguage.startsWith("de-")) {
                    formLanguage = "Deutsche";
                }
                else if (contextLanguage.startsWith("zh-")) {
                    formLanguage = "Chinese";
                }
                else if (contextLanguage.startsWith("ru-")) {
                    formLanguage = "Russian";
                }

                if (emailconsent) {
                    emailconsent = "Express";
                }
                
                if (emailconsent) {
                    var formContent = {
                        "FirstName": firstName,
                        "LastName": lastName,
                        "Company": company,
                        "Country": country,
                        "City": city,
                        "BusinessEmail": businessEmail,
                        "BusinessPhone": businessPhone,
                        "BusinessPhoneExt": businessPhoneExt,
                        "ProductRange": productrange,
                        "ProductNameGS": productnamegs,
                        "ProductNameSL": productnamesl,                       
                        "Units": units,
                        "UnitsGS": unitsgs,
                        "Units4HT": units4ht,
                        "Units4SA": units4sa,
                        "Comments": desc + comments,
                        "Inquiry": inquiry,
                        "EmailConsent": emailconsent,
                        "FormItemId": formItemId,
                        "ContextLanguage": contextLanguage,
                        "FormLanguage": formLanguage,
                        "ContextCountry": countryName,
                        "InquiryID": inquiryID
                    };
                }
                else {
                    var formContent = {
                        "FirstName": firstName,
                        "LastName": lastName,
                        "Company": company,
                        "Country": country,
                        "City": city,
                        "BusinessEmail": businessEmail,
                        "BusinessPhone": businessPhone,
                        "BusinessPhoneExt": businessPhoneExt,
                        "ProductRange": productrange,
                        "ProductNameGS": productnamegs,
                        "ProductNameSL": productnamesl,                      
                        "Units": units,
                        "UnitsGS": unitsgs,
                        "Units4HT": units4ht,
                        "Units4SA": units4sa,
                        "Comments": desc + comments,
                        "Inquiry": inquiry,
                         "FormItemId": formItemId,
                        "ContextLanguage": contextLanguage,
                        "FormLanguage": formLanguage,
                        "ContextCountry": countryName,
                        "InquiryID": inquiryID
                    };
                }
                SubmitFormData('/sitecoreapi/SunisoForms/GetInTouch', formContent);
            }

        }

        function SubmitFormData(targetUrl, formContent) {
            $(".frmContact-text").hide();
            var success = false;
            $.ajax({
                url: targetUrl,
                data: formContent,
                type: 'POST',
                async: false,
                success: function (res) {
                    if (res == 'True') {
                        success = true;
                        $('#frmContact').css('display', 'none');
                        // $('.thank-you-msg').css('display', 'block');
                        var currentUrl = window.location.href;
                        var thankyouUrl = currentUrl + '/thankyou';
                        window.location.href = thankyouUrl;
                        return;

                    }

                },
                error: function (err) {
                    window.location = window.location.href;
                }
            });


        }




        /* Start - Distributor Search */
        var page = 0;
        $("input[type=radio]", "#filters").on('keydown', function (e) {
            if (e.key === "Enter") {
                $(this).click(); // Trigger click event when Enter key is pressed
            }
        });

        $("input[type=radio]", "#filters").on('click', function (e) {
            $("input[type=radio]", "#filters").not($(this)).prop('checked', false);
        });

        GetDataLayoutView = function (page) {
            var layoutView;
            var distributorsListView = document.getElementById('distributorsList');


            if (page) {
                if (distributorsListView.dataset.layout == 'grid') {
                    layoutView = 'grid';
                    ProductFinderSearch(page, null, null, layoutView);
                } else if (distributorsListView.dataset.layout == 'list') {
                    layoutView = 'list';
                    ProductFinderSearch(page, null, null, layoutView);
                }
            }
            else {
                if (distributorsListView.dataset.layout == 'grid') {
                    layoutView = 'grid';
                    ProductFinderSearch(null, null, null, layoutView);
                } else if (distributorsListView.dataset.layout == 'list') {
                    layoutView = 'list';
                    ProductFinderSearch(null, null, null, layoutView);
                }
            }
        };

        ProductFinderSearch = function (page, itemType, itemId, layoutView) {
            var pageSize = $("#showPerPage option:selected").attr("value");
            var productname = localStorage.getItem("productname");
            if (productname) {
                SearchTextvalue = $("#searchDbtr").val(productname);
            }
            else {
                SearchTextvalue = $("#searchDbtr").val();
                productname = $("#searchDbtr").val();
            }
            var regex = /<(?!\s*\/?\s*sup|\s*\/?\s*sub\b)[^>]*>/gi;
            if (String(SearchTextvalue).match(regex)) {
                SearchTextvalue = "";
            }
            var targetlink = "/SitecoreApi/sunisolubes/DistributorFinderSearch?keyTerm=" + productname;
            if (itemType && itemId) {
                targetlink += "&itemtype=" + itemType + "&itemId=" + itemId;
            }
            var sortType = $("#sortOrder option:selected").attr("value");
            if (sortType) {
                targetlink += "&sortType=" + sortType;
            }
            var filterTypes = [];
            var filterNames = [];
            $(".product-finder-page input[type=radio]:checked").each(function (i) {

                if ($(".product-finder-page input[type=radio]:checked")[i].name.includes("All")) {
                    if ($(this).val() == "All") {
                        filter_text = "";
                        $(".product-finder-page input[type=radio]", "#filters").not("#All").each(function (i) {
                            filter_text += $(this).val() + ",";
                        });
                        filterTypes[i] = filter_text.substring(0, filter_text.length - 1);
                    }
                    else {
                        filterTypes[i] = $(this).val();
                        filterNames[i] = document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name;
                    }
                }
                else {
                    filterTypes[i] = $(this).val();
                    if (document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name.includes("&")) {
                        filterNames[i] = document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name.replace("&", "and");
                    }
                    else if (document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name.includes("/")) {
                        filterNames[i] = document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name.replace("/", "or");
                    }
                    else {
                        filterNames[i] = document.querySelectorAll('.product-finder-page input[type="radio"]:checked')[i].name;
                    }
                }
            });

            if (pageSize) {
                targetlink += "&PageSize=" + pageSize;
            }

            if (page) {
                targetlink += "&Page=" + page;
            }

            if (filterTypes && filterTypes.length >= 1) {
                targetlink += "&filters=" + filterTypes + "&filternames=" + filterNames;
            }

            var newPathName = window.location.pathname;
            var urlTokens = window.location.pathname.split('/');
            var searchToken = urlTokens[urlTokens.length - 1];

            if ($('#filters') && $('#filters')[0] && $('#filters').children().length > 0) {

                {
                    $('#filters').children().each(function () {
                        if ($(this).attr('name') == searchToken) {
                            newPathName = window.location.pathname.replace(searchToken, '');
                            return false; // Break out of the loop
                        }
                    });

                }

                var filterName = "";
                if ($("input[type=radio]:checked", "#filters").length > 0) {
                    if (filterNames && filterNames.length == 0) {
                        filterName = searchToken;
                    }
                    else {
                        filterName = encodeURI(filterNames[0])
                    }
                }

                newPathName = newPathName.substr(-1) == '/' ? newPathName : newPathName + "/";

                var newUrl = window.location.href + filterName;

                //Product Finder page url//
                //product finder page url changes

                var distFinderQueryString = filterNames;
                var arrayTostring = JSON.stringify(Object.assign({}, distFinderQueryString));
                var distFinderobj = JSON.parse(arrayTostring);
                var esc = encodeURIComponent;
                var queryString = Object.keys(distFinderobj)
                    .map(k => 'product' + '=' + esc(distFinderobj[k]))
                    .join('&');

                if (queryString != null) {

                    const distFinderPathName = window.location.pathname + "?";
                    var distFinderPageUrl = window.location.origin + distFinderPathName + queryString;
                    var distFinderUrl = distFinderPageUrl.replace('?product', '?region');
                    // var distFinderUrl = replaceIndex.replace('&product', '&product');
                    distFinderUrl = distFinderUrl.replace(/%20/g, " ");
                    window.history.replaceState(null, null, distFinderUrl);
                }
                else {
                    newUrl = newUrl.replace(/%20/g, " ");
                    window.history.replaceState(null, null, newUrl);
                }

            }
            var searchValue = $("#searchDbtr").val();
            var regex = /<(?!\s*\/?\s*sup|\s*\/?\s*sub\b)[^>]*>/gi;
            if ((searchValue).match(regex)) {
                searchValue = "";
            }
            if (searchValue != "") {
                $("#searchDbtr").attr("placeholder", searchValue);
                $("#searchDbtr").blur();
            }
            console.time();
            $.ajax({
                beforeSend: showLoader(),
                url: targetlink,
                type: "POST",
                success: function (data) {
                    if (data) {
                        if (searchValue != "") {
                            $("#searchDbtr").val(searchValue);
                            $("#searchDbtr").attr("placeholder", $("#searchDbtr").attr("data-placeholder")).removeClass("remove-italic-style");
                        }
                        if (layoutView == 'list') {
                            data = data.replace(/data-layout="grid"/g, 'data-layout="list"');
                        }
                        var $paginationoutside = $("#paginationoutside").html('');
                        $("#DSBSearchResult").html('');
                        $("#DSBSearchResult").html(data);
                        $('.loader').hide();
                        console.timeEnd();

                        var pagination = $("#paginationoutside").html();
                        $("#paginationoutside").html('');

                        //paginationoutside div available in outside RCSearchResult div in desktop mode. So just assigned pagination html to paginationoutside.
                        if ($("#paginationoutside").length > 0)
                            $("#paginationoutside").html(pagination);
                        else
                            $("#DSBSearchResult").append($paginationoutside.html(pagination)); //paginationoutside div inside RCSearchResult div. So we append paginationoutside to RCSearchResult


                    }

                    const layoutGrid = document.getElementById('layoutGrid');
                    const layoutList = document.getElementById('layoutList');
                    const distributorsList = document.getElementById('distributorsList');

                    layoutGrid.addEventListener('change', updateDataLayout);
                    layoutList.addEventListener('change', updateDataLayout);

                    function updateDataLayout() {
                        if (layoutGrid.checked) {
                            distributorsList.dataset.layout = 'grid';
                        } else if (layoutList.checked) {
                            distributorsList.dataset.layout = 'list';
                        }
                    }
                    hideLoader();
                }
            });
            localStorage.removeItem('productname');
        };


        $('#DistributorFinderSearch').click(function (event) {
            event.preventDefault();
            GetDataLayoutView();
        });

        $('#searchDbtr').keydown(function (event) {
            if (event.keyCode == 13) {
                GetDataLayoutView();
                return false;
            }

        });

        $("#ClearFilters").click(function (event) {
            event.preventDefault();
            $(':radio').each(function () {
                this.checked = false;
            });
            var items = document.querySelectorAll('[id$="All"]');
            for (var i = 0; i < items.length; i++) {
                document.querySelectorAll('[id$="All"]')[i].checked = true;
            }
            $("#searchDbtr").val("");
            GetDataLayoutView();
        });

        //Pagination - Scroll to top of results section on click of pagination index
        $(document).on('click', ".pageNav", function () {
            if (!$(this).parent().hasClass('active')) {
                document.documentElement.scrollTop = 0;
            }
        });

        /* End - Distributor Search */


        // video popup---
        $('.ui-link').on('click', function () {
            var videoid = $(this).attr('videopath');
            $("#ytcartoonVideo").attr('src', videoid);
        })
    })

    function showLoader() {
        $("#distributor-filter-overlay").show();
        $(".loader").show();
    }

    function hideLoader() {
        $("#distributor-filter-overlay").hide();
        $(".loader").hide();
    }





    $(window).load(function () {



        if (window.location.pathname.includes("where-to-buy")) {
            if (document.querySelectorAll('[id$="All"]')) {
                var items = document.querySelectorAll('[id$="All"]');
                for (var i = 0; i < items.length; i++) {
                    document.querySelectorAll('[id$="All"]')[i].checked = true;
                }
                if (!window.location.pathname.endsWith("all")) {
                    ProductFinderSearch("All");
                }
            }
        }

    });
})(jQuery);

function GetSDSAvailLangsDD(docID, docTitle) {
    $.ajax({
        url: "/sitecoreapi/sunisolubesApi/GetDLAvailableLanguages",
        type: "POST",
        data: { id: docID, title: docTitle},
        context: this,
        success: function (data) {
            try {
                var ddDiv = document.getElementById("sdsddsiv_" + docID);
                ddDiv.innerHTML = data;
                sortData("sdsddsiv_" + docID);
            }
            catch (e) {
                console.log("errorC", e);
            }

        },
        error: function (data) {
            console.log("errorF", data);
        }
    });

    var dropdown = document.getElementsByClassName("info-list-panel");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        var openDropdown = dropdown[i];
        if (openDropdown.getAttribute('aria-hidden') == 'false') {
            openDropdown.setAttribute('aria-hidden', 'true');
            openDropdown.setAttribute('hidden', 'true');
        }
    }
    var element = document.getElementById("sdsddsiv_" + docID);
    if (element.getAttribute('aria-hidden') == 'true') {
        element.setAttribute('aria-hidden', 'false');
        element.removeAttribute('hidden');
    } else {
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('hidden', 'true');
    }
}

function GetTDAvailLangsDD(docID, docTitle) {
    $.ajax({
        url: "/sitecoreapi/sunisolubesApi/GetTDAvailableLanguages",
        type: "POST",
        data: { id: docID, title: docTitle},
        context: this,
        success: function (data) {
            try {
                var ddDiv = document.getElementById("tdsdiv_" + docID + "_" + docTitle);
                ddDiv.innerHTML = data;
                sortData("tdsdiv_" + docID + "_" + docTitle);
            }
            catch (e) {
                console.log("errorC", e);
            }

        },
        error: function (data) {
            console.log("errorF", data);
        }
    });

    var dropdown = document.getElementsByClassName("info-list-panel");
    var i;
    for (i = 0; i < dropdown.length; i++) {
        var openDropdown = dropdown[i];
        if (openDropdown.getAttribute('aria-hidden') == 'false') {
            openDropdown.setAttribute('aria-hidden', 'true');
            openDropdown.setAttribute('hidden', 'true');
        }
    }
    var element = document.getElementById("tdsdiv_" + docID + "_" + docTitle);
    if (element.getAttribute('aria-hidden') == 'true') {
        element.setAttribute('aria-hidden', 'false');
        element.removeAttribute('hidden');
    }
    else {
        element.setAttribute('aria-hidden', 'true');
        element.setAttribute('hidden', 'true');
    }
}

function sortData(divID) {
    var list, i, switching, b, shouldSwitch;
    list = document.getElementById(divID);
    switching = true;

    while (switching) {
        switching = false;
        b = list.getElementsByTagName("a");
        for (i = 0; i < (b.length - 1); i++) {
            shouldSwitch = false;
            if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            b[i].parentNode.insertBefore(b[i + 1], b[i]);
            switching = true;
        }
    }
}

$(document).on("click", ".info-list-panel", function (event) {
    var dropdowns = document.getElementsByClassName("info-list-panel");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.getAttribute('aria-hidden') == 'false') {
            openDropdown.setAttribute('aria-hidden', 'true');
            openDropdown.setAttribute('hidden', 'true');
        }
    }
});

// Close the dropdown menu if the user clicks outside of it.
$(document).on("click", function (event) {
    if (!$(event.target).closest('.dropdownbtn').length) {
        $('.info-list-panel').attr('aria-hidden', 'true');
        $('.info-list-panel').attr('hidden', 'true');
    }
});

//function GetBrochurePdfRegion() {
//    $.ajax({
//        url: "/sitecoreapi/sunisolubesApi/GetBrochurePdfRegionLst",
//        type: "POST",
//        context: this,
//        success: function (data) {
//            try {
//                var ddDiv = document.getElementById("region");
//                ddDiv.innerHTML = data;
//                GetBrochurePdfRegionLanguage(ddDiv.firstChild.value);
//            }
//            catch (e) {
//                console.log("errorC", e);
//            }

//        },
//        error: function () {
//            console.log("errorF", data);
//        }
//    });
//}

function GetBrochurePdfLanguage() {
    $.ajax({
        url: "/sitecoreapi/sunisolubesApi/GetBrochurePdfLanguageLst",
        type: "POST",
        context: this,
        success: function (data) {
            try {              
                var ddDiv = document.getElementById("language");
                ddDiv.innerHTML = data;

                var ddLanDiv = document.getElementById("language");
                var selectedLangValue = ddLanDiv.options[ddLanDiv.selectedIndex].text;

                GetBrochurePdfSize(selectedLangValue);
                GetBrochurePdfForLang(selectedLangValue);
            }
            catch (e) {
                console.log("errorC", e);
            }

        },
        error: function () {
            console.log("errorF", "");
        }
    });
}


function GetBrochurePdfForLang(selectedLangValue) {
    $.ajax({
        url: "/sitecoreapi/sunisolubesApi/GetBrochurePdfForLanguage",
        type: "POST",
        data: { selectedLanguage: selectedLangValue },
        context: this,
        success: function (data) {
            try {
                var hrefTag = document.getElementsByClassName("btn btn--blue btn--download");

                hrefTag[0].href = data;
            }
            catch (e) {
                console.log("errorC", e);
            }
        },
        error: function () {
            console.log("errorF", data);
        }
    });
}

function GetBrochurePdfSize(selectedLangValue) {
    $.ajax({
        url: "/sitecoreapi/sunisolubesApi/GetBrochurePdfSizeValue",
        type: "POST",
        data: { selectedLanguage: selectedLangValue },
        context: this,
        success: function (data) {
            try {
                var sizeTag = document.getElementsByClassName("small grey pvs");
             
                sizeTag[0].innerHTML = data;
            }
            catch (e) {
                console.log("errorC", e);
            }
        },
        error: function () {
            console.log("errorF", data);
        }
    });
}