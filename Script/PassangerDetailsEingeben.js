var FW_Allgemeine_Funktionen = require("FW_Allgemeine_Funktionen");

function EingabeVonDetails(PassagierName, Val_BestellenBtn = "<Click>", Val_NeueSucheBtn = "<SKIP>", DetailsMsg){
  //Elemente Identifizieren
  let PassagierField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.passengerName;
  let BestellenBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.orderBtn;
  let NeueSucheBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.newSearchBtn;
  
  //Aktionen
  PassagierField.SetText(PassagierName);
  if (aqString.Compare(Val_NeueSucheBtn, "<Skip>", false)===0)
  {
    FW_Allgemeine_Funktionen.Knopf_Aktionen(BestellenBtn, "<Click>");
  }
  //nicht mit delay sondern mit warte
  //Funktion, die auf ein Element wartet, in FW zu erstellen
  aqUtils.Delay(2000, "Wartezeit funktioniert");
  if (!Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.orderMadeMsg.Exists){
    Log.Error("Die gelungene Nachricht wurde nicht gezeigt")
  }
  
  //LogMsg
  Log.Message(DetailsMsg);
}


function _test(){
  EingabeVonDetails("Mo", "<Click>");
// Log.Message(!Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.orderMadeMsg.Exists);
}