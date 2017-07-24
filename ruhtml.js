function ruhtml(ru) 
{  
  var text = $('#'+ru).val();  
  text = text.split('\n').join('<br/>').split('[l]').join('<div align=\'left\'>').split('[/l]').join('</div>').split('[r]').join('<div align=\'right\'>').split('[/r]').join('</div>').split('[c]').join('<div align=\'center\'>').split('[/c]').join('</div>').split('[img]').join('<img src=\'').split('[/img]').join('\'/>').split('[url').join('<a href').split('url]').join('a>').split('[size').join('<font size').split('size]').join('font>').split('[color').join('<font color').split('color]').join('font>').split('<').join('<').split('[').join('<').split(']').join('>').split('[/').join('</');  
  if(text == '') text = 'Сначала введите ruHTML-код в поле выше!';  
  $("#result").html(text);  
}

$("#source").after('<input type="button" title="Посмотреть" onclick="ruhtml(\'source\')" value="Посмотреть">');
