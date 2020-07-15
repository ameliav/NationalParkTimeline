import React from 'react';
import { Dropdown } from 'semantic-ui-react';
//import history from '../history';
import Swal from 'sweetalert2';
import Scroll from 'react-scroll';
let scroller = Scroll.scroller;

class TopMenu extends React.Component {
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
        return this.arr; //returns an array of objects [{key:'',value:'',text:''}] used for the year dropdown
    }

    nameOptions = () => {
        this.props.e.map((y) => {
            return (
                this.arr2.push({
                    key: y["Name"],
                    value: y["Name"],
                    text: y["Name"]
                })
            )
        })
        return this.mySort(this.arr2); //returns an array of objects used for the name (of park) dropdown
    }
    mySort = (myArray) => {  //will make it so the names in the dropdown are in alphbetical order
        return myArray.sort((a, b) => this.sortAlphaNumeric(a['text'], b['text']));
    }
    sortAlphaNumeric = (a, b) => {
        a = typeof a === 'string' ? a.toLowerCase() : a.toString();
        b = typeof b === 'string' ? b.toLowerCase() : b.toString();
        return a.localeCompare(b);
    }

    yHandleChange = (e, { value }) => {
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
            placeholder="Go to Year"
            onChange= {this.yHandleChange}
        />
    )
    NameDropdownSearchSelect = () => (
        <Dropdown
            compact
            search
            selection
            options={this.nameOptions()}
            placeholder="Go to Park"
            onChange={this.nHandleChange}
        />
    )
    
    handleClick = () => {
        Swal.fire({
            title: 'About',
            html: 'This is a project made by <b>Amelia V.</b> to show the order that National Parks '+
            'were established and info about each one.<br/><br/>Data was taken from the wikipedia page on '+
            '<a href="https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States">National Parks.</a>'+
            '<br/><br/>Using the top menu, you can go to a specific year or park.',
            icon: 'info',
            confirmButtonText:'<i className="icon thumbs up"></i> Ok'
        })    
    } 

    render() {
        return (
            <div className="ui mini stackable top inverted green fixed menu">
                <div className="active header item">
                    <div className="ui inverted center aligned small header">
                        <i className="tree icon"></i>
                        <div className="content">
                            National Park Timeline
                        </div>
                    </div>
                </div>
                <div className="right menu">
                    <div className="ui item">                           
                        {this.YearDropdownSearchSelect()}
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        {this.NameDropdownSearchSelect()}
                        &nbsp;&nbsp;&nbsp;
                        <div className="ui primary button" onClick={this.handleClick}>About</div>
                    </div>                                 
                </div>
            </div>
        )
    }
}
export default TopMenu;

//A logout button to get back to the login page
/*<div className="ui item">
    <div className="ui primary button" onClick={() => history.push('/')}>Logout</div>
</div>*/