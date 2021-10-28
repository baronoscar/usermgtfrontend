export class EmployeeData {

  firstName: string;
  lastName: string;
  email?: string;
  phoneNumber?: string;
  id: number;
  address?: string;

  static mapData(employee: {
    firstName: string,
    lastName: string,
    email?: string,
    phoneNumber?: string,
    id: number,
    address?: string,
    checked?: boolean
  }):

    EmployeeData {
    const {firstName, lastName, address, email, id, phoneNumber} = employee;
    const e = new EmployeeData();
    e.firstName = firstName;
    e.lastName = lastName;
    e.address = address;
    e.email = email;
    e.id = id;
    e.phoneNumber = phoneNumber;
    return e;
  }

}



