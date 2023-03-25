import "./style.css";
import { UI } from "@peasy-lib/peasy-ui";
import { Assets } from "@peasy-lib/peasy-assets";
import { Input } from "@peasy-lib/peasy-input";

const model = {
  button: (_event: any, model: any) => {
    console.log("before: ", model);

    let nextKey: "A" | "B";
    if (model.currentKey == "A") nextKey = "B";
    else nextKey = "A";

    model.currentKey = nextKey;
    model.myArray = [];
    model.myArray = [...model.myMap[nextKey]];
    /* model.myMap[nextKey].forEach((key: any) => {
      model.myArray.push(key);
    }); */
    console.log("after: ", model);
  },
  myArray: [],
  get currentArray() {
    let newArray = this.myMap[this.currentKey];
    return newArray;
  },
  currentKey: <"A" | "B">"A",
  myMap: {
    A: [
      {
        id: 0,
        src: "A first string",
        x: 23,
        y: 42,
      },
      {
        id: 1,
        src: "A 2nd string",
        x: 32,
        y: 24,
      },
    ],
    B: [
      {
        id: 0,
        src: "B string",
        x: 3454,
        y: 4123,
      },
      {
        id: 1,
        src: "B 2nd string",
        x: 7890,
        y: 6747,
      },
    ],
  },
};
const template = `<div> 
    <button \${click@=>button}>Toggle data</button>
    <!-- <div class="dataEntry" \${entry<=*myArray:id}>  -->
    <div class="dataEntry" \${entry<=*currentArray:id}>
        <div>id: \${entry.id}</div>    
        <div>SRC: \${entry.src}</div>
        <div>X : \${entry.x}</div>
        <div>Y : \${entry.y}</div>
    </div>
    </div>`;

UI.create(document.body, template, model);
