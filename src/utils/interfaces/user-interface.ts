import { Roles } from "../../constant";

export interface ISignedInUser {
    userName: string;
    userRole: Roles;
}