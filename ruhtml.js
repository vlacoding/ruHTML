function ruhtml(ru) 
{  
  var text = $('#'+ru).val();  
  text = text.split('\n').join('<br/>').split('<блок').join('<div').split('</блок>').join('</div>').split('выравн=').join('align=').split('<стр').join('<span').split('</стр>').join('</span>').split('[/c]').join('</div>').split('<и ').join('<img').split(' ист=').join(' src=').split('[url').join('<a href').split('url]').join('a>').split('[size').join('<font size').split('size]').join('font>').split('[color').join('<font color').split('color]').join('font>').split('<').join('<').split('[').join('<').split(']').join('>').split('[/').join('</');  
  if(text == '') text = 'Сначала введите ruHTML-код в поле выше!';  
  $("#result").html(text);  
}

function clearfield() {
 $("#result").html(" "); 
}

$("#source").after('<br><input type="button" title="Посмотреть" style="width:50%" onclick="ruhtml(\'source\')" value="Посмотреть"><input type="button" title="Очистить" onclick="clearfield()" style="width:50%" value="Очистить">');
