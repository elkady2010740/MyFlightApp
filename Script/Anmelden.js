﻿var Allgemeine_Funktionen = require("Allgemeine_Funktionen");

function Anmeldung(Val_UserName,Val_Password, Val_OkBtn= "<Click>", Val_Cancel="<SKIP>", AnmeldungMsg){
  //Elemente Identifizieren
  let UserNameField = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  let PasswordBox = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.password_;
  let Obj_OkBtn  = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.okButton;
  let Obj_CancelBtn = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.ButtonCancel;
  
  //Aktionen    
  UserNameField.SetText(Val_UserName);
  PasswordBox.SetText(Val_Password);
  if (aqString.Compare(Val_Cancel, "<Skip>", false)===0)
  {
    Allgemeine_Funktionen.Knopf_Handle(Obj_OkBtn, "<Click>");
  }
  else
  {
    Allgemeine_Funktionen.Knopf_Handle(Obj_CancelBtn, "<Skip>");
  }
  
  //LogMsg 
  Log.Message(AnmeldungMsg);
}





function _Test(){
  let UserNameField = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  let PasswordBox = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.password;
  let Obj_OkBtn  = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.okButton;
  let Message= "Hi";
  Anmeldung("john", "HP", "<Click>", "<Skip>" ,Message);
}
