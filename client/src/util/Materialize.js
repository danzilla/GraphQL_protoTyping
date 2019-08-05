import { Component } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";

class Materialize extends Component {

    componentDidMount() {
        const optionsL = {
            inDuration: 250,
            outDuration: 200,
            draggable: true,
            edge: 'left'
        }
        const optionsR = {
            inDuration: 250,
            outDuration: 200,
            draggable: true,
            edge: 'right'
        }

        // Auto initialize all the things!
        M.AutoInit();
        // select
        const selectF = document.querySelectorAll('#categoryParent');
        M.FormSelect.init(selectF)

        // navLeft
        const navLeft = document.querySelectorAll('#slideoutLeft');
        M.Sidenav.init(navLeft, optionsL)
        // navRight
        const navRight = document.querySelectorAll('#slideoutRight');
        M.Sidenav.init(navRight, optionsR)
    }
    render() { return ("");}
}

export default Materialize;
