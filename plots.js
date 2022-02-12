// Create dropdown menu of ID numbers dynamically
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })}
  
  init();

  // Function called from HTML doc, calls two additional functions:
  /// buildMetadata() and buildCharts()
  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  // Function takes in sample (ID #) as its argument
  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");
  
      PANEL.html("");
      PANEL.append("h6").text(Object.entries(result));
    });
  }
