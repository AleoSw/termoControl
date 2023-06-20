const form = document.querySelector('#formConsultar')

form.addEventListener('submit', e => {
    e.preventDefault()
    const result = document.querySelector('.result')
    let cOrdenP = document.querySelector('input[name="codigoOrdenP"]').value
    let cTipoP = document.querySelector('input[name="codigoTipoM"]').value
    let cMateriaP = document.querySelector('input[name="codgoMateriaP"]').value

    result.classList.remove('d-none')
    result.classList.add('d-block')
    result.innerHTML = `
        <h3 class="title">Resultado</h3>
        <ul>
            <li class="subtitle">Codigo orden de produccion: ${cOrdenP}</li>
            <li class="subtitle">Codigo tipo material: ${cTipoP}</li>
            <li class="subtitle">Codigo materia prima: ${cMateriaP}</li>
        </ul>
    `
})