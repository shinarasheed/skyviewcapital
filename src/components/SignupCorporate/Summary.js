import React from 'react';
import { Button, Table } from 'react-bootstrap';

import SignupTitle from '../SignupTitle';

const Summary = ({
  getValues,
  onSubmit,
  handleSubmit,
  submitState,
  prevStep,
}) => {
  const goBackToPreviousStep = (e) => {
    prevStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
                <td>{getValues('title')}</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Surname</td>
                <td>{getValues('surName')}</td>
              </tr>
              <tr>
                <td>3</td>
                <td>First Name</td>
                <td>{getValues('firstName')}</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Other Name</td>
                <td>{getValues('otherName')}</td>
              </tr>
              <tr>
                <td>5</td>
                <td>date of Birth</td>
                <td>{getValues('dateOfBirth')}</td>
              </tr>
              <tr>
                <td>6</td>
                <td>Gender</td>
                <td>{getValues('gender')}</td>
              </tr>

              <tr>
                <td>7</td>
                <td>Residence Address</td>
                <td>{getValues('residenceAddress')}</td>
              </tr>

              <tr>
                <td>8</td>
                <td>City</td>
                <td>{getValues('city')}</td>
              </tr>

              <tr>
                <td>9</td>
                <td>State of Origin</td>
                <td>{getValues('stateOfOrigin')}</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Local Government Area</td>
                <td>{getValues('localGovernment')}</td>
              </tr>

              <tr>
                <td>11</td>
                <td>Email Address</td>
                <td>{getValues('emailAddress')}</td>
              </tr>

              <tr>
                <td>12</td>
                <td>Mobile Phone No.</td>
                <td>{getValues('mobilePhoneNumber')}</td>
              </tr>

              <tr>
                <td>13</td>
                <td>Home Phone No.</td>
                <td>{getValues('homePhoneNumber')}</td>
              </tr>

              <tr>
                <td>14</td>
                <td>Profession</td>
                <td>{getValues('profession')}</td>
              </tr>

              <tr>
                <td>15</td>
                <td>Employement Type</td>
                <td>{getValues('employmentType')}</td>
              </tr>

              <tr>
                <td>16</td>
                <td>Company Name</td>
                <td>{getValues('companyName')}</td>
              </tr>

              <tr>
                <td>18</td>
                <td>Bank Name</td>
                <td>{getValues('bankName')}</td>
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
                <td>{getValues('bankAccountNumber')}</td>
              </tr>

              <tr>
                <td>20</td>
                <td>BVN</td>
                <td>{getValues('bvnNumber')}</td>
              </tr>

              <tr>
                <td>21</td>
                <td>Bank Account Type</td>
                <td>{getValues('bankAccountType')}</td>
              </tr>

              <tr>
                <td>22</td>
                <td>Bank Statement</td>
                {/* <td>{getValues('bankstatement')}</td> */}
              </tr>

              <tr>
                <td>23</td>
                <td>Sort Code</td>
                <td>{getValues('sortCode')}</td>
              </tr>

              <tr>
                <td>24</td>
                <td>Account Opening Date</td>
                <td>{getValues('accountOpeningDate')}</td>
              </tr>

              <tr>
                <td>25</td>
                <td>Name of Next of Kin</td>
                <td>{getValues('nextOfKinName')}</td>
              </tr>

              <tr>
                <td>26</td>
                <td>chn of Next Of Kin</td>
                <td>{getValues('chnNextOfKin')}</td>
              </tr>

              <tr>
                <td>27</td>
                <td>Relation With Next Of Kin</td>
                <td>{getValues('relationNextOfKin')}</td>
              </tr>

              <tr>
                <td>28</td>
                <td>Next Of Kin Contact</td>
                <td>{getValues('contactNextOfKin')}</td>
              </tr>

              <tr>
                <td>29</td>
                <td>Next Of Kin Phone</td>
                <td>{getValues('phoneNumberNextOfKin')}</td>
              </tr>

              <tr>
                <td>30</td>
                <td>Next Of Kin Email</td>
                <td>{getValues('emailNextOfKin')}</td>
              </tr>

              <tr>
                <td>31</td>
                <td>ID Card</td>
                <td>{getValues('idForm')}</td>
              </tr>

              <tr>
                <td>32</td>
                <td>ID Number</td>
                <td>{getValues('idNumber')}</td>
              </tr>

              <tr>
                <td>33</td>
                <td>ID Expiry Date</td>
                <td>{getValues('idExpireDate')}</td>
              </tr>

              <tr>
                <td>34</td>
                <td>Passport Photo</td>
                <td></td>
              </tr>

              <tr>
                <td>35</td>
                <td>Photo ID</td>
                <td></td>
              </tr>

              <tr>
                <td>36</td>
                <td>Signature</td>
                <td></td>
              </tr>

              <tr>
                <td>37</td>
                <td>Utility Bill</td>
                <td></td>
              </tr>

              <tr>
                <td>38</td>
                <td>Incorporation Certificate</td>
                <td></td>
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
            {submitState}
          </Button>
        </div>
      </form>
    </>
  );
};

export default Summary;
