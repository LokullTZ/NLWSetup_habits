setTimeout(() => {
    const form = document.querySelector('#form-habits');
    const nlwSetup = new NLWSetup(form);
    const button = document.querySelector('header button');

    button.addEventListener('click', add);
    form.addEventListener('change', saveData);

    function add(){
       const today = new Date().toLocaleDateString('pt-br').slice(0, -5);
       const checkIfDayExists = nlwSetup.dayExists(today);

       if(checkIfDayExists){
            alert('❌ Erro: Dia já cadastrado!');
            return
       }

       alert('✅ Dia cadastrado com sucesso!');
       nlwSetup.addDay(today);
    }

    function saveData(){
        localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data));
    }

    const data = localStorage.getItem('NLWSetup@habits');
    nlwSetup.setData(JSON.parse(data) || {});
    nlwSetup.load();
}, 50);