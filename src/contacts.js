import React, { Component } from 'react';

class Contacts extends Component {

    constructor(props) {
        super(props);
        this.state = {items:this.props.contacts};
        this.getContacts();
    }

    componentWillRecieveProps(nextProps) {
        if(this.props != nextProps) {
            if(nextProps.contacts.length > 0) {
                console.log(nextProps.contacts);
                this.setState({
                   items: nextProps.contacts 
                });
            }
        }
    }