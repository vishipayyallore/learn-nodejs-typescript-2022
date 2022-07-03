/// <reference types="@types/google.maps" />

import { Company } from "./Company";
import { User } from "./User";

const user1 = new User();
console.log(user1);
console.log(user1.markerContent());

const company1 = new Company()
console.log(company1);

console.log(google);