

function Skip_EditField(Obj_Edit, Value = "<SKIP>"){
  if(aqString.Compare(Value, "<Skip>", false)===0){
    Log.Message("Skip Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
  }else{
    FalsherAngegebeneWert();
  }
}


function Clear_EditField(Obj_Edit, Value = "<Clear>"){
  if(aqString.Compare(Value, "<Clear>", false)===0){
    Obj_Edit.Clear();
    Log.Message("Clear Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
  }else{
    FalsherAngegebeneWert();
  }
}

function Log_EditField(Obj_Edit, Value = "<Log>"){
  if(aqString.Compare(Value, "<Log>", false)===0){
    if(aqString.Compare(Obj_Edit.wText, "", false)===0){
      Log.Message("Der Feld "+ "'" + WPFControlName + "'" + " ist leer")
    }else{
      Log.Message("Der Feld enthält den Wert: " + Obj_Edit.wText);
    }
    Log.Message("Log Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
  }else{
    FalsherAngegebeneWert();
  }
}

function Buffer_Edit(Obj_Edit, Value = "<BUFFER FlightNumber>"){
  if(aqString.Contains(Value, "Buffer", 0, false)!==-1){
    Value;
    // To get variable  name
    aqString.ListSeparator = " ";
    var VariableNameWithGreaterThan = aqString.GetListItem(Value,1);
    var VarLength = aqString.GetLength(VariableNameWithGreaterThan);
    var VariableName = aqString.Remove(VariableNameWithGreaterThan, VarLength-1, 1);
    //Create variable in project and assign value
    Project.Variables.AddVariable(VariableName, "String");
    Project.Variables.$set("VariableByName", VariableName, Obj_Edit.wText);
    //check that variable is created and check the value as well
    if(aqString.Compare(Project.Variables.VariableByName(VariableName), Obj_Edit.wText, true)===0){
      Log.Message("Variable wurde erfolgreich unter Name " + "'" + VariableName + "'" + " angelegt , und ihr Wert ist " + "'" + Project.Variables.VariableByName(VariableName) + "'");
    }else{
      Log.Error("Variable wurde NICHT erstellt Oder der Wert ist nicht korrekt");
    }
    Log.Message("Buffer Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
  }else{
    FalsherAngegebeneWert();
  }
}

function FalsherAngegebeneWert(){
  Log.Warning("Der angegebene Wert ist nicht korrekt")
}

function _Test_(){
  let EditFlied = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  Project.Variables.RemoveVariable("FlightNumber");
  Buffer_Edit(EditFlied, "<BUFFER FlightNumber>");

}

function _Test_2(){
  let EditFlied = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  var XVar = "NewVar";
  Project.Variables.RemoveVariable("NewVar");
  Project.Variables.AddVariable(XVar, "String");
  Project.Variables.$set("VariableByName", XVar, "Hi");
  Log.Message(Project.Variables.VariableByName(XVar));
  

}


