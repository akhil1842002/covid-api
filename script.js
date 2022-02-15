var url = 'https://api.covid19api.com/summary'

const name = document.querySelector('.name')

fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log();
        for (i = 0; i < data.Countries.length; i++) {
            const { Country,
                NewConfirmed,
                TotalConfirmed,
                NewDeaths,
                TotalDeaths,
                NewRecovered,
                TotalRecovered } = data.Countries[i]
            console.log(Country);

            const container = document.querySelector('.container')
            console.log(container);
            container.innerHTML += `
            <article class="items">
            <div class="left">
                <div class="country">
                    <h3>Country: ${Country}</h3>
                </div>
                <div>
                    <h3>Newcase: ${NewConfirmed}</h3>
                </div>
                <div>
                    <h3>Totalconfirmed: ${TotalConfirmed}</h3>
                </div>
                <div>
                    <h3>Newdeath: ${NewDeaths}</h3>
                </div>
            </div>
            <div class="right">
                <div>
                    <h3>Totaldeath: ${TotalDeaths}</h3>
                </div>
                <div>
                    <h3>Newrecovered: ${NewRecovered}</h3>
                </div>
                <div>
                    <h3>Totalrecovered: ${TotalRecovered}</h3>
                </div>
            </div>
        </article>
        `
        }
    })

