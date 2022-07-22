var FW_Allgemeine_Funktionen = require("FW_Allgemeine_Funktionen");

//Biligste prei
function Dlg_BookFlight(Val_StadtVon, Val_StadtNach, Val_Datum="<SKIP>", Val_Class="<SKIP>", Val_TicketsNumber, Val_FindFlightBtn="Click", BuchenMsg){
  //Elemente identifizieren
  let StadtVonField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.fromCity;
  let StadtNachField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.toCity;
  let DatumField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.datePicker;
  let ClassField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.Class;
  let TicketsField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.numOfTickets;
  let FindFlightBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.ButtonFindFlights;
   
  //Aktionen
  FW_Allgemeine_Funktionen.DropDown_WertEingaben(StadtVonField, Val_StadtVon);
  FW_Allgemeine_Funktionen.DropDown_WertEingaben(StadtNachField, Val_StadtNach);
  FW_Allgemeine_Funktionen.DropDown_WertEingaben(ClassField, Val_Class);
  FW_Allgemeine_Funktionen.DropDown_WertEingaben(TicketsField, (Val_TicketsNumber-1));
  if (aqString.Compare(Val_Datum, "Today", false)===0)
  {
    DatumField.SetToday();      
   Log.Message("Today was entered in the field"); 
  }else if(aqString.Compare(Val_Datum, "<Skip>", false)===0)
  {
    Log.Message("Skip wurde für Datum Feld ausgewählt");
  }else{
   DatumField.Keys(Val_Datum);
   Log.Message("Datum wurde wie in Argument eingegeben");
  }
  FW_Allgemeine_Funktionen.Knopf_Aktionen(FindFlightBtn, "<Click>");
  
  //LogMsg     
  Log.Message(BuchenMsg);
}

function _Test_(){
  let StadtVonField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.fromCity;
  let StadtNachField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.toCity;
  let DatumField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.datePicker;
  let ClassField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.Class;
  let TicketsField = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.numOfTickets;
  let FindFlightBtn = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.TabControl.ButtonFindFlights;
   
  Dlg_BookFlight("Frankfurt","London","20.10.2022", 1, 1, "Click")
}