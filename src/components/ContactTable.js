import React from "react";
import { ContactRow } from "./ContactRow";

export class ContactTable extends React.Component {
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
