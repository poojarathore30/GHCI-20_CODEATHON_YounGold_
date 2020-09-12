$(document).ready(function () {
    // Init
    //$('.image-section').hide();
    $('.loader').hide();
    $('.result').hide();
    $('.resultt').hide();
    $('.resulttt').hide();    
    $('#Profile').hide(); 
    $('#shooww').hide();  
    $('#shooww1').hide();  
    $('#shooww2').hide();      
    //$('#output-image').hide();
    

    // Upload Preview
    //function readURL(input) {
    //    if (input.files && input.files[0]) {
    //        console.log('i m here');
    //        console.log('i m here', typeof(input.files[0]));
    //        console.log(input.files[0]['name']);
    //       var reader = new FileReader();
    //        reader.onload = function (e) {
    //           $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
    //           $("#imagePreview").attr("data-item",input.files[0]['name']);
    //
    //            $('#imagePreview').hide();
    //            
    //            
    //            $('#imagePreview').fadeIn(650);
    //       }
    //        reader.readAsDataURL(input.files[0]);
    //    }
    //}
    //$("#imageUpload").change(function () {
    //   $('.image-section').show();
    //    $('#btn-predict').show();
    //    $('.result').text('');
    //    $('.result').hide();
    //   $('output-image').hide();
        
    //    readURL(this);
    //});

    // Predict
    $('#btn-predict').click(function () {
       var form_data = new FormData();

       var domain = document.getElementById('Domain-select');
       form_data.append('Domain', domain.value);

       var purpose = document.getElementById('Purpose-select');
       form_data.append('purpose', purpose.value);

       var age = document.getElementById('Age');
       form_data.append('Age', age.value);

    
       //var hobbies = document.getElementById('Hobbies-select');

       var selected = [];
       for (var option of document.getElementById('Hobbies-select').options) {
        if (option.selected) {
            selected.push(option.value);
        }
    }

        form_data.append('Hobbies', selected);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                /*var imageUrl = "C:/Users/PRINCE/Documents/PREDICTION/static/1.jpg";
                $("#output-image").css("background-image", "url(" + imageUrl + ")");
                */
                $('.loader').hide();
                $('.result').fadeIn(600);
                $('.result').text('' + data["1"]);
                $('.container1').show();
                $('#Profile').show(); 
                $('#shooww').show();   
                $('.result').show();
                
                $('.resultt').fadeIn(600);
                $('.resultt').text('' + data["2"]);
                $('.container1').show();
                $('#Profile').show(); 
                $('#shooww1').show();
                $('.resultt').show();

                $('.resulttt').fadeIn(600);
                $('.resulttt').text('' + data["3"]);
                $('.container1').show();
                $('#Profile').show(); 
                $('#shooww2').show();
                $('.resulttt').show();
                var id1 = data["4"];
                var id2 = data["5"];
                var id3 = data["6"]
                $('#Profile1').click(function () {
                window.location="https://youngold-app.herokuapp.com/profile/"+id1;
            });
                $('#Profile2').click(function () {
                window.location="https://youngold-app.herokuapp.com/profile/"+id2;
            });
                $('#Profile3').click(function () {
                window.location="https://youngold-app.herokuapp.com/profile/"+id3;
            });

            },
            
        });


    });
    
});
