/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 3981.0, "series": [{"data": [[0.0, 61.0], [0.1, 61.0], [0.2, 61.0], [0.3, 61.0], [0.4, 61.0], [0.5, 61.0], [0.6, 61.0], [0.7, 61.0], [0.8, 61.0], [0.9, 61.0], [1.0, 61.0], [1.1, 61.0], [1.2, 62.0], [1.3, 62.0], [1.4, 62.0], [1.5, 62.0], [1.6, 62.0], [1.7, 62.0], [1.8, 62.0], [1.9, 62.0], [2.0, 62.0], [2.1, 62.0], [2.2, 62.0], [2.3, 63.0], [2.4, 63.0], [2.5, 63.0], [2.6, 63.0], [2.7, 63.0], [2.8, 63.0], [2.9, 63.0], [3.0, 63.0], [3.1, 63.0], [3.2, 63.0], [3.3, 63.0], [3.4, 64.0], [3.5, 64.0], [3.6, 64.0], [3.7, 64.0], [3.8, 64.0], [3.9, 64.0], [4.0, 64.0], [4.1, 64.0], [4.2, 64.0], [4.3, 64.0], [4.4, 64.0], [4.5, 64.0], [4.6, 64.0], [4.7, 64.0], [4.8, 64.0], [4.9, 64.0], [5.0, 64.0], [5.1, 64.0], [5.2, 64.0], [5.3, 64.0], [5.4, 64.0], [5.5, 64.0], [5.6, 65.0], [5.7, 65.0], [5.8, 65.0], [5.9, 65.0], [6.0, 65.0], [6.1, 65.0], [6.2, 65.0], [6.3, 65.0], [6.4, 65.0], [6.5, 65.0], [6.6, 65.0], [6.7, 65.0], [6.8, 65.0], [6.9, 65.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 65.0], [7.4, 65.0], [7.5, 65.0], [7.6, 65.0], [7.7, 65.0], [7.8, 65.0], [7.9, 65.0], [8.0, 65.0], [8.1, 65.0], [8.2, 65.0], [8.3, 65.0], [8.4, 65.0], [8.5, 65.0], [8.6, 65.0], [8.7, 65.0], [8.8, 65.0], [8.9, 66.0], [9.0, 66.0], [9.1, 66.0], [9.2, 66.0], [9.3, 66.0], [9.4, 66.0], [9.5, 66.0], [9.6, 66.0], [9.7, 66.0], [9.8, 66.0], [9.9, 66.0], [10.0, 66.0], [10.1, 66.0], [10.2, 66.0], [10.3, 66.0], [10.4, 66.0], [10.5, 66.0], [10.6, 66.0], [10.7, 66.0], [10.8, 66.0], [10.9, 66.0], [11.0, 66.0], [11.1, 66.0], [11.2, 67.0], [11.3, 67.0], [11.4, 67.0], [11.5, 67.0], [11.6, 67.0], [11.7, 67.0], [11.8, 67.0], [11.9, 67.0], [12.0, 67.0], [12.1, 67.0], [12.2, 67.0], [12.3, 68.0], [12.4, 68.0], [12.5, 68.0], [12.6, 68.0], [12.7, 68.0], [12.8, 68.0], [12.9, 68.0], [13.0, 68.0], [13.1, 68.0], [13.2, 68.0], [13.3, 68.0], [13.4, 69.0], [13.5, 69.0], [13.6, 69.0], [13.7, 69.0], [13.8, 69.0], [13.9, 69.0], [14.0, 69.0], [14.1, 69.0], [14.2, 69.0], [14.3, 69.0], [14.4, 69.0], [14.5, 69.0], [14.6, 69.0], [14.7, 69.0], [14.8, 69.0], [14.9, 69.0], [15.0, 69.0], [15.1, 69.0], [15.2, 69.0], [15.3, 69.0], [15.4, 69.0], [15.5, 69.0], [15.6, 69.0], [15.7, 69.0], [15.8, 69.0], [15.9, 69.0], [16.0, 69.0], [16.1, 69.0], [16.2, 69.0], [16.3, 69.0], [16.4, 69.0], [16.5, 69.0], [16.6, 69.0], [16.7, 70.0], [16.8, 70.0], [16.9, 70.0], [17.0, 70.0], [17.1, 70.0], [17.2, 70.0], [17.3, 70.0], [17.4, 70.0], [17.5, 70.0], [17.6, 70.0], [17.7, 70.0], [17.8, 71.0], [17.9, 71.0], [18.0, 71.0], [18.1, 71.0], [18.2, 71.0], [18.3, 71.0], [18.4, 71.0], [18.5, 71.0], [18.6, 71.0], [18.7, 71.0], [18.8, 71.0], [18.9, 72.0], [19.0, 72.0], [19.1, 72.0], [19.2, 72.0], [19.3, 72.0], [19.4, 72.0], [19.5, 72.0], [19.6, 72.0], [19.7, 72.0], [19.8, 72.0], [19.9, 72.0], [20.0, 77.0], [20.1, 77.0], [20.2, 77.0], [20.3, 77.0], [20.4, 77.0], [20.5, 77.0], [20.6, 77.0], [20.7, 77.0], [20.8, 77.0], [20.9, 77.0], [21.0, 77.0], [21.1, 77.0], [21.2, 79.0], [21.3, 79.0], [21.4, 79.0], [21.5, 79.0], [21.6, 79.0], [21.7, 79.0], [21.8, 79.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 79.0], [22.3, 82.0], [22.4, 82.0], [22.5, 82.0], [22.6, 82.0], [22.7, 82.0], [22.8, 82.0], [22.9, 82.0], [23.0, 82.0], [23.1, 82.0], [23.2, 82.0], [23.3, 82.0], [23.4, 90.0], [23.5, 90.0], [23.6, 90.0], [23.7, 90.0], [23.8, 90.0], [23.9, 90.0], [24.0, 90.0], [24.1, 90.0], [24.2, 90.0], [24.3, 90.0], [24.4, 90.0], [24.5, 93.0], [24.6, 93.0], [24.7, 93.0], [24.8, 93.0], [24.9, 93.0], [25.0, 93.0], [25.1, 93.0], [25.2, 93.0], [25.3, 93.0], [25.4, 93.0], [25.5, 93.0], [25.6, 99.0], [25.7, 99.0], [25.8, 99.0], [25.9, 99.0], [26.0, 99.0], [26.1, 99.0], [26.2, 99.0], [26.3, 99.0], [26.4, 99.0], [26.5, 99.0], [26.6, 99.0], [26.7, 128.0], [26.8, 128.0], [26.9, 128.0], [27.0, 128.0], [27.1, 128.0], [27.2, 128.0], [27.3, 128.0], [27.4, 128.0], [27.5, 128.0], [27.6, 128.0], [27.7, 128.0], [27.8, 136.0], [27.9, 136.0], [28.0, 136.0], [28.1, 136.0], [28.2, 136.0], [28.3, 136.0], [28.4, 136.0], [28.5, 136.0], [28.6, 136.0], [28.7, 136.0], [28.8, 136.0], [28.9, 144.0], [29.0, 144.0], [29.1, 144.0], [29.2, 144.0], [29.3, 144.0], [29.4, 144.0], [29.5, 144.0], [29.6, 144.0], [29.7, 144.0], [29.8, 144.0], [29.9, 144.0], [30.0, 144.0], [30.1, 144.0], [30.2, 144.0], [30.3, 144.0], [30.4, 144.0], [30.5, 144.0], [30.6, 144.0], [30.7, 144.0], [30.8, 144.0], [30.9, 144.0], [31.0, 144.0], [31.1, 144.0], [31.2, 150.0], [31.3, 150.0], [31.4, 150.0], [31.5, 150.0], [31.6, 150.0], [31.7, 150.0], [31.8, 150.0], [31.9, 150.0], [32.0, 150.0], [32.1, 150.0], [32.2, 150.0], [32.3, 406.0], [32.4, 406.0], [32.5, 406.0], [32.6, 406.0], [32.7, 406.0], [32.8, 406.0], [32.9, 406.0], [33.0, 406.0], [33.1, 406.0], [33.2, 406.0], [33.3, 406.0], [33.4, 408.0], [33.5, 408.0], [33.6, 408.0], [33.7, 408.0], [33.8, 408.0], [33.9, 408.0], [34.0, 408.0], [34.1, 408.0], [34.2, 408.0], [34.3, 408.0], [34.4, 408.0], [34.5, 409.0], [34.6, 409.0], [34.7, 409.0], [34.8, 409.0], [34.9, 409.0], [35.0, 409.0], [35.1, 409.0], [35.2, 409.0], [35.3, 409.0], [35.4, 409.0], [35.5, 409.0], [35.6, 411.0], [35.7, 411.0], [35.8, 411.0], [35.9, 411.0], [36.0, 411.0], [36.1, 411.0], [36.2, 411.0], [36.3, 411.0], [36.4, 411.0], [36.5, 411.0], [36.6, 411.0], [36.7, 415.0], [36.8, 415.0], [36.9, 415.0], [37.0, 415.0], [37.1, 415.0], [37.2, 415.0], [37.3, 415.0], [37.4, 415.0], [37.5, 415.0], [37.6, 415.0], [37.7, 415.0], [37.8, 420.0], [37.9, 420.0], [38.0, 420.0], [38.1, 420.0], [38.2, 420.0], [38.3, 420.0], [38.4, 420.0], [38.5, 420.0], [38.6, 420.0], [38.7, 420.0], [38.8, 420.0], [38.9, 421.0], [39.0, 421.0], [39.1, 421.0], [39.2, 421.0], [39.3, 421.0], [39.4, 421.0], [39.5, 421.0], [39.6, 421.0], [39.7, 421.0], [39.8, 421.0], [39.9, 421.0], [40.0, 421.0], [40.1, 423.0], [40.2, 423.0], [40.3, 423.0], [40.4, 423.0], [40.5, 423.0], [40.6, 423.0], [40.7, 423.0], [40.8, 423.0], [40.9, 423.0], [41.0, 423.0], [41.1, 423.0], [41.2, 424.0], [41.3, 424.0], [41.4, 424.0], [41.5, 424.0], [41.6, 424.0], [41.7, 424.0], [41.8, 424.0], [41.9, 424.0], [42.0, 424.0], [42.1, 424.0], [42.2, 424.0], [42.3, 426.0], [42.4, 426.0], [42.5, 426.0], [42.6, 426.0], [42.7, 426.0], [42.8, 426.0], [42.9, 426.0], [43.0, 426.0], [43.1, 426.0], [43.2, 426.0], [43.3, 426.0], [43.4, 427.0], [43.5, 427.0], [43.6, 427.0], [43.7, 427.0], [43.8, 427.0], [43.9, 427.0], [44.0, 427.0], [44.1, 427.0], [44.2, 427.0], [44.3, 427.0], [44.4, 427.0], [44.5, 428.0], [44.6, 428.0], [44.7, 428.0], [44.8, 428.0], [44.9, 428.0], [45.0, 428.0], [45.1, 428.0], [45.2, 428.0], [45.3, 428.0], [45.4, 428.0], [45.5, 428.0], [45.6, 429.0], [45.7, 429.0], [45.8, 429.0], [45.9, 429.0], [46.0, 429.0], [46.1, 429.0], [46.2, 429.0], [46.3, 429.0], [46.4, 429.0], [46.5, 429.0], [46.6, 429.0], [46.7, 431.0], [46.8, 431.0], [46.9, 431.0], [47.0, 431.0], [47.1, 431.0], [47.2, 431.0], [47.3, 431.0], [47.4, 431.0], [47.5, 431.0], [47.6, 431.0], [47.7, 431.0], [47.8, 433.0], [47.9, 433.0], [48.0, 433.0], [48.1, 433.0], [48.2, 433.0], [48.3, 433.0], [48.4, 433.0], [48.5, 433.0], [48.6, 433.0], [48.7, 433.0], [48.8, 433.0], [48.9, 434.0], [49.0, 434.0], [49.1, 434.0], [49.2, 434.0], [49.3, 434.0], [49.4, 434.0], [49.5, 434.0], [49.6, 434.0], [49.7, 434.0], [49.8, 434.0], [49.9, 434.0], [50.0, 434.0], [50.1, 437.0], [50.2, 437.0], [50.3, 437.0], [50.4, 437.0], [50.5, 437.0], [50.6, 437.0], [50.7, 437.0], [50.8, 437.0], [50.9, 437.0], [51.0, 437.0], [51.1, 437.0], [51.2, 437.0], [51.3, 437.0], [51.4, 437.0], [51.5, 437.0], [51.6, 437.0], [51.7, 437.0], [51.8, 437.0], [51.9, 437.0], [52.0, 437.0], [52.1, 437.0], [52.2, 437.0], [52.3, 438.0], [52.4, 438.0], [52.5, 438.0], [52.6, 438.0], [52.7, 438.0], [52.8, 438.0], [52.9, 438.0], [53.0, 438.0], [53.1, 438.0], [53.2, 438.0], [53.3, 438.0], [53.4, 441.0], [53.5, 441.0], [53.6, 441.0], [53.7, 441.0], [53.8, 441.0], [53.9, 441.0], [54.0, 441.0], [54.1, 441.0], [54.2, 441.0], [54.3, 441.0], [54.4, 441.0], [54.5, 459.0], [54.6, 459.0], [54.7, 459.0], [54.8, 459.0], [54.9, 459.0], [55.0, 459.0], [55.1, 459.0], [55.2, 459.0], [55.3, 459.0], [55.4, 459.0], [55.5, 459.0], [55.6, 550.0], [55.7, 550.0], [55.8, 550.0], [55.9, 550.0], [56.0, 550.0], [56.1, 550.0], [56.2, 550.0], [56.3, 550.0], [56.4, 550.0], [56.5, 550.0], [56.6, 550.0], [56.7, 553.0], [56.8, 553.0], [56.9, 553.0], [57.0, 553.0], [57.1, 553.0], [57.2, 553.0], [57.3, 553.0], [57.4, 553.0], [57.5, 553.0], [57.6, 553.0], [57.7, 553.0], [57.8, 554.0], [57.9, 554.0], [58.0, 554.0], [58.1, 554.0], [58.2, 554.0], [58.3, 554.0], [58.4, 554.0], [58.5, 554.0], [58.6, 554.0], [58.7, 554.0], [58.8, 554.0], [58.9, 555.0], [59.0, 555.0], [59.1, 555.0], [59.2, 555.0], [59.3, 555.0], [59.4, 555.0], [59.5, 555.0], [59.6, 555.0], [59.7, 555.0], [59.8, 555.0], [59.9, 555.0], [60.0, 555.0], [60.1, 567.0], [60.2, 567.0], [60.3, 567.0], [60.4, 567.0], [60.5, 567.0], [60.6, 567.0], [60.7, 567.0], [60.8, 567.0], [60.9, 567.0], [61.0, 567.0], [61.1, 567.0], [61.2, 570.0], [61.3, 570.0], [61.4, 570.0], [61.5, 570.0], [61.6, 570.0], [61.7, 570.0], [61.8, 570.0], [61.9, 570.0], [62.0, 570.0], [62.1, 570.0], [62.2, 570.0], [62.3, 574.0], [62.4, 574.0], [62.5, 574.0], [62.6, 574.0], [62.7, 574.0], [62.8, 574.0], [62.9, 574.0], [63.0, 574.0], [63.1, 574.0], [63.2, 574.0], [63.3, 574.0], [63.4, 594.0], [63.5, 594.0], [63.6, 594.0], [63.7, 594.0], [63.8, 594.0], [63.9, 594.0], [64.0, 594.0], [64.1, 594.0], [64.2, 594.0], [64.3, 594.0], [64.4, 594.0], [64.5, 595.0], [64.6, 595.0], [64.7, 595.0], [64.8, 595.0], [64.9, 595.0], [65.0, 595.0], [65.1, 595.0], [65.2, 595.0], [65.3, 595.0], [65.4, 595.0], [65.5, 595.0], [65.6, 724.0], [65.7, 724.0], [65.8, 724.0], [65.9, 724.0], [66.0, 724.0], [66.1, 724.0], [66.2, 724.0], [66.3, 724.0], [66.4, 724.0], [66.5, 724.0], [66.6, 724.0], [66.7, 733.0], [66.8, 733.0], [66.9, 733.0], [67.0, 733.0], [67.1, 733.0], [67.2, 733.0], [67.3, 733.0], [67.4, 733.0], [67.5, 733.0], [67.6, 733.0], [67.7, 733.0], [67.8, 733.0], [67.9, 733.0], [68.0, 733.0], [68.1, 733.0], [68.2, 733.0], [68.3, 733.0], [68.4, 733.0], [68.5, 733.0], [68.6, 733.0], [68.7, 733.0], [68.8, 733.0], [68.9, 739.0], [69.0, 739.0], [69.1, 739.0], [69.2, 739.0], [69.3, 739.0], [69.4, 739.0], [69.5, 739.0], [69.6, 739.0], [69.7, 739.0], [69.8, 739.0], [69.9, 739.0], [70.0, 739.0], [70.1, 739.0], [70.2, 739.0], [70.3, 739.0], [70.4, 739.0], [70.5, 739.0], [70.6, 739.0], [70.7, 739.0], [70.8, 739.0], [70.9, 739.0], [71.0, 739.0], [71.1, 739.0], [71.2, 739.0], [71.3, 739.0], [71.4, 739.0], [71.5, 739.0], [71.6, 739.0], [71.7, 739.0], [71.8, 739.0], [71.9, 739.0], [72.0, 739.0], [72.1, 739.0], [72.2, 739.0], [72.3, 746.0], [72.4, 746.0], [72.5, 746.0], [72.6, 746.0], [72.7, 746.0], [72.8, 746.0], [72.9, 746.0], [73.0, 746.0], [73.1, 746.0], [73.2, 746.0], [73.3, 746.0], [73.4, 747.0], [73.5, 747.0], [73.6, 747.0], [73.7, 747.0], [73.8, 747.0], [73.9, 747.0], [74.0, 747.0], [74.1, 747.0], [74.2, 747.0], [74.3, 747.0], [74.4, 747.0], [74.5, 754.0], [74.6, 754.0], [74.7, 754.0], [74.8, 754.0], [74.9, 754.0], [75.0, 754.0], [75.1, 754.0], [75.2, 754.0], [75.3, 754.0], [75.4, 754.0], [75.5, 754.0], [75.6, 755.0], [75.7, 755.0], [75.8, 755.0], [75.9, 755.0], [76.0, 755.0], [76.1, 755.0], [76.2, 755.0], [76.3, 755.0], [76.4, 755.0], [76.5, 755.0], [76.6, 755.0], [76.7, 763.0], [76.8, 763.0], [76.9, 763.0], [77.0, 763.0], [77.1, 763.0], [77.2, 763.0], [77.3, 763.0], [77.4, 763.0], [77.5, 763.0], [77.6, 763.0], [77.7, 763.0], [77.8, 766.0], [77.9, 766.0], [78.0, 766.0], [78.1, 766.0], [78.2, 766.0], [78.3, 766.0], [78.4, 766.0], [78.5, 766.0], [78.6, 766.0], [78.7, 766.0], [78.8, 766.0], [78.9, 771.0], [79.0, 771.0], [79.1, 771.0], [79.2, 771.0], [79.3, 771.0], [79.4, 771.0], [79.5, 771.0], [79.6, 771.0], [79.7, 771.0], [79.8, 771.0], [79.9, 771.0], [80.0, 771.0], [80.1, 792.0], [80.2, 792.0], [80.3, 792.0], [80.4, 792.0], [80.5, 792.0], [80.6, 792.0], [80.7, 792.0], [80.8, 792.0], [80.9, 792.0], [81.0, 792.0], [81.1, 792.0], [81.2, 792.0], [81.3, 792.0], [81.4, 792.0], [81.5, 792.0], [81.6, 792.0], [81.7, 792.0], [81.8, 792.0], [81.9, 792.0], [82.0, 792.0], [82.1, 792.0], [82.2, 792.0], [82.3, 924.0], [82.4, 924.0], [82.5, 924.0], [82.6, 924.0], [82.7, 924.0], [82.8, 924.0], [82.9, 924.0], [83.0, 924.0], [83.1, 924.0], [83.2, 924.0], [83.3, 924.0], [83.4, 933.0], [83.5, 933.0], [83.6, 933.0], [83.7, 933.0], [83.8, 933.0], [83.9, 933.0], [84.0, 933.0], [84.1, 933.0], [84.2, 933.0], [84.3, 933.0], [84.4, 933.0], [84.5, 973.0], [84.6, 973.0], [84.7, 973.0], [84.8, 973.0], [84.9, 973.0], [85.0, 973.0], [85.1, 973.0], [85.2, 973.0], [85.3, 973.0], [85.4, 973.0], [85.5, 973.0], [85.6, 990.0], [85.7, 990.0], [85.8, 990.0], [85.9, 990.0], [86.0, 990.0], [86.1, 990.0], [86.2, 990.0], [86.3, 990.0], [86.4, 990.0], [86.5, 990.0], [86.6, 990.0], [86.7, 1005.0], [86.8, 1005.0], [86.9, 1005.0], [87.0, 1005.0], [87.1, 1005.0], [87.2, 1005.0], [87.3, 1005.0], [87.4, 1005.0], [87.5, 1005.0], [87.6, 1005.0], [87.7, 1005.0], [87.8, 1008.0], [87.9, 1008.0], [88.0, 1008.0], [88.1, 1008.0], [88.2, 1008.0], [88.3, 1008.0], [88.4, 1008.0], [88.5, 1008.0], [88.6, 1008.0], [88.7, 1008.0], [88.8, 1008.0], [88.9, 1025.0], [89.0, 1025.0], [89.1, 1025.0], [89.2, 1025.0], [89.3, 1025.0], [89.4, 1025.0], [89.5, 1025.0], [89.6, 1025.0], [89.7, 1025.0], [89.8, 1025.0], [89.9, 1025.0], [90.0, 1025.0], [90.1, 1183.0], [90.2, 1183.0], [90.3, 1183.0], [90.4, 1183.0], [90.5, 1183.0], [90.6, 1183.0], [90.7, 1183.0], [90.8, 1183.0], [90.9, 1183.0], [91.0, 1183.0], [91.1, 1183.0], [91.2, 1345.0], [91.3, 1345.0], [91.4, 1345.0], [91.5, 1345.0], [91.6, 1345.0], [91.7, 1345.0], [91.8, 1345.0], [91.9, 1345.0], [92.0, 1345.0], [92.1, 1345.0], [92.2, 1345.0], [92.3, 1887.0], [92.4, 1887.0], [92.5, 1887.0], [92.6, 1887.0], [92.7, 1887.0], [92.8, 1887.0], [92.9, 1887.0], [93.0, 1887.0], [93.1, 1887.0], [93.2, 1887.0], [93.3, 1887.0], [93.4, 2246.0], [93.5, 2246.0], [93.6, 2246.0], [93.7, 2246.0], [93.8, 2246.0], [93.9, 2246.0], [94.0, 2246.0], [94.1, 2246.0], [94.2, 2246.0], [94.3, 2246.0], [94.4, 2246.0], [94.5, 2890.0], [94.6, 2890.0], [94.7, 2890.0], [94.8, 2890.0], [94.9, 2890.0], [95.0, 2890.0], [95.1, 2890.0], [95.2, 2890.0], [95.3, 2890.0], [95.4, 2890.0], [95.5, 2890.0], [95.6, 2896.0], [95.7, 2896.0], [95.8, 2896.0], [95.9, 2896.0], [96.0, 2896.0], [96.1, 2896.0], [96.2, 2896.0], [96.3, 2896.0], [96.4, 2896.0], [96.5, 2896.0], [96.6, 2896.0], [96.7, 3329.0], [96.8, 3329.0], [96.9, 3329.0], [97.0, 3329.0], [97.1, 3329.0], [97.2, 3329.0], [97.3, 3329.0], [97.4, 3329.0], [97.5, 3329.0], [97.6, 3329.0], [97.7, 3329.0], [97.8, 3533.0], [97.9, 3533.0], [98.0, 3533.0], [98.1, 3533.0], [98.2, 3533.0], [98.3, 3533.0], [98.4, 3533.0], [98.5, 3533.0], [98.6, 3533.0], [98.7, 3533.0], [98.8, 3533.0], [98.9, 3981.0], [99.0, 3981.0], [99.1, 3981.0], [99.2, 3981.0], [99.3, 3981.0], [99.4, 3981.0], [99.5, 3981.0], [99.6, 3981.0], [99.7, 3981.0], [99.8, 3981.0], [99.9, 3981.0], [100.0, 3981.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 24.0, "series": [{"data": [[0.0, 24.0], [2200.0, 1.0], [700.0, 15.0], [2800.0, 2.0], [3300.0, 1.0], [3500.0, 1.0], [900.0, 4.0], [3900.0, 1.0], [1000.0, 3.0], [1100.0, 1.0], [1300.0, 1.0], [100.0, 5.0], [400.0, 21.0], [1800.0, 1.0], [500.0, 9.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 3900.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 50.0, "series": [{"data": [[0.0, 50.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 33.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.766666666666671, "minX": 1.64734542E12, "maxY": 6.766666666666671, "series": [{"data": [[1.64734542E12, 6.766666666666671]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64734542E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 404.5, "minX": 1.0, "maxY": 1189.1666666666667, "series": [{"data": [[8.0, 683.6666666666666], [2.0, 413.3333333333333], [9.0, 554.0], [10.0, 404.5], [11.0, 1189.1666666666667], [12.0, 1177.5624999999998], [3.0, 640.75], [13.0, 428.6666666666667], [4.0, 425.4166666666666], [1.0, 553.0], [5.0, 469.95000000000005], [6.0, 427.4], [7.0, 575.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[6.766666666666671, 643.6444444444443]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 13.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 228.0, "minX": 1.64734542E12, "maxY": 16314.033333333333, "series": [{"data": [[1.64734542E12, 16314.033333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.64734542E12, 228.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64734542E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 643.6444444444443, "minX": 1.64734542E12, "maxY": 643.6444444444443, "series": [{"data": [[1.64734542E12, 643.6444444444443]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64734542E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 556.5999999999999, "minX": 1.64734542E12, "maxY": 556.5999999999999, "series": [{"data": [[1.64734542E12, 556.5999999999999]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64734542E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 203.06666666666675, "minX": 1.64734542E12, "maxY": 203.06666666666675, "series": [{"data": [[1.64734542E12, 203.06666666666675]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64734542E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 61.0, "minX": 1.64734542E12, "maxY": 3981.0, "series": [{"data": [[1.64734542E12, 3981.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.64734542E12, 1167.200000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.64734542E12, 3981.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.64734542E12, 2892.7]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.64734542E12, 61.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.64734542E12, 435.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64734542E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 420.0, "minX": 7.0, "maxY": 763.0, "series": [{"data": [[8.0, 502.0], [9.0, 420.0], [10.0, 425.0], [22.0, 448.0], [11.0, 550.0], [13.0, 763.0], [7.0, 553.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 420.0, "minX": 7.0, "maxY": 573.0, "series": [{"data": [[8.0, 495.0], [9.0, 420.0], [10.0, 425.0], [22.0, 448.0], [11.0, 550.0], [13.0, 573.0], [7.0, 553.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 22.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.64734542E12, "maxY": 1.5, "series": [{"data": [[1.64734542E12, 1.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64734542E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.5, "minX": 1.64734542E12, "maxY": 1.0, "series": [{"data": [[1.64734542E12, 1.0]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.64734542E12, 0.5]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.64734542E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.64734542E12, "maxY": 1.5, "series": [{"data": [[1.64734542E12, 1.5]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64734542E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.5, "minX": 1.64734542E12, "maxY": 1.5, "series": [{"data": [[1.64734542E12, 1.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.64734542E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

