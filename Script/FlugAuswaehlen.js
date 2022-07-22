var FW_Allgemeine_Funktionen = require("FW_Allgemeine_Funktionen");

function FlugAuswählen(Val_AuswählenKnopf="<Click>", Val_CancelBtn = "<SKIP>", AuswählenMsg){
  //Variablen
  let SelectFlightKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.selectFlightBtn;
  let BacklKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.ButtonBack;
  let RowCount = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.wRowCount;
  var RowNumber;
  
  //Aktionen
  if (RowCount > 1)
  {
    var ArrayOfPrices = new Array();
    for (var i= 0; i < RowCount; i++ )
    {
      var MainGrid = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", (i+1)).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
      ArrayOfPrices[i] = MainGrid.Child(2).Text;
    }
    RowNumber = ArrayOfPrices.indexOf(GetMinOfArray(ArrayOfPrices)) + 1;
    let MinRow = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", RowNumber).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
    MinRow.Click();
  }else if(RowCount === 1){
    RowNumber = RowCount;
    var MainGrid = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", RowNumber).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
    MainGrid.Click();
  }else{
   Log.Error("Gibt's keine Ergebnisse");
  }
  FW_Allgemeine_Funktionen.Knopf_Aktionen(BacklKnopf, "<Skip>");
  FW_Allgemeine_Funktionen.Knopf_Aktionen(SelectFlightKnopf, "<Click>");
  
  //LogMsg
  Log.Message(AuswählenMsg);
}

function _Test3(){
//  FlugAuswählen("<Click>", "<Skip>", "Done");
  let SelectFlightKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.selectFlightBtn;
  Log.Message(FW_Allgemeine_Funktionen.Knopf_Handle(SelectFlightKnopf, "<Label>"));
  FW_Allgemeine_Funktionen.Knopf_Handle(SelectFlightKnopf, "<Label>");
}

function _Test(){
  let RowCount = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.wRowCount;
  var RowNumber;
  if (RowCount > 1)
  {
    var ArrayOfPrices = new Array();
    for (var i= 0; i < RowCount; i++ )
    {
      var MainGrid = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", (i+1)).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
      ArrayOfPrices[i] = MainGrid.Child(2).Text;
    }
    RowNumber = ArrayOfPrices.indexOf(GetMinOfArray(ArrayOfPrices)) + 1;
    let MinRow = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", RowNumber).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
    MinRow.Click();
  }else if(RowCount === 1){
    RowNumber = RowCount;
    var MainGrid = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", RowNumber).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
    MainGrid.Click();
  }else{
   Log.Error("Gibt's keine Ergebnisse");
  }
}

//function _test4

function GetMinOfArray(Arr){
  var Smallest = Arr[0];
  for (let i =1; i < Arr.length; i++) 
  {
   if (Arr[i] < Smallest)
   {
     Smallest = Arr[i];
   }
  }
  return Smallest;
}

function _Test1(){
//    var ArrayOfPrices = [];
    var MainGrid = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", 2).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1);
    let newGrid = MainGrid.Child(2);
    MainGrid.Click();
    newGrid.Click;
    Log.Message(Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.flightsDataGrid.WPFObject("DataGridRow", "", 2).WPFObject("DataGridCell", "", 1).WPFObject("ContentPresenter", "", 1).WPFObject("Grid", "", 1).WPFObject("TextBlock", "153,40", 2).Text)
    Log.Message(MainGrid.Child(2).Text);
}

function _Test2(){
  var arr = new Array();
  arr[0]= 2;
  arr[1]= 10;
  arr[2] = 0;
  Log.Message(Math.min(...arr));
  Log.Message(arr.indexOf(10));
  
}