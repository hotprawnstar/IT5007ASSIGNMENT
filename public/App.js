import * as components from './Components.js';
import { useTable } from 'react-table';

class TripButtons extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Buttons"
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(components.Button, {
      buttonDivID: "Create_Button",
      buttonFrameID: "Create_Button_Frame",
      buttonBG: "Create_Button_bg",
      buttonFrameClass: "Create_Button_Frame",
      buttonLogo: /*#__PURE__*/React.createElement(components.CreateIcon, {
        logo: "Create_Button_Logo"
      }),
      buttonContentID: "Create_Button_Content",
      buttonContent: "Create"
    }), /*#__PURE__*/React.createElement(components.Button, {
      buttonDivID: "Delete_Button",
      buttonFrameID: "Delete_Button_Frame",
      buttonBG: "Delete_Button_bg",
      buttonFrameClass: "Delete_Button_Frame",
      buttonLogo: /*#__PURE__*/React.createElement(components.DeleteIcon, {
        logo: "Delete_Button_Logo"
      }),
      buttonContentID: "Delete_Button_Content",
      buttonContent: "Delete"
    }), /*#__PURE__*/React.createElement(components.Button, {
      buttonDivID: "Export_button",
      buttonFrameID: "Export_Button_Frame",
      buttonBG: "Export_Button_bg",
      buttonFrameClass: "Export_Button_Frame",
      buttonLogo: /*#__PURE__*/React.createElement(components.ExportIcon, {
        logo: "Export_Button_Logo"
      }),
      buttonContentID: "Export_Button_Content",
      buttonContent: "Export"
    })));
  }

}

class TripTable extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      id: "Table"
    }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(components.Table, null)));
  }

}

const element = /*#__PURE__*/React.createElement(TripTable, null);
ReactDOM.render(element, document.getElementById('Group_4'));