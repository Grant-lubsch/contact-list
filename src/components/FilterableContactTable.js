import React from "react";
import { SearchBar } from "./SearchBar.js";
import { NewContactRow } from "./NewContactRow.js";
import { ContactTable } from "./ContactTable.js";

export class FilterableContactTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
      contacts: [],
    };
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.addContact = this.addContact.bind(this);
  }

  addContact(contact) {
    var timestamp = new Date().getTime();
    contact["key"] = timestamp;
    this.state.contacts.push(contact);
    this.setState({ contacts: this.state.contacts });
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText,
    });
  }

  render() {
    return (
      <div>
        <h1>Contact List</h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextInput={this.handleFilterTextInput}
        />
        <NewContactRow addContact={this.addContact} />
        <ContactTable
          contacts={this.state.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}
