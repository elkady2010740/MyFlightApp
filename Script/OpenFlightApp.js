
function OpenApp(){
  if(Sys.WaitProcess("FlightsGUI").Exists){
    var App_run = Sys.Process("FlightsGUI");
    App_run.Close();
    Log.Message("App wurde geschlossen");
    TestedApps.Items(0).run();
    Log.Message("App wurde erfolgreich geöffnet");
  }else{
    TestedApps.Items(0).run();
    Log.Message("App wurde erfolgreich geöffnet");
  }
}