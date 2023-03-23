import React from "react";
import "./App.css";

class ContactRow extends React.Component {
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
      rows.push(<contactRow key={contact.key} contact={contact} />);
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

export default App;
