//Debug
console.log("JS OK");

// const api = a4eb26c816f14b559f8c78dfe784c8fc;


var button = document.getElementById('buton');

button.addEventListener("click", getTextFile);

var list = [];
const newsBox = document.getElementById('news');

function getTextFile() {
    // //Debug
    // console.log("Click OK");

    let topic = searchWord.value;
    

    var url = `https://newsapi.org/v2/everything?q=${topic}&` +
    'apiKey=a4eb26c816f14b559f8c78dfe784c8fc';


    fetch(url).then(function(response){
        //Debug
        // console.log(response.json());
        return response.json();
    }).then(function(data){
        list = data.articles;
        // //Debug
        console.log(data);
        
        
        list.forEach(article => {
            let divGeneral = document.createElement('div');
            divGeneral.setAttribute('id','divGeneral');

            let div = document.createElement('div');
            div.setAttribute('id', 'forText');

            let div2 = document.createElement('div');
            div2.setAttribute('id', 'forPhoto');

            let img = document.createElement('img');
            img.setAttribute('src', article.urlToImage);

            let title = document.createElement('h2');
            title.textContent = article.title;

            let content = document.createElement('p');
            content.textContent = article.description;

            let source = document.createElement('p');
            source.textContent = "Source: " + article.source.name;

            let a = document.createElement('a');
            a.setAttribute('href', article.url);
            a.textContent = "Do you want to go there";

            newsBox.appendChild(divGeneral);
            divGeneral.appendChild(div2);
            divGeneral.appendChild(div);
            div2.appendChild(img);
            div.appendChild(title);
            div.appendChild(content);
            div.appendChild(source);
            div.appendChild(a);

            
        });





        // return list;



    })
    // .then(function(arr){
    // //     console.log(arr[7]);
    // //     return arr[7].urlToImage;
    //     for(var a=0; a<arr.length; a++) {
    //         document.getElementById('titleNews').innerHTML +=arr[a].title;
    //     }
    
    // })
    // .then(function(title){
    //     // console.log(title);
    //     document.getElementById('imgNews').innerHTML =title;
    // })

    
}


