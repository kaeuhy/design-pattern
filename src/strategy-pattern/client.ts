// 상황에 맞는 전략 객체를 생성하여 Context에 주입하고 실행합니다.
import {Validator} from "./context";
import {EmailStrategy, MinLengthStrategy, RequiredStrategy} from "./strategies";

console.log('전략 패턴을 사용한 폼 유효성 검사를 시작합니다.\n');

const validator = new Validator();

// 검증할 샘플 데이터입니다.
const username = '빽다방';
const email = 'NiceToCu@fuck.com';
const password = 'ATWOSOMEPLACE';
const emptyInput = '';

// 사용자 이름은 필수 항목 전략을 사용한다.
validator.setStrategy(new RequiredStrategy());
validator.validate(username);
validator.validate(emptyInput);

// 이메일은 이메일 형식 전략을 사용한다.
validator.setStrategy(new EmailStrategy());
validator.validate(email);

// 비밀번호는 최소 길이 8인 전략을 사용한다.
validator.setStrategy(new MinLengthStrategy(8));
validator.validate(password);