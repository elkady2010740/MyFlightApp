
function EingabeVonDetails(PassagierName, BestellenBtn, NeueSucheBtn = "<SKIP>", DetailsMsg){
  //Elemente Identifizieren
  let PassagierField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.passengerName;
  BestellenBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.orderBtn;
  
  //Aktionen
  PassagierField.SetText(PassagierName);
  BestellenBtn.ClickButton();
  aqUtils.Delay(100, "Wartezeit funktioniert");
  if(!Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.orderCompleted.Exists){
    Log.Error("Die gelungene Nachricht wurde nicht gezeigt")
  }
  
  //LogMsg
  Log.Message(DetailsMsg);
}


function NeueSucheBtnClicken(NeuSucheBtn="Click"){
  //Identifizieren
  NeuSucheBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.newSearchBtn;
  
  //Aktionen
  NeuSucheBtn.ClickButton();
}