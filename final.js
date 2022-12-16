function connect1() {
     
     var searchText = document.getElementById('search').value ;
     var searchText1 =parseInt(document.getElementById('ser').value) ;  
    // console.log(searchText);
    
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //console.log(url);
    
     fetch(url)
     .then(res => res.json() )
     .then(data => showData1(data,searchText1));
    
     document.getElementById('search').value = ""; 
     document.getElementById('ser').value = ""; 
    
    }
    
    function showData1(data,searchText1){
    
           console.log("data from showData Function", data);
    
           var oldContent = document.getElementById('container');
           oldContent.textContent= "";
 
          
    
           for (var i=0; i<searchText1; i++){
            console.log(data.meals[i]);
    
            var newDiv = document.createElement('div');
           
           newDiv.innerHTML=`
          <div class="card" style="width:18rem; margin-bottom:20px;margin:10px ;">
         <img src="${data.meals[i].strMealThumb}" class="card-img-top" alt="...">
         <div class="card-body">
           <h5 class="card-title">${data.meals[i].strMeal} </h5>
         </div>
       </div>`
         
       newDiv.classList.add("meal-style");
    
       oldContent.appendChild(newDiv);
           }
       
          
    }