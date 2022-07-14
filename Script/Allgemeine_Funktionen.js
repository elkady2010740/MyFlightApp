

function Skip_Edit(Obj_Edit, Value = "<SKIP>"){
  if(aqString.Compare(Value, "<Skip>", false)===0){
    Log.Message("");
  }else{
    Log.Warning("Der angegebene Wert ist nicht korrekt")
  }
}

function _Test_(){
  
}