
function Edit_Functions(Obj_Edit, Value){
  //To solve Buffer problem of value
  var Var1;
  if(aqString.Contains(Value, "Buffer", 0, false)!==-1){
    Var1 = "<Buffer>"
  }else{
    Var1 = Value;
  }
  
  //Value of actions
  switch ( aqString.ToUpper(Var1) )
  {
    case "<SKIP>":
      Skip_EditField(Obj_Edit, Value = "<SKIP>");
      break;
  
    case "<CLEAR>":
      Clear_EditField(Obj_Edit, Value = "<Clear>");
      break;
      
    case "<LOG>":
      Log_EditField(Obj_Edit, Value = "<Log>");
      break;
      
    case "<BUFFER>":
      Buffer_Edit(Obj_Edit, Value);
      break;
      
    default:
      FalsherAngegebeneWert();
  }
}

function _Test_(){
  let EditFlied = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  Edit_Functions(EditFlied, "<BUFFER FlightNumberNEW1>")
}

function Skip_EditField(Obj_Edit, Value = "<SKIP>"){
   Log.Message("Skip Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object"); 
}


function Clear_EditField(Obj_Edit, Value = "<Clear>"){
    Obj_Edit.Clear();
    Log.Message("Clear Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
}

function Log_EditField(Obj_Edit, Value = "<Log>"){
    if(aqString.Compare(Obj_Edit.wText, "", false)===0){
      Log.Message("Der Feld "+ "'" + Obj_Edit.WPFControlName + "'" + " ist leer")
    }else{
      Log.Message("Der Feld enthält den Wert: " + Obj_Edit.wText);
    }
    Log.Message("Log Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
}

function Buffer_Edit(Obj_Edit, Value = "<BUFFER FlightNumber>"){
    Value;
    // To get variable  name
    aqString.ListSeparator = " ";
    var VariableNameWithGreaterThan = aqString.GetListItem(Value,1);
    var VarLength = aqString.GetLength(VariableNameWithGreaterThan);
    var VariableName = aqString.Remove(VariableNameWithGreaterThan, VarLength-1, 1);
    //Create variable in project and assign value
    //--If variable exist OR NOT Case
    if(Project.Variables.VariableExists(VariableName)){
      Log.Message("Dies Variable existiert");
    }else{
      Project.Variables.AddVariable(VariableName, "String");     
    }
    Project.Variables.$set("VariableByName", VariableName, Obj_Edit.wText);
    //check that variable is created and check the value as well
    if(aqString.Compare(Project.Variables.VariableByName(VariableName), Obj_Edit.wText, true)===0){
      Log.Message("Variable wurde erfolgreich unter Name " + "'" + VariableName + "'" + " angelegt , und ihr Wert ist " + "'" + Project.Variables.VariableByName(VariableName) + "'");
    }else{
      Log.Error("Variable wurde NICHT erstellt Oder der Wert ist nicht korrekt");
    }
    Log.Message("Buffer Aktion wurde ausgewählt mit " + "'" + Obj_Edit.WPFControlName +  "'" + " Object");
}

function FalsherAngegebeneWert(){
  Log.Warning("Der angegebene Wert ist nicht korrekt")
}


function _Test_2(){
  let EditFlied = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  var XVar = "NewVar";
  Project.Variables.RemoveVariable("NewVar");
  Project.Variables.AddVariable(XVar, "String");
  Project.Variables.$set("VariableByName", XVar, "Hi");
  Log.Message(Project.Variables.VariableByName(XVar));
}

//Überall ändern
// cases: label --> label von button auszulesen in log schreiben, case tooltip--> tooltip auslesen (wenn beispiel finde)
function Knopf_Aktionen(Obj_Knopf, Aktionswert){
  switch ( aqString.ToUpper(Aktionswert) )
  {
    case "<CLICK>":
      Log.Message("Click Aktion wurde mit dem "+ Obj_Knopf.Content + " Knopf ausgewählt");
      Obj_Knopf.ClickButton();  
      break;

    case "<SKIP>":
      Log.Message("Skip Aktion wurde mit dem "+ Obj_Knopf.Content + " Knopf ausgewählt");  
      break;
      
    case "<LABEL>":
      let LabelDesKnopfes = Obj_Knopf.Content;
      Log.Message("Das Label des Knopfes ist: " + LabelDesKnopfes);
      return LabelDesKnopfes;
      break;  
    
    default:
      Log.Error("Der angegebene Wert des Knopfes ist nicht Korrekt");          
  }
}

function DropDown_WertEingaben(Obj_Field, Value){
  if (equal(Value, "<Skip>", false)!==0)
  {
    Obj_Field.ClickItem(Value);
  }
}
module.exports.DropDown_WertEingaben = DropDown_WertEingaben;
module.exports.Knopf_Aktionen = Knopf_Aktionen;