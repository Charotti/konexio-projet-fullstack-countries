$(function () {
  $("#btn").click(function () {
    const country = $("#form-control").val();
    $.ajax({
      url: `https://restcountries.com/v3.1/name/${country}`,
      success: function (data, statuts, response) {
        console.log(data);

        $("#country").html(data[0].name.common);
        $("#capital").html(data[0].capital);
      },
    });
  });
});

function getAllcountries() {
  $("#btnShowData").click(function () {
    $.ajax({
      url: "https://restcountries.com/v3.1/all/",

      success: function (data, statuts, response) {
        console.log(data);

        const countriesList = data.map(function (country) {
          //   console.log(country.capital);
          let currenciesList = "";
          if (country.currencies !== undefined) {
            const currency = Object.keys(country.currencies);

            for (i = 0; i <= currency.length; i++) {
              currenciesList += `<p>${currency[i]}</p>`;
            }
          }
          return `<li><p>${country.name.common}</p><p>${country.capital}</p>${currenciesList}</li>`;
        });

        $("#countriesUl").html(countriesList.join(""));
      },
    });
  });
}
getAllcountries();
