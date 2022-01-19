$(function getAllcountries() {
    $("#btnShowData").click(function(){
        $.ajax({
            url: 'https://restcountries.com/v3.1/all/',
            
            success: function(data, statuts, response) {
                console.log(data);
                const countriesList = data.map(function(country){
                    return `<li>${country.name.common}</li>`
                }) 

                $("#countriesUl").html(countriesList.join(""))
               
        //     for(i=0; i <= data.length; i++)
        //    getAllCountries += data[i];
                
            }
    });
        
    });
    

});
getAllcountries();