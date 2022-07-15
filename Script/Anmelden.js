
function Anmeldung(Val_UserName,Val_Password, Val_OkBtn= "<Click>", Cancel="<SKIP>", AnmeldungMsg){
  //Elemente Identifizieren
  let UserNameField = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  let PasswordBox = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.password_;
  let OkBtn  = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.okButton;
  
  //Aktionen    
  UserNameField.SetText(Val_UserName);
  PasswordBox.SetText(Val_Password);
  Allgemeine_Funktionen.Knopf_Handle(Val_OkBtn, "<Click>");
    
  //LogMsg 
  Log.Message(AnmeldungMsg);
}

function _Test(){
  let UserNameField = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  let PasswordBox = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.password;
      OkBtn  = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.okButton;
      Message= "Hi";
  Anmeldung("john", "HP", "<Click>", Message);
}
