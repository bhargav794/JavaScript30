const complte = document.querySelectorAll('.inbox input[type="checkbox"]');

 console.log(complte);

 let lastChecked;
 function handleCheck(e) {
    const checkbox = e.target;
    console.log(e)
    if(e.shiftKey && this.checked){ //considers both shift key and user check the item not UNCHECKED!
        let inBetween = false;
        complte.forEach(checkbox => {

            if(checkbox === this || checkbox === lastChecked){//processes only first and last checked.
                inBetween = !inBetween;//once inBetween became true it will become false only when we hit the last one
            }
            if(inBetween){
                checkbox.checked = true;
            } 
        })
    }
        lastChecked =this;
 }
 complte.forEach(checkbox => {
     checkbox.addEventListener("click",handleCheck);
 })
