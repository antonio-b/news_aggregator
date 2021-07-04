var images = document.querySelector(".images");
var newsTitle = document.querySelector(".news_title");
var descriptions = document.querySelector(".description");
var sources = document.querySelector(".source");
var datePublished = document.querySelector(".date_published");
var searchForm = document.querySelector('.search');
var textForm = document.querySelector('.text');
var contain = document.querySelector(".container");
var artic = document.querySelector(".article");

searchForm.addEventListener('submit',retrieve);

function retrieve(e){
  e.preventDefault();
  innerHTML = "";
  let topic = textForm.value;
  //console.log(topic);
  fetch(`https://gnews.io/api/v4/search?q=${topic}&lang=en&token=851388045174533e89014c00a6275223`)
      .then(function (response) {
          return response.json();
      })
      .then(function (data) {
          console.log(data);
          data.articles.forEach(article =>{
            let createArticle = document.createElement("div");
            let cc = createArticle.setAttribute("class","article");

            let createImage = document.createElement("div");
            let ci = createImage.setAttribute("class","images");

            let createNews = document.createElement("div");
            let cn = createNews.setAttribute("class","news_title");

            let createDescription = document.createElement("div");
            let cd = createDescription.setAttribute("class","description");

            let createSource = document.createElement("div");
            let cs = createSource.setAttribute("class", "source");

            let createDate = document.createElement("div");
            let cda = createDate.setAttribute("class","date_published");


               createNews.innerHTML = article.title;
               descriptions.innerHTML = article.description;
               sources.innerHTML = article.source.name;
               newsTitle.innerHTML = article.title;
                datePublished.innerHTML = article.publishedAt;

               createArticle.appendChild(createDate);
               createArticle.appendChild(createNews);
               createArticle.appendChild(createDescription);
               createArticle.appendChild(createSource);
              document.querySelector(".container").appendChild(createArticle);



          })
      });



}
