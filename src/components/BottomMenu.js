import React from 'react';
import { Dropdown } from 'semantic-ui-react';
//import history from '../history';
import Swal from 'sweetalert2';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;

class BottomMenu extends React.Component {
    arr = [];
    arr2 = [];
    len = this.props.yearArray.length;

    yearOptions = () => {
        for (var i = 0; i < this.len; i++) {
            this.arr.push({
                key: i + "_" + this.props.yearArray[i],
                value: i + "_" + this.props.yearArray[i],
                text: this.props.yearArray[i]
            });
        }
        return this.arr; 
    }
    handleChange = (e, { value }) => {
        scroller.scrollTo(value, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    };
    nHandleChange = (e, { value }) => {
        scroller.scrollTo(value, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    };
    YearDropdownSearchSelect = () => (
        <Dropdown
            compact
            search
            selection
            options={this.yearOptions()}
            placeholder="Year"
            onChange={this.handleChange}
        />
    )
    NameDropdownSearchSelect = () => (
        <Dropdown
            compact
            search
            selection
            options={this.nameOptions()}
            placeholder="Park"
            onChange={this.nHandleChange}
        />
    )
    nameOptions = () => {
        this.props.e.map((y, i) => {
            return (
                this.arr2.push({
                    key: y["Name"],
                    value: y["Name"],
                    text: y["Name"]
                })
            )
        })
        return this.mySort(this.arr2);
    }
    mySort = (myArray) => {
        return myArray.sort((a, b) => this.sortAlphaNumeric(a['text'], b['text']));
    }
    sortAlphaNumeric = (a, b) => {
        a = typeof a === 'string' ? a.toLowerCase() : a.toString();
        b = typeof b === 'string' ? b.toLowerCase() : b.toString();
        return a.localeCompare(b);
    }
    handleClick = () => {
        Swal.fire({
            title: 'About',
            html:'This is a project made by <b>Amelia V.</b> to show the order that National Parks '+
                'were established and info about each one.<br/><br/>Data was taken from the wikipedia page on '+
                '<a href="https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States">National Parks.</a>' +
                '<br/><br/>Using the top menu, you can go to a specific year or park.',
            icon:'info',
            confirmButtonText:'<i className="icon thumbs up"></i> Got it!'
        })
    }
    render() {
        return (
            <div className="ui bottom fixed menu">
                <div className="right menu">               
                    <div className="ui item">
                        Jump to&nbsp;&nbsp;
                        {this.YearDropdownSearchSelect()}&nbsp;&nbsp;
                        {this.NameDropdownSearchSelect()}
                    </div>
                    <div className="ui item">
                        {this.NameDropdownSearchSelect()}
                    </div>
                </div>
            </div>
        )
    }
}
export default BottomMenu;