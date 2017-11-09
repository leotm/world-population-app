(function () {

  const request = require('request');

  const list_of_countries = process.argv[2]; // e.g. "Greece, Brazil, France, Germany"
  const countries = list_of_countries.split(", ");
  const pairs = []; // Use array instead of object for sorting

  for (let i = 0; i < countries.length; i++) {

    const country = countries[i];

    request
      .get(`http://api.population.io/1.0/population/${country}/today-and-tomorrow/`)
      .on('data', (data) => {
        const json = JSON.parse(data);
        const population_today = json.total_population[0].population;
        pairs.push([country, population_today]);
        if (i === countries.length - 1) {
          setTimeout(() => { // Wait extra, otherwise some countries sometimes received after output
            pairs.sort((a, b) => b[1] - a[1]);
            pairs.forEach((pair) => (console.log(`${pair[0]}: ${pair[1]}`))); // Format output
          }, 100);
        }
      })
      .on('error', (error) => {
        console.log(error);
      })
  }

})();
