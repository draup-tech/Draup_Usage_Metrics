input = document.getElementById('myInput');
tabs = document.querySelectorAll('#tab');
chart = document.querySelector('#chart');
btn = document.querySelector('#btn');
closeBtn = document.querySelector('#close-btn');
dl_pop = document.querySelector('.dl');
d_btn = document.querySelectorAll('#d_btn');
selection = document.getElementById('selection');

sales = document.querySelector('.sales');
talent = document.querySelector('.talent');

charts = [
    '<iframe title="Draup_Talent_OverAll Usage_12_12_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=4d0341c2-b61c-46ec-bd93-4d832211f9b1&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Workforce Planning_12_12_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=1d0468fc-a52b-4bbc-9c24-74be0e1baec9&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<h3>Peer Intelligence Coming soon...</h3>',
    '<iframe title="Draup_Talent_Diversity Navigator_12_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=ee20c603-3635-48b3-9f93-ba233e39c106&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Reskilling_12_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=6177714f-7878-407b-9b7f-41cc23126ef7&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_University Hiring_12_12_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=0b4eb850-cf3a-4df5-983b-14a1e97b4e9a&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Braindesk_12_12_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=7aa7fb03-42eb-4d73-8696-beb768153b72&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Apps_12_12_2022 (1)" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=9b96f677-df6e-4788-a3e3-ff4e5cff56ad&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
]

if(selection.value == 'sales') {
    sales.style.display = 'flex';
    talent.style.display = 'none';
} else {
    sales.style.display = 'none';
    talent.style.display = 'flex';
}

tabs.forEach(e => {
    e.addEventListener('click', ()=> {
        console.log(e);
        if(selection.value == 'talents') {
            let index = e.dataset.index;
            chart.innerHTML = charts[index];
            tabs.forEach(ele => {
                ele.className = 'inactive';
            })
        } else {
            // let index = e.dataset.index;
            chart.innerHTML = '<div width="100%" height="100%"><h3>Sales Coming soon...</h3></div>';
            tabs.forEach(ele => {
                ele.className = 'inactive';
            })
        }
        e.className = 'active';
    })
});

btn.addEventListener('click', () => {
    dl_pop.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    dl_pop.classList.toggle('active');
})

selection.addEventListener('change', () => {
    if(selection.value == 'sales') {
        sales.style.display = 'flex';
        talent.style.display = 'none';
        chart.innerHTML = '<div width="100%" height="100%" style="display: flex; align-items: center; justify-content: center;"><h3>Sales Coming soon...</h3></div>';
    }
    if(selection.value == 'talents') {
        sales.style.display = 'none';
        talent.style.display = 'flex';
        chart.innerHTML = '<iframe title="Draup_Talent_OverAll Usage_08_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=69d81711-dabd-4be3-bf9c-9d9172591266&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>';
    }
})
