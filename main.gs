function getBodyTxt() {
  var str = DocumentApp.getActiveDocument().getBody().getText();
  return str;
}
function openSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('diffSpeak');
  DocumentApp.getUi().showSidebar(htmlOutput);
}
function onOpen() {
  var ui = DocumentApp.getUi(); 
  var menu = ui.createMenu('差分読上');
  menu.addItem('読上サイドバーを開く', 'openSidebar'); 
  menu.addToUi();
}