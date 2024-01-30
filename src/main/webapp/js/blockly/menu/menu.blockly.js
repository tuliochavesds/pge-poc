window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.menu = window.blockly.js.blockly.menu || {};
window.blockly.js.blockly.menu.Menu = window.blockly.js.blockly.menu.Menu || {};

/**
 * @function ToggleMenu
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 29/01/2024, 13:34:10
 *
 */
window.blockly.js.blockly.menu.Menu.ToggleMenuArgs = [];
window.blockly.js.blockly.menu.Menu.ToggleMenu = async function() {

  //
  value = this.cronapi.screen.getValueOfField("vars.toggleMenu");
  //
  if (this.cronapi.logic.isNullOrEmpty(value) || value == false || value == 'false') {
    //
    this.cronapi.screen.changeValueOfField("vars.toggleMenu", true);
  } else {
    //
    this.cronapi.screen.changeValueOfField("vars.toggleMenu", false);
  }
}

/**
 * @function EsconderMenu
 *
 *
 *
 *
 * @author Túlio Chaves De Souza
 * @since 29/01/2024, 13:34:10
 *
 */
window.blockly.js.blockly.menu.Menu.EsconderMenuArgs = [];
window.blockly.js.blockly.menu.Menu.EsconderMenu = async function() {

  //
  this.cronapi.screen.changeValueOfField("vars.toggleMenu", false);
}
