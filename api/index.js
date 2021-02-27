import student from './Student';
import user from './User';
import post from './Post';

/*********** Combine all Routes ********************/
export default [	
	...student,
	...user,
	...post,
];
