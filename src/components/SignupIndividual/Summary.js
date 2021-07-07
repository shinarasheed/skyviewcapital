import React from 'react';
import { Button, Table } from 'react-bootstrap';
import axios from 'axios';

import SignupTitle from '../SignupTitle';

const Summary = ({ values, prevStep }) => {
  const goBackToPreviousStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  const {
    title,
    surName,
    firstName,
    otherName,
    dateOfBirth,
    gender,
    residenceAddress,
    city,
    stateOfOrigin,
    LocalGovernmentArea,
    emailAddress,
    mobilePhoneNumber,
    homePhoneNumber,
    profession,
    employmentType,
    companyName,
    bankName,
    bankAccountNumber,
    bvnNumber,
    sortCode,
    accountOpeningDate,
    bankAccountType,
    nextOfKinName,
    chnNextOfKin,
    relationNextOfKin,
    contactNextOfKin,
    phoneNumberNextOfKin,
    emailNextOfKin,
    idForm,
    idNumber,
    idExpireDate,
    passport,
    identityCaard,
    signature,
    utilitybill,
    bankstatement,
  } = values;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append('title', title);
    formData.append('surName', surName);
    formData.append('firstName', firstName);
    formData.append('otherName', otherName);
    formData.append('dateOfBirth', dateOfBirth);
    formData.append('gender', gender);
    formData.append('residenceAddress', residenceAddress);

    formData.append('city', city);
    formData.append('stateOfOrigin', stateOfOrigin);
    formData.append('localGovernmentArea', LocalGovernmentArea);
    formData.append('emailAddress', emailAddress);
    formData.append('mobilePhoneNumber', mobilePhoneNumber);
    formData.append('homePhoneNumber', homePhoneNumber);
    formData.append('profession', profession);
    formData.append('employmentType', employmentType);

    formData.append('companyName', companyName);
    formData.append('bankName', bankName);
    formData.append('bankAccountNumber', bankAccountNumber);
    formData.append('bvnNumber', bvnNumber);
    formData.append('sortCode', sortCode);
    formData.append('accountOpeningDate', accountOpeningDate);
    formData.append('bankAccountType', bankAccountType);
    formData.append('nextOfKinName', nextOfKinName);
    formData.append('chnNextOfKin', chnNextOfKin);
    formData.append('relationNextOfKin', relationNextOfKin);
    formData.append('contactNextOfKin', contactNextOfKin);
    formData.append('phoneNumberNextOfKin', phoneNumberNextOfKin);

    formData.append('emailNextOfKin', emailNextOfKin);
    formData.append('idForm', idForm);
    formData.append('idNumber', idNumber);
    formData.append('idExpireDate', idExpireDate);
    formData.append('passport', passport);
    formData.append('identityCaard', identityCaard);
    formData.append('signature', signature);
    formData.append('utilitybill', utilitybill);
    formData.append('bankstatement', bankstatement);

    console.log(values);

    const config = {
      headers: {
        'Content-Type': 'multipart/form-formData',
      },
    };

    try {
      await axios.post('http://localhost:8080/api/register', formData, config);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <SignupTitle title="summary" />

        <div className="summaryTablesContainer">
          <Table
            style={{
              color: 'white',
              border: '1px solid white',
            }}
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th style={{ color: 'white' }}>#</th>
                <th style={{ color: 'white' }} colSpan="3">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Title</td>
                <td>{values.title}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Surname</td>
                <td>{values.surName}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>First Name</td>
                <td>{values.firstName}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Other Name</td>
                <td>{values.otherName}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>date of Birth</td>
                <td>{values.dateOfBirth}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Gender</td>
                <td>{values.gender}</td>
              </tr>

              <tr>
                <td>7</td>
                <td>Residence Address</td>
                <td>{values.residenceAddress}</td>
              </tr>

              <tr>
                <td>8</td>
                <td>City</td>
                <td>{values.city}</td>
              </tr>

              <tr>
                <td>9</td>
                <td>State of Origin</td>
                <td>{values.stateOfOrigin}</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Local Government Area</td>
                <td>{values.LocalGovernmentArea}</td>
              </tr>

              <tr>
                <td>11</td>
                <td>Email Address</td>
                <td>{values.emailAddress}</td>
              </tr>

              <tr>
                <td>12</td>
                <td>Mobile Phone No.</td>
                <td>{values.mobilePhoneNumber}</td>
              </tr>

              <tr>
                <td>13</td>
                <td>Home Phone No.</td>
                <td>{values.homePhoneNumber}</td>
              </tr>

              <tr>
                <td>14</td>
                <td>Profession</td>
                <td>{values.profession}</td>
              </tr>

              <tr>
                <td>15</td>
                <td>Employement Type</td>
                <td>{values.employmentType}</td>
              </tr>

              <tr>
                <td>16</td>
                <td>Company Name</td>
                <td>{values.companyName}</td>
              </tr>

              <tr>
                <td>18</td>
                <td>Bank Name</td>
                <td>{values.bankName}</td>
              </tr>
            </tbody>
          </Table>

          <Table
            style={{ color: 'white', border: '1px solid white' }}
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th style={{ color: 'white' }}>#</th>
                <th style={{ color: 'white' }} colSpan="3">
                  Summary
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>19</td>
                <td>Bank Account Number</td>
                <td>{values.bankAccountNumber}</td>
              </tr>

              <tr>
                <td>20</td>
                <td>BVN</td>
                <td>{values.bvnNumber}</td>
              </tr>

              <tr>
                <td>21</td>
                <td>Bank Account Type</td>
                <td>{values.bankAccountType}</td>
              </tr>

              <tr>
                <td>22</td>
                <td>Bank Statement</td>
                <td>{values.bankstatement.name}</td>
              </tr>

              <tr>
                <td>23</td>
                <td>Sort Code</td>
                <td>{values.sortCode}</td>
              </tr>

              <tr>
                <td>24</td>
                <td>Account Opening Date</td>
                <td>{values.accountOpeningDate}</td>
              </tr>

              <tr>
                <td>25</td>
                <td>Name of Next of Kin</td>
                <td>{values.nextOfKinName}</td>
              </tr>

              <tr>
                <td>26</td>
                <td>chn of Next Of Kin</td>
                <td>{values.chnNextOfKin}</td>
              </tr>

              <tr>
                <td>27</td>
                <td>Relation With Next Of Kin</td>
                <td>{values.relationNextOfKin}</td>
              </tr>

              <tr>
                <td>28</td>
                <td>Next Of Kin Contact</td>
                <td>{values.contactNextOfKin}</td>
              </tr>

              <tr>
                <td>29</td>
                <td>Next Of Kin Phone</td>
                <td>{values.phoneNumberNextOfKin}</td>
              </tr>

              <tr>
                <td>30</td>
                <td>Next Of Kin Email</td>
                <td>{values.emailNextOfKin}</td>
              </tr>

              <tr>
                <td>31</td>
                <td>ID Card</td>
                <td>{values.idForm}</td>
              </tr>

              <tr>
                <td>32</td>
                <td>ID Number</td>
                <td>{values.idNumber}</td>
              </tr>

              <tr>
                <td>33</td>
                <td>ID Expiry Date</td>
                <td>{values.idExpireDate}</td>
              </tr>

              <tr>
                <td>34</td>
                <td>Passport Photo</td>
                <td>{values.passport.name}</td>
              </tr>

              <tr>
                <td>35</td>
                <td>Photo ID</td>
                <td>{values.identityCaard.name}</td>
              </tr>

              <tr>
                <td>36</td>
                <td>Signature</td>
                <td>{values.signature.name}</td>
              </tr>

              <tr>
                <td>37</td>
                <td>Utility Bill</td>
                <td>{values.utilitybill.name}</td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="summaryButtonContainer">
          <Button
            onClick={(e) => goBackToPreviousStep(e)}
            className="mt-4"
            variant="primary"
            type="button"
          >
            Go Back
          </Button>

          <Button className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default Summary;
