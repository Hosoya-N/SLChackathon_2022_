const getData = function () {
  fetch("https://api.sssapi.app/NZEbMzO4VPU70RN7rDdj7")
    .then((res) => res.json())
    .then((apiData) => {

      const accordionColumn = document.getElementById('accordionExample');

      for (let index = 0; index < apiData.length + 1; index++){
        const element = apiData[index];

        var div_element = document.createElement('div');
        div_element.classList.add('accordion-item');

        var href_element = document.createElement('h2');
        href_element.classList.add('accordion-header');
        href_element.id = "heading" + index;
        

        var button_element = document.createElement('button');
        button_element.className = "accordion-button";
        button_element.type = "button";
        button_element.setAttribute("data-bs-toggle", "collapse");
        button_element.setAttribute("data-bs-target", "#collapse" + index);
        button_element.setAttribute("aria-expanded","true");
        button_element.setAttribute("aria-controls","collapse"+index);
        button_element.textContent = element.title;
        
        var div_column = document.createElement('div');
        div_column.id = "collapse" + index;
        div_column.classList.add('accordion-collapse',
                                 'collapse');
        div_column.setAttribute("aria-labelledby","heading"+ index);
        div_column.setAttribute("data-bs-parent","#accordionExample");
        
        var div_columnBody = document.createElement('div');
        div_columnBody.className = "accordion-body";
        div_column.appendChild(div_columnBody);

        var p1 = document.createElement('p');
        p1.textContent = "(内容)" + element.content;

        var p2 = document.createElement('p');
        p2.textContent = "(投稿時間)" + element.date;

        var p3 = document.createElement('p');
        p3.textContent = "(投稿者)" + element.userName;

        var button_like = document.createElement('button');
        button_like.type = 'button';
        button_like.classList.add("btn",
                                  "btn-primary");
        button_like.id = "btnAdd" + index;
        button_like.textContent = "いいね";
        div_columnBody.appendChild(p1);
        div_columnBody.appendChild(p2);
        div_columnBody.appendChild(p3);
        div_columnBody.appendChild(button_like);

        var span_like = document.createElement('span');
        span_like.classList.add("badge",
                                "bg-light",
                                "text-dark");
        span_like.id = "counter" + index;
        span_like.textContent = element.likes;
        


        button_like.appendChild(span_like);
        href_element.appendChild(button_element);
        div_element.appendChild(div_column);
        
        div_element.appendChild(href_element);
        accordionColumn.appendChild(div_element);
      }
    });
 };

getData();