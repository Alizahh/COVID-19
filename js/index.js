const ready = (callback) =>{
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() =>{

	chartjs();
	charttjs();

});



async function charttjs()
	{
		const ctx = document.getElementById('Chart').getContext('2d');
		const data = await extract();
	
		const d1 = data.infected;
		const d2 = data.recovered;
		const d3 = data.deceased;
		const d4 = data.tested;

		document.getElementById('tested').innerHTML = d1;
		document.getElementById('recover').innerHTML = d2;
		document.getElementById('deceased').innerHTML = d3;
		document.getElementById('infected').innerHTML = d4;
		

		const myChart = new Chart(ctx, {
		type: 'line',
		data: {
			labels:['tested', 'recovered', 'deceased', 'infected'],
			datasets: [{
				label: 'Cases of covid-19 confirmed till date.',
				data:[d1,d2,d3,d4],
				fill:false,
				backgroundColor: [
					'#192a56','#e1b12c','#e15f41','#f78fb3'
				],
				borderColor: [
					'#303952',	
				],
				borderWidth: 1
			}],
		},
			
		});
}
		
	async function chartjs()
	{
		const ctx = document.getElementById('myChart').getContext('2d');
		const data = await extract();
		
		const d1 = data.infected;
		const d2 = data.recovered;
		const d3 = data.deceased;
		const d4 = data.tested;
		

		const myChart = new Chart(ctx, {
		type: 'pie',
		data: {
			labels:['tested', 'recovered', 'deceased', 'infected'],
			datasets: [{
				label: 'Cases of covid-19 confirmed till date.',
				data:[d1,d2,d3,d4],
				fill:false,
				backgroundColor: [
					'#192a56','#e1b12c','#e15f41','#f78fb3'
				],
				borderColor: [
					'#303952',	
				],
				borderWidth: 1
			}],
		},
			
		});
}

async function extract()
{
		
	
		const response = await fetch('https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true');
		const data = await response.json();

		let l = JSON.parse(  JSON.stringify(data) );

		 const infected=(l["infected"]);
		 const deceased=(l["deceased"] );
		 const tested=(l["tested"] );
		 const date=(l["lastUpdatedAtSource"] );	
		 const recovered=(l["recovered"]);

		 return{infected,deceased,tested,date,recovered};	
			
}

$('.counter-count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 5000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
