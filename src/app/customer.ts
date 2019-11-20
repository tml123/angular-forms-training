export class Customer {

  constructor(
    public firstName = '',
    public lastName = '',
    public email = '',
    public phone = '',
    public addDependant = false,
    public dependantType = 'spouse',
    public dependantName?: string,
    public dependantAge?: number,
    public dependantSocialSecurityNumber?: string,
    public state = '',
    public zip?: string) { }
}
