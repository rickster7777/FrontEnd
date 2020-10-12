//after writing exporrt in front of promote function in teacher.js it will be visible here in intellisense
//promote is an example of named exports

//import { Teacher } from "./teacher.js";
//as default is added in the teache.js {} are not needed anymore

import Teacher  from "./teacher.js";
const teacher = new Teacher("rish", "BE");
teacher.teach();

//importing named and default modules together
//import Teacher, { promote }  from "./teacher.js";

// ctrl + space to see intellisense of modules