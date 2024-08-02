import {
    validateCreditCard,
    validateCVC,
} from '../src/modules/helpers/validator.js'

test('Валидация номера карты пропускает корректный номер карты.', () => {
    expect(validateCreditCard('5529263272356119')).toBe(true)
})

test(
    'Валидация номера карты не пропускает произвольную строку, ' +
        'содержащую любые нецифровые символы.',
    () => {
        expect(validateCreditCard('1234user')).toBe(false)
        expect(validateCreditCard('1234пользователь')).toBe(false)
        expect(validateCreditCard('1234!@#$')).toBe(false)
    }
)

test('Валидация номера карты не пропускает строку с недостаточным количеством цифр.', () => {
    expect(validateCreditCard('552926327235611')).toBe(false)
    expect(validateCreditCard('552926327')).toBe(false)
    expect(validateCreditCard('552')).toBe(false)
})

test('Валидация номера карты не пропускает строку со слишком большим количеством цифр', () => {
    expect(validateCreditCard('5529263272356119552434349263272356119')).toBe(
        false
    )
    expect(validateCreditCard('5529263272356119543452926327')).toBe(false)
})

test('Валидация CVV/CVC пропускает строку с тремя цифровыми символами.', () => {
    expect(validateCVC('552')).toBe(true)
})

test('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами.', () => {
    expect(validateCVC('1')).toBe(false)
    expect(validateCVC('14')).toBe(false)
})

test('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами.', () => {
    expect(validateCVC('55299')).toBe(false)
})

test('Валидация CVV/CVC не пропускает строки с тремя нецифровыми символами', () => {
    expect(validateCVC('use')).toBe(false)
    expect(validateCVC('оши')).toBe(false)
    expect(validateCVC('!@#')).toBe(false)
})
