import student from './Student';
import user from './User';
import post from './Post';
import profile from './Profile';

/*********** Combine all Routes ********************/
export default [	
	...student,
	...user,
	...post,
	...profile,
];
