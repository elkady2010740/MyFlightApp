

function onTestSuiteEntry(TestSuite){
  Log.AppendFolder(TestSuite);
}

function onTestSuiteExit(){
  Log.PopLogFolder();
}

function onTestCaseEntry(){
  Log.AppendFolder("TestCase Folder was successfully created")
}


function onTestCaseExit(){
  Log.PopLogFolder();
}