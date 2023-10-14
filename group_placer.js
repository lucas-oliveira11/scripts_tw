ScriptAPI.register('GroupPlacer', true, 'Da Stewie', 'nl.tribalwars@coma.innogames.de');

$("#ds_body").append('<div style=\"display: block; z-index: 10000; position: fixed; width: 100px; height: 100px; white-space: nowrap; left: 554px; top: 126px\"><table class=\"vis\" style=\"background: url(\'http://cdn2.tribalwars.net/graphic/index/main_bg.jpg\'); border-top-color: rgb(128, 64, 0); border-left-color: rgb(128, 64, 0); border-right-color: rgb(128, 64, 0); border-bottom-color: rgb(128, 64, 0); border-top-width: 2px; border-left-width: 2px; border-right-width: 2px; border-bottom-width: 2px; border-top-style: solid; border-left-style: solid; border-right-style: solid; border-bottom-style: solid\"><tbody><tr><td align="right"><a href="#" onclick="javascript: void $(this).closest(\'div\').remove();">Fechar</a></td></tr><tr><td><textarea id="DS_coords" rows="10" cols="50" onclick="this.select();">Cole as coordenadas aqui</textarea></td></tr><tr><td align="center"><input type="button" value="Aanvinken"></input></td></tr></tbody><\/table><\/div>');
$("input[value='Aanvinken']").click(function () {
$("tr[class*='row_']").filter(function () {
return $("#DS_coords").val().indexOf($(this).text().match(/\d{1,3}\|\d{1,3}/)) != -1;
}).find("input[type=checkbox]").attr("checked", true);
});
void(0);