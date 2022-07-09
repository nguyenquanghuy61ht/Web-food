var backgroud_opacity=document.querySelector(".backgroud-opacity");
var tap_menu =document.querySelector(".tap-menu");
var input_search=document.querySelector("#search")
var list_product=document.querySelectorAll(".container__food-menu-oder-item")
var search__box_list=document.querySelector(".search__box-list")
var button_show_item=document.querySelector(".container__food-menu-titleAll")
//open_close_menu smarphone & ipad
 function open_close(x,y,z){
    backgroud_opacity.style.display=x;
    tap_menu.style.width =y;
    button_open.style.display = z;
 };
//search_product
   Array.from(list_product).forEach(function(elm){
      var name_title=elm.querySelector("h3").textContent;
      var img_product=elm.querySelector("img").outerHTML;
      var cost=elm.querySelector(".cost").textContent;
      var text_info=elm.querySelector(".text-info").textContent;
      search__box_list.innerHTML+=`
      <div class="header__search-list hide "  >
         ${img_product}
         <div class="header__search-list-item">
            <h3>${name_title}</h3>
            <p class="cost-list">${cost}</p>
            <p class="text-info-list">${text_info}</p>
         </div>
      </div>`
     
   })
   var header__search_list=document.querySelectorAll(".header__search-list")
   input_search.onkeyup=function(){
      var values_input=input_search.value.toLowerCase();
      Array.from(list_product).forEach(function(elm,index){
         var name_product=elm.querySelector(".food-menu-oder-item-pay h3").textContent;
         console.log(name_product.toLowerCase().indexOf(values_input))
         if(name_product.toLowerCase().indexOf(values_input)!==-1 && values_input!=='' )
         {
            
            header__search_list[index].classList.remove("hide")
        
   
         }
         else{
            
            header__search_list[index].classList.add("hide")
         }
        
        
      })
 
      
   }

//show||hide all item 
button_show_item.onclick=function(){
   var element=document.querySelector(".container__food-menu-oder");
   element.classList.toggle("togegle")
}
