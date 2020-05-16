HTMLElement.prototype.addStyle = function(obj){
    for(let property in obj){
        if(typeof property === "string"){
            this.style.setProperty(property, obj[property])
        } else{
            this.style.setProperty(property.toString(), obj[property])
        }
    }
}