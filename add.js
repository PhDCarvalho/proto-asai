import * as ck          from './cookies.js';
import { getUserData, SYSTEM_CLASSES }  from './user.js'
import { makePopup }    from './popup.js';
getUserData()
const DIV_CONTENT = document.getElementById('con')
var INP_ARRAY = []
var INP_ARRAY_NECESSARY = []

var url = new URL(window.location.href)
var adding = url.searchParams.get('add');
switch (adding) {
    case 'lot':
        DIV_CONTENT.innerHTML = `
        <img src="img/Leaf.svg" class="svg_icon" style="width: 2.5rem; right: 0%; top: -7.5%; position: absolute;">
        <h2 class="title" style="display: flex;">
            Adicionar novo lote
        </h2>
        <p style="font-weight: lighter; font-size: .8rem;">ⓘ Note que um cadastro detalhado retornará dados e alertas mais precisos.</p>

        <label for="title">Título <span style="color: red">*</span></label>
        <input type="text" name="title" placeholder="Ex: Chácara Torres" id="title" required> 

        <label for="local">Localização</label>
        <input type="text" name="local" placeholder="Ex: Rua do Bom Plantio" id="local"> 


        <button class="access" id="create">Criar</button>
    `

    break;
    // _________________________



    case 'culture':
        DIV_CONTENT.innerHTML = `
        <img src="img/Leaf.svg" class="svg_icon" style="width: 2.5rem; right: 0%; top: -7.5%; position: absolute;">
        <h2 class="title" style="display: flex;">
            Adicionar nova cultura
        </h2>
        <p style="font-weight: lighter; font-size: .8rem;">ⓘ Note que um cadastro detalhado retornará dados e alertas mais precisos.</p>

        <label for="title">Título <span style="color: red">*</span></label>
        <input type="text" name="title" placeholder="Ex: Plantação de Cana..." id="title" required> 

        <label for="plant">Tipo <span style="color: red">*</span></label>
        <select name="plant" placeholder="Ex: Abóbora" id="plant" required>
            <option value="Abóbora">    Abóbora</option>
            <option value="Algodão">    Algodão</option>
            <option value="Arroz">      Arroz</option>
            <option value="Batata">     Batata</option>
            <option value="Café">       Café</option>
            <option value="Feijão">     Feijão</option>
            <option value="Mandioca">   Mandioca</option>
            <option value="Milho" selected>Milho</option>
            <option value="Repolho">    Repolho</option>
            <option value="Soja">       Soja</option>
            <option value="Trigo">      Trigo</option>
            <option value="">           Outro...</option>
        </select>

        <label for="dimensions">Dimensões</label>
        <div style="display: flex; gap: 2vw; width: 100%;">
            <input type="number" name="dimensions" placeholder="Ex: 100m" style="width: 35%;" id="dimensions1"> 
            x
            <input type="number" name="dimensions" placeholder="Ex: 200m" style="width: 35%;" id="dimensions2"> 
        </div>


        <label for="lot">Lote Correspondente <span style="color: red">*</span></label>
        <select name="lot" id="lot" required>
            <option value="Lote 1">Lote 1</option>
            <option value="Lote 2">Lote 2</option>
        </select>


        <button class="access" id="create">Criar</button>
        `

        break;
    // _________________________



    case 'supply':
        console.log('No html');
        
        break;
    // _________________________



    case 'employee':
        DIV_CONTENT.innerHTML = `
        <img src="img/Icon User.svg" class="svg_icon" style="width: 2.5rem; right: 0%; top: -7.5%; position: absolute;">
        <h2 class="title" style="display: flex;">
            Adicionar novo funcionário
        </h2>

        
        <label for="fullname">Nome completo <span style="color: red">*</span></label>
        <input type="text" name="fullname" placeholder="Ex: João da Silva" id="fullname" required> 

        
        <label for="username">Nome de usuário <span style="color: red">*</span></label>
        <input type="text" name="username" placeholder="Ex: joao_silva" id="username" required> 

        
        <label for="password">Senha <span style="color: red">*</span></label>
        <input type="password" name="password" placeholder="Insira uma senha forte" id="password" required> 
        

        <label for="password2">Confirmar senha <span style="color: red">*</span></label>
        <input type="password" name="password2" placeholder="Confirme a senha" id="password2" required> 


        <button class="access" id="create">Criar</button>
        `





        break;
    // _________________________



    case 'supplier':
        DIV_CONTENT.innerHTML = `
        <img src="img/Icon User.svg" class="svg_icon" style="width: 2.5rem; right: 0%; top: -7.5%; position: absolute;">
        <h2 class="title" style="display: flex;">
            Adicionar novo fornecedor
        </h2>

        
        <label for="fullname">Nome completo <span style="color: red">*</span></label>
        <input type="text" name="fullname" placeholder="Ex: Ricardo da Silva" id="fullname" required> 

        
        <label for="username">Nome de usuário <span style="color: red">*</span></label>
        <input type="text" name="username" placeholder="Ex: ricardo_silva" id="username" required> 

        
        <label for="password">Senha <span style="color: red">*</span></label>
        <input type="password" name="password" placeholder="Insira uma senha forte" id="password" required> 
        

        <label for="password2">Confirmar senha <span style="color: red">*</span></label>
        <input type="password" name="password2" placeholder="Confirme a senha" id="password2" required> 


        <button class="access" id="create">Criar</button>
        `

        break;
    // _________________________



    default:
        window.location.href = 'loading.html?message=not_found&to=add&time=1';
        break;
}

// setTimeout(() => {
const BTN_CREATE = document.getElementById('create')

BTN_CREATE.addEventListener('click', () => {

    // switch (adding) {
    //     case 'lo':
            
    //         break;
    
    //     default:
    //         break;
    // }

    console.log('yo');
    


    // for (let i = 0; i < INP_ARRAY.length; i++) {
    //     if (INP_ARRAY_NECESSARY[i] == true) {

    //         if (INP_ARRAY[i].value != null && INP_ARRAY[i].value != '') {
    //             console.log('all good yo');
                    
    //         } else {
    //             console.warn('count your days');
    //             break // your neck
    //         }
    //     } 
        
    //     makePopup('Preencha todos os campos', 2)       

    //     console.log('Submited');
        
    // }   


})


// }, 1000);