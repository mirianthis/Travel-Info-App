import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries/countries.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  populationChartOptions: any = {};
  countriesPerContinentChartOptions: any = {};

  constructor(private countriesService: CountriesService) {
    
  }

  ngOnInit(): void {
    this.countriesService.getAllCountries().subscribe((countries) => {
      this.createPopulationChart(countries);
      this.createCountriesPerContinentChart(countries);
    });
  }

  // Population Comparison Chart
  createPopulationChart(countries: any[]): void {
    const sortedCountries = countries
      .sort((a, b) => b.population - a.population)
      .slice(0, 10);

    const dataPoints = sortedCountries.map(country => ({
      label: country.name.common,
      y: country.population
    }));

    this.populationChartOptions = {
      fontSize: 10,
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Top 10 Most Populated Countries"
      },
      axisX: {
        title: "Countries",
        labelAngle: -30
      },
      axisY: {
        title: "Population",
        includeZero: false
      },
      data: [{
        type: "column",
        dataPoints: dataPoints
      }]
    };
  }

  // Countries Per Continent Chart
  createCountriesPerContinentChart(countries: any[]): void {
    const continentCounts = this.countCountriesPerContinent(countries);

    const dataPoints = Object.keys(continentCounts).map(continent => ({
      y: continentCounts[continent],
      label: continent
    }));

    this.countriesPerContinentChartOptions = {
      fontSize: 10,
      animationEnabled: true,
      theme: "light2",
      title: {
        text: "Number of Countries per Continent"
      },
      data: [{
        type: "pie",
        indexLabel: "{label}: {y}",
        dataPoints: dataPoints
      }]
    };
  }

  // Helper function to count countries per continent
  countCountriesPerContinent(countries: any[]): { [region: string]: number } {
    const continentCount: { [region: string]: number } = {};

    countries.forEach(country => {
      const continent = country.region?.[0];
      if (continent) {
        continentCount[continent] = (continentCount[continent] || 0) + 1;
      }
    });

    return continentCount;
  }
}