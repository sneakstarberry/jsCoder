function DropDown(o) {
    this.options =o;
    window.getdd = function(elem){
        console.log(window.dropdowns)
        var id = elem.closest('.dropdown').parentElement.id;
        return window.dropdowns[id];
    }
    this.init = function() {
        this.elem = document.querySelector(this.options.id);
        
        var val = this.options.val;
        var html = `<div class = 'dropdown'>
                        <div class="dropdown_value">${val}</div>
                        <div class="dropdown_arrow">⬇</div>
                        <div class="dropdown_panel">
                            <div class="dropdown_items">
                            </div>
                        </div>
                    </div>`;
        this.elem.innerHTML = html;
        var elem = this.elem;

        this.elem.style.display = 'inline-block';

        if (!window.dropdowns) window.dropdowns = {};
        window.dropdowns[this.elem.id] = this;
        this.items = elem.querySelector(".dropdown_items");
        this.arrow = elem.querySelector(".dropdown_arrow");
        this.value = elem.querySelector(".dropdown_value");
        
        var data = this.options.data;
        html = "";
        data.forEach(elem=>{
            html += `<div class='dropdown_item' onmousedown = 'var self=getdd(this);self.clicked(this)'>${elem}</div>
            `;
        });
        this.items.innerHTML = html;

        var self = this;
        document.addEventListener('mousedown', () => {
            self.hide();
        });

        this.elem.addEventListener('mousedown', ()=>{
            event.stopPropagation();
            if(self.isVisible){
                self.hide();
            }
            else{
                self.show();
            }
        });
    }
    this.clicked = elem => {
        event.stopPropagation();
        this.hide();

        var newval = elem.innerHTML;
        this.value.innerHTML = newval;


    }
    this.show = () => {
        this.isVisible = true
        this.items.style.transform = "translate(0px, 0px)";
        this.arrow.style.transform = 'rotate(180deg)';
    }
    this.hide = () =>{
        this.isVisible = false;
        this.items.style.transform = "translate(0px, -255px)";
        this.arrow.style.transform = 'rotate(0deg)';
    }
    this.init();
    return this;
}