import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

/*class ContactRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.contact.name}</td>
        <td>{this.props.contact.phone}</td>
        <td>{this.props.contact.email}</td>
      </tr>
    );
  }
}

class ContactTable extends React.Component {
  render() {
    var rows = [];
    this.props.contacts.forEach((contact) => {
      if (contact.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ContactRow key={contact.key} contact={contact} />);
    });
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>
              <i className="fa fa-fw fa-user"></i>Name
            </th>
            <th>
              <i className="fa fa-fw fa-phone"></i>Phone
            </th>
            <th>
              <i className="fa fa-fw fa-email"></i>E-Mail
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange =
      this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e) {
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return (
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Search for contacts"
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </form>
    );
  }
}

class FilterableContactTable extends React.Component {
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

class NewContactRow extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const target = event.target;
    const name = target.name.value;
    const phone = target.phone.value;
    const email = target.email.value;

    var contact = {
      name: name,
      phone: phone,
      email: email,
    };
    this.props.addContact(contact);
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group row">
          <div className="col-md-3">
            <input
              type="text"
              className="form-control"
              name="name"
              id="nameInput"
              placeholder="Name"
            />
          </div>
          <div className="col-md-3">
            <input
              type="text"
              name="phone"
              className="form-control"
              id="phoneInput"
              placeholder="Phone"
            />
          </div>
          <div className="col-md-3">
            <input
              type="email"
              name="email"
              className="form-control"
              id="emailInput"
              placeholder="Email"
            />
          </div>
          <div className="col-md-3">
            <button type="submit" className="btn btn-primary">
              <i className="fa fa-fw fa-plus"></i>Add
            </button>
          </div>
        </div>
      </form>
    );
  }
}

var CONTACTS = [];

ReactDOM.render(
  <FilterableContactTable contact={CONTACTS} />,
  document.getElementById("container")
);
