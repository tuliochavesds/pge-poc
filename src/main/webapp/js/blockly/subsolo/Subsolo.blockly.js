window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.subsolo = window.blockly.js.blockly.subsolo || {};
window.blockly.js.blockly.subsolo.Subsolo = window.blockly.js.blockly.subsolo.Subsolo || {};

/**
 * @function AbrirModal
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 30/01/2024, 09:12:27
 *
 */
window.blockly.js.blockly.subsolo.Subsolo.AbrirModalArgs = [];
window.blockly.js.blockly.subsolo.Subsolo.AbrirModal = async function() {

  //
  this.cronapi.screen.showModal("modal-subsolo-vaga");
}

/**
 * @function FecharModal
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 30/01/2024, 09:12:27
 *
 */
window.blockly.js.blockly.subsolo.Subsolo.FecharModalArgs = [];
window.blockly.js.blockly.subsolo.Subsolo.FecharModal = async function() {

  //
  this.cronapi.screen.hideModal("modal-subsolo-vaga");
}
