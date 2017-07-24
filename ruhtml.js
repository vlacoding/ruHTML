function ruhtml(ru) 
{  
  var text = $('#'+ru).val();  
  text = text.split('\n').join('<br/>').split('<блок').join('<div').split('</блок>').join('</div>').split('выравн=').join('align=').split('<стр').join('<span').split('</стр>').join('</span>').split('[/c]').join('</div>').split('<и ').join('<img').split(' ист=').join(' src=').split('[url').join('<a href').split('url]').join('a>').split('[size').join('<font size').split('size]').join('font>').split('[color').join('<font color').split('color]').join('font>').split('<').join('<').split('[').join('<').split(']').join('>').split('[/').join('</');  
  if(text == '') text = 'Сначала введите ruHTML-код в поле выше!';  
  $("#result").html(text);  
}

$("#source").after('<input type="button" title="Посмотреть" onclick="ruhtml(\'source\')" value="Посмотреть">');
