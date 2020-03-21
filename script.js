let confirmed, deaths, recovered;

fetch('https://covid19.mathdro.id/api/countries/brazil')
  .then(function (response) {
    response.json().then(function (data) {

      confirmed = data.confirmed.value;
      deaths = data.deaths.value;
      recovered = data.recovered.value;
      document.getElementById('confirmed').textContent = confirmed;
      document.getElementById('dead').textContent = deaths;
      document.getElementById('recovered').textContent = recovered;
    })
  })



function headerMenu() {
  document.querySelectorAll('a').forEach(e => {
    e.defaultPrevented();
  })
}

