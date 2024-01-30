window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.andar = window.blockly.js.blockly.andar || {};
window.blockly.js.blockly.andar.Andar = window.blockly.js.blockly.andar.Andar || {};

/**
 * @function AbrirModal
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 30/01/2024, 08:37:18
 *
 */
window.blockly.js.blockly.andar.Andar.AbrirModalArgs = [];
window.blockly.js.blockly.andar.Andar.AbrirModal = async function() {

  //
  this.cronapi.screen.showModal("modal-andar-vaga");
}

/**
 * @function FecharModal
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 30/01/2024, 08:37:18
 *
 */
window.blockly.js.blockly.andar.Andar.FecharModalArgs = [];
window.blockly.js.blockly.andar.Andar.FecharModal = async function() {

  //
  this.cronapi.screen.hideModal("modal-andar-vaga");
}
