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
    '<iframe title="Draup_Talent_OverAll Usage_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=0e5d6597-574b-4a0c-9fd4-d8ceb567d864&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Workforce Planning_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=1060dc8c-38e5-4948-becd-7e668f110687&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<h3>Peer Intelligence Coming soon...</h3>',
    '<iframe title="Draup_Talent_Recruitment_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=8419457e-805b-484d-97dd-61873aa28f0d&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Reskilling_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=4deac5a9-5542-48cc-8c43-043cce8d33e7&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_University Hiring_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=d6afff81-ec76-4a3b-83f1-8efd960da909&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Braindesk_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=ee30aa83-edec-4d0b-94c8-fbff6890b40f&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>',
    '<iframe title="Draup_Talent_Apps_13_12_2022" width="100%" height="100%" src="https://app.powerbi.com/reportEmbed?reportId=ee49ee27-8529-499a-8b81-25515c0a897f&autoAuth=true&ctid=0bf964fe-8dc3-417e-b765-c6aae6c8dfce" frameborder="0" allowFullScreen="true"></iframe>'
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
