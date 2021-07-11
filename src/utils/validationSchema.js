import * as yup from 'yup';

//this step is good. but it wont work for isValid. i dont know why

export const schema = yup.object().shape({
  // title: yup.mixed().oneOf(['Mr', 'Mrs', 'Miss'], 'select title').required(),
  // surName: yup.string().required('surname is required'),
  // firstName: yup.string().required('firstname is required'),
  // otherName: yup.string().required('other name is required'),
  // dateOfBirth: yup.string().required('dob is required'),
  // gender: yup.mixed().oneOf(['Male', 'Female'], 'select gender').required(),
  // residenceAddress: yup.string().required('address is required'),
  // city: yup.string().required('city is required'),
  // stateOfOrigin: yup.string().required('state of origin is required'),
  // localGovernment: yup.string().required('localgovernment area is required'),
  // emailAddress: yup
  //   .string()
  //   .email('Email is invalid')
  //   .required('your email is required'),
  // mobilePhoneNumber: yup.string().required('mobile phone is required'),
  // homePhoneNumber: yup.string().required('home phone is required'),
  // profession: yup.string().required('profession is required'),
  // employmentType: yup
  //   .mixed()
  //   .oneOf(['Retired', 'Self Employed', 'Employed'], 'select type')
  //   .required(),
  // companyName: yup.string().required('enter company name'),
  // bankName: yup.string().required('enter bank name'),
  // bankAccountNumber: yup.string().required('enter account number'),
  // bvnNumber: yup.string().required('enter bvn'),
  // sortCode: yup.string().required('enter sort code'),
  // accountOpeningDate: yup.string().required('enter date'),
  // bankAccountType: yup.string().required('enter account type'),
  // nextOfKinName: yup.string().required('name is required'),
  // chnNextOfKin: yup.string().required('chn is required'),
  // relationNextOfKin: yup.string().required('relationship is required'),
  // contactNextOfKin: yup.string().required('contact is required'),
  // phoneNumberNextOfKin: yup.string().required('phone number is required'),
  // emailNextOfKin: yup
  //   .string()
  //   .email('Email is invalid')
  //   .required('email is required'),
  // idForm: yup.string().required('identity type is required'),
  // idNumber: yup.string().required('id number is required'),
  // idExpireDate: yup.string().required('expirydate is required'),
  // passport: yup.string().required('passport is required'),
  // identitycard: yup.string().required('identity card is required'),
  // signature: yup.string().required('signature is required'),
  // utilitybill: yup.string().required('utility is required'),
  // bankstatement: yup.string().required('bankstatement is required'),
});
