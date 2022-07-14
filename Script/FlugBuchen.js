


function Dlg_BookFlight(StadtVon, StadtNach, Datum="<SKIP>", Class="<SKIP>", Tickets, FindFlightBtn="Click", BuchenMsg){
  //Elemente identifizieren
  let StadtVonField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.fromCity;
  let StadtNachField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.toCity;
  let DatumField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.datePicker;
  let ClassField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.Class;
  let TicketsField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.numOfTickets;
      FindFlightBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.ButtonFindFlights;
  
  //Aktionen der Elemente
  StadtVonField.ClickItem(StadtVon);
  StadtNachField.ClickItem(StadtNach);
  TicketsField.ClickItem((Tickets-1));
  FindFlightBtn.ClickButton();
  
  //LogMsg     
  Log.Message(BuchenMsg);
}

