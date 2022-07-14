
function FlugAuswählen(AuswählenKnopf="Click", CancelBtn = "<SKIP>", AuswählenMsg){
  //Elemente Identifizieren
  let Ausgewählte_Flug = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.DataGridCell;
      AuswählenKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.WPFObject("SelectFlight", "", 1).WPFObject("Grid", "", 1).WPFObject("Grid", "", 6).WPFObject("selectFlightBtn");
  
  //Aktionen
  Ausgewählte_Flug.Click();
  AuswählenKnopf.Click();
  
  //LogMsg
  Log.Message(AuswählenMsg);
  
}