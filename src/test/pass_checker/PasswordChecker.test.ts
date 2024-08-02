import { PassChecker } from "../../app/pass_checker/PasswordChecker"

describe('PasswordChecker test suite', () => {
    let sut: PassChecker;

    beforeEach(()=>{
        sut = new PassChecker();
    });

    it('Should do nothing for the moment', () => {
        sut.checkPassword();
    })
})