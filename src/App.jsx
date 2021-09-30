import * as components from './Components.js';
// import { useTable } from '/node_modules/react-table/dist/react-table.development.js';
// // import {useTable} from './react-table';


class TripButtons extends React.Component{
    render(){
        return(
            <div id = "Buttons">
            <React.Fragment>
            <components.Button buttonDivID = "Create_Button" buttonFrameID = "Create_Button_Frame" buttonBG = "Create_Button_bg" buttonFrameClass = "Create_Button_Frame" buttonLogo ={<CreateIcon logo ="Create_Button_Logo"/>} buttonContentID = "Create_Button_Content" buttonContent = "Create"/>

            <components.Button buttonDivID = "Delete_Button" buttonFrameID = "Delete_Button_Frame" buttonBG = "Delete_Button_bg" buttonFrameClass = "Delete_Button_Frame" buttonLogo ={<DeleteIcon logo ="Delete_Button_Logo"/>} buttonContentID = "Delete_Button_Content" buttonContent = "Delete"/>

            <components.Button buttonDivID = "Export_button" buttonFrameID = "Export_Button_Frame" buttonBG = "Export_Button_bg" buttonFrameClass = "Export_Button_Frame" buttonLogo ={<ExportIcon logo ="Export_Button_Logo"/>} buttonContentID = "Export_Button_Content" buttonContent = "Export"/>


            </React.Fragment>
            </div>
        );
    }
}

class TripTable extends React.Component{
    render(){
        return(
            <div id = "Table">
        <React.Fragment><components.Table /></React.Fragment>
        </div>);
    }
}



const element = <TripTable />;

ReactDOM.render(element, document.getElementById('Group_4'));