import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// @ts-expect-error TS(2307): Cannot find module 'constants/defaultValues' or it... Remove this comment to see the full error message
import { firebaseConfig } from 'constants/defaultValues';

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { auth, database };
