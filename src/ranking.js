
const getRanking = function () {
  fetch("https://api.sssapi.app/smDU3mY48jOata8PHDESN")
    .then((res) => res.json())
    .then((apiData) => {

      var ranking = document.getElementById('ranking');

      for (let index = 0; index < apiData.length; index++) {
        const element = apiData[index];

        var li_element = document.createElement('li');
        li_element.classList.add('list-group-item',
                                 'd-flex',
                                 'justify-content-between',
                                 'align-items-center');
        
        var span_rank = document.createElement('span');
        span_rank.classList.add('badge',
                                'bg-primary',
                                'rounded-pill');
        span_rank.textContent = index+1 +'位';

        var span_name = document.createElement('span');
        span_name.textContent = element.userName;

        var span_like = document.createElement('span');
        span_like.classList.add('badge',
                                'bg-primary',
                                'rounded-pill');
        span_like.textContent = element.like;

        li_element.appendChild(span_rank);
        li_element.appendChild(span_name);
        li_element.appendChild(span_like);

        ranking.appendChild(li_element);        
      }
    });
};
getRanking();