function onEdit(e) {
  const sheet =
  e.source.getActiveSheet();
  const range = e.range;
  const value = e.value 
  if(sheet.getName()!== "Sheet1")
  return;
  if(!value)return;
  if(range.getFormula())return;
  const map ={"1":"book","11":"ready program","12":"drinking and eating",
  "2":"gym" , "3":"sleep", "4":"work",
  "5":"english or russia","6":"shower","7":"watch video",
  "8":"worship","9": "luandry or dishes","10":"make the bed or food"}; if(map[value])
  {range.setValue(map[value]);
  }
  
  }