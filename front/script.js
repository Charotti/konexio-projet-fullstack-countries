function getAllcountries() {
    $("#btnShowData").click(function(){
        $.ajax({
            url: 'https://restcountries.com/v3.1/all/',
            
            success: function(data, statuts, response) {
                console.log(data);
                const countriesList = data.map(function(country){
                    console.log(country.capital);
                    return `<li><p>${country.name.common}</p><p>${country.capital}</p></li>`
                }) 
                
                // <p>${country.capital[0]}</p>

                $("#countriesUl").html(countriesList.join(""))
               
     
            }
    });
        
    });
    

}
getAllcountries();