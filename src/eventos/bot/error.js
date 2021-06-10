module.exports = {
    name: 'error',
    execute: function(error) {
        console.log(`Houve um error na inicialização do bot.\n- ${error}`.brightRed)
    }
}