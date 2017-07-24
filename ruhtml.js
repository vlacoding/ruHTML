function ruhtml(ru) 
{  
  var text = $('#'+ru).val();  
  text = text.split('<рс>').join('<br>').split('<блок').join('<div').split('</блок>').join('</div>').split('выравн=').join('align=').split('<стр').join('<span').split('</стр>').join('</span>').split('<скрипт').join('<script').split('<и ').join('<img').split(' ист=').join(' src=').split('</скрипт>').join('</script>').split(' шир=').join(' width=').split(' выс=').join(' height=').split('<я гс=').join('<a href=').split('</я>').join('</a>').split(' стиль=').join(' style=').split('<ж').join('<b').split('<к').join('<i').split('<ч').join('<u').split('</ж>').join('</b>').split('</к>').join('</i>').split('</ч>').join('</u>');  
  if(text == '') text = 'Сначала введите ruHTML-код в поле выше!';  
  $("#result").html(text);  
}

function clearfield() {
 $("#result").html(" "); 
}

$("#source").after('<br><input type="button" title="Посмотреть результат" style="width:50%" onclick="ruhtml(\'source\')" value="Посмотреть"><input type="button" title="Очистить" onclick="clearfield()" style="width:50%" value="Очистить результат">');
