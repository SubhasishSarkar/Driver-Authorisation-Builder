import ReactToPrint from "react-to-print";
import React from "react";
import { IconButton } from "@mui/material";
import PrintIcon from "@mui/icons-material/Print";
import { Tooltip } from "@mui/material";

class PdfFile extends React.Component {
  render() {
    return (
      <div style={{ padding: 10 }}>
        <p>{this.props.letter.p1}</p>
        <p>{this.props.letter.p2}</p>
      </div>
    );
  }
}

class Example extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => (
            <Tooltip title="Print" arrow placement="top">
              <IconButton color="default">
                <PrintIcon />
              </IconButton>
            </Tooltip>
          )}
          content={() => this.componentRef}
        />
        <PdfFile
          ref={(el) => (this.componentRef = el)}
          letter={this.props.letter}
        />
      </div>
    );
  }
}

export default Example;
