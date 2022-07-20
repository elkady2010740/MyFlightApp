var Allgemeine_Funktionen = require("Allgemeine_Funktionen");

function FlugAuswählen(Val_AuswählenKnopf="<Click>", Val_CancelBtn = "<SKIP>", AuswählenMsg){
  let SelectFlightKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.selectFlightBtn;
  let BacklKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.ButtonBack;
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
    return RowNumber;
  }else{
   Log.Error("Gibt's keine Ergebnisse");
  }
  Allgemeine_Funktionen.Knopf_Aktionen(BacklKnopf, "<Skip>");
  Allgemeine_Funktionen.Knopf_Aktionen(SelectFlightKnopf, "<Click>");
  
  //LogMsg
  Log.Message(AuswählenMsg);
}

function _Test3(){
//  FlugAuswählen("<Click>", "<Skip>", "Done");
  let SelectFlightKnopf = Aliases.FlightsGUI.HwndSource_MainNavigationWindow.MainNavigationWindow.selectFlightBtn;
  Log.Message(Allgemeine_Funktionen.Knopf_Handle(SelectFlightKnopf, "<Label>"));
  Allgemeine_Funktionen.Knopf_Handle(SelectFlightKnopf, "<Label>");
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
    return RowNumber;
  }else{
   Log.Error("Gibt's keine Ergebnisse");
  }
}

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