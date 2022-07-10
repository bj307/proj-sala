class MyFooter extends HTMLElement {

    constructor() {
        super()
        this.shadow = this.attachShadow({mode: 'open'})
    }

    connectedCallback() {
        const template = `
        <style>
            .rodape {
                position: absolute;
                bottom: 0;
                background-color: cadetblue;
                color: #FFF;
                width: 100%;
                height: 30px;    
                text-align: center;
                align-items: center;
                line-height: 25px;
            }
            
            .textfooter {
                align-items: center;
            }

            #yellow {
                color: yellow;
            }
        </style>

        <slot>
            <span class="rodape">
                <a class="textfooter">Desenvolvido por <strong id="yellow">BJ</strong></a>
            </span>
        </slot>
        `
        
        this.shadow.innerHTML = template
        
    }
}

customElements.define('my-footer', MyFooter)