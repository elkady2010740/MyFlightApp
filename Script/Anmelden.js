




function Anmeldung(UserName, Password, OkBtn= "Click", Cancel="<SKIP>", AnmeldungMsg){
  //Elemente Identifizieren
  let UserNameField = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.agentName;
  let PasswordBox = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.password;
      OkBtn  = Aliases.FlightsGUI.HwndSource_MainWindow.MainWindow.okButton;
  
  //Aktionen    
  UserNameField.SetText(UserName);
  PasswordBox.SetText(Password);
  OkBtn.ClickButton();
  
  //LogMsg 
  Log.Message(AnmeldungMsg);
}
