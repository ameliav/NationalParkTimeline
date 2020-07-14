import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import history from '../history';
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
        return this.arr; //returns an array of objects [{key:'',value:'',text:''}, {key:'',value:'',text:''}]
    }

    handleChange = (e,{ value }) => {
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
            search
            selection
            options={this.yearOptions()}
            placeholder="Go to Year"
            onChange= {this.handleChange}
        />
    )
    NameDropdownSearchSelect = () => (
        <Dropdown
            search
            selection
            options={this.nameOptions()}
            placeholder="Go to Park"
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
        return myArray.sort((a, b) => this.sortAlphaNumeric(a['text'], b['text']) );
    }

    sortAlphaNumeric = (a,b) => {
        a = typeof a === 'string' ? a.toLowerCase() : a.toString();
        b = typeof b === 'string' ? b.toLowerCase() : b.toString();
        return a.localeCompare(b);
    }
    handleSubmit = () => {
    Swal.fire({
        title: 'About',
        html: 'This is a project made by <b>Amelia V.</b> ' +
        'to show the order that National Parks ' + 
        'were established and info about each one.' +
        '<br/><br/>Data was taken from the wikipedia page on '+
        '<a href="https://en.wikipedia.org/wiki/List_of_national_parks_of_the_United_States">National Parks.</a>'+
        '<br/><br/>Using the top menu, you can go to a specific year or park.',
        icon: 'info',
        confirmButtonText:
            '<i className="icon thumbs up"></i> Got it!'
    })
       
    } 
    render() {
        return (
            <div className="ui mini top inverted green fixed menu">
                <div className="active header item">
                    <h5 className="ui inverted header">
                        <i className="tree icon"></i>
                        <div className="content">
                            National Park Timeline
                        </div>
                    </h5>
                </div>

                <div className="right menu">
                    <div className="ui item">                    
                        {this.YearDropdownSearchSelect()}
                    </div>
                    <div className="ui item">
                        {this.NameDropdownSearchSelect()}
                    </div>
                    <div className="ui item">
                        <div className="ui green button" onClick={this.handleSubmit}>About</div>
                    </div>
                    <div className="ui item">
                        <div className="ui primary button" onClick={() => history.push('/')}>Logout</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default TopMenu;

/*
    yearOptions = () => {
        return (this.props.yearArray.map((y, i) => {
            this.arr = [...this.arr, { key: i, value: y, text: y }];
            return this.arr;
            })
        )
        //return this.arr;
    }
*/
/*
    yearOptions = () => {
        return this.props.yearArray.map((y, i) => {
            return [...this.arr, { key: i, value: i, text: y }];
            /*return (
                <option key={i} value={y} >{y}</option>
            )
        })

        //return arr;
    }
*/
/*
{this.DropdownExampleSearchSelection()}

<div className="item">
    <select className="ui simple dropdown item" >
        <option value="">Year</option>
        {this.yearOptions()}
    </select>
</div>

<Dropdown
    clearable
    fluid
    search
    selection
    options={monthOptions(this.props.yearArray)}
    placeholder='Year'
/>
*/