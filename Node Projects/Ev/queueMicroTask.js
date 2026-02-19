console.log("Start");

setTimeout(() => {
  console.log("SetTimeOut Callback (MacroTask)");
});

queueMicrotask(() => {
  console.log("QueueMicroTak callBack (MacroTask)");
});

console.log("End");
