document.querySelectorAll('.link').forEach(item=>{
   
   item.addEventListener('click',function(){
       let chevyicon = this.children[1]
       //toggle the menu
       if(this.nextElementSibling.classList.contains('active')){
           this.nextElementSibling.classList.remove('active')
       }else{
           this.nextElementSibling.classList.add('active')
           
       }
       //this.nextElementSibling.style.display="block";
       //console.log(this.nextElementSibling)
       rotateIcon(chevyicon);
   })

})

function rotateIcon(icon){
    if(icon.classList.contains('rotate-icon')){
        icon.classList.remove('rotate-icon')
    }else{
        icon.classList.add('rotate-icon')
    }
}