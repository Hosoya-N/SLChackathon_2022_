
const getData = function () {
  fetch("https://api.sssapi.app/NZEbMzO4VPU70RN7rDdj7")
    .then((res) => res.json())
    .then((apiData) => {

      // var textbox = document.getElementById('app');

      apiData.forEach(element => {
        // var li_element = document.createElement('div');
        // li_element.textContent = '名前 ' + element.userName;
        // textbox.appendChild(li_element);
        document.getElementById('title1').textContent = element.title;
        document.getElementById('content1').textContent = element.content;
      });
    });
};
getData();