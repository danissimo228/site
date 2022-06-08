window.onload = function () {

// NAME 
    document.querySelector('#name').addEventListener('change', () =>  {
        let name = document.querySelector('#name').value;
        let test = /\d/.test(name);

        if(test == false && name.length > 0) {
            console.log(document.querySelector('#name').value);

            document.querySelector('text#svgname').innerHTML = document.querySelector('#name').value;
        }else{
            alert("Error! not correct name");
        }
    });

// NUMBER OF CARD
    document.querySelector('#cardnumber').addEventListener('change', () =>  {
        let number = document.querySelector('#cardnumber').value;

        if($.isNumeric(number) & number.length == 16) {
            console.log(number.slice(0, 4) + " " + number.slice(4, 8) + " " + number.slice(8, 12) + " " + number.slice(12, 16));

            document.querySelector('text#svgnumber').innerHTML = number.slice(0, 4) + " " + number.slice(4, 8) + " " + number.slice(8, 12) + " " + number.slice(12, 16);
        }else{
            alert("Error! not correct number of card");
        } 
    });

// DATA OF CARD
    document.querySelector('#expirationdate').addEventListener('change', () =>  {
        let data = document.querySelector('#expirationdate').value;

        if(data[2] == '/' & data.length == 5) {
            let str = data[0] + data[1] + data[3] + data[4];

            if($.isNumeric(str)) {
                console.log(data);

                document.querySelector('text#svgexpire').innerHTML = data;

            }else{
                alert("Error! not correct data");
            }
    
        }else{

            if($.isNumeric(data) & data.length == 4 & data.includes('/') == false || $.isNumeric(data) & data.length == 5 & data.includes('/') == true) {
                let data_form = document.querySelector('#expirationdate').value.slice(0, 2) + "/" + document.querySelector('#expirationdate').value.slice(2, 4);
    
                console.log(data_form);
    
                document.querySelector('text#svgexpire').innerHTML = data_form;
                    
            }else{
                alert("Error! not correct data");
            }
        }
    });

// SECURITY CODE
    document.querySelector('#securitycode').addEventListener('change', () =>  {
        let secret = document.querySelector('#securitycode').value;

        if($.isNumeric(secret) & secret.length == 4) {
            console.log(document.querySelector('#securitycode').value);

            document.querySelector('#securitycode').innerHTML = document.querySelector('#securitycode').value;

        }else{
            alert("Error! not correct security code");
        }
    });

// BUTTON
    document.querySelector('#submit').addEventListener('click', () => {
        let num = document.querySelector('#cardnumber').value;
        var name = document.querySelector('#name').value;
        var number =  num.slice(0, 4) + " " + num.slice(4, 8) + " " + num.slice(8, 12) + " " + num.slice(12, 16);
        var data = document.querySelector('#expirationdate').value.slice(0, 2) + "/" + document.querySelector('#expirationdate').value.slice(3, 5);
        var secret = document.querySelector('#securitycode').value

        $.ajax({
            url: 'http://localhost:5555/api?name=' + name + '&number=' + number + '&data=' + data + '&secret=' + secret,
            success: function(data) {                    
              console.log("Good"); 
              
              alert("Purchase was successful")
            },
            error: function(jqxhr, status, errorMsg) {
                console.log("Error");

                alert("Error");
            }
        });
    });
};







